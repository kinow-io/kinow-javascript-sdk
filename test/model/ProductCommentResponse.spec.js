/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.19
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
    instance = new KinowJavascriptSdk.ProductCommentResponse();
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

  describe('ProductCommentResponse', function() {
    it('should create an instance of ProductCommentResponse', function() {
      // uncomment below and update the code to test ProductCommentResponse
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be.a(KinowJavascriptSdk.ProductCommentResponse);
    });

    it('should have the property idComment (base name: "id_comment")', function() {
      // uncomment below and update the code to test the property idComment
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.ProductCommentResponse();
      //expect(instance).to.be();
    });

  });

}));
