angular.module("Todo", []).controller("TodoCtrl", function($scope, $window) {
  $scope.newItem = {}
  $scope.undoStack = []; // serves as a stack

  $scope.todoList = [
    { text: "Clean room" },
    { text: "Do homework"},
    { text: "Pump iron" }
  ]

  $scope.addItem = function() {
    if ($scope.newItem.text) {
      $scope.todoList.push($scope.newItem);
      $scope.newItem = {};
    }
  }

  $scope.toggleDone = function(index) {
    $scope.undoStack.push($scope.todoList.splice(index, 1)[0]);
  }

  $scope.undo = function () {
    if ($scope.undoStack.length > 0) {
      $scope.todoList.push($scope.undoStack.pop());
    }
  }

  // Ex. 2 Bonus: Detect all keypresses
  angular.element($window).bind("keypress", function(e) {
    if (e.which === 26) {
      $scope.undo();
      $scope.$apply();
    }
  })

});

