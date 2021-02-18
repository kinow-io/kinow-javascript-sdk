/**
 * Kinow API
 * Client API for Kinow Rest API
 *
 * OpenAPI spec version: 1.4.32
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
    describe('attachBookmarkToPlaylist', function() {
      it('should call attachBookmarkToPlaylist successfully', function(done) {
        //uncomment below and update the code to test attachBookmarkToPlaylist
        //instance.attachBookmarkToPlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPlaylist', function() {
      it('should call createPlaylist successfully', function(done) {
        //uncomment below and update the code to test createPlaylist
        //instance.createPlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePlaylist', function() {
      it('should call deletePlaylist successfully', function(done) {
        //uncomment below and update the code to test deletePlaylist
        //instance.deletePlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachBookmarkFromPlaylist', function() {
      it('should call detachBookmarkFromPlaylist successfully', function(done) {
        //uncomment below and update the code to test detachBookmarkFromPlaylist
        //instance.detachBookmarkFromPlaylist(function(error) {
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
    describe('getPlaylistBookmarks', function() {
      it('should call getPlaylistBookmarks successfully', function(done) {
        //uncomment below and update the code to test getPlaylistBookmarks
        //instance.getPlaylistBookmarks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlaylists', function() {
      it('should call getPlaylists successfully', function(done) {
        //uncomment below and update the code to test getPlaylists
        //instance.getPlaylists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePlaylist', function() {
      it('should call updatePlaylist successfully', function(done) {
        //uncomment below and update the code to test updatePlaylist
        //instance.updatePlaylist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
