/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.38
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
    instance = new KinowJavascriptSdk.SocialSettings();
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

  describe('SocialSettings', function() {
    it('should create an instance of SocialSettings', function() {
      // uncomment below and update the code to test SocialSettings
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be.a(KinowJavascriptSdk.SocialSettings);
    });

    it('should have the property facebook (base name: "facebook")', function() {
      // uncomment below and update the code to test the property facebook
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property twitter (base name: "twitter")', function() {
      // uncomment below and update the code to test the property twitter
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property youtube (base name: "youtube")', function() {
      // uncomment below and update the code to test the property youtube
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property pinterest (base name: "pinterest")', function() {
      // uncomment below and update the code to test the property pinterest
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property dailymotion (base name: "dailymotion")', function() {
      // uncomment below and update the code to test the property dailymotion
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property tumblr (base name: "tumblr")', function() {
      // uncomment below and update the code to test the property tumblr
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

    it('should have the property myspace (base name: "myspace")', function() {
      // uncomment below and update the code to test the property myspace
      //var instance = new KinowJavascriptSdk.SocialSettings();
      //expect(instance).to.be();
    });

  });

}));
