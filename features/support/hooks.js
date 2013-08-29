/*jslint node: true */
"use strict";

var myHooks = function () {

    var app = window.frames[0].window;

    this.Before(function (callback) {
        //app.App.reset();
        //app.App.Em.$('.signout').click();
        callback();
    });


    this.After(function (callback) {
        callback();
    });

    // this.Around(function (callback) {
    //     callback();
    // });
};

module.exports = myHooks;
