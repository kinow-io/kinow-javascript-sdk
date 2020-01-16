/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.45
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
    instance = new KinowJavascriptSdk.SubscriptionsApi();
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

  describe('SubscriptionsApi', function() {
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
    describe('getProductSubscription', function() {
      it('should call getProductSubscription successfully', function(done) {
        //uncomment below and update the code to test getProductSubscription
        //instance.getProductSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscription', function() {
      it('should call getSubscription successfully', function(done) {
        //uncomment below and update the code to test getSubscription
        //instance.getSubscription(function(error) {
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
    describe('getSubscriptions', function() {
      it('should call getSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getSubscriptions
        //instance.getSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
