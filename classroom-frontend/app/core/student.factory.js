(function() {
        'use strict';

        angular
            .module('app')
            .factory('studentFactory', studentFactory);

        studentFactory.$inject = ['$http'];

        function studentFactory($http) {

            var service = {
                create: create,
                getAll: getAll,
                getById: getById,
                update: update,
                remove: remove
            };
            return service;

            /////////////

            function create(student) {
                return $http.post('http://localhost:49420/api/students', student);
            }

            function getAll() {
                return $http.get('http://localhost:49420/api/students');

            }

            function getById(id) {
            	return $http.get('http://localhost:49420/api/students/' + id);
            }

            function update(id, student) {
            	return $http.put('http://localhost:49420/api/students/' + id, student);
            }

            function remove(id) {
                return $http.delete('http://localhost:49420/api/students/' + id);
        }
    }
})();
