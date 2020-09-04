/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.3
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
    instance = new KinowJavascriptSdk.PlaylistsApi();
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

  describe('PlaylistsApi', function() {
    describe('createPlaylistBookmark', function() {
      it('should call createPlaylistBookmark successfully', function(done) {
        //uncomment below and update the code to test createPlaylistBookmark
        //instance.createPlaylistBookmark(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePlaylistBookmark', function() {
      it('should call deletePlaylistBookmark successfully', function(done) {
        //uncomment below and update the code to test deletePlaylistBookmark
        //instance.deletePlaylistBookmark(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerPlaylists', function() {
      it('should call getCustomerPlaylists successfully', function(done) {
        //uncomment below and update the code to test getCustomerPlaylists
        //instance.getCustomerPlaylists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlaylist', function() {
      it('should call getPlaylist successfully', function(done) {
        //uncomment below and update the code to test getPlaylist
        //instance.getPlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePlaylistBookmark', function() {
      it('should call updatePlaylistBookmark successfully', function(done) {
        //uncomment below and update the code to test updatePlaylistBookmark
        //instance.updatePlaylistBookmark(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
