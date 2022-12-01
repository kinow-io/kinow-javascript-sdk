/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.22
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
    define(['ApiClient', 'model/SubtitleResponse', 'model/CreateExtractSubtitleRequest', 'model/CreateVideoSubtitleRequest', 'model/SubtitleListResponse', 'model/ExtractSubtitlesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SubtitleResponse'), require('../model/CreateExtractSubtitleRequest'), require('../model/CreateVideoSubtitleRequest'), require('../model/SubtitleListResponse'), require('../model/ExtractSubtitlesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SubtitlesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.SubtitleResponse, root.KinowJavascriptSdk.CreateExtractSubtitleRequest, root.KinowJavascriptSdk.CreateVideoSubtitleRequest, root.KinowJavascriptSdk.SubtitleListResponse, root.KinowJavascriptSdk.ExtractSubtitlesResponse);
  }
}(this, function(ApiClient, SubtitleResponse, CreateExtractSubtitleRequest, CreateVideoSubtitleRequest, SubtitleListResponse, ExtractSubtitlesResponse) {
  'use strict';

  /**
   * Subtitles service.
   * @module api/SubtitlesApi
   * @version 2.0.22
   */

  /**
   * Constructs a new SubtitlesApi. 
   * @alias module:api/SubtitlesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new Extract Subtitle
     * @param {Integer} extractId Extract ID to attach the created Subtitle
     * @param {module:model/CreateExtractSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubtitleResponse} and HTTP response
     */
    this.createExtractSubtitleWithHttpInfo = function(extractId, body) {
      var postBody = body;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling createExtractSubtitle");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createExtractSubtitle");
      }


      var pathParams = {
        'extract_id': extractId
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
      var returnType = SubtitleResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/subtitle', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new Extract Subtitle
     * @param {Integer} extractId Extract ID to attach the created Subtitle
     * @param {module:model/CreateExtractSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubtitleResponse}
     */
    this.createExtractSubtitle = function(extractId, body) {
      return this.createExtractSubtitleWithHttpInfo(extractId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new Video Subtitle
     * @param {Integer} videoId Video ID to attach the created Subtitle
     * @param {module:model/CreateVideoSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubtitleResponse} and HTTP response
     */
    this.createVideoSubtitleWithHttpInfo = function(videoId, body) {
      var postBody = body;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling createVideoSubtitle");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createVideoSubtitle");
      }


      var pathParams = {
        'video_id': videoId
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
      var returnType = SubtitleResponse;

      return this.apiClient.callApi(
        '/videos/{video_id}/subtitle', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new Video Subtitle
     * @param {Integer} videoId Video ID to attach the created Subtitle
     * @param {module:model/CreateVideoSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubtitleResponse}
     */
    this.createVideoSubtitle = function(videoId, body) {
      return this.createVideoSubtitleWithHttpInfo(videoId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubtitleListResponse} and HTTP response
     */
    this.getCategoryVideoSubtitlesWithHttpInfo = function(videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getCategoryVideoSubtitles");
      }


      var pathParams = {
        'video_id': videoId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = SubtitleListResponse;

      return this.apiClient.callApi(
        '/categories/videos/{video_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubtitleListResponse}
     */
    this.getCategoryVideoSubtitles = function(videoId, opts) {
      return this.getCategoryVideoSubtitlesWithHttpInfo(videoId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get subtitles of an extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractSubtitlesResponse} and HTTP response
     */
    this.getExtractSubtitlesWithHttpInfo = function(extractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtractSubtitles");
      }


      var pathParams = {
        'extract_id': extractId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = ExtractSubtitlesResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subtitles of an extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractSubtitlesResponse}
     */
    this.getExtractSubtitles = function(extractId, opts) {
      return this.getExtractSubtitlesWithHttpInfo(extractId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Subtitles list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubtitleListResponse} and HTTP response
     */
    this.getSubtitlesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = SubtitleListResponse;

      return this.apiClient.callApi(
        '/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subtitles list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubtitleListResponse}
     */
    this.getSubtitles = function(opts) {
      return this.getSubtitlesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractSubtitlesResponse} and HTTP response
     */
    this.getVideoSubtitlesWithHttpInfo = function(videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoSubtitles");
      }


      var pathParams = {
        'video_id': videoId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = ExtractSubtitlesResponse;

      return this.apiClient.callApi(
        '/videos/{video_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractSubtitlesResponse}
     */
    this.getVideoSubtitles = function(videoId, opts) {
      return this.getVideoSubtitlesWithHttpInfo(videoId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
