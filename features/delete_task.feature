@javascript
Feature: Delete task
  As a signed in user
  I want to modify a task
  In order to correct task attributes

  Scenario: Success
    Given I am signed in
    And have 1 task
    And go on "Task list" page
    When I click on "Delete task" action
    Then I do not see any task in my task list
