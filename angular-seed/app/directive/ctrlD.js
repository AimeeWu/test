(function () {
    "use strict";

    angular.module("myApp")
        .controller("ctrlD", ["$scope", "$rootScope",
            function ($scope, $rootScope) {
                console.log('ctrlD ---------------');
                console.log($scope);
                $scope.$watch('info', function(){
                    console.log('ctrlD ==========');
                    console.log($scope);
                })
            }])
        .directive('directiveD',function(){
            return {
                restrict: 'E',
                templateUrl: 'directive/d.html',
                scope: {
                    name: '=',
                    obj: '=',
                    info: '='
                }
            }
        })
})();