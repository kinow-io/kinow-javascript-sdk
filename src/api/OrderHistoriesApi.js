/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.57
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
    define(['ApiClient', 'model/OrderHistories'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderHistories'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.OrderHistoriesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.OrderHistories);
  }
}(this, function(ApiClient, OrderHistories) {
  'use strict';

  /**
   * OrderHistories service.
   * @module api/OrderHistoriesApi
   * @version 1.4.57
   */

  /**
   * Constructs a new OrderHistoriesApi. 
   * @alias module:api/OrderHistoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get order histories
     * @param {Integer} orderId Order ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderHistories} and HTTP response
     */
    this.getOrderHistoriesWithHttpInfo = function(orderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderHistories");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = OrderHistories;

      return this.apiClient.callApi(
        '/orders/{order_id}/histories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order histories
     * @param {Integer} orderId Order ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderHistories}
     */
    this.getOrderHistories = function(orderId, opts) {
      return this.getOrderHistoriesWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
