angular.module('starter').controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $http, $location, checkLogin, $cordovaToast) {
	$scope.user = {};
	checkLogin.validate();
	$scope.loginUser = function(){
		$http.post('http://35.163.73.183:1337/v1/auth/signin', $scope.user).success(function(res){
			showToast(res.message);
			checkLogin.addLogin(res.data.token, res.data.user);
		}).error(function(err){
			showToast(err.message);
		});
		$scope.user = {};
	}
	
	function showToast(message) {
        $cordovaToast.showLongBottom(message).then(function(success) {
                // success
        },function(error) {
                // error
        });
    }
}