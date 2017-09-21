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
        vm.editSectionBtn = _editSectionBtn;
        vm.editSectionText;
        vm.cancelSectionBtn = _cancelSectionBtn;
        vm.putSection = _putSection;
        vm.putSectionData = {};


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

        function _cancelSectionBtn(event) {
            $(event.target).closest("section-input").prev(".sectionRow").removeClass("hidden");
            $(event.target).closest("edit-section-input").prev(".sectionRow").removeClass("hidden");
            $(event.target).closest(".sectionRow").remove();
            vm.AddingSection = false;
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

        function _editSectionBtn(event) {
            $(event.target).closest(".sectionRow").addClass("hidden");
            var compiledSection = $compile("<Edit-Section-Input></Edit-Section-Input>")($scope);
            $(event.target).closest(".sectionRow").after(compiledSection);
        }

        function _putSection() {

            var userInput = $(event.target).prev(".sectionInput").val();
            if (!userInput) {
                $(event.target).closest("section-input").prev(".sectionRow").removeClass("hidden");
                $(event.target).closest("edit-section-input").prev(".sectionRow").removeClass("hidden");
                $(event.target).closest(".sectionRow").remove();
                vm.AddingSection = false;
            } else {
                $(event.target).closest("edit-section-input").prev(".sectionRow").attr('id', 'putClicked');
                vm.putSectionData.Section = $(event.target).prev("input").val();
                vm.putSectionData.Id = parseInt($(event.target).closest("edit-section-input").prev(".sectionRow").find(".sectionId").text());
                vm.newSection = vm.putSectionData.Section;
                vm.newSectionId = vm.putSectionData.Id;

                vm.IndexService.putSection(vm.putSectionData)
                    .then(_putSectionSuccess, _putSectionError)
            }
        }
        function _putSectionSuccess(response) {
            var compiledSection = $compile("<Section-Text></Section-Text>")($scope);
            $("#putClicked").next("edit-section-input").remove();
            $("#putClicked").after(compiledSection);

            $("#putClicked").removeAttr("id");
            console.log(response);

        }
        function _putSectionError(error) {
            console.log(error);
        }
    }
})();