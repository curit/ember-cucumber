@javascript
Feature: Sign in
  As a registered user
  I want to sign in
  In order to get access to my todo list


  Scenario: Success
    Given I go on "Signin" page
    And I am registered with email "joe@doe.com" and password "123456"
    When I fill in "#email" field with "joe@doe.com"
    And fill in "#password" field with "123456"
    And submit the form
    Then I am redirected on "#/tasks/index" page


  Scenario: Fail - wrong password
    Given I go on "Sign in" page
    And I am registered with email "joe@doe.com" and password "123456"
    When I fill in "#email" field with "joe@doe.com"
    And fill in "#password" field with "789"
    And submit the form
    Then I stay on "#/sessions/new" page
    And see a validation error
