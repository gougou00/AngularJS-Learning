// function CommonController($scope) {
// 	$scope.commonFn=function() {
// 		alert("这是通用功能！");
// 	};
// }

// function Controller1($scope) {
// 	$scope.greeting = {
// 		test: 'hello1'
// 	};
// 	$scope.test1=function() {
// 		alert("test1");
// 	};
// }

// function Controller2($scope) {
// 	$scope.greeting = {
// 		test: 'hello2'
// 	};
// 	$scope.test2=function() {
// 		alert("test2");
// 	};
// }
// 
var app = angular.module("myApp", []);
app.controller('CommonController', function($scope) {
	$scope.commonFn = function() {
		alert("这是通用功能！");
	};
})

app.controller('Controller1', function($scope) {
	$scope.greeting = {
		text: "hello1"
	};
	$scope.test1=function() {
		alert("test1");
	};
})

app.controller('Controller2', function($scope) {
	$scope.greeting = {
		text: "hello2"
	};
	$scope.test2=function() {
		alert("test2");
	};
})