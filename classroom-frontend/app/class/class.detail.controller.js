(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassDetailController', ClassDetailController);

    ClassDetailController.$inject = ['$stateParams'];

    /* @ngInject */
    function ClassDetailController($stateParams) {
        var vm = this;
        vm.title = 'ClassDetailController';

        vm.classId = $stateParams.id;

        activate();

        ////////////////

        function activate() {
        }
    }
})();