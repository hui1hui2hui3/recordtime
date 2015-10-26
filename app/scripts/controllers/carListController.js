'use strict';

/**
 * @ngdoc function
 * @name Recordtime.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('Recordtime')
    .controller('CarListController', ['$scope', '$ionicHistory', '$ionicModal',
        function($scope, $ionicHistory, $ionicModal) {
            var ctrl = this,
                backView = 'not null';

            ctrl.isShowToggle = function() {
                return backView === null;
            };

            $ionicModal.fromTemplateUrl('templates/snippets/carDetail.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                ctrl.modal = modal;
            });

            ctrl.addCar = function() {
                showModal();
            };

            ctrl.editCar = function(){
                showModal();
            };

            $scope.hideModal = function() {
                ctrl.modal.hide();
            };

            $scope.$on('$ionicView.enter', function() {
                backView = $ionicHistory.backView();
            });

            $scope.$on('$ionicView.leave', function() {
                backView = 'not null';
            });

            function showModal() {
                ctrl.modal.show();
            }
        }
    ]);
