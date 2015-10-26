'use strict';

/**
 * @ngdoc overview
 * @name Recordtime
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Recordtime', ['ionic', 'ngCordova', 'ngResource'])

.run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {});

})

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        })
        .state('app.recordDateTime', {
            url: '/recordDateTime',
            views: {
                'viewContent': {
                    templateUrl: 'templates/views/recordDateTime.html',
                    controller: 'RecordDateTimeController as recordCtrl'
                }
            }
        })
        .state('app.carList', {
            url: '/carList',
            views: {
                'viewContent': {
                    templateUrl: 'templates/views/carList.html',
                    controller: 'CarListController as carListCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/recordDateTime');
});
