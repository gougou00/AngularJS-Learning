// angular.module('app',[])
// .controller('MyCtrl',function($scope){
// 	$scope.msg="angular";
// })
//
//  
//index04
// angular.module('app',[])
// .controller('FirstCtrl',function($scope){
// 	$scope.msg="hello luoya";
// })
// .controller('NextCtrl',function($scope){
// 	$scope.msg="hello yaya";
// })
// 
//index05
angular.module('app',[]	)
.controller('MyCtrl',function($scope){
	$scope.msg="ddd";
	$scope.user={uname:'',pwd:''};
	$scope.errormsg="";
	$scope.reverse=function(){
		return $scope.msg.split("").reverse().join("");
	}
	$scope.login=function(){
		// console.log($scope.user)
		if ($scope.user.uname=='admin' && $scope.user.pwd=='123'){
			alert("登录成功");
		} else {
			$scope.errormsg = "用户名或密码错误";
		}
	}
})