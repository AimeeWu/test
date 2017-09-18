(function() {
    "use strict";

    angular.module("myApp")
        .controller("ctrlC", ["$scope", "$rootScope",
            function($scope, $rootScope) {
                // $scope.name = 'ccc'
            }
        ])
        .directive('directiveC', function() {
            return {
                restrict: 'E',
                templateUrl: 'directive/c.html',
                scope: {
                    name: '@',
                    obj: '@',
                    info: '@'
                }
            }
        })
})();