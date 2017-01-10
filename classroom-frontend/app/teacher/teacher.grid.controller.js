(function() {
	'use strict';

	angular
	  .module('app')
	  .controller('TeacherGridController', TeacherGridController);

	TeacherGridController.$inject = ['teacherFactory', 'toastr'];

	/* @nginject */
	function TeacherGridController(teacherFactory, toastr) {
		
		var vm = this;
		
		vm.title = 'TeacherGridController';

		vm.delTeacher = delTeacher;

		activate();

		//////////////

		function activate() {
			teacherFactory
				.getAll()
				.then(function(response) {
					vm.teachers = response.data;
				})
				.catch(function(error) {
					toastr.error('Unable to return teacher grid', 'Error');
				});
			}

		function delTeacher(teacher) {
			teacherFactory
				.remove(teacher.teacherId)
				.then(function(response) {
					var index = vm.teachers.indexOf(teacher);
					toastr.success('Deleted Teacher', 'Successfully');
					vm.teachers.splice(index, 1);
				})
		}
	}
})();