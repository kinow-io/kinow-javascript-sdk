/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.67
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
    instance = new KinowJavascriptSdk.CartsApi();
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

  describe('CartsApi', function() {
    describe('addProductToCart', function() {
      it('should call addProductToCart successfully', function(done) {
        //uncomment below and update the code to test addProductToCart
        //instance.addProductToCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachCartRuleToCart', function() {
      it('should call attachCartRuleToCart successfully', function(done) {
        //uncomment below and update the code to test attachCartRuleToCart
        //instance.attachCartRuleToCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachCartToCustomer', function() {
      it('should call attachCartToCustomer successfully', function(done) {
        //uncomment below and update the code to test attachCartToCustomer
        //instance.attachCartToCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCart', function() {
      it('should call createCart successfully', function(done) {
        //uncomment below and update the code to test createCart
        //instance.createCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCart', function() {
      it('should call deleteCart successfully', function(done) {
        //uncomment below and update the code to test deleteCart
        //instance.deleteCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductFromCart', function() {
      it('should call deleteProductFromCart successfully', function(done) {
        //uncomment below and update the code to test deleteProductFromCart
        //instance.deleteProductFromCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCart', function() {
      it('should call getCart successfully', function(done) {
        //uncomment below and update the code to test getCart
        //instance.getCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCarts', function() {
      it('should call getCustomerCarts successfully', function(done) {
        //uncomment below and update the code to test getCustomerCarts
        //instance.getCustomerCarts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLastCart', function() {
      it('should call getLastCart successfully', function(done) {
        //uncomment below and update the code to test getLastCart
        //instance.getLastCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentUrl', function() {
      it('should call getPaymentUrl successfully', function(done) {
        //uncomment below and update the code to test getPaymentUrl
        //instance.getPaymentUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('preparePayment', function() {
      it('should call preparePayment successfully', function(done) {
        //uncomment below and update the code to test preparePayment
        //instance.preparePayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCart', function() {
      it('should call updateCart successfully', function(done) {
        //uncomment below and update the code to test updateCart
        //instance.updateCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateFreeOrder', function() {
      it('should call validateFreeOrder successfully', function(done) {
        //uncomment below and update the code to test validateFreeOrder
        //instance.validateFreeOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validatePayment', function() {
      it('should call validatePayment successfully', function(done) {
        //uncomment below and update the code to test validatePayment
        //instance.validatePayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
