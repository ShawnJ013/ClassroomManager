(function() {
	'use strict';

	angular
	// var app = angular.module('App', ['ui.calendar'])
	  .module('app', [])
	  .controller('DashboardController', DashboardController);

		DashboardController.$inject = [];
		

		/* @ngInject */
	function DashboardController() {
		var vm = this;
		vm.title = 'DashboardController';

		activate();

		////////////////

		function activate() {

		}
		
	}
})();