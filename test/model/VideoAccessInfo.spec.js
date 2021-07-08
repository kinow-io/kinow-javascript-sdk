/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.44
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
    instance = new KinowJavascriptSdk.VideoAccessInfo();
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

  describe('VideoAccessInfo', function() {
    it('should create an instance of VideoAccessInfo', function() {
      // uncomment below and update the code to test VideoAccessInfo
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be.a(KinowJavascriptSdk.VideoAccessInfo);
    });

    it('should have the property idVideo (base name: "id_video")', function() {
      // uncomment below and update the code to test the property idVideo
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property streaming (base name: "streaming")', function() {
      // uncomment below and update the code to test the property streaming
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property download (base name: "download")', function() {
      // uncomment below and update the code to test the property download
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property maximumWatched (base name: "maximum_watched")', function() {
      // uncomment below and update the code to test the property maximumWatched
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property maximumViewing (base name: "maximum_viewing")', function() {
      // uncomment below and update the code to test the property maximumViewing
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property qualityHd (base name: "quality_hd")', function() {
      // uncomment below and update the code to test the property qualityHd
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property qualitySd (base name: "quality_sd")', function() {
      // uncomment below and update the code to test the property qualitySd
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property playDuration (base name: "play_duration")', function() {
      // uncomment below and update the code to test the property playDuration
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "error_code")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new KinowJavascriptSdk.VideoAccessInfo();
      //expect(instance).to.be();
    });

  });

}));
