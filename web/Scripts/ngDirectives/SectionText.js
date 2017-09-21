(function () {
    "use strict";
    angular
        .module("sectionTextDirectiveInject", [])
        .directive("sectionText", function () {

            return {
                template: ` <div class="row sectionRow">
                                <h1><b>{{::IndexCtr.newSection}}</b></h1>
                                <p class="sectionId">{{::IndexCtr.newSectionId}}</p>
                                 <button type="button" class="btn btn-danger deleteButton" ng-click="IndexCtr.deleteSectionBtn($event)">Delete</button>
                                 <button type="button" class="btn btn-info editButton" ng-click="IndexCtr.editSectionBtn($event)">Edit</button>
                             </div>`
            };
        })

})();