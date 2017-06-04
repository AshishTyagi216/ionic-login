angular.module('starter').controller('homeCtrl', homeCtrl);

function homeCtrl($scope, checkLogin) {
	checkLogin.validate();

	$scope.logout = function(){
		checkLogin.logout();
	}
}