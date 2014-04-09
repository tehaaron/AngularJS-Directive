'use strict';

angular.module('angularJsDirectiveApp')
	.controller('MainCtrl', function ($scope) {
    	$scope.cards = [
	    	{
	    		id: 1,
	    		name: 'Robot',
	    		health: 20,
	    		attack: 4,
	    		wait: 3,
	    		skills: [
	    			{id: 1, name: 'Laser'}
	    		]
	    	},
	    	{
	     		id: 2,
	    		name: 'Alien',
	    		health: 10,
	    		attack: 2,
	    		wait: 1,
	    		skills: [
	    			{id: 1, name: 'Probe'}
	    		]   		
	    	},
	    	{
				id: 3,
				name: 'Human',
				health: 15,
				attack: 6,
				wait: 2,
				skills: []
	    	}
	    ];
	});
