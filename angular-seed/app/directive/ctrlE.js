(function () {
    "use strict";

    angular.module("myApp")
        .controller("ctrlE", ["$scope", "$rootScope",
            function ($scope, $rootScope) {

            }])
        .directive('directiveE',function(){
            return {
                restrict: 'E',
                templateUrl: 'directive/e.html',
                scope: {
                    dirClick: '&'
                }
            }
        })
})();