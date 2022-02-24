/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.6
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
    instance = new KinowJavascriptSdk.ExtractsApi();
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

  describe('ExtractsApi', function() {
    describe('attachCoverToExtract', function() {
      it('should call attachCoverToExtract successfully', function(done) {
        //uncomment below and update the code to test attachCoverToExtract
        //instance.attachCoverToExtract(function(error) {
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
    describe('createExtract', function() {
      it('should call createExtract successfully', function(done) {
        //uncomment below and update the code to test createExtract
        //instance.createExtract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtractSubtitle', function() {
      it('should call createExtractSubtitle successfully', function(done) {
        //uncomment below and update the code to test createExtractSubtitle
        //instance.createExtractSubtitle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtract', function() {
      it('should call deleteExtract successfully', function(done) {
        //uncomment below and update the code to test deleteExtract
        //instance.deleteExtract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtract', function() {
      it('should call getExtract successfully', function(done) {
        //uncomment below and update the code to test getExtract
        //instance.getExtract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtractFeatures', function() {
      it('should call getExtractFeatures successfully', function(done) {
        //uncomment below and update the code to test getExtractFeatures
        //instance.getExtractFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtractPlayer', function() {
      it('should call getExtractPlayer successfully', function(done) {
        //uncomment below and update the code to test getExtractPlayer
        //instance.getExtractPlayer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtractSubtitles', function() {
      it('should call getExtractSubtitles successfully', function(done) {
        //uncomment below and update the code to test getExtractSubtitles
        //instance.getExtractSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtracts', function() {
      it('should call getExtracts successfully', function(done) {
        //uncomment below and update the code to test getExtracts
        //instance.getExtracts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductExtracts', function() {
      it('should call getProductExtracts successfully', function(done) {
        //uncomment below and update the code to test getProductExtracts
        //instance.getProductExtracts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hasAccessToExtracts', function() {
      it('should call hasAccessToExtracts successfully', function(done) {
        //uncomment below and update the code to test hasAccessToExtracts
        //instance.hasAccessToExtracts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtract', function() {
      it('should call updateExtract successfully', function(done) {
        //uncomment below and update the code to test updateExtract
        //instance.updateExtract(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
