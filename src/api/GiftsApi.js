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
    define(['ApiClient', 'model/GiftResponse', 'model/CreateGiftRequest', 'model/GiftTokenResponse', 'model/GiftListResponse', 'model/UpdateGiftRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GiftResponse'), require('../model/CreateGiftRequest'), require('../model/GiftTokenResponse'), require('../model/GiftListResponse'), require('../model/UpdateGiftRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.GiftsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.GiftResponse, root.KinowJavascriptSdk.CreateGiftRequest, root.KinowJavascriptSdk.GiftTokenResponse, root.KinowJavascriptSdk.GiftListResponse, root.KinowJavascriptSdk.UpdateGiftRequest);
  }
}(this, function(ApiClient, GiftResponse, CreateGiftRequest, GiftTokenResponse, GiftListResponse, UpdateGiftRequest) {
  'use strict';

  /**
   * Gifts service.
   * @module api/GiftsApi
   * @version 2.0.5
   */

  /**
   * Constructs a new GiftsApi. 
   * @alias module:api/GiftsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Consume Gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Gift token to check (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.consumeGiftWithHttpInfo = function(giftId, customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling consumeGift");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling consumeGift");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}/consume', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Consume Gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Gift token to check (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.consumeGift = function(giftId, customerId, opts) {
      return this.consumeGiftWithHttpInfo(giftId, customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create Gift
     * @param {module:model/CreateGiftRequest} body Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftResponse} and HTTP response
     */
    this.createGiftWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGift");
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
      var returnType = GiftResponse;

      return this.apiClient.callApi(
        '/gifts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Gift
     * @param {module:model/CreateGiftRequest} body Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftResponse}
     */
    this.createGift = function(body) {
      return this.createGiftWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling deleteGift");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteGift = function(giftId) {
      return this.deleteGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete Gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteGiftsInCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling deleteGiftsInCart");
      }


      var pathParams = {
        'cart_id': cartId
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
        '/carts/{cart_id}/gift/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteGiftsInCart = function(cartId) {
      return this.deleteGiftsInCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftResponse} and HTTP response
     */
    this.getGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling getGift");
      }


      var pathParams = {
        'gift_id': giftId
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
      var returnType = GiftResponse;

      return this.apiClient.callApi(
        '/gifts/{gift_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftResponse}
     */
    this.getGift = function(giftId) {
      return this.getGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Gift in Cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftResponse} and HTTP response
     */
    this.getGiftInCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getGiftInCart");
      }


      var pathParams = {
        'cart_id': cartId
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
      var returnType = GiftResponse;

      return this.apiClient.callApi(
        '/carts/{cart_id}/gift', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Gift in Cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftResponse}
     */
    this.getGiftInCart = function(cartId) {
      return this.getGiftInCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Gift token
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftTokenResponse} and HTTP response
     */
    this.getGiftTokenWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling getGiftToken");
      }


      var pathParams = {
        'gift_id': giftId
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
      var returnType = GiftTokenResponse;

      return this.apiClient.callApi(
        '/gifts/{gift_id}/token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Gift token
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftTokenResponse}
     */
    this.getGiftToken = function(giftId) {
      return this.getGiftTokenWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Gifts
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.unusedOnly Filter only unused gifts
     * @param {Boolean} opts.paidOnly Filter only gifts linked to an order which is paid by the user
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftListResponse} and HTTP response
     */
    this.getGiftsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'unused_only': opts['unusedOnly'],
        'paid_only': opts['paidOnly'],
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
      var returnType = GiftListResponse;

      return this.apiClient.callApi(
        '/gifts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Gifts
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.unusedOnly Filter only unused gifts
     * @param {Boolean} opts.paidOnly Filter only gifts linked to an order which is paid by the user
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftListResponse}
     */
    this.getGifts = function(opts) {
      return this.getGiftsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftListResponse} and HTTP response
     */
    this.getGiftsInCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getGiftsInCart");
      }


      var pathParams = {
        'cart_id': cartId
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
      var returnType = GiftListResponse;

      return this.apiClient.callApi(
        '/carts/{cart_id}/gifts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftListResponse}
     */
    this.getGiftsInCart = function(cartId) {
      return this.getGiftsInCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Send Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling sendGift");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send Gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendGift = function(giftId) {
      return this.sendGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update Gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {module:model/UpdateGiftRequest} body Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GiftResponse} and HTTP response
     */
    this.updateGiftWithHttpInfo = function(giftId, body) {
      var postBody = body;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling updateGift");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGift");
      }


      var pathParams = {
        'gift_id': giftId
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
      var returnType = GiftResponse;

      return this.apiClient.callApi(
        '/gifts/{gift_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update Gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {module:model/UpdateGiftRequest} body Gift settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GiftResponse}
     */
    this.updateGift = function(giftId, body) {
      return this.updateGiftWithHttpInfo(giftId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
