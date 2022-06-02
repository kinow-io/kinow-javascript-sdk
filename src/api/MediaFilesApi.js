/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.10
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
    define(['ApiClient', 'model/MediaFileResponse', 'model/MediaFileListResponse', 'model/CreateMediaFileRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MediaFileResponse'), require('../model/MediaFileListResponse'), require('../model/CreateMediaFileRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.MediaFilesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.MediaFileResponse, root.KinowJavascriptSdk.MediaFileListResponse, root.KinowJavascriptSdk.CreateMediaFileRequest);
  }
}(this, function(ApiClient, MediaFileResponse, MediaFileListResponse, CreateMediaFileRequest) {
  'use strict';

  /**
   * MediaFiles service.
   * @module api/MediaFilesApi
   * @version 2.0.10
   */

  /**
   * Constructs a new MediaFilesApi. 
   * @alias module:api/MediaFilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Media file
     * @param {Integer} mediaFileId MediaFile ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaFileResponse} and HTTP response
     */
    this.getMediaFileWithHttpInfo = function(mediaFileId) {
      var postBody = null;

      // verify the required parameter 'mediaFileId' is set
      if (mediaFileId === undefined || mediaFileId === null) {
        throw new Error("Missing the required parameter 'mediaFileId' when calling getMediaFile");
      }


      var pathParams = {
        'media_file_id': mediaFileId
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
      var returnType = MediaFileResponse;

      return this.apiClient.callApi(
        '/media-files/{media_file_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Media file
     * @param {Integer} mediaFileId MediaFile ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaFileResponse}
     */
    this.getMediaFile = function(mediaFileId) {
      return this.getMediaFileWithHttpInfo(mediaFileId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get media source files
     * @param {Integer} sourceId Media source ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaFileListResponse} and HTTP response
     */
    this.getMediaSourceFilesWithHttpInfo = function(sourceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getMediaSourceFiles");
      }


      var pathParams = {
        'source_id': sourceId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'filters': opts['filters'],
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
      var returnType = MediaFileListResponse;

      return this.apiClient.callApi(
        '/media-sources/{source_id}/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get media source files
     * @param {Integer} sourceId Media source ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaFileListResponse}
     */
    this.getMediaSourceFiles = function(sourceId, opts) {
      return this.getMediaSourceFilesWithHttpInfo(sourceId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Post media file
     * @param {Integer} sourceId Media source ID to fetch
     * @param {module:model/CreateMediaFileRequest} body Create MediaFile object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaFileResponse} and HTTP response
     */
    this.postMediaSourceFilesWithHttpInfo = function(sourceId, body) {
      var postBody = body;

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling postMediaSourceFiles");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postMediaSourceFiles");
      }


      var pathParams = {
        'source_id': sourceId
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
      var returnType = MediaFileResponse;

      return this.apiClient.callApi(
        '/media-sources/{source_id}/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post media file
     * @param {Integer} sourceId Media source ID to fetch
     * @param {module:model/CreateMediaFileRequest} body Create MediaFile object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaFileResponse}
     */
    this.postMediaSourceFiles = function(sourceId, body) {
      return this.postMediaSourceFilesWithHttpInfo(sourceId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
