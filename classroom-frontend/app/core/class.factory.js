(function() {
    'use strict';

    angular
        .module('app')
        .factory('classFactory', classFactory);

    classFactory.$inject = ['$http'];

    /* @ngInject */
    function classFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove,
            newEnrollment: newEnrollment,
            removeEnrollment: removeEnrollment
        };
        return service;

        ////////////////////

        function create(classObj) {
            return $http.post('http://localhost:49420/api/classes', classObj);
        }

        function getAll() {
            return $http.get('http://localhost:49420/api/classes');
        }

        function getById(id) {
            return $http.get('http://localhost:49420/api/classes/' + id);
        }

        function update(id, classObj) {
            return $http.put('http://localhost:49420/api/classes/' + id, classObj);
        }

        function remove(id) {
            return $http.delete('http://localhost:49420/api/classes/' + id);
        }

        function newEnrollment(classId, studentId) {
            return $http.post('http://localhost:49420/api/classes/' + classId + '/students/' + studentId);
        }

        function removeEnrollment(classId, studentId) {
            return $http.delete('http://localhost:49420/api/classes/' + classId + '/students/' + studentId);
        }
    }
})();
