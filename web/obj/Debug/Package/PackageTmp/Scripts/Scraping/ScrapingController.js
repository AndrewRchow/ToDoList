(function () {
    "use strict";
    angular
        .module("mainAppWS")
        .controller("ScrapingController", ScrapingController);

    ScrapingController.$inject = ['$scope', 'ScrapingService'];

    function ScrapingController($scope, ScrapingService ) {
        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _init;
        vm.ScrapingService = ScrapingService;
        vm.shibas;

        function _init() {
            vm.ScrapingService.getScraping()
                .then(_getScrapingSuccess, _getScrapingError)
        }
        function _getScrapingSuccess(response) {
            vm.shibas = response.data.Items;
            console.log(vm.shibas);
            console.log(response);
        }
        function _getScrapingError(error) {
            console.log(error);
        }

    }
})();