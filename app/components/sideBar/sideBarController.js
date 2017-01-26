app.controller('sideBarController', function ($scope, $rootScope) {

	$scope.$on("infoSend", function (evt, totalPersons) {
        $scope.totalPersons = totalPersons;
    });	
	})