/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.3
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
    instance = new KinowJavascriptSdk.CreateMessageRequest();
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

  describe('CreateMessageRequest', function() {
    it('should create an instance of CreateMessageRequest', function() {
      // uncomment below and update the code to test CreateMessageRequest
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.CreateMessageRequest);
    });

    it('should have the property idLang (base name: "id_lang")', function() {
      // uncomment below and update the code to test the property idLang
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property idSupport (base name: "id_support")', function() {
      // uncomment below and update the code to test the property idSupport
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property idContact (base name: "id_contact")', function() {
      // uncomment below and update the code to test the property idContact
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property idOrder (base name: "id_order")', function() {
      // uncomment below and update the code to test the property idOrder
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendMail (base name: "send_mail")', function() {
      // uncomment below and update the code to test the property sendMail
      //var instance = new KinowJavascriptSdk.CreateMessageRequest();
      //expect(instance).to.be();
    });

  });

}));
