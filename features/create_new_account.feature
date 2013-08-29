@javascript
Feature: Create new account
  As a potential user
  I want to create a new account
  In order to get access to my todo list


  Scenario: Success
    Given I go on "Sign up" page
    When I fill in "Email" field with "joe@doe.com"
    And I fill in "Password" field with "123456"
    And I fill in "Password Confirmation" field with "123456"
    And submit the form
    Then I am redirected on "Task list" page


  Scenario: Fail - sign up without email
    Given I go on "Sign up" page
    When I fill in "Password" field with "123456"
    And I fill in "Password Confirmation" field with "123456"
    And submit the form
    Then I stay on "Sign up" page
    And I see a validation error


  Scenario: Fail - sign up with wrong password confirmation
    Given I go on "Sign up" page
    When I fill in "Email" field with "joe@doe.com"
    And I fill in "Password" field with "123456"
    And I fill in "Password Confirmation" field with "345"
    And submit the form
    Then I stay on "Sign up" page
    And I see a validation error
