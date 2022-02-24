/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.6
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
    instance = new KinowJavascriptSdk.UpdateGiftRequest();
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

  describe('UpdateGiftRequest', function() {
    it('should create an instance of UpdateGiftRequest', function() {
      // uncomment below and update the code to test UpdateGiftRequest
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.UpdateGiftRequest);
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateSend (base name: "date_send")', function() {
      // uncomment below and update the code to test the property dateSend
      //var instance = new KinowJavascriptSdk.UpdateGiftRequest();
      //expect(instance).to.be();
    });

  });

}));
