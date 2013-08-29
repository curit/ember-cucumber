/*jslint node: true */
'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    browserify = require('browserify'),
    httpProxy = require('http-proxy'),
    app = express(),
    proxy = new httpProxy.RoutingProxy();

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);


// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}


var readFeatureFiles = function () {
    var features = [],
        files = fs.readdirSync('./features'),
        p,
        i,
        stats;

    for (i = 0; i < files.length; i = i + 1) {
        p = "./features/" + files[i];
        stats = fs.statSync(p);
        if (stats.isFile() && path.extname(p) === ".feature") {
            fs.readFile(p, {encoding: "utf-8"}, function(err, data) {
                features.push(data);
            });
        }
    }
    return features;
};
var features = readFeatureFiles();

var getRequires = function (fileNames, acc) {
    console.log(fileNames);
    if (fileNames.length > 0) {
        var fileName = fileNames.pop();
        if (fileName !== "index.js") {
            return getRequires(fileNames, acc + "require('" + fileName + "').call(this);");
        }
        return getRequires(fileNames, acc);
    }
    return acc;
};

var buildSupportCode = function (cb) {
    var src = "module.exports = function () {";

    fs.readdir('./features/step_definitions', function (err, fileNames) {
        var filePaths;

        if (err) {
            throw err;
        } else {
            filePaths = fileNames.filter(function(item){ return item.substr(item.length - 3, item.length) == ".js"; })
            .map(function (item) {
                return "../features/step_definitions/" + item;
            });
            filePaths.push("../features/support/hooks.js");
            fs.writeFile('tmp/supportCode.js',
                    getRequires(filePaths, src) + "};",
                    function (err) {
                    if (err) {
                        throw err;
                    }
                    cb();
                });
        }
    });



};

var browserifyCucumber = function (cb) {
    var b = browserify({
        entries: [
            './node_modules/cucumber/node_modules/underscore/underscore.js',
            './node_modules/cucumber/node_modules/gherkin/lib/gherkin.js',
            './node_modules/cucumber/lib/cucumber.js',
            './node_modules/cucumber/node_modules/gherkin/lib/gherkin/lexer/en.js'
        ]
    });

    b.ignore('./cucumber/cli');
    b.ignore('connect');

    b.require('./node_modules/cucumber/node_modules/cucumber-html',{expose: 'cucumberHTML'});
    b.require('cucumber');

    b.bundle({},function(err, src){
        if (err) throw err;
        fs.writeFile('./scripts/cucumber.js', src, function (err) {
            if (err) throw err;
            cb();
        });
    });
};

app.get('/acceptance/scripts/support.js', function (req, res) {
    res.set('Content-Type', 'application/javascript');
    buildSupportCode(function () {
        console.log("./tmp/supportCode.js");
        var b = browserify({entries: ['./tmp/supportCode.js']});
        b.require('./tmp/supportCode.js', {expose: 'supportCode'});
        console.log(b);
        b.bundle({}, function (err, src) {
            if (err) {
                throw err;
            } else {
                res.send(src);
            }
        });
    });
});

app.get('/acceptance/scripts/cucumber.js', function (req, res) {
    if (false) {
        browserifyCucumber( function() {
            res.sendfile('./scripts/cucumber.js');
        });
    } else {
        res.sendfile('./scripts/cucumber.js');
    }
});

app.get('/acceptance/scripts/runner.js', function (req, res) {
    res.sendfile('./scripts/runner.js');
});

app.get('/acceptance/styles/acceptance.css', function (req, res) {
    res.sendfile('./styles/acceptance.css');
});


app.get('/acceptance', function (req, res) {
    res.render('acceptance', {
        features: features
    });
});


// proxy the app under test to avoid cross-origin issues with the iframe
app.all('/*', function(req, res) {
    return proxy.proxyRequest(req, res, {
        host: 'localhost',
        port: 3000,
        changeOrigin: true
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
