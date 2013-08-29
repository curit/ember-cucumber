/*    
Given I am signed in
And have 1 task
And go on "Task list" page
When I check the task as done
Then I see the task set as done
*/


var donetaskStepDefinitionsWrapper = function () {
    this.Given(/^have (\d+) task$/, function (callback, tasks){
        console.log("tasks" + tasks);
        callback();
    });
    
    this.When(/^I check the task as done$/, function(callback){
        callback.pending();
    });

    this.Then(/^I see the task set as done$/, function(callback){
        callback.pending();
    });
};

module.exports = donetaskStepDefinitionsWrapper;