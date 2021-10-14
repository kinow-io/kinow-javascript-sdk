/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.55
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
    describe('detachCartRuleFromCart', function() {
      it('should call detachCartRuleFromCart successfully', function(done) {
        //uncomment below and update the code to test detachCartRuleFromCart
        //instance.detachCartRuleFromCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emptyCart', function() {
      it('should call emptyCart successfully', function(done) {
        //uncomment below and update the code to test emptyCart
        //instance.emptyCart(function(error) {
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
    describe('getCarts', function() {
      it('should call getCarts successfully', function(done) {
        //uncomment below and update the code to test getCarts
        //instance.getCarts(function(error) {
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
    describe('getLostsCarts', function() {
      it('should call getLostsCarts successfully', function(done) {
        //uncomment below and update the code to test getLostsCarts
        //instance.getLostsCarts(function(error) {
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
    describe('getPrice', function() {
      it('should call getPrice successfully', function(done) {
        //uncomment below and update the code to test getPrice
        //instance.getPrice(function(error) {
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
    describe('recurringPayment', function() {
      it('should call recurringPayment successfully', function(done) {
        //uncomment below and update the code to test recurringPayment
        //instance.recurringPayment(function(error) {
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
