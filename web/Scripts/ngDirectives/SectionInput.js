﻿(function () {
    "use strict";
    angular
        .module("sectionInputDirectiveInject", [])
        .directive("sectionInput", function () {

            return {
                template: `<div class="row sectionRow">
                            <input type="text" class = "sectionInput" name="section" placeholder="Section">
                            <button type="button" class="btn btn-success" ng-click="IndexCtr.submitSection($event)">Go</button>
                            <button type="button" class="btn btn-danger" ng-click="IndexCtr.cancelSectionBtn($event)">cancel</button>
                            </div>`
            };
        })

})();