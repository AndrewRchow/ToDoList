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
        vm.cancelEditSectionBtn = _cancelEditSectionBtn;
        vm.putSection = _putSection;
        vm.putSectionData = {};

        vm.userTasks = [];
        vm.addTaskBtn = _addTaskBtn;
        vm.AddingTask;
        vm.cancelTaskBtn = _cancelTaskBtn;
        vm.submitTask = _submitTask;
        vm.taskData = {};
        vm.newTask;
        vm.deleteTaskBtn = _deleteTaskBtn;
        vm.editTaskBtn = _editTaskBtn;
        vm.cancelEditTaskBtn = _cancelEditTaskBtn;
        vm.putTask = _putTask;
        vm.putTaskData = {};
       
        


        function _init() {
            vm.currentUserName = $("#hiddenUserId").val();
            vm.sectionData.UserId = vm.currentUserName;
            console.log(vm.currentUserName);
            vm.IndexService.getSectionByUserId(vm.currentUserName)
                .then(_getSectionByUserIdSuccess, _getSectionByUserIdError)
        }
        function _getSectionByUserIdSuccess(response) {
            var sections = response.data.Items
            console.log(sections);
            vm.userSections = sections;
            for (var i = 0; i < sections.length; i++) {
                console.log(sections[i].Id)
                vm.IndexService.getTaskBySectionId(sections[i].Id)
                    .then(_getTaskBySectionIdSuccess, _getTaskBySectionIdError)
            }
        }
        function _getSectionByUserIdError(error) {
            console.log(error);
        }
        function _getTaskBySectionIdSuccess(response) {
            for (var i = 0; i < response.data.Items.length; i++) {
                vm.userTasks.push(response.data.Items[i]);
            }
        }
        function _getTaskBySectionIdError(response) {
            console.log(error);
        }



        function _addSectionBtn() {
            if (!vm.AddingSection && !vm.AddingTask) {
                var compiledSection = $compile("<Section-Input></Section-Input>")($scope);
                $(".SectionContainer").append(compiledSection);
                vm.AddingSection = true;
            }
        }

        function _cancelSectionBtn(event) {
            $(event.target).closest("section-input").remove();
            vm.AddingSection = false;
            console.log('hi');
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
            if (!vm.AddingTask) {
                $(event.target).attr('id', 'deleteClicked');
                vm.sectionData.Id = parseInt($(event.target).prev(".sectionId").text());
                console.log(vm.sectionData.Id);
                vm.IndexService.deleteSection(vm.sectionData.Id)
                    .then(_deleteSectionSuccess, _deleteSectionError)
            }
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
            if (!vm.AddingTask) {
                $(event.target).closest(".sectionRow").addClass("hidden");
                var compiledSection = $compile("<Edit-Section-Input></Edit-Section-Input>")($scope);
                $(event.target).closest(".sectionRow").after(compiledSection);
            }
        }

        function _cancelEditSectionBtn(event) {
            $(event.target).closest("section-input").prev(".sectionRow").removeClass("hidden");
            $(event.target).closest("edit-section-input").prev(".sectionRow").removeClass("hidden");
            $(event.target).closest("edit-section-input").remove();
            vm.AddingSection = false;
            console.log('hi');
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
            $("#putClicked").removeAttr("id");
            console.log(error);
        }




        function _addTaskBtn(event) {
            if (!vm.AddingTask) {
                $(event.target).closest(".sectionRow").attr('id', 'sectionToAppendTo');
                var compiledSection = $compile("<Task-Input></Task-Input>")($scope);
                $(event.target).closest(".sectionRow").append(compiledSection);
                vm.AddingTask = true;
            }
        }

        function _cancelTaskBtn(event) {
            $("#sectionToAppendTo").removeAttr("id");
            $(event.target).closest("task-input").remove();
            vm.AddingTask = false;
        }

        function _submitTask(event) {
            var userInput = $(event.target).prev(".taskInput").val();
            if (!userInput) {
                $("#sectionToAppendTo").removeAttr("id");
                $(event.target).closest(".task-input").remove();
                vm.AddingTask = false;

            } else {
                vm.newTask = userInput;
                vm.taskData.Task = userInput;
                vm.taskData.SectionId = parseInt($(event.target).closest(".sectionRow").find(".sectionId").text());
                $(event.target).closest("task-input").remove();
                vm.AddingTask = false;
                console.log(vm.taskData); 
                vm.IndexService.postTask(vm.taskData)
                    .then(_postTaskSuccess, _postTaskError)
            }
        }
        function _postTaskSuccess(response) {
            console.log(response.data.Item);
            vm.newTaskId = response.data.Item;
            var compiledSection = $compile("<Task-Text></Task-Text>")($scope);
            $("#sectionToAppendTo").append(compiledSection);
            $("#sectionToAppendTo").removeAttr("id");
        }
        function _postTaskError(error) {
            console.log(error);
            $("#sectionToAppendTo").removeAttr("id");
        }

        function _deleteTaskBtn(event) {
            $(event.target).attr('id', 'deleteClicked');
            vm.taskData.Id = $(event.target).prevAll(".taskId:first").text();
            console.log(vm.taskData.Id);
            vm.IndexService.deleteTask(vm.taskData.Id)
                .then(_deleteTaskSuccess, _deleteTaskError)
        }
        function _deleteTaskSuccess(response) {
            $("#deleteClicked").closest(".taskRow").remove();
            console.log(response);

        }
        function _deleteTaskError(error) {
            $("#deleteClicked").removeAttr("id");
            console.log(error);
        }

        function _editTaskBtn(event) {
            if (!vm.AddingTask) {
                $(event.target).closest(".taskRow").addClass("hidden");
                var compiledSection = $compile("<Edit-Task-Input></Edit-Task-Input>")($scope);
                $(event.target).closest(".taskRow").after(compiledSection);
                vm.AddingTask = true;
            }
        }
        function _cancelEditTaskBtn(event) {
            //$(event.target).closest("section-input").prev(".taskRow").removeClass("hidden");
            $(event.target).closest("edit-task-input").prev(".taskRow").removeClass("hidden");
            $(event.target).closest("edit-task-input").remove();
            vm.AddingTask = false;
        }

        function _putTask(event) {

            var userInput = $(event.target).prev(".taskInput").val();
            if (!userInput) {
                $(event.target).closest("edit-task-input").prev(".taskRow").removeClass("hidden");
                $(event.target).closest("edit-task-input").remove();
                vm.AddingTask = false;
            } else {
                $(event.target).closest("edit-task-input").prev(".taskRow").attr('id', 'putTaskClicked');
                vm.putTaskData.Task = $(event.target).prev("input").val();
                vm.putTaskData.Id = parseInt($(event.target).closest("edit-task-input").prev(".taskRow").find(".taskId").text());
                vm.newTask = vm.putTaskData.Task;
                vm.newTaskId = vm.putTaskData.Id;
                console.log(vm.putTaskData);
                //$(event.target).closest("task-text").remove();
                vm.IndexService.putTask(vm.putTaskData)
                    .then(_putTaskSuccess, _putTaskError)
            }
        }
        function _putTaskSuccess(response) {
            var compiledSection = $compile("<Task-Text></Task-Text>")($scope);
            $("#putTaskClicked").next("edit-task-input").remove();            
            $("#putTaskClicked").after(compiledSection);
            $("#putTaskClicked").remove();
            console.log(response);
            vm.AddingTask = false;
        }
        function _putTaskError(error) {
            $("#putTaskClicked").closest("edit-task-input").prev(".taskRow").removeClass("hidden");
            $("#putTaskClicked").closest("edit-task-input").remove();
            $("#putTaskClicked").removeAttr("id");
            console.log(error);
            vm.AddingTask = false;
        }

    }
})();