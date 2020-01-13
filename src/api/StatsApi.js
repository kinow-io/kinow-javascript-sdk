/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.43
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
    define(['ApiClient', 'model/CustomerGroupVideoStats1', 'model/SessionVideoStats', 'model/CustomerVideoStats1', 'model/VideoStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerGroupVideoStats1'), require('../model/SessionVideoStats'), require('../model/CustomerVideoStats1'), require('../model/VideoStats'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.StatsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CustomerGroupVideoStats1, root.KinowJavascriptSdk.SessionVideoStats, root.KinowJavascriptSdk.CustomerVideoStats1, root.KinowJavascriptSdk.VideoStats);
  }
}(this, function(ApiClient, CustomerGroupVideoStats1, SessionVideoStats, CustomerVideoStats1, VideoStats) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 1.3.43
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
     * Get video statistics for a given customer group
     * @param {Integer} groupId Customer group ID to fecth
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerGroupVideoStats1} and HTTP response
     */
    this.getCustomerGroupTotalWatchedWithHttpInfo = function(groupId, videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCustomerGroupTotalWatched");
      }

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getCustomerGroupTotalWatched");
      }


      var pathParams = {
      };
      var queryParams = {
        'group_id': groupId,
        'video_id': videoId,
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CustomerGroupVideoStats1;

      return this.apiClient.callApi(
        '/video-stats/customer-group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video statistics for a given customer group
     * @param {Integer} groupId Customer group ID to fecth
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerGroupVideoStats1}
     */
    this.getCustomerGroupTotalWatched = function(groupId, videoId, opts) {
      return this.getCustomerGroupTotalWatchedWithHttpInfo(groupId, videoId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer video sessions statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SessionVideoStats} and HTTP response
     */
    this.getCustomerSessionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'customer_id': opts['customerId'],
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = SessionVideoStats;

      return this.apiClient.callApi(
        '/video-stats/sessions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer video sessions statistics
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.videoId Video ID to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SessionVideoStats}
     */
    this.getCustomerSessions = function(opts) {
      return this.getCustomerSessionsWithHttpInfo(opts)
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerVideoStats1} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CustomerVideoStats1;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerVideoStats1}
     */
    this.getCustomerVideoStats = function(customerId, opts) {
      return this.getCustomerVideoStatsWithHttpInfo(customerId, opts)
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoStats} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = VideoStats;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoStats}
     */
    this.getVideoStats = function(opts) {
      return this.getVideoStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
