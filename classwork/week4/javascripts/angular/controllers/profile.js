angular.module("MyApp")
.controller("ProfileCtrl", function($scope) {
  $scope.profile = function() {
    console.log("in the profile");
  };
});
