// angular/controllers/todo.js
angular.module("MyApp") // Note: no dependencies
.controller("GameCtrl", function($scope, $state, $interval) {
  console.log("game crtl");
  $scope.points = 0;
  $scope.time = 0;

  var boxInterval;
  var timeInterval;
  var hasStarted = false;
  var size;

  var moveBox = function() {
    var x = Math.floor(Math.random() * (($(window).width() - 200) - 200 + 1) + 200);
    var y = Math.floor(Math.random() * (($(window).height() - 200) - 200 + 1) + 200);
    $('#target-box').css('left', x);
    $('#target-box').css('top', y);
  };

  var sizeBox = function(width, height) {
    $('#target-box').css('width', width);
    $('#target-box').css('height', height);
  };

  $scope.start = function() {
    $interval.cancel(boxInterval);
    $interval.cancel(timeInterval);
    hasStarted = true;
    $scope.time = 0;
    size = 1.0;
    sizeBox(100, 100);

    boxInterval = $interval(function() {
      moveBox();
    }, 1000);

    timeInterval = $interval(function() {
      $scope.time++;
    }, 1000);
  };

  $scope.addPoint = function() {
    if (hasStarted === true) {
      $scope.points++;
      if ($scope.points === 2)
      {
        $interval.cancel(boxInterval);
        $interval.cancel(timeInterval);
        hasStarted = false;
        $state.go('winner', {'points': $scope.points, 'time': $scope.time});
      }
      else
      {
        size += 0.1;
        sizeBox(100 / size, 100 / size);
        moveBox();
      }
    }
  };
})
.controller('WinCtrl', function($scope, $stateParams) {
  $scope.points = $stateParams.points;
  $scope.time = $stateParams.time;
});
