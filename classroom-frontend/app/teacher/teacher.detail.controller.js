(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('TeacherDetailController', TeacherDetailController);

	TeacherDetailController.$inject = ['$stateParams', 'teacherFactory', '$state', 'toastr'];

	/* @nginject */
	function TeacherDetailController($stateParams, teacherFactory, $state, toastr) {
		
		var vm = this;
		
		vm.title = 'TeacherDetailController';

		vm.teacherId = $stateParams.id;

		vm.save = save;

		activate();

		/////////////////

		function activate() {
			if ($stateParams.id) {
			 teacherFactory
				.getById($stateParams.id)
				.then(function(response) {
					vm.teacher = response.data;
					vm.teacher.firstName = vm.teacher.name.split(' ')[0]
					vm.teacher.lastName = vm.teacher.name.split(' ')[1]
				});
		}

	}

	function save() {
		vm.teacher.startDate = "2016-11-07";
		console.log(vm.teacher);
		vm.teacher.name = vm.teacher.firstName + ' ' + vm.teacher.lastName;
		if ($stateParams.id) {
			teacherFactory
				.update(vm.teacher.teacherId, vm.teacher)
				.then(function(response) {
					toastr.success('Updated Teacher Info', 'Success');
					$state.go('teacher.grid');
				});
		} else {
			teacherFactory
				.create(vm.teacher)
				.then(function(response) {
					toastr.success('Created a New Teacher', 'Success');
					$state.go('teacher.grid');

				});
			}
		}
	}
})();