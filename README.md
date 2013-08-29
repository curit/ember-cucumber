ember-cucumber
==============

Cucumber-js adapter for ember-testing.

Cucumber-js is browserified.

This expressjs application proxies the application under test and loads it in an iframe.

It also reads all Gherkin feature files in the features directory and sticks them in script tags on the page.

All support files are combined and browserified.

The runner runs the acceptance test on the app and displays the results using Cucumber-HTML.

The example app is todohq.heroku.com; the source can be found at https://github.com/davidsevcik/todohq .

The step definitions use the Ember-testing helpers.

The app is based on the Cukestall project https://github.com/jbpros/cukestall

As well as https://github.com/cucumber/cucumber-js and https://github.com/emberjs/ember.js
