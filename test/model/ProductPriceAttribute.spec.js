/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.9
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
    instance = new KinowJavascriptSdk.ProductPriceAttribute();
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

  describe('ProductPriceAttribute', function() {
    it('should create an instance of ProductPriceAttribute', function() {
      // uncomment below and update the code to test ProductPriceAttribute
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be.a(KinowJavascriptSdk.ProductPriceAttribute);
    });

    it('should have the property attributeId (base name: "attribute_id")', function() {
      // uncomment below and update the code to test the property attributeId
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property reduction (base name: "reduction")', function() {
      // uncomment below and update the code to test the property reduction
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property priceWithoutTaxes (base name: "price_without_taxes")', function() {
      // uncomment below and update the code to test the property priceWithoutTaxes
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property priceWithoutReduction (base name: "price_without_reduction")', function() {
      // uncomment below and update the code to test the property priceWithoutReduction
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property priceFormatted (base name: "price_formatted")', function() {
      // uncomment below and update the code to test the property priceFormatted
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property reductionFormatted (base name: "reduction_formatted")', function() {
      // uncomment below and update the code to test the property reductionFormatted
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property priceWithoutTaxesFormatted (base name: "price_without_taxes_formatted")', function() {
      // uncomment below and update the code to test the property priceWithoutTaxesFormatted
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property priceWithoutReductionFormatted (base name: "price_without_reduction_formatted")', function() {
      // uncomment below and update the code to test the property priceWithoutReductionFormatted
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.ProductPriceAttribute();
      //expect(instance).to.be();
    });

  });

}));
