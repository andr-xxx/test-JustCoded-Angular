app.controller('mainBarController', function ($scope, mainBarService) {
  $scope.person = {};
  $scope.totalPersons = {};

  $scope.addPerson = () => {
    mainBarService.addPerson($scope.person);
    $scope.persons = mainBarService.getPersons();
    $scope.person = {};
  };

  $scope.deletePerson = (index) => {
    mainBarService.deletePerson (index);
    $scope.persons = mainBarService.getPersons();
    mainBarService.changeSuperHeroValues();
  };

  $scope.checkboxWatcher = () => {
    mainBarService.changeSuperHeroValues();
  };
});