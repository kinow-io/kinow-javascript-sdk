/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    instance = new KinowJavascriptSdk.UpdateCustomerRequest();
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

  describe('UpdateCustomerRequest', function() {
    it('should create an instance of UpdateCustomerRequest', function() {
      // uncomment below and update the code to test UpdateCustomerRequest
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.UpdateCustomerRequest);
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property idGender (base name: "id_gender")', function() {
      // uncomment below and update the code to test the property idGender
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property newsletter (base name: "newsletter")', function() {
      // uncomment below and update the code to test the property newsletter
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property optin (base name: "optin")', function() {
      // uncomment below and update the code to test the property optin
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property idLang (base name: "id_lang")', function() {
      // uncomment below and update the code to test the property idLang
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxViewing (base name: "max_viewing")', function() {
      // uncomment below and update the code to test the property maxViewing
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new KinowJavascriptSdk.UpdateCustomerRequest();
      //expect(instance).to.be();
    });

  });

}));
