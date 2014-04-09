'use strict';

angular.module('app.directives.card', [])
	.directive('card', function() {
		return {
			restrict: 'E',
			scope: {
				data: '=',
				title: '='
			},
			replace: true,
			templateUrl: 'templates/directives/card.html',
			link: function(scope, element, attrs) {
				element.click(function() {
					alert('click');
				})
			},
			controller: function($scope) {
				console.log($scope.data);
			}
		};
	});