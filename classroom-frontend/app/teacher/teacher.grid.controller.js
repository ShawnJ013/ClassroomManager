(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherGridController', TeacherGridController);

    TeacherGridController.$inject = [''];

    /* @ngInject */
    function TeacherGridController() {
        var vm = this;
        vm.title = 'TeacherGridController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();