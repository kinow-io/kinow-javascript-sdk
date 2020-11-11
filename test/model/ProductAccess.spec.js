/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.17
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
    instance = new KinowJavascriptSdk.ProductAccess();
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

  describe('ProductAccess', function() {
    it('should create an instance of ProductAccess', function() {
      // uncomment below and update the code to test ProductAccess
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be.a(KinowJavascriptSdk.ProductAccess);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property idProductAttribute (base name: "id_product_attribute")', function() {
      // uncomment below and update the code to test the property idProductAttribute
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property dateExp (base name: "date_exp")', function() {
      // uncomment below and update the code to test the property dateExp
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property cancel (base name: "cancel")', function() {
      // uncomment below and update the code to test the property cancel
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property recurring (base name: "recurring")', function() {
      // uncomment below and update the code to test the property recurring
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property idOrder (base name: "id_order")', function() {
      // uncomment below and update the code to test the property idOrder
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property dateRenewal (base name: "date_renewal")', function() {
      // uncomment below and update the code to test the property dateRenewal
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "payment_method")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

    it('should have the property renewed (base name: "renewed")', function() {
      // uncomment below and update the code to test the property renewed
      //var instance = new KinowJavascriptSdk.ProductAccess();
      //expect(instance).to.be();
    });

  });

}));
