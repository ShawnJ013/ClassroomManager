(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('StudentGridController', StudentGridController);

	StudentGridController.$inject = ['studentFactory', 'toastr'];

	/* @nginject */
	function StudentGridController(studentFactory, toastr) {
		
		var vm = this;
		
		vm.title = 'StudentGridController';

		vm.delStudent = delStudent;

		activate();

		///////////

		function activate() {
			studentFactory
				.getAll()
				.then(function(response) {
					vm.students = response.data;
				})
				.catch(function(error) {
					toastr.error('Unable to return students grid', 'Error');
				});
		}

		function delStudent(student) {
			studentFactory
				.remove(student.studentId)
				.then(function(response) {
					var index = vm.students.indexOf(student);
					toastr.success('Deleted Student', 'Successfully');
					vm.students.splice(index, 1);
				})
		}
	}
})();