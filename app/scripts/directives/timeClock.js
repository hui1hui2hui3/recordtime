/**
 * timeclock directive
 */
'use strict';
angular.module('Recordtime')
    .directive('timeClock', [function() {
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            restrict: 'E',
            controller: function($scope, $interval) {
                $scope.clock = new Date();
                $interval(function() {
                    $scope.clock = new Date();
                }, 1000);
            },
            scope: {},
            template: '<div>\
            		<div>{{clock | date:"yyyy-MM-dd"}}</div>\
            		<div>{{clock | date:"HH:mm:ss"}}</div>\
            		</div>'
        };
    }]);
