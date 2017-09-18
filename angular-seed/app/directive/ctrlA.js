(function() {
    "use strict";
    angular.module("myApp")
        .controller('ctrlA', ['$scope', '$rootScope', function($scope, $rootScope) {
            console.log('ctrlA ---------------------');
            $scope.a = 'aaa';
            // $scope.obj = {age: 90};
            $scope.child = { name: 'child' }

            $scope.$watch('obj.age', function() {
                console.log('a ===========');
                console.log($scope.obj.age);
            })
        }])
        .directive('directiveA', function() {
            return {
                restrict: 'E',
                templateUrl: 'directive/a.html',
                scope: false
            }
        })
})();