angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


// Scanbot SDK Plugin Example Controllers
.controller('ScanbotSdkUiCtrl', function($scope) {
  // TODO move currentDocumentImage into Service so we have a global instance to use in each tab....
  $scope.currentDocumentImage = { imageFileUri: '', originalImageFileUri: '' };

  $scope.startCameraUi = function() {
    var options = { edgeColor: '#0000ff' };
    window.ScanbotSdkUi.startCamera(callbackCameraUi, callbackError, options);
  };

  var callbackCameraUi = function(result) {
    $scope.$apply(function() {
      $scope.currentDocumentImage.imageFileUri = result.imageFileUri;
      $scope.currentDocumentImage.originalImageFileUri = result.originalImageFileUri;
    });
  };

  $scope.startCroppingUi = function() {
    var options = {
      imageFileUri: $scope.currentDocumentImage.originalImageFileUri,
      edgeColor: '#0000ff'
    };
    window.ScanbotSdkUi.startCropping(callbackCroppingUi, callbackError, options);
  };

  var callbackCroppingUi = function(result) {
    $scope.$apply(function() {
      $scope.currentDocumentImage.imageFileUri = result.imageFileUri;
    });
  };

  var callbackError = function(error) {
    console.log('Error from Scanbot SDK Plugin: ' + error);
  };

})

.controller('ScanbotSdkCtrl', function($scope) {
  // TODO
})

;
