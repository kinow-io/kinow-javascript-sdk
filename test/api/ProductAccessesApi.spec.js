/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.20
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
    instance = new KinowJavascriptSdk.ProductAccessesApi();
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

  describe('ProductAccessesApi', function() {
    describe('createProductAccess', function() {
      it('should call createProductAccess successfully', function(done) {
        //uncomment below and update the code to test createProductAccess
        //instance.createProductAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductAccess', function() {
      it('should call deleteProductAccess successfully', function(done) {
        //uncomment below and update the code to test deleteProductAccess
        //instance.deleteProductAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesSubscriptions', function() {
      it('should call getCustomerAccessesSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesSubscriptions
        //instance.getCustomerAccessesSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesVideos', function() {
      it('should call getCustomerAccessesVideos successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesVideos
        //instance.getCustomerAccessesVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAccess', function() {
      it('should call getProductAccess successfully', function(done) {
        //uncomment below and update the code to test getProductAccess
        //instance.getProductAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAccesses', function() {
      it('should call getProductAccesses successfully', function(done) {
        //uncomment below and update the code to test getProductAccesses
        //instance.getProductAccesses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribe', function() {
      it('should call subscribe successfully', function(done) {
        //uncomment below and update the code to test subscribe
        //instance.subscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchSubscription', function() {
      it('should call switchSubscription successfully', function(done) {
        //uncomment below and update the code to test switchSubscription
        //instance.switchSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchSubscriptionDelete', function() {
      it('should call switchSubscriptionDelete successfully', function(done) {
        //uncomment below and update the code to test switchSubscriptionDelete
        //instance.switchSubscriptionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchSubscriptionPending', function() {
      it('should call switchSubscriptionPending successfully', function(done) {
        //uncomment below and update the code to test switchSubscriptionPending
        //instance.switchSubscriptionPending(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unsubscribe', function() {
      it('should call unsubscribe successfully', function(done) {
        //uncomment below and update the code to test unsubscribe
        //instance.unsubscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductAccess', function() {
      it('should call updateProductAccess successfully', function(done) {
        //uncomment below and update the code to test updateProductAccess
        //instance.updateProductAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
