'use strict';

angular.module('digApp.directives')
.directive('checkboxFilter', function() {
    return {
        restrict: 'E',
        scope: {
            aggregationName: '@',
            aggregationKey: '@',
            aggregationCount: '@',
            indexVM: '=indexvm',
            ejs: '=',
            filters: '=',
            filterStates: '='
        },
        templateUrl: 'components/checkbox-filter/checkbox-filter.partial.html',
        link: function($scope) {
            $scope.filterStates[$scope.aggregationName] = {};
            $scope.aggregationCount = $scope.aggregationCount || 30;
        }
    };
});