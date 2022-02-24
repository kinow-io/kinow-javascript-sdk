/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.6
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
    instance = new KinowJavascriptSdk.CreateAttributeRequest();
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

  describe('CreateAttributeRequest', function() {
    it('should create an instance of CreateAttributeRequest', function() {
      // uncomment below and update the code to test CreateAttributeRequest
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.CreateAttributeRequest);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property videoGroupId (base name: "video_group_id")', function() {
      // uncomment below and update the code to test the property videoGroupId
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property videoId (base name: "video_id")', function() {
      // uncomment below and update the code to test the property videoId
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property quality (base name: "quality")', function() {
      // uncomment below and update the code to test the property quality
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property priceMode (base name: "price_mode")', function() {
      // uncomment below and update the code to test the property priceMode
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property watchingDuration (base name: "watching_duration")', function() {
      // uncomment below and update the code to test the property watchingDuration
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property maximumViews (base name: "maximum_views")', function() {
      // uncomment below and update the code to test the property maximumViews
      //var instance = new KinowJavascriptSdk.CreateAttributeRequest();
      //expect(instance).to.be();
    });

  });

}));
