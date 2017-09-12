(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("IndexController", IndexController);

    IndexController.$inject = ['$scope', "$compile", "IndexService", "SectionDirective"];

    function IndexController($scope, $compile, IndexService, SectionDirective) {
        var vm = this;
        vm.$scope = $scope;
        vm.addSectionBtn = _addSectionBtn;

        function _addSectionBtn() {
            //var el = $compile("<SectionDirective></SectionDirective>");
            //$(".SectionContainer").append(el);
        }

        
    }
})();