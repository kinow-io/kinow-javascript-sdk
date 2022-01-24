/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.3
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
    define(['ApiClient', 'model/CreateAttributeRequest', 'model/ProductAttribute', 'model/ProductAttributeListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateAttributeRequest'), require('../model/ProductAttribute'), require('../model/ProductAttributeListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.AttributesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CreateAttributeRequest, root.KinowJavascriptSdk.ProductAttribute, root.KinowJavascriptSdk.ProductAttributeListResponse);
  }
}(this, function(ApiClient, CreateAttributeRequest, ProductAttribute, ProductAttributeListResponse) {
  'use strict';

  /**
   * Attributes service.
   * @module api/AttributesApi
   * @version 2.0.3
   */

  /**
   * Constructs a new AttributesApi. 
   * @alias module:api/AttributesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new product attribute
     * @param {module:model/CreateAttributeRequest} body Attribute settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAttribute} and HTTP response
     */
    this.createProductAttributeWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProductAttribute");
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
      var returnType = ProductAttribute;

      return this.apiClient.callApi(
        '/attributes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new product attribute
     * @param {module:model/CreateAttributeRequest} body Attribute settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAttribute}
     */
    this.createProductAttribute = function(body) {
      return this.createProductAttributeWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete Attribute
     * @param {Integer} attributeId Attribute ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAttributeWithHttpInfo = function(attributeId) {
      var postBody = null;

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw new Error("Missing the required parameter 'attributeId' when calling deleteAttribute");
      }


      var pathParams = {
        'attribute_id': attributeId
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
        '/attributes/{attribute_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Attribute
     * @param {Integer} attributeId Attribute ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAttribute = function(attributeId) {
      return this.deleteAttributeWithHttpInfo(attributeId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Attribute
     * @param {Integer} attributeId Attribute ID to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAttribute} and HTTP response
     */
    this.getAttributeWithHttpInfo = function(attributeId) {
      var postBody = null;

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw new Error("Missing the required parameter 'attributeId' when calling getAttribute");
      }


      var pathParams = {
        'attribute_id': attributeId
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
      var returnType = ProductAttribute;

      return this.apiClient.callApi(
        '/attributes/{attribute_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Attribute
     * @param {Integer} attributeId Attribute ID to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAttribute}
     */
    this.getAttribute = function(attributeId) {
      return this.getAttributeWithHttpInfo(attributeId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Product attributes. Mandatory to add TVOD Product in cart.
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAttributeListResponse} and HTTP response
     */
    this.getProductAttributesWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductAttributes");
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
      var returnType = ProductAttributeListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/attributes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Product attributes. Mandatory to add TVOD Product in cart.
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAttributeListResponse}
     */
    this.getProductAttributes = function(productId, opts) {
      return this.getProductAttributesWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
