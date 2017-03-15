// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    // Initialize Scanbot SDK:
    var options = { loggingEnabled: true, licenseKey: '' };
    window.ScanbotSdk.initializeSdk(function(result) {
        console.log(result);
      },
      function(error) {
        console.log('Error from Scanbot SDK: ' + error);
      },
      options
    );

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.scanbot-sdk-ui', {
    url: '/scanbot-sdk-ui',
    views: {
      'tab-scanbot-sdk-ui': {
        templateUrl: 'templates/tab-scanbot-sdk-ui.html',
        controller: 'ScanbotSdkUiCtrl'
      }
    }
  })

  .state('tab.scanbot-sdk-filter', {
    url: '/scanbot-sdk-filter',
    views: {
      'tab-scanbot-sdk-filter': {
        templateUrl: 'templates/tab-scanbot-sdk-filter.html',
        controller: 'ScanbotSdkFilterCtrl'
      }
    }
  })

  .state('tab.scanbot-sdk-detection', {
    url: '/scanbot-sdk-detection',
    views: {
      'tab-scanbot-sdk-detection': {
        templateUrl: 'templates/tab-scanbot-sdk-detection.html',
        controller: 'ScanbotSdkDetectionCtrl'
      }
    }
  })

  .state('tab.scanbot-sdk-pdf', {
    url: '/scanbot-sdk-pdf',
    views: {
      'tab-scanbot-sdk-pdf': {
        templateUrl: 'templates/tab-scanbot-sdk-pdf.html',
        controller: 'ScanbotSdkPdfCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/scanbot-sdk-ui');

});
