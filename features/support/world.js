/*jslint node: true */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

// find and findWithAssert do not return a promise but an element

var WorldConstructor = function WorldConstructor(callback) {

    var app, dsl;

    app = window.frames[0].window;

    dsl = {
        ensureUser: function (email, password, done) {
            app.Ember.$().ajax({
                url: '/sessions',
                type: 'POST',
                dataType: 'json',
                data: {email: email, password: password}
            }).fail(fuction() {
                app.Ember.$().ajax({
                    url: '/users',
                    type: 'POST',
                    dataType: 'json',
                    data: {email: email, password: password, passwordConfirmation: password}
                });
            }).done(function {
                done();
            };
        },
        noOneLoggedIn: function (done) {
            expect(app.App.Auth.get('signedIn'))
                .to.be.false;
            done();
        },
        visitPage: function (page, done) {
            app.visit(page)
                .then(done);
        },
        shouldBeRedirected: function (page, done) {
            expect(app.location.pathname)  //
                .to.equal(page);
            done();
        },
        enterUserName: function (userName, done) {
            app.fillIn('#username', userName)
                .then(done);
        },
        requestTan: function (done) {
            app.click('#requestTancode')// gaat te snel.then(done);
                .wait();
            app.setTimeout(done, 500);
        },
        shouldReceiveAndAcceptTancodeSuccessMessage: function (done) {
            expect(app.find('.alert-success').length)
                .to.equal(1);
            app.click('#confirm-success')
                .then(done);
        },
        enterPassword: function (password, done) {
            app.fillIn('#password', password)
                .then(done);
        },
        enterTancode: function (done) {
            var tancode = getTan('00a096299601');
            app.fillIn('#tan', tancode)
                .then(done);
        },
        clickLogin: function (done) {
            app.click('#login');

            app.setTimeout(done, 500);
        },
        shouldBeLoggedIn: function (done) {
            expect(app.App.Auth.get('signedIn'))
                .to.be.true;
            done();
        }
    };

    callback(dsl);
};
exports.World = WorldConstructor;
