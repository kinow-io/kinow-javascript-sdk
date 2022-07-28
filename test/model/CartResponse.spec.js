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
    instance = new KinowJavascriptSdk.CartResponse();
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

  describe('CartResponse', function() {
    it('should create an instance of CartResponse', function() {
      // uncomment below and update the code to test CartResponse
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be.a(KinowJavascriptSdk.CartResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCurrency (base name: "id_currency")', function() {
      // uncomment below and update the code to test the property idCurrency
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property idLang (base name: "id_lang")', function() {
      // uncomment below and update the code to test the property idLang
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property affiliate (base name: "affiliate")', function() {
      // uncomment below and update the code to test the property affiliate
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalWithoutTax (base name: "total_without_tax")', function() {
      // uncomment below and update the code to test the property totalWithoutTax
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalTrial (base name: "total_trial")', function() {
      // uncomment below and update the code to test the property totalTrial
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property availableCheckoutProcesses (base name: "available_checkout_processes")', function() {
      // uncomment below and update the code to test the property availableCheckoutProcesses
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property cartRules (base name: "cart_rules")', function() {
      // uncomment below and update the code to test the property cartRules
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instance = new KinowJavascriptSdk.CartResponse();
      //expect(instance).to.be();
    });

  });

}));
