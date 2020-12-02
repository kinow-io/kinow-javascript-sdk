/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.20
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
    instance = new KinowJavascriptSdk.Gift2();
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

  describe('Gift2', function() {
    it('should create an instance of Gift2', function() {
      // uncomment below and update the code to test Gift2
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be.a(KinowJavascriptSdk.Gift2);
    });

    it('should have the property idCart (base name: "id_cart")', function() {
      // uncomment below and update the code to test the property idCart
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property idProductAttribute (base name: "id_product_attribute")', function() {
      // uncomment below and update the code to test the property idProductAttribute
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

    it('should have the property dateSend (base name: "date_send")', function() {
      // uncomment below and update the code to test the property dateSend
      //var instance = new KinowJavascriptSdk.Gift2();
      //expect(instance).to.be();
    });

  });

}));
