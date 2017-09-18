'use strict';
angular.module('myApp', [])
.controller('appCtrl', ['$scope', function($scope){
	console.log('appCtrl ---------------------');
	$scope.click = function(){
		console.log('click');
		console.log($scope);
	}
	$scope.info = 'aaa';
	$scope.name = '123';
	$scope.obj = {
		age: 10
	}
	$scope.$watch('obj.age', function(){
		console.log('app ==========');
		console.log($scope);
	})
}])
