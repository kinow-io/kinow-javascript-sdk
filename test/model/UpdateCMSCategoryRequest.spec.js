/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.17
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
    instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
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

  describe('UpdateCMSCategoryRequest', function() {
    it('should create an instance of UpdateCMSCategoryRequest', function() {
      // uncomment below and update the code to test UpdateCMSCategoryRequest
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.UpdateCMSCategoryRequest);
    });

    it('should have the property idParent (base name: "id_parent")', function() {
      // uncomment below and update the code to test the property idParent
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property levelDepth (base name: "level_depth")', function() {
      // uncomment below and update the code to test the property levelDepth
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property linkRewrite (base name: "link_rewrite")', function() {
      // uncomment below and update the code to test the property linkRewrite
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaTitle (base name: "meta_title")', function() {
      // uncomment below and update the code to test the property metaTitle
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaKeywords (base name: "meta_keywords")', function() {
      // uncomment below and update the code to test the property metaKeywords
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property metaDescription (base name: "meta_description")', function() {
      // uncomment below and update the code to test the property metaDescription
      //var instance = new KinowJavascriptSdk.UpdateCMSCategoryRequest();
      //expect(instance).to.be();
    });

  });

}));
