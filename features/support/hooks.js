/*jslint node: true */
"use strict";

var myHooks = function () {

    var app = window.frames[0].window;

    this.Before(function (callback) {
        console.log('before');
        //app.App.Auth.destroySession();
        //app.App.reset();
        callback();
    });


    this.After(function (callback) {
        //console.log('after');

        callback();
    });

//    this.Around(function (callback) {
//        console.log('around');
//        callback();
//    });
};

module.exports = myHooks;