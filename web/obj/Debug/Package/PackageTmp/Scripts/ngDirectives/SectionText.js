﻿(function () {
    "use strict";
    angular
        .module("sectionTextDirectiveInject", [])
        .directive("sectionText", function () {

            return {
                template: ` <div class="row sectionRow borderTop">
                                <h2>{{::IndexCtr.newSection}}</h2>
                                <button type="button" class="btn btn-basic addTaskBtn" ng-click="IndexCtr.addTaskBtn($event)">Add Task</button>
                                <p class="sectionId">{{::IndexCtr.newSectionId}}</p>
                                 <button type="button" class="btn btn-danger deleteButton" ng-click="IndexCtr.deleteSectionBtn($event)">Delete</button>
                                 <button type="button" class="btn btn-info editButton" ng-click="IndexCtr.editSectionBtn($event)">Edit</button>
                             </div>`
            };
        })

})();