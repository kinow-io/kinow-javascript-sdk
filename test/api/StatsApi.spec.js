/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.13
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
    instance = new KinowJavascriptSdk.StatsApi();
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

  describe('StatsApi', function() {
    describe('createVideoStatSession', function() {
      it('should call createVideoStatSession successfully', function(done) {
        //uncomment below and update the code to test createVideoStatSession
        //instance.createVideoStatSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerGroupTotalWatched', function() {
      it('should call getCustomerGroupTotalWatched successfully', function(done) {
        //uncomment below and update the code to test getCustomerGroupTotalWatched
        //instance.getCustomerGroupTotalWatched(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerSessions', function() {
      it('should call getCustomerSessions successfully', function(done) {
        //uncomment below and update the code to test getCustomerSessions
        //instance.getCustomerSessions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerSessionsMultiple', function() {
      it('should call getCustomerSessionsMultiple successfully', function(done) {
        //uncomment below and update the code to test getCustomerSessionsMultiple
        //instance.getCustomerSessionsMultiple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerVideoStats', function() {
      it('should call getCustomerVideoStats successfully', function(done) {
        //uncomment below and update the code to test getCustomerVideoStats
        //instance.getCustomerVideoStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerVideosViewInformations', function() {
      it('should call getCustomerVideosViewInformations successfully', function(done) {
        //uncomment below and update the code to test getCustomerVideosViewInformations
        //instance.getCustomerVideosViewInformations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsWatched', function() {
      it('should call getProductsWatched successfully', function(done) {
        //uncomment below and update the code to test getProductsWatched
        //instance.getProductsWatched(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoStats', function() {
      it('should call getVideoStats successfully', function(done) {
        //uncomment below and update the code to test getVideoStats
        //instance.getVideoStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideosWatching', function() {
      it('should call getVideosWatching successfully', function(done) {
        //uncomment below and update the code to test getVideosWatching
        //instance.getVideosWatching(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCustomerVideoViewInformations', function() {
      it('should call setCustomerVideoViewInformations successfully', function(done) {
        //uncomment below and update the code to test setCustomerVideoViewInformations
        //instance.setCustomerVideoViewInformations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
