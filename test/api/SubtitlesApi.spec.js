/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.1
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
    instance = new KinowJavascriptSdk.SubtitlesApi();
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

  describe('SubtitlesApi', function() {
    describe('createExtractSubtitle', function() {
      it('should call createExtractSubtitle successfully', function(done) {
        //uncomment below and update the code to test createExtractSubtitle
        //instance.createExtractSubtitle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVideoSubtitle', function() {
      it('should call createVideoSubtitle successfully', function(done) {
        //uncomment below and update the code to test createVideoSubtitle
        //instance.createVideoSubtitle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryVideoSubtitles', function() {
      it('should call getCategoryVideoSubtitles successfully', function(done) {
        //uncomment below and update the code to test getCategoryVideoSubtitles
        //instance.getCategoryVideoSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtractSubtitles', function() {
      it('should call getExtractSubtitles successfully', function(done) {
        //uncomment below and update the code to test getExtractSubtitles
        //instance.getExtractSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubtitles', function() {
      it('should call getSubtitles successfully', function(done) {
        //uncomment below and update the code to test getSubtitles
        //instance.getSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoSubtitles', function() {
      it('should call getVideoSubtitles successfully', function(done) {
        //uncomment below and update the code to test getVideoSubtitles
        //instance.getVideoSubtitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
