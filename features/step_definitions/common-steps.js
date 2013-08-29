/*jslint node: true */
'use strict';

var commonStepDefinitionsWrapper = function () {

    var PATH_MAP = {
      'signup': '/#/users/new',
      'signin': '/#/sessions/new',
      'task list': '/#/tasks/index'
    }

    // this in een stepdef verwijst naar this.World
    this.World = require("../support/world.js").World;

    this.Given(/^(?:|I )go on ([^\"]+) page$/, function (pageName, callback) {
        this.visitPage(PATH_MAP[pageName.toLowerCase()], callback);
    });


    this.Given(/^I am registered with email "([^\"]+)" and password "([^\"]+)"$/, function (email, password, callback) {
        this.ensureUser(email, password, callback);
    });

    this.When(/^(?:|I )fill in "([^\"]+)" field with "([^\"]+)"$/, function (fieldName, value, callback) {
        this.fillIn(fieldName, value, callback);
    });

    this.When(/^(?:|I )submit the form$/, function (callback) {
        this.submitForm(callback);
    });

    this.Then(/^I (?:am redirected|stay) on "([^\"]+)" page$/, function (pageName, callback) {
        // sleep 1
        expect(this.currentLocation().hash).to.equal(PATH_MAP[pageName.toLowerCase().slice(1)])
    });
    
    this.Given(/^I am signed in$/, function (callback) {
        this.checkSignedIn(callback);
    });

    this.Then(/^I see task "([^\"]+)" with priority "([^\"]+)" in my taks list$/, function (taskName, priority, callback) {
        this.checkTask(taskName, priority, callback);
    });

    

    // this.Given(/^no one is logged in$/, function (callback) {
    //     this.noOneLoggedIn(callback);
    // });

    // this.When(/^I try to visit a page$/, function (callback) {
    //     this.visitPage('/results', callback);
    // });

    // this.Then(/^I should be redirected to the login page$/, function (callback) {
    //     this.shouldBeRedirected('/login', callback);
    // });

    // this.Given(/^I am on the login page$/, function (callback) {
    //     this.visitPage('/login', callback);
    // });

    // this.When(/^I enter my username$/, function (callback) {
    //     this.enterUserName('user', callback);
    // });

    // this.When(/^I request a tan code$/, function (callback) {
    //     this.requestTan(callback);
    // });

    // this.Then(/^I should receive a message about how to get the tancode$/, function (callback) {
    //     this.shouldReceiveAndAcceptTancodeSuccessMessage(callback);
    // });

    // this.When(/^I enter my password$/, function (callback) {
    //     this.enterPassword('password', callback);
    // });

    // this.When(/^I enter my tan code$/, function (callback) {
    //     this.enterTancode(callback);
    // });

    // this.When(/^I click on login$/, function (callback) {
    //     this.clickLogin(callback);
    // });

    // this.Then(/^I should be logged in$/, function (callback) {
    //     this.shouldBeLoggedIn('user', callback);
    // });

    // this.Then(/^my full name and title should be visible on the screen$/, function(callback) {
    //     this.checkNameVisible('mr userf userl', callback);
    // });

    // this.Given(/^Someone is logged in$/, function(callback) {
    //     this.login('otheruser', 'password', callback);
    // });

    // this.When(/^I log out$/, function(callback) {
    //     this.logout(callback);
    // });

    // this.Then(/^no one should be logged in$/, function(callback) {
    //     this.loggedOut(callback);
    // });

    // this.When(/^I enter a username that does not exist$/, function(callback) {
    //     this.enterUsername('idonotexists', callback);
    // });

    // this.Then(/^I should see a message that the username does not exist$/, function(callback) {
    //     this.hasLoginErrorMessage('Gebruiker bestaat niet', callback);
    // });

    // this.When(/^I acknowledge the message$/, function(callback) {
    //     this.clickOkey(callback);
    // });

    // this.Then(/^I should see an empty login page$/, function(callback) {
    //     this.usernameInputShouldBe('', callback);
    // });

    // this.When(/^I enter a wrong password$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     this.enterPassword('wrong', callback);
    // });

    // this.Then(/^I should see a message that the wrong password or tan code \(or both\) was entered$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     this.hasLoginErrorMessage('Wachtwoord of TAN-code fout.', callback);
    // });

    // this.Then(/^I should see the login page with the username entered$/, function(callback) {
    //     this.passwordInputShouldBe('');
    //     this.tancodeInputShouldBe('', callback);
    // });

    // this.Given(/^I have entered my username$/, function(callback) {
    //     this.enterUsername('username');
    //     this.requestTancode(callback);
    // });

    // this.Given(/^I have received a tan code$/, function(callback) {
    //     this.checkTancode(callback);
    // });

    // this.Given(/^I enter the wrong tan code$/, function(callback) {
    //     this.enterWrongTancode();
    //     this.clickLogin(callback);
    // });

    // this.Then(/^I should be able to request a new tan code\.$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     this.requestTancodeButtonVisible(callback);
    //     //callback.pending();
    // });

    // this.When(/^I request a new password$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Then(/^an email should be sent to me with a link to a page where I can set a new password$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.When(/^I request a new username$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.When(/^I have entered my email$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Then(/^an email should be sent to me with a link to a page where I can set a new username$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.When(/^I have made a failed login attempt$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Then(/^I should see the amount of remaining login attempts$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.When(/^I have exceeded the allowed amount of login attempts$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Then(/^I should be blocked from making more attempts for half an hour$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Given(/^I am logged in$/, function(callback) {
    // // express the regexp above with the code you wish you had
    // callback.pending();
    // });

    // this.Given(/^I am logged in with suitable credentials$/, function(callback) {
    //     this.login('username', 'password', callback);
    //     //callback.pending();
    // });

    // this.Given(/^I'm on the results page$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     this.to('results', callback);
    // });

    // this.Then(/^I should see the results that triggered an alarm in the last (\d+) hours$/, function(arg1, callback) {
    //     // ik weet niet hoeveel alarmen er de laasts \d+ uur zijn afgegaan... moet ik dit wel testen dan?
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Then(/^I should see the the results from the last (\d+) hours$/, function(arg1, callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.When(/^I select "([^"]*)"$/, function(arg1, callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Then(/^I should see all the results$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Given(/^I see all the results$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Given(/^the time spans are: last (\d+)h, last (\d+)h, this week, last week, this month, this year$/, function(arg1, arg2, callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.When(/^I select a time span$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Then(/^I should see all the results from that time span$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.When(/^I select a particular from\-date and a particual to\-date$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Then(/^I should view all results between the from\-date and the to\-date$/,
    //     function(callback) {
    //         // express the regexp above with the code you wish you had
    //         callback.pending();
    //     });

    // this.Given(/^It's monday morning$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.When(/^I enter the results page$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });

    // this.Then(/^I should see the results from the weekend$/, function(callback) {
    //     // express the regexp above with the code you wish you had
    //     callback.pending();
    // });


};

module.exports = commonStepDefinitionsWrapper;
