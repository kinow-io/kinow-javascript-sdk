/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.5.0
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
    instance = new KinowJavascriptSdk.ExtractAccessInfo();
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

  describe('ExtractAccessInfo', function() {
    it('should create an instance of ExtractAccessInfo', function() {
      // uncomment below and update the code to test ExtractAccessInfo
      //var instance = new KinowJavascriptSdk.ExtractAccessInfo();
      //expect(instance).to.be.a(KinowJavascriptSdk.ExtractAccessInfo);
    });

    it('should have the property idExtract (base name: "id_extract")', function() {
      // uncomment below and update the code to test the property idExtract
      //var instance = new KinowJavascriptSdk.ExtractAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property streaming (base name: "streaming")', function() {
      // uncomment below and update the code to test the property streaming
      //var instance = new KinowJavascriptSdk.ExtractAccessInfo();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "error_code")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new KinowJavascriptSdk.ExtractAccessInfo();
      //expect(instance).to.be();
    });

  });

}));
