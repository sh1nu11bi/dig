'use strict';

angular.module('digApp.directives')
.directive('dateFilter', function($filter) {
    return {
        restrict: 'E',
        scope: {
            aggregationName: '=',
            field: '@',
            indexVM: '=indexvm',
            ejs: '=',
            filters: '=',
            filterStates: '='
        },
        templateUrl: 'components/date-filter/date-filter.partial.html',
        link: function($scope) {
            $scope.filterStates[$scope.field] = {
                startDate: null,
                endDate: null
            };
            $scope.dateFormat = 'yyyy-MM-dd';

            $scope.dateToString = function(date) {
                return $filter('date')(date, $scope.dateFormat);
            };
        }
    };
});