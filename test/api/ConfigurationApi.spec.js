/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    instance = new KinowJavascriptSdk.ConfigurationApi();
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

  describe('ConfigurationApi', function() {
    describe('getConfiguration', function() {
      it('should call getConfiguration successfully', function(done) {
        //uncomment below and update the code to test getConfiguration
        //instance.getConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfigurationAnalytics', function() {
      it('should call getConfigurationAnalytics successfully', function(done) {
        //uncomment below and update the code to test getConfigurationAnalytics
        //instance.getConfigurationAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfigurationByName', function() {
      it('should call getConfigurationByName successfully', function(done) {
        //uncomment below and update the code to test getConfigurationByName
        //instance.getConfigurationByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfigurationLogo', function() {
      it('should call getConfigurationLogo successfully', function(done) {
        //uncomment below and update the code to test getConfigurationLogo
        //instance.getConfigurationLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfigurationSocial', function() {
      it('should call getConfigurationSocial successfully', function(done) {
        //uncomment below and update the code to test getConfigurationSocial
        //instance.getConfigurationSocial(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
