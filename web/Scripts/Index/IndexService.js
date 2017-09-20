(function () {
    'use strict';
    angular
        .module('mainApp')
        .factory('IndexService', IndexService);

    IndexService.$inject = ['$http', '$q'];

    function IndexService($http, $q) {

        return {
           
        };

       
    }
})();