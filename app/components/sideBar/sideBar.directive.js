app.directive('sideBar', function (mainBarService) {
    return {
        templateUrl: 'components/sideBar/sidebar-template.html',
        restrict: 'E',
        replace: true,
        scope: {},
        link: function (scope, element, attrs) {
            const deregisterGetTotalPersonsWatcher = scope.$watch(mainBarService.totalPersonsStatistics, function (newValue, prevValue) {
                scope.totalPersons = newValue;
            });

            scope.$on('$destroy', function () {
                deregisterGetTotalPersonsWatcher();
            });
        }
    }
});