/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.26
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
    instance = new KinowJavascriptSdk.UpdateDirectorRequest();
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

  describe('UpdateDirectorRequest', function() {
    it('should create an instance of UpdateDirectorRequest', function() {
      // uncomment below and update the code to test UpdateDirectorRequest
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.UpdateDirectorRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property descriptionShort (base name: "description_short")', function() {
      // uncomment below and update the code to test the property descriptionShort
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaTitle (base name: "meta_title")', function() {
      // uncomment below and update the code to test the property metaTitle
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaDescription (base name: "meta_description")', function() {
      // uncomment below and update the code to test the property metaDescription
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaKeywords (base name: "meta_keywords")', function() {
      // uncomment below and update the code to test the property metaKeywords
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property linkRewrite (base name: "link_rewrite")', function() {
      // uncomment below and update the code to test the property linkRewrite
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.UpdateDirectorRequest();
      //expect(instance).to.be();
    });

  });

}));
