/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.61
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
    instance = new KinowJavascriptSdk.OrderHistory();
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

  describe('OrderHistory', function() {
    it('should create an instance of OrderHistory', function() {
      // uncomment below and update the code to test OrderHistory
      //var instance = new KinowJavascriptSdk.OrderHistory();
      //expect(instance).to.be.a(KinowJavascriptSdk.OrderHistory);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.OrderHistory();
      //expect(instance).to.be();
    });

    it('should have the property idOrder (base name: "id_order")', function() {
      // uncomment below and update the code to test the property idOrder
      //var instance = new KinowJavascriptSdk.OrderHistory();
      //expect(instance).to.be();
    });

    it('should have the property idOrderState (base name: "id_order_state")', function() {
      // uncomment below and update the code to test the property idOrderState
      //var instance = new KinowJavascriptSdk.OrderHistory();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.OrderHistory();
      //expect(instance).to.be();
    });

  });

}));
