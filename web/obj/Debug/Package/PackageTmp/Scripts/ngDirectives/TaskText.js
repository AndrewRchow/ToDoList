(function () {
    "use strict";
    angular
        .module("taskTextDirectiveInject", [])
        .directive("taskText", function () {

            return {
                template: `  <div class="row taskRow">
                                  <h3 class="taskListItem col-md-11"><span class="glyphicon glyphicon-menu-right"></span>{{::IndexCtr.newTask}}</h3>
                                  <p class="taskId">{{::IndexCtr.newTaskId}}</p>
                                  <button type="button" class="btn btn-info editTaskButton" ng-click="IndexCtr.editTaskBtn($event)"></button>
                                  <button type="button" class="btn btn-danger deleteTaskButton" ng-click="IndexCtr.deleteTaskBtn($event)"></button>
                              </div>`


            };
        })

})();