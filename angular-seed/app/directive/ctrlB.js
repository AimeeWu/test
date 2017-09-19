(function() {
    "use strict";

    angular.module("myApp")
        .controller("ctrlB", ["$scope", function($scope) {
            console.log('ctrlB ---------------------');
            console.log($scope);

            $scope.$watch('obj.age', function() {
                console.log('b ======== ');
                console.log($scope.obj.age);
                console.log($scope);
            })
        }])
        .directive('directiveB', function() {
            return {
                restrict: 'E',
                templateUrl: 'directive/b.html',
                scope: true
            }
        })
})();