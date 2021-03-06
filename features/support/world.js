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
            app.Ember.$.ajax({
                url: '/users',
                type: 'POST',
                dataType: 'json',
                data: {email: email, password: password, passwordConfirmation: password},
                timeout: 10
            }).always(function() {
                done();
            });
            // app.Ember.$.ajax({
            //     url: '/sessions',
            //     type: 'POST',
            //     dataType: 'json',
            //     data: {email: email, password: password},
            //     timeout: 10
            // }).fail(function() {

            // }).done(function (){ done(); });
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
        enterPassword: function (password, done) {
            app.fillIn('#password', password)
                .then(done);
        },
        fillIn: function (fieldName, value, done) {
            app.fillIn(fieldName, value).then(done);
        },
        clickLogin: function (done) {
            app.click('#login');

            app.setTimeout(done, 500);
        },
        submitForm: function (done) {
            app.click("button[type='submit']");
            app.setTimeout(done, 500);
        },
        shouldBeLoggedIn: function (done) {
            expect(app.App.Auth.get('signedIn'))
                .to.be.true;
            done();
        },
        currentLocation: function() {
            app.location;
        },
        checkSignedIn: function (done) {
            expect(app.App.__container__.lookup('controller:currentSession').get('isSignedIn'))
                .to.be.true;
            done();
        },
        checkTask: function (taskName, priority, callback){
            expect(app.find('li > span:contains(taskName)').hasClass(priority))
                .to.be.true;
        };
        currentHash: function() {
            app.location.hash;
        },
        expectHashToBe: function(expected, done) {
            expect(app.location.hash).to.equal(expected);
            done();
        },
        shouldShowValidationError: function (done) {
            expect(app.find('.control-group.error').length)
                .to.equal(1);
            done();
        }
    };

    callback(dsl);
};
exports.World = WorldConstructor;
