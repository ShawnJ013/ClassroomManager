(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['stateParams', 'studentFactory', '$state', 'toastr'];

    /* @nginject */
    function StudentDetailController($stateParams, studentFactory, $state, toastr) {

        var vm = this;

        vm.title = 'StudentDetailController';

        vm.studentId = $stateParams.id;

        vm.save = save;

        activate();

        /////////////////

        function activate() {
            if ($stateParams.id) {
                studentFactory
                    .getById($stateParams.id)
                    .then(function(response) {
                        vm.student = response.data;
                        vm.student.firstName = vm.student.name.split(' ')[0]
                        vm.student.lastName = vm.studnet.name.split(' ')[1]
                    });
            }
        }

        function save() {
            vm.student.name = vm.student.firstName + ' ' + vm.student.lastName;
            if ($stateParams.id) {
                studentFactory
                    .update(vm.student.studentId, vm.student)
                    .then(function(response) {
                        toastr.success('Update Student Info', 'Success');
                        $state.go('student.grid');
                    });
            } else {
                studentFactory
                    .create(vm.student)
                    .then(function(response) {
                        toastr.success('Created New Student', 'Success');
                        $state.go('student.grid');
                    });
            }
        }
    }
})();
