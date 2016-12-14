(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = [''];

    /* @ngInject */
    function StudentGridController() {
        var vm = this;
        vm.title = 'StudentGridController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();