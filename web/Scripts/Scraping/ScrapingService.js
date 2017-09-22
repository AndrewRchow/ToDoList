(function () {
    'use strict';
    angular
        .module('mainAppWS')
        .factory('ScrapingService', ScrapingService);

    ScrapingService.$inject = ['$http', '$q'];

    function ScrapingService($http, $q) {

        return {
            getScraping: _getScraping
        };

        function _getScraping() {
            return $http.get('/api/scrape/', { withCredentials: true })
                .then(_getScrapingComplete, _getScrapingFailed);
        }
        function _getScrapingComplete(response) {
            return response;
        }
        function _getScrapingFailed(error) {
            return $q.reject(error);
        }

    }
})();