(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
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




    			// teacher state

    			;
    	});

})();