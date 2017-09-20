(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("IndexController", IndexController);

    IndexController.$inject = ['$scope', "$compile", "IndexService"];

    function IndexController($scope, $compile, IndexService) {
        var vm = this;
        vm.$scope = $scope;
        vm.addSectionBtn = _addSectionBtn;
        vm.submitSection = _submitSection;
        vm.$onInit = _init;

        function _init() {}

        function _addSectionBtn() {
            console.log("done");
            var compiledSection = $compile("<Section-Directive></Section-Directive>")($scope);
            $(".SectionContainer").append(compiledSection);
        }

        function _submitSection(event) {
            console.log("hi");
            $(event.target).closest(".sectionRow").remove();
        }
        
    }
})();