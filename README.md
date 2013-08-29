ember-cucumber
==============

Cucumber-js adapter for ember-testing.

Cucumber-js is [https://github.com/substack/node-browserify](browserified).

This [https://github.com/visionmedia/express](expressjs) application proxies the application under test and loads it in an iframe.

It also reads all [https://github.com/cucumber/gherkin](Gherkin) feature files in the features directory and sticks them in script tags on the page.

All support files are combined and [https://github.com/substack/node-browserify](browserified).

The runner runs the acceptance test on the app and displays the results using Cucumber-HTML https://github.com/cucumber/cucumber-html.

The example app is [http://todohq.heroku.com](davidsevcik/TodoHQ); the source can be found at [https://github.com/davidsevcik/todohq](here) .

The step definitions use the [http://emberjs.com/guides/testing/integration/](Ember-testing) helpers.

The app is based on the [https://github.com/jbpros/cukestall](Cukestall project).

As well as [https://github.com/cucumber/cucumber-js](Cucumber JS) and [https://github.com/emberjs/ember.js](Ember)
