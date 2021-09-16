/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.52
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
    instance = new KinowJavascriptSdk.SessionVideoStat();
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

  describe('SessionVideoStat', function() {
    it('should create an instance of SessionVideoStat', function() {
      // uncomment below and update the code to test SessionVideoStat
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be.a(KinowJavascriptSdk.SessionVideoStat);
    });

    it('should have the property customerId (base name: "customer_id")', function() {
      // uncomment below and update the code to test the property customerId
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property videoId (base name: "video_id")', function() {
      // uncomment below and update the code to test the property videoId
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property isoCode (base name: "iso_code")', function() {
      // uncomment below and update the code to test the property isoCode
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property watchedTime (base name: "watched_time")', function() {
      // uncomment below and update the code to test the property watchedTime
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property watchedNumber (base name: "watched_number")', function() {
      // uncomment below and update the code to test the property watchedNumber
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

    it('should have the property playedNumber (base name: "played_number")', function() {
      // uncomment below and update the code to test the property playedNumber
      //var instance = new KinowJavascriptSdk.SessionVideoStat();
      //expect(instance).to.be();
    });

  });

}));
