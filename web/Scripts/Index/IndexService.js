(function () {
    'use strict';
    angular
        .module('mainApp')
        .factory('IndexService', IndexService);

    IndexService.$inject = ['$http', '$q'];

    function IndexService($http, $q) {

        return {
            getSectionByUserId: _getSectionByUserId,
            postSection: _postSection,
            deleteSection: _deleteSection,
            putSection: _putSection,

            getTaskBySectionId: _getTaskBySectionId,
            postTask: _postTask,
            deleteTask: _deleteTask,
            putTask: _putTask
        };

        function _getSectionByUserId(UserId) {
            return $http.get('/api/section/' + UserId, { withCredentials: true })
                .then(_getSectionByUserIdComplete, _getSectionByUserIdFailed);
        }
        function _getSectionByUserIdComplete(response) {
            return response;
        }
        function _getSectionByUserIdFailed(error) {
            return $q.reject(error);
        }

        function _postSection(data) {
            return $http.post('/api/section/', data, { withCredentials: true })
                .then(_postSectionComplete, _postSectionFailed);
        }
        function _postSectionComplete(response) {
            return response;
        }
        function _postSectionFailed(error) {
            return $q.reject(error);
        }

        function _deleteSection(id) {
            return $http.delete('/api/section/' + id, { withCredentials: true })
                .then(_deleteSectionComplete, _deleteSectionFailed);
        }
        function _deleteSectionComplete(response) {
            return response;
        }
        function _deleteSectionFailed(error) {
            return $q.reject(error);
        }

        function _putSection(data) {
            return $http.put('/api/section/', data, { withCredentials: true })
                .then(_putSectionComplete, _putSectionFailed);
        }
        function _putSectionComplete(response) {
            return response;
        }
        function _putSectionFailed(error) {
            return $q.reject(error);
        }

        function _postTask(data) {
            return $http.post('/api/section/task', data, { withCredentials: true })
                .then(_postTaskComplete, _postTaskFailed);
        }
        function _postTaskComplete(response) {
            return response;
        }
        function _postTaskFailed(error) {
            return $q.reject(error);
        }

        function _getTaskBySectionId(SectionId) {
            return $http.get('/api/section/task/' + SectionId, { withCredentials: true })
                .then(_getTaskBySectionIdComplete, _getTaskBySectionIdFailed);
        }
        function _getTaskBySectionIdComplete(response) {
            return response;
        }
        function _getTaskBySectionIdFailed(error) {
            return $q.reject(error);
        }

        function _deleteTask(id) {
            return $http.delete('/api/section/task/' + id, { withCredentials: true })
                .then(_deleteTaskComplete, _deleteTaskFailed);
        }
        function _deleteTaskComplete(response) {
            return response;
        }
        function _deleteTaskFailed(error) {
            return $q.reject(error);
        }

        function _putTask(data) {
            return $http.put('/api/section/task', data, { withCredentials: true })
                .then(_putTaskComplete, _putTaskFailed);
        }
        function _putTaskComplete(response) {
            return response;
        }
        function _putTaskFailed(error) {
            return $q.reject(error);
        }
    }
})();