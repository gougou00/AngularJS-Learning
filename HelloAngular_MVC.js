// function HelloAngular($scope) {
// 	$scope.greeting = {
// 		text: 'Hello'
// 	};
// }
// 不定义全局函数污染全局对象
var app = angular.module("myApp", []);
app.controller('HelloAngular', function($scope) {
	$scope.greeting = {text: "Hello"};
})
