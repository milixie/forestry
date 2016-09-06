'use strict';

/**
 * @ngdoc function
 * @name forestryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forestryApp
 */
angular.module('forestryApp')
  .controller('MainCtrl',["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tab = 1;
  }]);