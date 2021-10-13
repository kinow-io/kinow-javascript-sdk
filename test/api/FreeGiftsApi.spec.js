/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.54
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
    instance = new KinowJavascriptSdk.FreeGiftsApi();
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

  describe('FreeGiftsApi', function() {
    describe('consumeFreeGift', function() {
      it('should call consumeFreeGift successfully', function(done) {
        //uncomment below and update the code to test consumeFreeGift
        //instance.consumeFreeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFreeGift', function() {
      it('should call createFreeGift successfully', function(done) {
        //uncomment below and update the code to test createFreeGift
        //instance.createFreeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFreeGift', function() {
      it('should call deleteFreeGift successfully', function(done) {
        //uncomment below and update the code to test deleteFreeGift
        //instance.deleteFreeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFreeGift', function() {
      it('should call getFreeGift successfully', function(done) {
        //uncomment below and update the code to test getFreeGift
        //instance.getFreeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFreeGiftToken', function() {
      it('should call getFreeGiftToken successfully', function(done) {
        //uncomment below and update the code to test getFreeGiftToken
        //instance.getFreeGiftToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFreeGifts', function() {
      it('should call getFreeGifts successfully', function(done) {
        //uncomment below and update the code to test getFreeGifts
        //instance.getFreeGifts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendFreeGift', function() {
      it('should call sendFreeGift successfully', function(done) {
        //uncomment below and update the code to test sendFreeGift
        //instance.sendFreeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
