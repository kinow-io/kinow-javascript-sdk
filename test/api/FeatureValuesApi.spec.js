/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    instance = new KinowJavascriptSdk.FeatureValuesApi();
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

  describe('FeatureValuesApi', function() {
    describe('attachFeaturesToActor', function() {
      it('should call attachFeaturesToActor successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToActor
        //instance.attachFeaturesToActor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToBlogPage', function() {
      it('should call attachFeaturesToBlogPage successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToBlogPage
        //instance.attachFeaturesToBlogPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToCategory', function() {
      it('should call attachFeaturesToCategory successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToCategory
        //instance.attachFeaturesToCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToDirector', function() {
      it('should call attachFeaturesToDirector successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToDirector
        //instance.attachFeaturesToDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToExtract', function() {
      it('should call attachFeaturesToExtract successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToExtract
        //instance.attachFeaturesToExtract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToProduct', function() {
      it('should call attachFeaturesToProduct successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToProduct
        //instance.attachFeaturesToProduct(function(error) {
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
    describe('detachFeatureToProduct', function() {
      it('should call detachFeatureToProduct successfully', function(done) {
        //uncomment below and update the code to test detachFeatureToProduct
        //instance.detachFeatureToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureValues', function() {
      it('should call getFeatureValues successfully', function(done) {
        //uncomment below and update the code to test getFeatureValues
        //instance.getFeatureValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
