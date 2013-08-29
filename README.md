ember-cucumber
==============

Cucumber-js adapter for ember-testing.

Cucumber-js is [browserified](https://github.com/substack/node-browserify).

This [expressjs](https://github.com/visionmedia/express) application proxies the application under test and loads it in an iframe.

It also reads all [Gherkin](https://github.com/cucumber/gherkin) feature files in the features directory and sticks them in script tags on the page.

All support files are combined and [browserified](https://github.com/substack/node-browserify).

The runner runs the acceptance test on the app and displays the results using [Cucumber-HTML](https://github.com/cucumber/cucumber-html).

The example app is [davidsevcik/TodoHQ](http://todohq.heroku.com); the source can be found at [here](https://github.com/davidsevcik/todohq).

The step definitions use the [Ember-testing](http://emberjs.com/guides/testing/integration/) helpers.

The app is based on the [Cukestall project](https://github.com/jbpros/cukestall).

As well as [Cucumber JS](https://github.com/cucumber/cucumber-js) and [Ember](https://github.com/emberjs/ember.js])
