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
    instance = new KinowJavascriptSdk.CreateProductAccessRequest();
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

  describe('CreateProductAccessRequest', function() {
    it('should create an instance of CreateProductAccessRequest', function() {
      // uncomment below and update the code to test CreateProductAccessRequest
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.CreateProductAccessRequest);
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

    it('should have the property idProductAttribute (base name: "id_product_attribute")', function() {
      // uncomment below and update the code to test the property idProductAttribute
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateExp (base name: "date_exp")', function() {
      // uncomment below and update the code to test the property dateExp
      //var instance = new KinowJavascriptSdk.CreateProductAccessRequest();
      //expect(instance).to.be();
    });

  });

}));
