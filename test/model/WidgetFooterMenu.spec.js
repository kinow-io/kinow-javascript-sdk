/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.44
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
    instance = new KinowJavascriptSdk.WidgetFooterMenu();
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

  describe('WidgetFooterMenu', function() {
    it('should create an instance of WidgetFooterMenu', function() {
      // uncomment below and update the code to test WidgetFooterMenu
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be.a(KinowJavascriptSdk.WidgetFooterMenu);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property column (base name: "column")', function() {
      // uncomment below and update the code to test the property column
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property blank (base name: "blank")', function() {
      // uncomment below and update the code to test the property blank
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KinowJavascriptSdk.WidgetFooterMenu();
      //expect(instance).to.be();
    });

  });

}));
