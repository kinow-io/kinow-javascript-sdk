/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.25
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
    instance = new KinowJavascriptSdk.ProductAccessInfo();
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

  describe('ProductAccessInfo', function() {
    it('should create an instance of ProductAccessInfo', function() {
      // uncomment below and update the code to test ProductAccessInfo
      //var instance = new KinowJavascriptSdk.ProductAccessInfo();
      //expect(instance).to.be.a(KinowJavascriptSdk.ProductAccessInfo);
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.ProductAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property canSee (base name: "can_see")', function() {
      // uncomment below and update the code to test the property canSee
      //var instance = new KinowJavascriptSdk.ProductAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property canBuy (base name: "can_buy")', function() {
      // uncomment below and update the code to test the property canBuy
      //var instance = new KinowJavascriptSdk.ProductAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property canWatch (base name: "can_watch")', function() {
      // uncomment below and update the code to test the property canWatch
      //var instance = new KinowJavascriptSdk.ProductAccessInfo();
      //expect(instance).to.be();
    });

  });

}));
