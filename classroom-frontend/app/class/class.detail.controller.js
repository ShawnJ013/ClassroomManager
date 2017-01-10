(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassDetailController', ClassDetailController);

    ClassDetailController.$inject = ['$stateParams', 'classFactory', 'teacherFactory', '$state', 'studentFactory', 'toastr'];

    /* @nginject */
    function ClassDetailController($stateParams, classFactory, teacherFactory, $state, studentFactory, toastr) {
        
        var vm = this;

        vm.title = 'ClassDetailController';

        vm.classId = $stateParams.id;

        vm.save = save;

        vm.removeEnrollment = removeEnrollment;

        vm.newEnrollment = newEnrollment;

        activate();

        /////////////

        function activate() {
            if ($stateParams.id) {
                classFactory
                    .getById($stateParams.id)
                    .then(function(response) {
                        vm.class = response.data;
                    });
            }
        teacherFactory
            .getAll()
            .then(function(response) {
                vm.teachers = response.data;
            });
        studentFactory
            .getAll()
            .then(function(response) {
                vm.students = response.data;
            });
    }

    function save() {
        if ($stateParams.id) {
            classFactory
                .update(vm.class.classId, vm.class)
                .then(function(response) {
                    toastr.success('Update Class', 'Success');
                    $state.go('class.grid');
                });
        } else {
            classFactory
                .create(vm.class)
                .then(function(response) {
                    toastr.success('Created New Class', 'Success')
                    $state.go('class.grid');
                });
        }
    }

    function newEnrollment(classId, studentId) {
        classFactory
            .newEnrollment(vm.class.classId, studentId)
            .then(function(response) {
                toastr.success('Added Student to this Class', 'Successfully');
                $state.transitionTo($state.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            });
    }

function removeEnrollment(classId, studentId) {
    classFactory
        .removeEnrollment(classId, studentId)
        .then(function(response) {
            toastr.success('Removed Student from this Class', 'Successfully');
            $state.transitionTo($state.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        });
    }
}

})();
