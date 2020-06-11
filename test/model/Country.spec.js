/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.73
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
    instance = new KinowJavascriptSdk.Country();
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

  describe('Country', function() {
    it('should create an instance of Country', function() {
      // uncomment below and update the code to test Country
      //var instance = new KinowJavascriptSdk.Country();
      //expect(instance).to.be.a(KinowJavascriptSdk.Country);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.Country();
      //expect(instance).to.be();
    });

    it('should have the property isoCode (base name: "iso_code")', function() {
      // uncomment below and update the code to test the property isoCode
      //var instance = new KinowJavascriptSdk.Country();
      //expect(instance).to.be();
    });

    it('should have the property idZone (base name: "id_zone")', function() {
      // uncomment below and update the code to test the property idZone
      //var instance = new KinowJavascriptSdk.Country();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.Country();
      //expect(instance).to.be();
    });

  });

}));
