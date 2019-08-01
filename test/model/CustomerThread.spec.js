/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.1.3
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
    instance = new KinowJavascriptSdk.CustomerThread();
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

  describe('CustomerThread', function() {
    it('should create an instance of CustomerThread', function() {
      // uncomment below and update the code to test CustomerThread
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be.a(KinowJavascriptSdk.CustomerThread);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property idLand (base name: "id_land")', function() {
      // uncomment below and update the code to test the property idLand
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property idContact (base name: "id_contact")', function() {
      // uncomment below and update the code to test the property idContact
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property idOrder (base name: "id_order")', function() {
      // uncomment below and update the code to test the property idOrder
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.CustomerThread();
      //expect(instance).to.be();
    });

  });

}));
