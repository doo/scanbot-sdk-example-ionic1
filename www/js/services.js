
angular.module('starter.services', [])

.factory('DemoImageStorage', function() {
  var currentDocumentImage = {
    imageFileUri: '',
    originalImageFileUri: ''
  };

  function _hasField(obj, fieldName) {
    return Object.keys(obj).indexOf(fieldName) != -1;
  }

  return {
    currentDocumentImage: currentDocumentImage,

    setCurrentDocumentImage: function(sdkResult) {
      if (_hasField(sdkResult, 'imageFileUri') && sdkResult.imageFileUri) {
        currentDocumentImage.imageFileUri = sdkResult.imageFileUri;
      }
      if (_hasField(sdkResult, 'originalImageFileUri') && sdkResult.originalImageFileUri) {
        currentDocumentImage.originalImageFileUri = sdkResult.originalImageFileUri;
      }
    }
  };
})

.factory('PhotoLibrary', function($q) {
  // we use cordova-plugin-camera to get images from photo library
  return {
    getPicture: function() {
      var q = $q.defer();

      var options = {
        quality: 95,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      navigator.camera.getPicture(
        function(result) {
          q.resolve(result);
        },
        function(err) {
          q.reject(err);
        },
        options
      );

      return q.promise;
    }
  };
})

;
