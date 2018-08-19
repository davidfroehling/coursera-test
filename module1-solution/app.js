(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foods = "";
  $scope.isToMuch = "";

  $scope.CheckLunchItems = function () {
    var foodList = $scope.foods;
    var foods = foodList.split(",");
    var numFoods = foods.length;
    $scope.isToMuch = (numFoods < 4) ? "Enjoy!" : "Too much!";
  };
}

})();
