
angular.module('starter.controllers', [])


// Scanbot SDK Plugin Example Controllers
.controller('ScanbotSdkUiCtrl', function($scope, DemoImageStorage) {
  $scope.currentDocumentImage = DemoImageStorage.currentDocumentImage;

  $scope.startCameraUi = function() {
    var options = { edgeColor: '#0000ff' };
    window.ScanbotSdkUi.startCamera(callbackCameraUi, callbackError, options);
  };

  var callbackCameraUi = function(result) {
    $scope.$apply(function() {
      DemoImageStorage.setCurrentDocumentImage(result);
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
      //$scope.currentDocumentImage.imageFileUri = result.imageFileUri;
      DemoImageStorage.setCurrentDocumentImage(result);
    });
  };

  var callbackError = function(error) {
    console.log('Error from Scanbot SDK Plugin: ' + error);
  };

})

.controller('ScanbotSdkFilterCtrl', function($scope, DemoImageStorage) {
  $scope.currentDocumentImage = DemoImageStorage.currentDocumentImage;
  $scope.filteredImageFileUri = DemoImageStorage.currentDocumentImage.imageFileUri;

  $scope.availableImageFilter = [];
  $scope.selectedImageFilter = null;

  // init availableImageFilter list:
  Object.keys(window.ScanbotSdk.ImageFilter).map(function(key) {
    if (key !== 'NONE') {
      $scope.availableImageFilter.push({
        id: key,
        name: window.ScanbotSdk.ImageFilter[key]
      });
    }
  });

  $scope.selectFilter = function(optionSelected) {
    $scope.selectedImageFilter = optionSelected;
  };

  $scope.applyImageFilter = function() {
    if (!$scope.selectedImageFilter) { return; }

    var options = {
      imageFileUri: DemoImageStorage.currentDocumentImage.imageFileUri,
      imageFilter: $scope.selectedImageFilter.name
    };

    window.ScanbotSdk.applyImageFilter(callbackImageFilter, callbackError, options);
  };

  var callbackImageFilter = function(result) {
    $scope.$apply(function() {
      $scope.filteredImageFileUri = result.imageFileUri;
    });
  };

  var callbackError = function(error) {
    console.log('Error from Scanbot SDK Plugin: ' + error);
  };

})

;
