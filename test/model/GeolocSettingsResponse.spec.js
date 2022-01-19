/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.1
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
    instance = new KinowJavascriptSdk.GeolocSettingsResponse();
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

  describe('GeolocSettingsResponse', function() {
    it('should create an instance of GeolocSettingsResponse', function() {
      // uncomment below and update the code to test GeolocSettingsResponse
      //var instance = new KinowJavascriptSdk.GeolocSettingsResponse();
      //expect(instance).to.be.a(KinowJavascriptSdk.GeolocSettingsResponse);
    });

    it('should have the property geolocEnabled (base name: "geoloc_enabled")', function() {
      // uncomment below and update the code to test the property geolocEnabled
      //var instance = new KinowJavascriptSdk.GeolocSettingsResponse();
      //expect(instance).to.be();
    });

    it('should have the property behaviorDetectedCountries (base name: "behavior_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorDetectedCountries
      //var instance = new KinowJavascriptSdk.GeolocSettingsResponse();
      //expect(instance).to.be();
    });

    it('should have the property behaviorNonDetectedCountries (base name: "behavior_non_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorNonDetectedCountries
      //var instance = new KinowJavascriptSdk.GeolocSettingsResponse();
      //expect(instance).to.be();
    });

    it('should have the property countries (base name: "countries")', function() {
      // uncomment below and update the code to test the property countries
      //var instance = new KinowJavascriptSdk.GeolocSettingsResponse();
      //expect(instance).to.be();
    });

  });

}));
