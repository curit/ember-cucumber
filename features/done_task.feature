@javascript
Feature: Check task as done
  As a signed in user
  I want to modify a task
  In order to correct task attributes

  Scenario: Success
    Given I am signed in
    And have 1 task
    And go on "Task list" page
    When I check the task as done
    Then I see the task set as done
