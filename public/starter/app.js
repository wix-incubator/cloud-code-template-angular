angular.module('starter', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';
		var routeConfig = {
			controller: 'StarterCtrl',
			controllerAs: 'starterCtrl',
			templateUrl: 'starter/starter-template.html'
		};
		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});
	