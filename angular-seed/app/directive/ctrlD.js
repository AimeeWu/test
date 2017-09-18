(function () {
    "use strict";

    angular.module("myApp")
        .controller("ctrlD", ["$scope", "$rootScope",
            function ($scope, $rootScope) {

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