/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.58
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
    instance = new KinowJavascriptSdk.PaymentModulesApi();
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

  describe('PaymentModulesApi', function() {
    describe('getCartPaymentModules', function() {
      it('should call getCartPaymentModules successfully', function(done) {
        //uncomment below and update the code to test getCartPaymentModules
        //instance.getCartPaymentModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethods', function() {
      it('should call getPaymentMethods successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethods
        //instance.getPaymentMethods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethodsWithIp', function() {
      it('should call getPaymentMethodsWithIp successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethodsWithIp
        //instance.getPaymentMethodsWithIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentModules', function() {
      it('should call getPaymentModules successfully', function(done) {
        //uncomment below and update the code to test getPaymentModules
        //instance.getPaymentModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentToken', function() {
      it('should call getPaymentToken successfully', function(done) {
        //uncomment below and update the code to test getPaymentToken
        //instance.getPaymentToken(function(error) {
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
    describe('getPendingPayments', function() {
      it('should call getPendingPayments successfully', function(done) {
        //uncomment below and update the code to test getPendingPayments
        //instance.getPendingPayments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPendingPaymentsWithIp', function() {
      it('should call getPendingPaymentsWithIp successfully', function(done) {
        //uncomment below and update the code to test getPendingPaymentsWithIp
        //instance.getPendingPaymentsWithIp(function(error) {
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
    describe('updatePaymentMethod', function() {
      it('should call updatePaymentMethod successfully', function(done) {
        //uncomment below and update the code to test updatePaymentMethod
        //instance.updatePaymentMethod(function(error) {
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
