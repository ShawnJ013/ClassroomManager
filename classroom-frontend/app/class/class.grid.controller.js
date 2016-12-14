(function() {
    'use strict';

    angular
        .module('module')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = [''];

    /* @ngInject */
    function ClassGridController() {
        var vm = this;
        vm.title = 'ClassGridController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();