(function () {
    "use strict";
    angular
        .module("taskTextDirectiveInject", [])
        .directive("taskText", function () {

            return {
                template: `  <div class="row taskRow">
                                  <h3 class="taskListItem"><span class="glyphicon glyphicon-menu-right"></span>{{::IndexCtr.newTask}}</h3>
                                  <p class="taskId">{{::IndexCtr.newTaskId}}</p>
                                  <button type="button" class="btn btn-info editTaskButton" ng-click=""></button>
                                  <button type="button" class="btn btn-danger deleteTaskButton" ng-click="IndexCtr.deleteTaskBtn($event)"></button>
                              </div>`


            };
        })

})();