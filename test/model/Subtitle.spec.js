/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.9
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
    instance = new KinowJavascriptSdk.Subtitle();
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

  describe('Subtitle', function() {
    it('should create an instance of Subtitle', function() {
      // uncomment below and update the code to test Subtitle
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be.a(KinowJavascriptSdk.Subtitle);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property src (base name: "src")', function() {
      // uncomment below and update the code to test the property src
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property srclang (base name: "srclang")', function() {
      // uncomment below and update the code to test the property srclang
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property font (base name: "font")', function() {
      // uncomment below and update the code to test the property font
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property textShadow (base name: "text_shadow")', function() {
      // uncomment below and update the code to test the property textShadow
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property background (base name: "background")', function() {
      // uncomment below and update the code to test the property background
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property opacity (base name: "opacity")', function() {
      // uncomment below and update the code to test the property opacity
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

    it('should have the property italicColor (base name: "italic_color")', function() {
      // uncomment below and update the code to test the property italicColor
      //var instance = new KinowJavascriptSdk.Subtitle();
      //expect(instance).to.be();
    });

  });

}));
