/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.74
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
    define(['ApiClient', 'model/CustomerVideoStats', 'model/VideoStats', 'model/SessionVideoStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerVideoStats'), require('../model/VideoStats'), require('../model/SessionVideoStats'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.StatsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CustomerVideoStats, root.KinowJavascriptSdk.VideoStats, root.KinowJavascriptSdk.SessionVideoStats);
  }
}(this, function(ApiClient, CustomerVideoStats, VideoStats, SessionVideoStats) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 1.0.74
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
     * Get video stats by customer
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerVideoStats} and HTTP response
     */
    this.getVideoStatsByCustomersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'customer_id': opts['customerId'],
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
      var returnType = CustomerVideoStats;

      return this.apiClient.callApi(
        '/video-stats/customers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video stats by customer
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerVideoStats}
     */
    this.getVideoStatsByCustomers = function(opts) {
      return this.getVideoStatsByCustomersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get video stats by video
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.videoId ID of the customer to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoStats} and HTTP response
     */
    this.getVideoStatsByVideoWithHttpInfo = function(opts) {
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
     * Get video stats by video
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.videoId ID of the customer to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoStats}
     */
    this.getVideoStatsByVideo = function(opts) {
      return this.getVideoStatsByVideoWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get video stats sessions
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {Integer} opts.videoId ID of the video to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SessionVideoStats} and HTTP response
     */
    this.getVideoStatsSessionsWithHttpInfo = function(opts) {
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
     * Get video stats sessions
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {Integer} opts.videoId ID of the video to fetch
     * @param {String} opts.dateFrom Search entries from this date
     * @param {String} opts.dateTo Search entries to this date
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SessionVideoStats}
     */
    this.getVideoStatsSessions = function(opts) {
      return this.getVideoStatsSessionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
