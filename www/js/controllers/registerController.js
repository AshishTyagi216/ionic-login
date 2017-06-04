angular.module('starter').controller('registerCtrl', registerCtrl);

function registerCtrl($scope, $http, checkLogin, $cordovaToast) {
    $scope.user = {};
    checkLogin.validate();
    $scope.register = function() {
        $scope.user.device = "hgyugjhvvghg56576767";
        $http.post('http://35.163.73.183:1337/v1/auth/signup', $scope.user).success(function(res) {
            showToast(res.message);
            location.href = "#/login";
        }).error(function(err) {
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
