angular.module('starter').service('checkLogin', checkLogin);
function checkLogin(){
	this.validate = function(){
		var token = localStorage.getItem('token');
		if(token==null || token=="" || token==undefined){
			console.log(location.hash);
			if(location.hash!='#/login' && location.hash!='#/register' && location.hash!='#/')
				location.href = "#/login";
		}else{
			if(location.hash=='#/login' || location.hash=='#/')
				location.href = "#/home";
		}
	}

	this.logout = function() {
		localStorage.clear();
		location.href = "#/login";
	}

	this.addLogin  = function(token, user){
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify(user));
		location.href = '#/home';
	}
}