/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.56
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Playlist', 'model/Playlists', 'model/Products', 'model/PlaylistUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Playlist'), require('../model/Playlists'), require('../model/Products'), require('../model/PlaylistUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PlaylistsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Playlist, root.KinowJavascriptSdk.Playlists, root.KinowJavascriptSdk.Products, root.KinowJavascriptSdk.PlaylistUpdate);
  }
}(this, function(ApiClient, Playlist, Playlists, Products, PlaylistUpdate) {
  'use strict';

  /**
   * Playlists service.
   * @module api/PlaylistsApi
   * @version 1.4.56
   */

  /**
   * Constructs a new PlaylistsApi. 
   * @alias module:api/PlaylistsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach bookmark to playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @param {Integer} productId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachBookmarkToPlaylistWithHttpInfo = function(playlistId, productId) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling attachBookmarkToPlaylist");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachBookmarkToPlaylist");
      }


      var pathParams = {
        'playlist_id': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'product_id': productId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}/bookmarks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach bookmark to playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @param {Integer} productId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachBookmarkToPlaylist = function(playlistId, productId) {
      return this.attachBookmarkToPlaylistWithHttpInfo(playlistId, productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create playlist
     * @param {Integer} customerId 
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Playlist} and HTTP response
     */
    this.createPlaylistWithHttpInfo = function(customerId, name) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling createPlaylist");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling createPlaylist");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'customer_id': customerId,
        'name': name
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Playlist;

      return this.apiClient.callApi(
        '/playlists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create playlist
     * @param {Integer} customerId 
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Playlist}
     */
    this.createPlaylist = function(customerId, name) {
      return this.createPlaylistWithHttpInfo(customerId, name)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete playlist
     * @param {Integer} playlistId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePlaylistWithHttpInfo = function(playlistId) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling deletePlaylist");
      }


      var pathParams = {
        'playlist_id': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete playlist
     * @param {Integer} playlistId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePlaylist = function(playlistId) {
      return this.deletePlaylistWithHttpInfo(playlistId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach bookmark from playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @param {Integer} productId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachBookmarkFromPlaylistWithHttpInfo = function(playlistId, productId) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling detachBookmarkFromPlaylist");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling detachBookmarkFromPlaylist");
      }


      var pathParams = {
        'playlist_id': playlistId,
        'product_id': productId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}/bookmarks/{product_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach bookmark from playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @param {Integer} productId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachBookmarkFromPlaylist = function(playlistId, productId) {
      return this.detachBookmarkFromPlaylistWithHttpInfo(playlistId, productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer playlists
     * @param {Integer} customerId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Playlists} and HTTP response
     */
    this.getCustomerPlaylistsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerPlaylists");
      }


      var pathParams = {
        'customer_id': customerId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Playlists;

      return this.apiClient.callApi(
        '/customers/{customer_id}/playlists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer playlists
     * @param {Integer} customerId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Playlists}
     */
    this.getCustomerPlaylists = function(customerId, opts) {
      return this.getCustomerPlaylistsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Playlist} and HTTP response
     */
    this.getPlaylistWithHttpInfo = function(playlistId) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling getPlaylist");
      }


      var pathParams = {
        'playlist_id': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Playlist;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get playlist
     * @param {Integer} playlistId Playlist ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Playlist}
     */
    this.getPlaylist = function(playlistId) {
      return this.getPlaylistWithHttpInfo(playlistId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get playlist bookmarks
     * @param {Integer} playlistId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products} and HTTP response
     */
    this.getPlaylistBookmarksWithHttpInfo = function(playlistId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling getPlaylistBookmarks");
      }


      var pathParams = {
        'playlist_id': playlistId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Products;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}/bookmarks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get playlist bookmarks
     * @param {Integer} playlistId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products}
     */
    this.getPlaylistBookmarks = function(playlistId, opts) {
      return this.getPlaylistBookmarksWithHttpInfo(playlistId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get playlists
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Playlists} and HTTP response
     */
    this.getPlaylistsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Playlists;

      return this.apiClient.callApi(
        '/playlists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get playlists
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Playlists}
     */
    this.getPlaylists = function(opts) {
      return this.getPlaylistsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update playlist
     * @param {Integer} playlistId Playlist ID to update
     * @param {module:model/PlaylistUpdate} body Playlist settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Playlist} and HTTP response
     */
    this.updatePlaylistWithHttpInfo = function(playlistId, body) {
      var postBody = body;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling updatePlaylist");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePlaylist");
      }


      var pathParams = {
        'playlist_id': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Playlist;

      return this.apiClient.callApi(
        '/playlists/{playlist_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update playlist
     * @param {Integer} playlistId Playlist ID to update
     * @param {module:model/PlaylistUpdate} body Playlist settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Playlist}
     */
    this.updatePlaylist = function(playlistId, body) {
      return this.updatePlaylistWithHttpInfo(playlistId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
