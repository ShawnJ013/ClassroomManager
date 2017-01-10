(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory', 'toastr'];

    /* @nginject */
    function ClassGridController(classFactory, toastr) {
       
        var vm = this;

        vm.title = 'ClassGridController';

        vm.delClass = delClass;

        activate();

        //////////////

        function activate() {
            classFactory
                .getAll()
                .then(function(response) {
                    vm.classes = response.data;
                })
                .catch(function(error) {
                    toastr.error('Unable to return classes grid','Error');
                });
        }

        function delClass(classObj) {
            classFactory
                .remove(classObj.classId)
                .then(function(response) {
                    toastr.success('Deleted Class', 'Successfully');
                    vm.classes.splice(vm.classes.indexOf(classObj), 1);
                });
        }

    }
})();
