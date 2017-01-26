app.directive('sideBar', function ($interval) {
  return {
    templateUrl: 'components/sideBar/sidebar-template.html',
    restrict: 'E',
    replace: true,
    // scope: {
    //   info: '=temp'
    // },
    controller: 'mainBarController',
    link: function (scope, element, attrs) {
      scope.$watch (function (ne) {
        return scope.totalPersons
      }, function (newV) {
        console.log (scope === newV)
      })
    }
  }
});