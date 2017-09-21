(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("IndexController", IndexController);

    IndexController.$inject = ['$scope', "$compile", "IndexService"];

    function IndexController($scope, $compile, IndexService) {
        var vm = this;
        vm.$scope = $scope;
        vm.IndexService = IndexService;
        vm.addSectionBtn = _addSectionBtn;
        vm.submitSection = _submitSection;
        vm.$onInit = _init;
        vm.currentUserName;
        vm.sectionData = {};
        vm.userSections = []
        vm.AddingSection;
        vm.newSection;
        vm.newSectionId;
        vm.deleteSectionBtn = _deleteSectionBtn;

        function _init() {
            vm.currentUserName = $("#hiddenUserId").val();
            vm.sectionData.UserId = vm.currentUserName;
            console.log(vm.currentUserName);
            vm.IndexService.getSectionByUserId(vm.currentUserName)
                .then(_getSectionByUserIdSuccess, _getSectionByUserIdError)
        }
        function _getSectionByUserIdSuccess(response) {
            console.log(response.data.Items);
            vm.userSections = response.data.Items;
        }
        function _getSectionByUserIdError(error) {
            console.log(error);
        }

        function _addSectionBtn() {
            if (!vm.AddingSection) {
                var compiledSection = $compile("<Section-Input></Section-Input>")($scope);
                $(".SectionContainer").append(compiledSection);
                vm.AddingSection = true;
            }
        }

        function _submitSection(event) {
            var userInput = $(event.target).prev(".sectionInput").val();
            if (!userInput) {
                $(event.target).closest(".sectionRow").remove();
                vm.AddingSection = false;

            } else {
                vm.sectionData.Section = userInput;
                vm.newSection = userInput;
                $(event.target).closest(".sectionRow").remove();
                vm.AddingSection = false;
                vm.IndexService.postSection(vm.sectionData)
                    .then(_postSectionSuccess, _postSectionError)
            }
           
        }
        function _postSectionSuccess(response) {
            console.log(response.data.Item);
            vm.newSectionId = response.data.Item;
            var compiledSection = $compile("<Section-Text></Section-Text>")($scope);
            $(".SectionContainer").append(compiledSection);
            
            
        }
        function _postSectionError(error) {
            console.log(error);
        }

        function _deleteSectionBtn(event) {
            $(event.target).attr('id', 'deleteClicked');
            alert("Hello! I am an alert box!!");
            vm.sectionData.Id = parseInt($(event.target).prev(".sectionId").text());
            console.log(vm.sectionData.Id);
            vm.IndexService.deleteSection(vm.sectionData.Id)
                .then(_deleteSectionSuccess, _deleteSectionError)
        }
        function _deleteSectionSuccess(response) {
            $("#deleteClicked").closest(".sectionRow").remove();
            console.log(response);

        }
        function _deleteSectionError(error) {
            $("#deleteClicked").removeAttr("id");
            console.log(error);
        }
        
    }
})();