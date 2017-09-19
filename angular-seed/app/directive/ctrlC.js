(function() {
    "use strict";

    angular.module("myApp")
        .controller("ctrlC", ["$scope", "$rootScope",
            function($scope, $rootScope) {
                // $scope.name = 'ccc'
                console.log('ctrlC -------------');
                $scope.$watch('info',function(newVal){
                    console.log('ctrlC ============');
                    console.log(newVal);
                    console.log($scope);
                })
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