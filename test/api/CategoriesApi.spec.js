/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.36
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
    instance = new KinowJavascriptSdk.CategoriesApi();
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

  describe('CategoriesApi', function() {
    describe('createCategory', function() {
      it('should call createCategory successfully', function(done) {
        //uncomment below and update the code to test createCategory
        //instance.createCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCategory', function() {
      it('should call deleteCategory successfully', function(done) {
        //uncomment below and update the code to test deleteCategory
        //instance.deleteCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvailableCategory', function() {
      it('should call getAvailableCategory successfully', function(done) {
        //uncomment below and update the code to test getAvailableCategory
        //instance.getAvailableCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategories', function() {
      it('should call getCategories successfully', function(done) {
        //uncomment below and update the code to test getCategories
        //instance.getCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesFromCategory', function() {
      it('should call getCategoriesFromCategory successfully', function(done) {
        //uncomment below and update the code to test getCategoriesFromCategory
        //instance.getCategoriesFromCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategory', function() {
      it('should call getCategory successfully', function(done) {
        //uncomment below and update the code to test getCategory
        //instance.getCategory(function(error) {
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
    describe('getCategoryFeatures', function() {
      it('should call getCategoryFeatures successfully', function(done) {
        //uncomment below and update the code to test getCategoryFeatures
        //instance.getCategoryFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryProducts', function() {
      it('should call getCategoryProducts successfully', function(done) {
        //uncomment below and update the code to test getCategoryProducts
        //instance.getCategoryProducts(function(error) {
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
    describe('getProductCategories', function() {
      it('should call getProductCategories successfully', function(done) {
        //uncomment below and update the code to test getProductCategories
        //instance.getProductCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionCategories', function() {
      it('should call getSubscriptionCategories successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionCategories
        //instance.getSubscriptionCategories(function(error) {
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
    describe('updateCategory', function() {
      it('should call updateCategory successfully', function(done) {
        //uncomment below and update the code to test updateCategory
        //instance.updateCategory(function(error) {
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
  });

}));
