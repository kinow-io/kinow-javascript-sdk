/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.15
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
    instance = new KinowJavascriptSdk.AddProductToCartRequest();
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

  describe('AddProductToCartRequest', function() {
    it('should create an instance of AddProductToCartRequest', function() {
      // uncomment below and update the code to test AddProductToCartRequest
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.AddProductToCartRequest);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

    it('should have the property productAttributeId (base name: "product_attribute_id")', function() {
      // uncomment below and update the code to test the property productAttributeId
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

    it('should have the property giftId (base name: "gift_id")', function() {
      // uncomment below and update the code to test the property giftId
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

    it('should have the property switchSubscriptionId (base name: "switch_subscription_id")', function() {
      // uncomment below and update the code to test the property switchSubscriptionId
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

    it('should have the property isGift (base name: "is_gift")', function() {
      // uncomment below and update the code to test the property isGift
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instance = new KinowJavascriptSdk.AddProductToCartRequest();
      //expect(instance).to.be();
    });

  });

}));
