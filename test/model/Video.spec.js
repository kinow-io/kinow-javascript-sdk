/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.37
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
    instance = new KinowJavascriptSdk.Video();
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

  describe('Video', function() {
    it('should create an instance of Video', function() {
      // uncomment below and update the code to test Video
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be.a(KinowJavascriptSdk.Video);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property idVideoGroup (base name: "id_video_group")', function() {
      // uncomment below and update the code to test the property idVideoGroup
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property idProductImage (base name: "id_product_image")', function() {
      // uncomment below and update the code to test the property idProductImage
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property idLanguage (base name: "id_language")', function() {
      // uncomment below and update the code to test the property idLanguage
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property languageFilter (base name: "language_filter")', function() {
      // uncomment below and update the code to test the property languageFilter
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property idMediaSource (base name: "id_media_source")', function() {
      // uncomment below and update the code to test the property idMediaSource
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property download (base name: "download")', function() {
      // uncomment below and update the code to test the property download
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property canWatch (base name: "can_watch")', function() {
      // uncomment below and update the code to test the property canWatch
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property cover (base name: "cover")', function() {
      // uncomment below and update the code to test the property cover
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property thumbnail (base name: "thumbnail")', function() {
      // uncomment below and update the code to test the property thumbnail
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property geolocEnabled (base name: "geoloc_enabled")', function() {
      // uncomment below and update the code to test the property geolocEnabled
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property behaviorDetectedCountries (base name: "behavior_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorDetectedCountries
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property behaviorNonDetectedCountries (base name: "behavior_non_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorNonDetectedCountries
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property hasFreeAccess (base name: "has_free_access")', function() {
      // uncomment below and update the code to test the property hasFreeAccess
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

    it('should have the property advertisingUrl (base name: "advertising_url")', function() {
      // uncomment below and update the code to test the property advertisingUrl
      //var instance = new KinowJavascriptSdk.Video();
      //expect(instance).to.be();
    });

  });

}));
