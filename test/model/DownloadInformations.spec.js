/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.20
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
    instance = new KinowJavascriptSdk.DownloadInformations();
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

  describe('DownloadInformations', function() {
    it('should create an instance of DownloadInformations', function() {
      // uncomment below and update the code to test DownloadInformations
      //var instance = new KinowJavascriptSdk.DownloadInformations();
      //expect(instance).to.be.a(KinowJavascriptSdk.DownloadInformations);
    });

    it('should have the property sourceUrl (base name: "source_url")', function() {
      // uncomment below and update the code to test the property sourceUrl
      //var instance = new KinowJavascriptSdk.DownloadInformations();
      //expect(instance).to.be();
    });

    it('should have the property manifest (base name: "manifest")', function() {
      // uncomment below and update the code to test the property manifest
      //var instance = new KinowJavascriptSdk.DownloadInformations();
      //expect(instance).to.be();
    });

    it('should have the property sessionId (base name: "session_id")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instance = new KinowJavascriptSdk.DownloadInformations();
      //expect(instance).to.be();
    });

  });

}));
