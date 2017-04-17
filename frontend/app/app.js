'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $locationProvider) {
    $stateProvider.state('404', {
      templateUrl: '404.html',
    });

    $stateProvider.state('calendar', {
      url: '/',
      templateUrl: 'calendar/calendar.view.html',
      controller: 'CalendarCtrl',
      controllerAs: '$ctrl',
    });

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event) {
      $state.go('404');
    });
  });
