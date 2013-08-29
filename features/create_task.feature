@javascript
Feature: Create task
  As a signed in user
  I want to create a new task
  In order to not forget on important stuff

  Scenario: Task with default priority
    Given I am signed in
    And go on "Task list" page
    When I fill in "new-task-title" field with "Buy milk"
    And submit the form
    Then I see task "Buy milk" with priority "Normal" in my task list

  Scenario: Task with specified priority
    Given I am signed in
    And go on "Task list" page
    When I fill in "new-task-title" field with "Buy milk"
    And select "priority" value "High"
    And submit the form
    Then I see task "Buy milk" with priority "High" in my task list
