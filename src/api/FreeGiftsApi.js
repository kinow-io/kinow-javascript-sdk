/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.39
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
    define(['ApiClient', 'model/FreeGift1', 'model/FreeGift', 'model/GiftToken', 'model/Gifts', 'model/Gift1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FreeGift1'), require('../model/FreeGift'), require('../model/GiftToken'), require('../model/Gifts'), require('../model/Gift1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.FreeGiftsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.FreeGift1, root.KinowJavascriptSdk.FreeGift, root.KinowJavascriptSdk.GiftToken, root.KinowJavascriptSdk.Gifts, root.KinowJavascriptSdk.Gift1);
  }
}(this, function(ApiClient, FreeGift1, FreeGift, GiftToken, Gifts, Gift1) {
  'use strict';

  /**
   * FreeGifts service.
   * @module api/FreeGiftsApi
   * @version 1.4.39
   */

  /**
   * Constructs a new FreeGiftsApi. 
   * @alias module:api/FreeGiftsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Consume free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Free Gift token to check (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.consumeFreeGiftWithHttpInfo = function(freeGiftId, customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling consumeFreeGift");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling consumeFreeGift");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
      };
      var queryParams = {
        'customer_id': customerId,
        'token': opts['token'],
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
        '/free-gifts/{free_gift_id}/consume', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Consume free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Free Gift token to check (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.consumeFreeGift = function(freeGiftId, customerId, opts) {
      return this.consumeFreeGiftWithHttpInfo(freeGiftId, customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create free Gift
     * @param {module:model/FreeGift1} body Free Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FreeGift} and HTTP response
     */
    this.createFreeGiftWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFreeGift");
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
      var returnType = FreeGift;

      return this.apiClient.callApi(
        '/free-gifts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create free Gift
     * @param {module:model/FreeGift1} body Free Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FreeGift}
     */
    this.createFreeGift = function(body) {
      return this.createFreeGiftWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteFreeGiftWithHttpInfo = function(freeGiftId) {
      var postBody = null;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling deleteFreeGift");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
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
        '/free-gifts/{free_gift_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFreeGift = function(freeGiftId) {
      return this.deleteFreeGiftWithHttpInfo(freeGiftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FreeGift} and HTTP response
     */
    this.getFreeGiftWithHttpInfo = function(freeGiftId) {
      var postBody = null;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling getFreeGift");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
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
      var returnType = FreeGift;

      return this.apiClient.callApi(
        '/free-gifts/{free_gift_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FreeGift}
     */
    this.getFreeGift = function(freeGiftId) {
      return this.getFreeGiftWithHttpInfo(freeGiftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get free Gift token
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftToken} and HTTP response
     */
    this.getFreeGiftTokenWithHttpInfo = function(freeGiftId) {
      var postBody = null;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling getFreeGiftToken");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
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
      var returnType = GiftToken;

      return this.apiClient.callApi(
        '/free-gifts/{free_gift_id}/token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get free Gift token
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftToken}
     */
    this.getFreeGiftToken = function(freeGiftId) {
      return this.getFreeGiftTokenWithHttpInfo(freeGiftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get free Gifts
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.unusedOnly Only unused Gifts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gifts} and HTTP response
     */
    this.getFreeGiftsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'unused_only': opts['unusedOnly'],
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
      var returnType = Gifts;

      return this.apiClient.callApi(
        '/free-gifts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get free Gifts
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.unusedOnly Only unused Gifts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gifts}
     */
    this.getFreeGifts = function(opts) {
      return this.getFreeGiftsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Send free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendFreeGiftWithHttpInfo = function(freeGiftId) {
      var postBody = null;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling sendFreeGift");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
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
        '/free-gifts/{free_gift_id}/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendFreeGift = function(freeGiftId) {
      return this.sendFreeGiftWithHttpInfo(freeGiftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @param {module:model/Gift1} body Free Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FreeGift} and HTTP response
     */
    this.updateFreeGiftWithHttpInfo = function(freeGiftId, body) {
      var postBody = body;

      // verify the required parameter 'freeGiftId' is set
      if (freeGiftId === undefined || freeGiftId === null) {
        throw new Error("Missing the required parameter 'freeGiftId' when calling updateFreeGift");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateFreeGift");
      }


      var pathParams = {
        'free_gift_id': freeGiftId
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
      var returnType = FreeGift;

      return this.apiClient.callApi(
        '/free-gifts/{free_gift_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update free Gift
     * @param {Integer} freeGiftId Free Gift ID to fetch
     * @param {module:model/Gift1} body Free Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FreeGift}
     */
    this.updateFreeGift = function(freeGiftId, body) {
      return this.updateFreeGiftWithHttpInfo(freeGiftId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
