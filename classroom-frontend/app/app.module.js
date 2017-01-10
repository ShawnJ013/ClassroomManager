(function() {
	'use strict';

	angular
		.module('app', ['ui.router', 'toastr'])
	    .config(function($stateProvider, $urlRouterProvider) {
	  	
	  	$stateProvider
	  		.state('dashboard', {
	  			url: '/dashboard',
	  			controller: 'DashboardController as dashboardCtrl',
	  			templateUrl: '/app/dashboard/dashboard.html'
			})
	  			// class state
	  		.state('class', {
	  			url: '/class',
	  			abstract: true,
	  			template: '<div ui-view></div>'
	  		})
	  			.state('class.grid', {
	  				url: '/grid',
	  				controller: 'ClassGridController as classGridCtrl',
	  				templateUrl: '/app/class/class.grid.html'
	  			})
	  			.state('class.detail', {
	  				url: '/detail?id',
	  				controller: 'ClassDetailController as classDetailCtrl',
	  				templateUrl: '/app/class/class.detail.html'
	  			})

	  			// student state
	  		.state('student', {
	  			url: '/student',
	  			abstract: true,
	  			template: '<div ui-view></div>'
	  		})
	  			.state('student.grid', {
	  				url: '/grid',
	  				controller: 'StudentGridController as studentGridCtrl',
	  				templateUrl: '/app/student/student.grid.html'
	  			})
	  			.state('student.detail', {
	  				url: '/detail?id',
	  				controller: 'StudentDetailController as studentDetailCtrl',
	  				templateUrl: '/app/student/student.detail.html'
	  			})

	  			// teacher state
	  		.state('teacher', {
	  			url: '/teacher',
	  			abstract: true,
	  			template: '<div ui-view></div>'
	  		})
	  			.state('teacher.grid', {
	  				url: '/grid',
	  				controller: 'TeacherGridController as teacherGridCtrl',
	  				templateUrl: '/app/teacher/teacher.grid.html'
	  			})
	  			.state('teacher.detail', {
	  				url: '/detail?id',
	  				controller: 'TeacherDetailController as teacherDetailCtrl',
	  				templateUrl: '/app/teacher/teacher.detail.html'
	  			});
	  });
})();