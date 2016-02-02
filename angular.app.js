var app = angular.module('simpleChat', ['firebase']);

app.controller('MessagesCtrl', ["$scope", "$firebase", function ($scope, $firebase) {

	var ref = new Firebase("https://chatfirebaseangular.firebaseio.com/");

	$scope.login = function(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
            });
        }

    var obj = $firebase(ref).$asObject();

    obj.$bindTo($scope, "data");

    $scope.handleKeyup = function handleKeyup(e) {

    	if (e.keyCode == 13) {

    		$scope.newMessage.author = ref.getAuth().facebook.displayName;
				ref.child("messages").push($scope.newMessage);
				$scope.newMessage = {};

				console.log("it worked!");
		}
	}

}]);