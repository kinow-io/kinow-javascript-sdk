/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.74
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
    instance = new KinowJavascriptSdk.IPLocation();
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

  describe('IPLocation', function() {
    it('should create an instance of IPLocation', function() {
      // uncomment below and update the code to test IPLocation
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be.a(KinowJavascriptSdk.IPLocation);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be();
    });

    it('should have the property continent (base name: "continent")', function() {
      // uncomment below and update the code to test the property continent
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "time_zone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be();
    });

    it('should have the property coordinates (base name: "coordinates")', function() {
      // uncomment below and update the code to test the property coordinates
      //var instance = new KinowJavascriptSdk.IPLocation();
      //expect(instance).to.be();
    });

  });

}));
