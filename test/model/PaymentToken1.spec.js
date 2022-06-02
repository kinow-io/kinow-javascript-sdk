/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.10
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
    instance = new KinowJavascriptSdk.PaymentToken1();
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

  describe('PaymentToken1', function() {
    it('should create an instance of PaymentToken1', function() {
      // uncomment below and update the code to test PaymentToken1
      //var instance = new KinowJavascriptSdk.PaymentToken1();
      //expect(instance).to.be.a(KinowJavascriptSdk.PaymentToken1);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new KinowJavascriptSdk.PaymentToken1();
      //expect(instance).to.be();
    });

    it('should have the property idCart (base name: "id_cart")', function() {
      // uncomment below and update the code to test the property idCart
      //var instance = new KinowJavascriptSdk.PaymentToken1();
      //expect(instance).to.be();
    });

  });

}));
