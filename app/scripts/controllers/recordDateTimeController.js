'use strict';

/**
 * @ngdoc function
 * @name Recordtime.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Recordtime')
    .controller('RecordDateTimeController', ['$filter', '_', '$ionicSideMenuDelegate',
        function($filter, _, $ionicSideMenuDelegate) {
            var ctrl = this;
            var dateFilter = $filter('date');
            ctrl.dateSet = [];

            ctrl.addNewDate = function() {
                var date = new Date(),
                    dateKey = dateFilter(date, 'yyyy-MM-dd'),
                    time = dateFilter(date, 'HH:mm:ss');
                var index = _.findIndex(ctrl.dateSet, function(obj) {
                    return obj.date === dateKey;
                });
                if (index > -1) {
                    var dateObj = ctrl.dateSet[index];
                    dateObj.times.push(time);
                } else {
                    ctrl.dateSet.push({
                        date: dateKey,
                        times: [time]
                    });
                }
            };

            ctrl.clearData = function() {
                ctrl.dateSet.splice(0, ctrl.dateSet.length);
            };

            ctrl.toggleMenu = function() {
                $ionicSideMenuDelegate.toggleLeft();
            };
        }
    ]);
