(function () {
    "use strict";
    angular
        .module("sectionTextDirectiveInject", [])
        .directive("sectionText", function () {

            return {
                template: ` <div class="row">
                                <h1><b>{{::IndexCtr.newSection}}</b></h1>
                                <p class="sectionId">{{::IndexCtr.newSectionId}}</p>
                                 <button type="button" class="btn btn-danger deleteButton" ng-click="IndexCtr.deleteSectionBtn($event)">Delete</button>
                             </div>`
            };
        })

})();