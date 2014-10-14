
angular.module("MyApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "./templates/home.html",
    controller: "GameCtrl"
  })
  .state("profile", {
    url:"/profile",
    templateUrl: "./templates/profile.html",
    controller: "ProfileCtrl"
  })
  $urlRouterProvider.otherwise("/");
}).run(function() {
  console.log("angular loaded");
});
