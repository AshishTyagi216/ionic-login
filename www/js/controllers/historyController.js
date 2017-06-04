angular.module('starter').controller('historyCtrl', historyCtrl);

function historyCtrl($scope, checkLogin) {
	checkLogin.validate();
}