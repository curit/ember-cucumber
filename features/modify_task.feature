@javascript
Feature: Modify task
  As a signed in user
  I want to modify a task
  In order to correct task attributes

  Scenario: Success
    Given I am signed in
    And have 1 task
    And go on "Task list" page
    When I click on "Edit task" action
    And fill in "edit-task-title" field with "Changed task title"
    And submit the edit form
    Then I see task "Changed task title" in my task list
