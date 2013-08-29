var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^I am logged in with suitable credentials$/, function(callback) {
        this.login('username', 'password', callback);
        //callback.pending();
    });

    this.Given(/^I'm on the results page$/, function(callback) {
        // express the regexp above with the code you wish you had
        this.to('results', callback);
    });

    this.Then(/^I should see the results that triggered an alarm in the last (\d+) hours$/, function(arg1, callback) {
        // ik weet niet hoeveel alarmen er de laasts \d+ uur zijn afgegaan... moet ik dit wel testen dan?
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I should see the the results from the last (\d+) hours$/, function(arg1, callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.When(/^I select "([^"]*)"$/, function(arg1, callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I should see all the results$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Given(/^I see all the results$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Given(/^the time spans are: last (\d+)h, last (\d+)h, this week, last week, this month, this year$/, function(arg1, arg2, callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.When(/^I select a time span$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I should see all the results from that time span$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.When(/^I select a particular from\-date and a particual to\-date$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I should view all results between the from\-date and the to\-date$/,
        function(callback) {
            // express the regexp above with the code you wish you had
            callback.pending();
        });

    this.Given(/^It's monday morning$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.When(/^I enter the results page$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^I should see the results from the weekend$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

};

module.exports = myStepDefinitionsWrapper;
