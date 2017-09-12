(function () {
    "use strict";
    angular
        .module("mainApp")
        .directive("SectionDirective", function () {
            return {
                template: "<h1>Made by a directive!</h1>"
            };

        })

})();