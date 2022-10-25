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
    instance = new KinowJavascriptSdk.ActorsApi();
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

  describe('ActorsApi', function() {
    describe('attachActorToCategory', function() {
      it('should call attachActorToCategory successfully', function(done) {
        //uncomment below and update the code to test attachActorToCategory
        //instance.attachActorToCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachActorToProduct', function() {
      it('should call attachActorToProduct successfully', function(done) {
        //uncomment below and update the code to test attachActorToProduct
        //instance.attachActorToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createActor', function() {
      it('should call createActor successfully', function(done) {
        //uncomment below and update the code to test createActor
        //instance.createActor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteActor', function() {
      it('should call deleteActor successfully', function(done) {
        //uncomment below and update the code to test deleteActor
        //instance.deleteActor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachActorFromCategory', function() {
      it('should call detachActorFromCategory successfully', function(done) {
        //uncomment below and update the code to test detachActorFromCategory
        //instance.detachActorFromCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachActorFromProduct', function() {
      it('should call detachActorFromProduct successfully', function(done) {
        //uncomment below and update the code to test detachActorFromProduct
        //instance.detachActorFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActor', function() {
      it('should call getActor successfully', function(done) {
        //uncomment below and update the code to test getActor
        //instance.getActor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActorCoverImage', function() {
      it('should call getActorCoverImage successfully', function(done) {
        //uncomment below and update the code to test getActorCoverImage
        //instance.getActorCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActorProducts', function() {
      it('should call getActorProducts successfully', function(done) {
        //uncomment below and update the code to test getActorProducts
        //instance.getActorProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActorProductsRole', function() {
      it('should call getActorProductsRole successfully', function(done) {
        //uncomment below and update the code to test getActorProductsRole
        //instance.getActorProductsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActors', function() {
      it('should call getActors successfully', function(done) {
        //uncomment below and update the code to test getActors
        //instance.getActors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryActors', function() {
      it('should call getCategoryActors successfully', function(done) {
        //uncomment below and update the code to test getCategoryActors
        //instance.getCategoryActors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductActors', function() {
      it('should call getProductActors successfully', function(done) {
        //uncomment below and update the code to test getProductActors
        //instance.getProductActors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductActorsRole', function() {
      it('should call getProductActorsRole successfully', function(done) {
        //uncomment below and update the code to test getProductActorsRole
        //instance.getProductActorsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateActor', function() {
      it('should call updateActor successfully', function(done) {
        //uncomment below and update the code to test updateActor
        //instance.updateActor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadActorCover', function() {
      it('should call uploadActorCover successfully', function(done) {
        //uncomment below and update the code to test uploadActorCover
        //instance.uploadActorCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
