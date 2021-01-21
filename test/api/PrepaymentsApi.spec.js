/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.28
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
    instance = new KinowJavascriptSdk.PrepaymentsApi();
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

  describe('PrepaymentsApi', function() {
    describe('getCustomerPrepaymentBalances', function() {
      it('should call getCustomerPrepaymentBalances successfully', function(done) {
        //uncomment below and update the code to test getCustomerPrepaymentBalances
        //instance.getCustomerPrepaymentBalances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerPrepaymentOperations', function() {
      it('should call getCustomerPrepaymentOperations successfully', function(done) {
        //uncomment below and update the code to test getCustomerPrepaymentOperations
        //instance.getCustomerPrepaymentOperations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentBonus', function() {
      it('should call getPrepaymentBonus successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentBonus
        //instance.getPrepaymentBonus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentBonusList', function() {
      it('should call getPrepaymentBonusList successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentBonusList
        //instance.getPrepaymentBonusList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentOperation', function() {
      it('should call getPrepaymentOperation successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentOperation
        //instance.getPrepaymentOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentOperations', function() {
      it('should call getPrepaymentOperations successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentOperations
        //instance.getPrepaymentOperations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentRecharge', function() {
      it('should call getPrepaymentRecharge successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentRecharge
        //instance.getPrepaymentRecharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrepaymentRecharges', function() {
      it('should call getPrepaymentRecharges successfully', function(done) {
        //uncomment below and update the code to test getPrepaymentRecharges
        //instance.getPrepaymentRecharges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
