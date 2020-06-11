/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.73
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
    instance = new KinowJavascriptSdk.DirectorsApi();
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

  describe('DirectorsApi', function() {
    describe('attachProductToDirector', function() {
      it('should call attachProductToDirector successfully', function(done) {
        //uncomment below and update the code to test attachProductToDirector
        //instance.attachProductToDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDirector', function() {
      it('should call createDirector successfully', function(done) {
        //uncomment below and update the code to test createDirector
        //instance.createDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDirector', function() {
      it('should call deleteDirector successfully', function(done) {
        //uncomment below and update the code to test deleteDirector
        //instance.deleteDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirector', function() {
      it('should call getDirector successfully', function(done) {
        //uncomment below and update the code to test getDirector
        //instance.getDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectorCoverImage', function() {
      it('should call getDirectorCoverImage successfully', function(done) {
        //uncomment below and update the code to test getDirectorCoverImage
        //instance.getDirectorCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectorProducts', function() {
      it('should call getDirectorProducts successfully', function(done) {
        //uncomment below and update the code to test getDirectorProducts
        //instance.getDirectorProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectorProductsRole', function() {
      it('should call getDirectorProductsRole successfully', function(done) {
        //uncomment below and update the code to test getDirectorProductsRole
        //instance.getDirectorProductsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDirectors', function() {
      it('should call getDirectors successfully', function(done) {
        //uncomment below and update the code to test getDirectors
        //instance.getDirectors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductDirectors', function() {
      it('should call getProductDirectors successfully', function(done) {
        //uncomment below and update the code to test getProductDirectors
        //instance.getProductDirectors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductDirectorsRole', function() {
      it('should call getProductDirectorsRole successfully', function(done) {
        //uncomment below and update the code to test getProductDirectorsRole
        //instance.getProductDirectorsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDirector', function() {
      it('should call updateDirector successfully', function(done) {
        //uncomment below and update the code to test updateDirector
        //instance.updateDirector(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadDirectorCover', function() {
      it('should call uploadDirectorCover successfully', function(done) {
        //uncomment below and update the code to test uploadDirectorCover
        //instance.uploadDirectorCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
