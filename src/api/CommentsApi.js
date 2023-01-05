/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.24
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
    define(['ApiClient', 'model/CreateCommentRequest', 'model/ProductCommentResponse', 'model/CommentResponse', 'model/CommentListResponse1', 'model/CustomerCommentListResponse1', 'model/ProductCommentListResponse1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateCommentRequest'), require('../model/ProductCommentResponse'), require('../model/CommentResponse'), require('../model/CommentListResponse1'), require('../model/CustomerCommentListResponse1'), require('../model/ProductCommentListResponse1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CommentsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CreateCommentRequest, root.KinowJavascriptSdk.ProductCommentResponse, root.KinowJavascriptSdk.CommentResponse, root.KinowJavascriptSdk.CommentListResponse1, root.KinowJavascriptSdk.CustomerCommentListResponse1, root.KinowJavascriptSdk.ProductCommentListResponse1);
  }
}(this, function(ApiClient, CreateCommentRequest, ProductCommentResponse, CommentResponse, CommentListResponse1, CustomerCommentListResponse1, ProductCommentListResponse1) {
  'use strict';

  /**
   * Comments service.
   * @module api/CommentsApi
   * @version 2.0.24
   */

  /**
   * Constructs a new CommentsApi. 
   * @alias module:api/CommentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create product comment
     * @param {Integer} productId Product ID to fetch
     * @param {module:model/CreateCommentRequest} body Create a comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCommentResponse} and HTTP response
     */
    this.createProductCommentWithHttpInfo = function(productId, body) {
      var postBody = body;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling createProductComment");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProductComment");
      }


      var pathParams = {
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
      var returnType = ProductCommentResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/comments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create product comment
     * @param {Integer} productId Product ID to fetch
     * @param {module:model/CreateCommentRequest} body Create a comment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCommentResponse}
     */
    this.createProductComment = function(productId, body) {
      return this.createProductCommentWithHttpInfo(productId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get comment
     * @param {Integer} commentId Comment ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommentResponse} and HTTP response
     */
    this.getCommentWithHttpInfo = function(commentId) {
      var postBody = null;

      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling getComment");
      }


      var pathParams = {
        'comment_id': commentId
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
      var returnType = CommentResponse;

      return this.apiClient.callApi(
        '/comments/{comment_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get comment
     * @param {Integer} commentId Comment ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentResponse}
     */
    this.getComment = function(commentId) {
      return this.getCommentWithHttpInfo(commentId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Comments
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommentListResponse1} and HTTP response
     */
    this.getCommentsWithHttpInfo = function(opts) {
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
      var returnType = CommentListResponse1;

      return this.apiClient.callApi(
        '/comments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Comments
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentListResponse1}
     */
    this.getComments = function(opts) {
      return this.getCommentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer comments
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerCommentListResponse1} and HTTP response
     */
    this.getCustomerCommentsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerComments");
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
      var returnType = CustomerCommentListResponse1;

      return this.apiClient.callApi(
        '/customers/{customer_id}/comments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer comments
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerCommentListResponse1}
     */
    this.getCustomerComments = function(customerId, opts) {
      return this.getCustomerCommentsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product comments
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCommentListResponse1} and HTTP response
     */
    this.getProductCommentsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductComments");
      }


      var pathParams = {
        'product_id': productId
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
      var returnType = ProductCommentListResponse1;

      return this.apiClient.callApi(
        '/products/{product_id}/comments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product comments
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCommentListResponse1}
     */
    this.getProductComments = function(productId, opts) {
      return this.getProductCommentsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
