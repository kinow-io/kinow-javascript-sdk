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
    instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
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

  describe('ConvertMediaLiveRequest', function() {
    it('should create an instance of ConvertMediaLiveRequest', function() {
      // uncomment below and update the code to test ConvertMediaLiveRequest
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.ConvertMediaLiveRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamId (base name: "stream_id")', function() {
      // uncomment below and update the code to test the property streamId
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be();
    });

    it('should have the property liveId (base name: "live_id")', function() {
      // uncomment below and update the code to test the property liveId
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "date_from")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "date_to")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instance = new KinowJavascriptSdk.ConvertMediaLiveRequest();
      //expect(instance).to.be();
    });

  });

}));
