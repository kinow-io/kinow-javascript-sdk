/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.28
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
    instance = new KinowJavascriptSdk.Address1();
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

  describe('Address1', function() {
    it('should create an instance of Address1', function() {
      // uncomment below and update the code to test Address1
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be.a(KinowJavascriptSdk.Address1);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

    it('should have the property idState (base name: "id_state")', function() {
      // uncomment below and update the code to test the property idState
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

    it('should have the property idCountry (base name: "id_country")', function() {
      // uncomment below and update the code to test the property idCountry
      //var instance = new KinowJavascriptSdk.Address1();
      //expect(instance).to.be();
    });

  });

}));
