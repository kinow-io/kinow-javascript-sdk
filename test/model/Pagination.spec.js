/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.5
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
    instance = new KinowJavascriptSdk.Pagination();
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

  describe('Pagination', function() {
    it('should create an instance of Pagination', function() {
      // uncomment below and update the code to test Pagination
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be.a(KinowJavascriptSdk.Pagination);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      // uncomment below and update the code to test the property nextPageUrl
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      // uncomment below and update the code to test the property prevPageUrl
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new KinowJavascriptSdk.Pagination();
      //expect(instance).to.be();
    });

  });

}));
