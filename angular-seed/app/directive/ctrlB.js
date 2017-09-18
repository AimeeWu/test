(function() {
    "use strict";

    angular.module("myApp")
        .controller("ctrlB", ["$scope", function($scope) {
            console.log('ctrlB ---------------------');
            $scope.$watch('obj.age', function() {
                console.log('b ======== ');
                console.log($scope.obj.age);
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