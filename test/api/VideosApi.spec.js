/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.49
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KinowJavascriptSdk);
  }
}(this, function(expect, KinowJavascriptSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KinowJavascriptSdk.VideosApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VideosApi', function() {
    describe('attachCoverToVideo', function() {
      it('should call attachCoverToVideo successfully', function(done) {
        //uncomment below and update the code to test attachCoverToVideo
        //instance.attachCoverToVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToVideo', function() {
      it('should call attachFeaturesToVideo successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToVideo
        //instance.attachFeaturesToVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachVideoToProduct', function() {
      it('should call attachVideoToProduct successfully', function(done) {
        //uncomment below and update the code to test attachVideoToProduct
        //instance.attachVideoToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVideo', function() {
      it('should call createVideo successfully', function(done) {
        //uncomment below and update the code to test createVideo
        //instance.createVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVideo', function() {
      it('should call deleteVideo successfully', function(done) {
        //uncomment below and update the code to test deleteVideo
        //instance.deleteVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryVideoPlayer', function() {
      it('should call getCategoryVideoPlayer successfully', function(done) {
        //uncomment below and update the code to test getCategoryVideoPlayer
        //instance.getCategoryVideoPlayer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryVideoSubtitles', function() {
      it('should call getCategoryVideoSubtitles successfully', function(done) {
        //uncomment below and update the code to test getCategoryVideoSubtitles
        //instance.getCategoryVideoSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToVideo', function() {
      it('should call getCustomerHasAccessToVideo successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToVideo
        //instance.getCustomerHasAccessToVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToVideos', function() {
      it('should call getCustomerHasAccessToVideos successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToVideos
        //instance.getCustomerHasAccessToVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDisabledSubscriptions', function() {
      it('should call getDisabledSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getDisabledSubscriptions
        //instance.getDisabledSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideo', function() {
      it('should call getVideo successfully', function(done) {
        //uncomment below and update the code to test getVideo
        //instance.getVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoAccess', function() {
      it('should call getVideoAccess successfully', function(done) {
        //uncomment below and update the code to test getVideoAccess
        //instance.getVideoAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoBonus', function() {
      it('should call getVideoBonus successfully', function(done) {
        //uncomment below and update the code to test getVideoBonus
        //instance.getVideoBonus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoDownloadUrl', function() {
      it('should call getVideoDownloadUrl successfully', function(done) {
        //uncomment below and update the code to test getVideoDownloadUrl
        //instance.getVideoDownloadUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoFeatures', function() {
      it('should call getVideoFeatures successfully', function(done) {
        //uncomment below and update the code to test getVideoFeatures
        //instance.getVideoFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoGeolocation', function() {
      it('should call getVideoGeolocation successfully', function(done) {
        //uncomment below and update the code to test getVideoGeolocation
        //instance.getVideoGeolocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoGeolocationByIp', function() {
      it('should call getVideoGeolocationByIp successfully', function(done) {
        //uncomment below and update the code to test getVideoGeolocationByIp
        //instance.getVideoGeolocationByIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoPlayer', function() {
      it('should call getVideoPlayer successfully', function(done) {
        //uncomment below and update the code to test getVideoPlayer
        //instance.getVideoPlayer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoSubtitles', function() {
      it('should call getVideoSubtitles successfully', function(done) {
        //uncomment below and update the code to test getVideoSubtitles
        //instance.getVideoSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoViews', function() {
      it('should call getVideoViews successfully', function(done) {
        //uncomment below and update the code to test getVideoViews
        //instance.getVideoViews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideos', function() {
      it('should call getVideos successfully', function(done) {
        //uncomment below and update the code to test getVideos
        //instance.getVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideosFromCategories', function() {
      it('should call getVideosFromCategories successfully', function(done) {
        //uncomment below and update the code to test getVideosFromCategories
        //instance.getVideosFromCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideosFromCategory', function() {
      it('should call getVideosFromCategory successfully', function(done) {
        //uncomment below and update the code to test getVideosFromCategory
        //instance.getVideosFromCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideosFromProduct', function() {
      it('should call getVideosFromProduct successfully', function(done) {
        //uncomment below and update the code to test getVideosFromProduct
        //instance.getVideosFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setVideoGeolocation', function() {
      it('should call setVideoGeolocation successfully', function(done) {
        //uncomment below and update the code to test setVideoGeolocation
        //instance.setVideoGeolocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVideo', function() {
      it('should call updateVideo successfully', function(done) {
        //uncomment below and update the code to test updateVideo
        //instance.updateVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
