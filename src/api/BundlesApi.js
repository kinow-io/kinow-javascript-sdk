/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.5
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
    define(['ApiClient', 'model/BlogPageProductsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BlogPageProductsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.BundlesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.BlogPageProductsResponse);
  }
}(this, function(ApiClient, BlogPageProductsResponse) {
  'use strict';

  /**
   * Bundles service.
   * @module api/BundlesApi
   * @version 2.0.5
   */

  /**
   * Constructs a new BundlesApi. 
   * @alias module:api/BundlesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add product to bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Integer} productId Product ID to add
     * @param {Integer} position Product position
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addProductToBundleWithHttpInfo = function(bundleId, productId, position) {
      var postBody = null;

      // verify the required parameter 'bundleId' is set
      if (bundleId === undefined || bundleId === null) {
        throw new Error("Missing the required parameter 'bundleId' when calling addProductToBundle");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling addProductToBundle");
      }

      // verify the required parameter 'position' is set
      if (position === undefined || position === null) {
        throw new Error("Missing the required parameter 'position' when calling addProductToBundle");
      }


      var pathParams = {
        'bundle_id': bundleId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'product_id': productId,
        'position': position
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/bundles/{bundle_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add product to bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Integer} productId Product ID to add
     * @param {Integer} position Product position
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addProductToBundle = function(bundleId, productId, position) {
      return this.addProductToBundleWithHttpInfo(bundleId, productId, position)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get products from bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageProductsResponse} and HTTP response
     */
    this.getBundleProductsWithHttpInfo = function(bundleId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bundleId' is set
      if (bundleId === undefined || bundleId === null) {
        throw new Error("Missing the required parameter 'bundleId' when calling getBundleProducts");
      }


      var pathParams = {
        'bundle_id': bundleId
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
      var returnType = BlogPageProductsResponse;

      return this.apiClient.callApi(
        '/bundles/{bundle_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get products from bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageProductsResponse}
     */
    this.getBundleProducts = function(bundleId, opts) {
      return this.getBundleProductsWithHttpInfo(bundleId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Remove product from bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Integer} productId Product ID to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeProductFromBundleWithHttpInfo = function(bundleId, productId) {
      var postBody = null;

      // verify the required parameter 'bundleId' is set
      if (bundleId === undefined || bundleId === null) {
        throw new Error("Missing the required parameter 'bundleId' when calling removeProductFromBundle");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling removeProductFromBundle");
      }


      var pathParams = {
        'bundle_id': bundleId,
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
        '/bundles/{bundle_id}/{product_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove product from bundle
     * @param {Integer} bundleId Bundle ID to fetch
     * @param {Integer} productId Product ID to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeProductFromBundle = function(bundleId, productId) {
      return this.removeProductFromBundleWithHttpInfo(bundleId, productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
