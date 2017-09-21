(function () {
    "use strict";
    angular
        .module("editTaskInputDirectiveInject", [])
        .directive("editTaskInput", function () {

            return {
                template: `<div class="row taskRow">
                            <input type="text" class = "taskInput" name="section" placeholder="Task">
                            <button type="button" class="btn btn-success" ng-click="IndexCtr.putTask($event)">Go</button>
                            <button type="button" class="btn btn-warning" ng-click="IndexCtr.cancelEditTaskBtn($event)">cancel</button>
                            </div>`
            };
        })

})();