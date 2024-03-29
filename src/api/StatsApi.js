/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    define(['ApiClient', 'model/CreateVideoStatSessionResponse', 'model/CreateVideoStatSessionRequest', 'model/CustomerGroupVideoStatsListResponse', 'model/SessionVideoStatListResponse', 'model/VideoIDList2', 'model/SessionVideoStat', 'model/CustomerVideoStatsListResponse', 'model/VideoIDList1', 'model/VideoViewInformations', 'model/BlogPageProductsResponse', 'model/VideoStatListResponse', 'model/VideoStatsVideosWatchingResponse', 'model/View'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateVideoStatSessionResponse'), require('../model/CreateVideoStatSessionRequest'), require('../model/CustomerGroupVideoStatsListResponse'), require('../model/SessionVideoStatListResponse'), require('../model/VideoIDList2'), require('../model/SessionVideoStat'), require('../model/CustomerVideoStatsListResponse'), require('../model/VideoIDList1'), require('../model/VideoViewInformations'), require('../model/BlogPageProductsResponse'), require('../model/VideoStatListResponse'), require('../model/VideoStatsVideosWatchingResponse'), require('../model/View'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.StatsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CreateVideoStatSessionResponse, root.KinowJavascriptSdk.CreateVideoStatSessionRequest, root.KinowJavascriptSdk.CustomerGroupVideoStatsListResponse, root.KinowJavascriptSdk.SessionVideoStatListResponse, root.KinowJavascriptSdk.VideoIDList2, root.KinowJavascriptSdk.SessionVideoStat, root.KinowJavascriptSdk.CustomerVideoStatsListResponse, root.KinowJavascriptSdk.VideoIDList1, root.KinowJavascriptSdk.VideoViewInformations, root.KinowJavascriptSdk.BlogPageProductsResponse, root.KinowJavascriptSdk.VideoStatListResponse, root.KinowJavascriptSdk.VideoStatsVideosWatchingResponse, root.KinowJavascriptSdk.View);
  }
}(this, function(ApiClient, CreateVideoStatSessionResponse, CreateVideoStatSessionRequest, CustomerGroupVideoStatsListResponse, SessionVideoStatListResponse, VideoIDList2, SessionVideoStat, CustomerVideoStatsListResponse, VideoIDList1, VideoViewInformations, BlogPageProductsResponse, VideoStatListResponse, VideoStatsVideosWatchingResponse, View) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 2.0.28
   */

  /**
   * Constructs a new StatsApi. 
   * @alias module:api/StatsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a video stat session for a customer
     * @param {module:model/CreateVideoStatSessionRequest} body Video stat session parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateVideoStatSessionResponse} and HTTP response
     */
    this.createVideoStatSessionWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createVideoStatSession");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = CreateVideoStatSessionResponse;

      return this.apiClient.callApi(
        '/video-stats/sessions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a video stat session for a customer
     * @param {module:model/CreateVideoStatSessionRequest} body Video stat session parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateVideoStatSessionResponse}
     */
    this.createVideoStatSession = function(body) {
      return this.createVideoStatSessionWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video statistics for a given customer group
     * @param {Integer} groupId Customer group ID to fecth
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerGroupVideoStatsListResponse} and HTTP response
     */
    this.getCustomerGroupTotalWatchedWithHttpInfo = function(groupId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCustomerGroupTotalWatched");
      }


      var pathParams = {
      };
      var queryParams = {
        'group_id': groupId,
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
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
      var returnType = CustomerGroupVideoStatsListResponse;

      return this.apiClient.callApi(
        '/video-stats/customer-group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video statistics for a given customer group
     * @param {Integer} groupId Customer group ID to fecth
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerGroupVideoStatsListResponse}
     */
    this.getCustomerGroupTotalWatched = function(groupId, opts) {
      return this.getCustomerGroupTotalWatchedWithHttpInfo(groupId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Customer video sessions statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.groupId Group ID to fetch
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SessionVideoStatListResponse} and HTTP response
     */
    this.getCustomerSessionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'customer_id': opts['customerId'],
        'group_id': opts['groupId'],
        'video_id': opts['videoId'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
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
      var returnType = SessionVideoStatListResponse;

      return this.apiClient.callApi(
        '/video-stats/sessions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Customer video sessions statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.groupId Group ID to fetch
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SessionVideoStatListResponse}
     */
    this.getCustomerSessions = function(opts) {
      return this.getCustomerSessionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Customer sessions statistics for multiple videos
     * @param {Integer} customerId Customer ID to fetch
     * @param {module:model/VideoIDList2} body List of Video IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SessionVideoStat>} and HTTP response
     */
    this.getCustomerSessionsMultipleWithHttpInfo = function(customerId, body) {
      var postBody = body;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerSessionsMultiple");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCustomerSessionsMultiple");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = [SessionVideoStat];

      return this.apiClient.callApi(
        '/video-stats/{customer_id}/sessions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Customer sessions statistics for multiple videos
     * @param {Integer} customerId Customer ID to fetch
     * @param {module:model/VideoIDList2} body List of Video IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SessionVideoStat>}
     */
    this.getCustomerSessionsMultiple = function(customerId, body) {
      return this.getCustomerSessionsMultipleWithHttpInfo(customerId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer video statistics
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerVideoStatsListResponse} and HTTP response
     */
    this.getCustomerVideoStatsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerVideoStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'customer_id': customerId,
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
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
      var returnType = CustomerVideoStatsListResponse;

      return this.apiClient.callApi(
        '/video-stats/customers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer video statistics
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerVideoStatsListResponse}
     */
    this.getCustomerVideoStats = function(customerId, opts) {
      return this.getCustomerVideoStatsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get a list of videos view informations for a customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {module:model/VideoIDList1} body List of Video IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/VideoViewInformations>} and HTTP response
     */
    this.getCustomerVideosViewInformationsWithHttpInfo = function(customerId, body) {
      var postBody = body;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerVideosViewInformations");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCustomerVideosViewInformations");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = [VideoViewInformations];

      return this.apiClient.callApi(
        '/video-stats/views/{customer_id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of videos view informations for a customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {module:model/VideoIDList1} body List of Video IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/VideoViewInformations>}
     */
    this.getCustomerVideosViewInformations = function(customerId, body) {
      return this.getCustomerVideosViewInformationsWithHttpInfo(customerId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get products watched
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.isoCode Filter by ISO Code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageProductsResponse} and HTTP response
     */
    this.getProductsWatchedWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getProductsWatched");
      }


      var pathParams = {
      };
      var queryParams = {
        'customer_id': customerId,
        'page': opts['page'],
        'per_page': opts['perPage'],
        'ip': opts['ip'],
        'iso_code': opts['isoCode'],
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
      var returnType = BlogPageProductsResponse;

      return this.apiClient.callApi(
        '/video-stats/products-watched', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get products watched
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.isoCode Filter by ISO Code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageProductsResponse}
     */
    this.getProductsWatched = function(customerId, opts) {
      return this.getProductsWatchedWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoStatListResponse} and HTTP response
     */
    this.getVideoStatsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'video_id': opts['videoId'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'page': opts['page'],
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
      var returnType = VideoStatListResponse;

      return this.apiClient.callApi(
        '/video-stats/videos', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoStatListResponse}
     */
    this.getVideoStats = function(opts) {
      return this.getVideoStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get videos watching
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.isoCode Filter by ISO Code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoStatsVideosWatchingResponse} and HTTP response
     */
    this.getVideosWatchingWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getVideosWatching");
      }


      var pathParams = {
      };
      var queryParams = {
        'customer_id': customerId,
        'page': opts['page'],
        'per_page': opts['perPage'],
        'ip': opts['ip'],
        'iso_code': opts['isoCode'],
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
      var returnType = VideoStatsVideosWatchingResponse;

      return this.apiClient.callApi(
        '/video-stats/videos-watching', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get videos watching
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.isoCode Filter by ISO Code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoStatsVideosWatchingResponse}
     */
    this.getVideosWatching = function(customerId, opts) {
      return this.getVideosWatchingWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Set a video view informations for a customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {Integer} videoId Video ID to fetch
     * @param {module:model/View} body Boolean view
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setCustomerVideoViewInformationsWithHttpInfo = function(customerId, videoId, body) {
      var postBody = body;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling setCustomerVideoViewInformations");
      }

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling setCustomerVideoViewInformations");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setCustomerVideoViewInformations");
      }


      var pathParams = {
        'customer_id': customerId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/video-stats/views/{customer_id}/{video_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set a video view informations for a customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {Integer} videoId Video ID to fetch
     * @param {module:model/View} body Boolean view
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setCustomerVideoViewInformations = function(customerId, videoId, body) {
      return this.setCustomerVideoViewInformationsWithHttpInfo(customerId, videoId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
