angular.module("budgetTracker", [])

.controller("mainCtrl", function($scope) {
	
	$scope.myArray = [];
	$scope.myObject = {};
	$scope.theArray = [];
	$scope.theObject = {};
	$scope.totalIncome= 0;
	$scope.totalExpense = 0;
	$scope.leftAfterSpending = 0;
	


	$scope.addy = function() {
		$scope.myArray.push(angular.copy($scope.myObject));
		console.log($scope.myObject);
		$scope.totalIncome += $scope.myObject.amount;
		$scope.myObject = {};
		$scope.leftAfterSpending += $scope.myObject.amount;
	};
	$scope.second = function() {
		$scope.theArray.push(angular.copy($scope.theObject));
		console.log($scope.myObject);
		$scope.totalExpense += $scope.theObject.amount;
		$scope.theObject = {};
    	$scope.leftAfterSpending -= $scope.theObject.amount;
    };



});
 
	
	

	




