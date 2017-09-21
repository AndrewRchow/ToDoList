(function () {
    "use strict";
    angular
        .module("taskInputDirectiveInject", [])
        .directive("taskInput", function () {

            return {
                template: `<div class="row taskRow">
                            <input type="text" class = "taskInput" name="task" placeholder="Task">
                            <button type="button" class="btn btn-success" ng-click="IndexCtr.submitTask($event)">Go</button>
                            <button type="button" class="btn btn-warning" ng-click="IndexCtr.cancelTaskBtn($event)">cancel</button>
                            </div>`
            };
        })

})();