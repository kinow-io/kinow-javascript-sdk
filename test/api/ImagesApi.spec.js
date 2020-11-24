/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.19
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
    instance = new KinowJavascriptSdk.ImagesApi();
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

  describe('ImagesApi', function() {
    describe('getActorCoverImage', function() {
      it('should call getActorCoverImage successfully', function(done) {
        //uncomment below and update the code to test getActorCoverImage
        //instance.getActorCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryBanner', function() {
      it('should call getCategoryBanner successfully', function(done) {
        //uncomment below and update the code to test getCategoryBanner
        //instance.getCategoryBanner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectorCoverImage', function() {
      it('should call getDirectorCoverImage successfully', function(done) {
        //uncomment below and update the code to test getDirectorCoverImage
        //instance.getDirectorCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCoverImage', function() {
      it('should call getProductCoverImage successfully', function(done) {
        //uncomment below and update the code to test getProductCoverImage
        //instance.getProductCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductImages', function() {
      it('should call getProductImages successfully', function(done) {
        //uncomment below and update the code to test getProductImages
        //instance.getProductImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductScreenshots', function() {
      it('should call getProductScreenshots successfully', function(done) {
        //uncomment below and update the code to test getProductScreenshots
        //instance.getProductScreenshots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSliderImage', function() {
      it('should call getSliderImage successfully', function(done) {
        //uncomment below and update the code to test getSliderImage
        //instance.getSliderImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionCoverImage', function() {
      it('should call getSubscriptionCoverImage successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionCoverImage
        //instance.getSubscriptionCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoCover', function() {
      it('should call getVideoCover successfully', function(done) {
        //uncomment below and update the code to test getVideoCover
        //instance.getVideoCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadActorCover', function() {
      it('should call uploadActorCover successfully', function(done) {
        //uncomment below and update the code to test uploadActorCover
        //instance.uploadActorCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadCategoryCover', function() {
      it('should call uploadCategoryCover successfully', function(done) {
        //uncomment below and update the code to test uploadCategoryCover
        //instance.uploadCategoryCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadDirectorCover', function() {
      it('should call uploadDirectorCover successfully', function(done) {
        //uncomment below and update the code to test uploadDirectorCover
        //instance.uploadDirectorCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadProductCover', function() {
      it('should call uploadProductCover successfully', function(done) {
        //uncomment below and update the code to test uploadProductCover
        //instance.uploadProductCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadSubscriptionCover', function() {
      it('should call uploadSubscriptionCover successfully', function(done) {
        //uncomment below and update the code to test uploadSubscriptionCover
        //instance.uploadSubscriptionCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
