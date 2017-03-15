
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

;
