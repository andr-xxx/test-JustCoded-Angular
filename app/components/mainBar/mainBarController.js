app.controller('mainBarController', function ($scope, mainBarService, Person) {
    $scope.persons = mainBarService.getPersons();

    $scope.addPerson = () => {
        const person = new Person();
        mainBarService.addPerson(person.setData($scope.person));
        $scope.person = null;
    };

    $scope.deletePerson = (index) => {
        mainBarService.deletePerson(index);
    };

    $scope.checkboxWatcher = () => {
        mainBarService.changeSuperHeroValues();
    };
});