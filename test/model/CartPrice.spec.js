/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.2
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
    instance = new KinowJavascriptSdk.CartPrice();
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

  describe('CartPrice', function() {
    it('should create an instance of CartPrice', function() {
      // uncomment below and update the code to test CartPrice
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be.a(KinowJavascriptSdk.CartPrice);
    });

    it('should have the property cartId (base name: "cart_id")', function() {
      // uncomment below and update the code to test the property cartId
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalWithoutTax (base name: "total_without_tax")', function() {
      // uncomment below and update the code to test the property totalWithoutTax
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "total_tax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscount (base name: "total_discount")', function() {
      // uncomment below and update the code to test the property totalDiscount
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalTrial (base name: "total_trial")', function() {
      // uncomment below and update the code to test the property totalTrial
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalWithoutTaxFormatted (base name: "total_without_tax_formatted")', function() {
      // uncomment below and update the code to test the property totalWithoutTaxFormatted
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalTaxFormatted (base name: "total_tax_formatted")', function() {
      // uncomment below and update the code to test the property totalTaxFormatted
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscountFormatted (base name: "total_discount_formatted")', function() {
      // uncomment below and update the code to test the property totalDiscountFormatted
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalTrialFormatted (base name: "total_trial_formatted")', function() {
      // uncomment below and update the code to test the property totalTrialFormatted
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalFormatted (base name: "total_formatted")', function() {
      // uncomment below and update the code to test the property totalFormatted
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      //var instance = new KinowJavascriptSdk.CartPrice();
      //expect(instance).to.be();
    });

  });

}));
