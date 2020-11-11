/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.15
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
    instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
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

  describe('CreateVideoSubtitleRequest', function() {
    it('should create an instance of CreateVideoSubtitleRequest', function() {
      // uncomment below and update the code to test CreateVideoSubtitleRequest
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.CreateVideoSubtitleRequest);
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property idLang (base name: "id_lang")', function() {
      // uncomment below and update the code to test the property idLang
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property background (base name: "background")', function() {
      // uncomment below and update the code to test the property background
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property font (base name: "font")', function() {
      // uncomment below and update the code to test the property font
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

    it('should have the property textShadow (base name: "text_shadow")', function() {
      // uncomment below and update the code to test the property textShadow
      //var instance = new KinowJavascriptSdk.CreateVideoSubtitleRequest();
      //expect(instance).to.be();
    });

  });

}));
