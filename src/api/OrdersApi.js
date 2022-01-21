/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient', 'model/OrderListResponse', 'model/OrderResponse', 'model/OrderHistoryListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderListResponse'), require('../model/OrderResponse'), require('../model/OrderHistoryListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.OrdersApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.OrderListResponse, root.KinowJavascriptSdk.OrderResponse, root.KinowJavascriptSdk.OrderHistoryListResponse);
  }
}(this, function(ApiClient, OrderListResponse, OrderResponse, OrderHistoryListResponse) {
  'use strict';

  /**
   * Orders service.
   * @module api/OrdersApi
   * @version 2.0.2
   */

  /**
   * Constructs a new OrdersApi. 
   * @alias module:api/OrdersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get customer orders
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderListResponse} and HTTP response
     */
    this.getCustomerOrdersWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerOrders");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = OrderListResponse;

      return this.apiClient.callApi(
        '/customers/{customer_id}/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer orders
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderListResponse}
     */
    this.getCustomerOrders = function(customerId, opts) {
      return this.getCustomerOrdersWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get order
     * @param {Integer} orderId Order ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderResponse} and HTTP response
     */
    this.getOrderWithHttpInfo = function(orderId) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrder");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = OrderResponse;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order
     * @param {Integer} orderId Order ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderResponse}
     */
    this.getOrder = function(orderId) {
      return this.getOrderWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get order histories
     * @param {Integer} orderId Order ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderHistoryListResponse} and HTTP response
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
      var returnType = OrderHistoryListResponse;

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
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderHistoryListResponse}
     */
    this.getOrderHistories = function(orderId, opts) {
      return this.getOrderHistoriesWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get order invoice
     * @param {Integer} orderId Order ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.toBlob Get PDF content in blob (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getOrderInvoiceWithHttpInfo = function(orderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderInvoice");
      }


      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'to_blob': opts['toBlob'],
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/orders/{order_id}/invoice', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order invoice
     * @param {Integer} orderId Order ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.toBlob Get PDF content in blob (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrderInvoice = function(orderId, opts) {
      return this.getOrderInvoiceWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get order list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderListResponse} and HTTP response
     */
    this.getOrdersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = OrderListResponse;

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderListResponse}
     */
    this.getOrders = function(opts) {
      return this.getOrdersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
