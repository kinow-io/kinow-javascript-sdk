/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.0
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
    define(['ApiClient', 'model/SubscriptionListResponse', 'model/SubscriptionResponse', 'model/CategoryListResponse', 'model/ImageResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SubscriptionListResponse'), require('../model/SubscriptionResponse'), require('../model/CategoryListResponse'), require('../model/ImageResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SubscriptionsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.SubscriptionListResponse, root.KinowJavascriptSdk.SubscriptionResponse, root.KinowJavascriptSdk.CategoryListResponse, root.KinowJavascriptSdk.ImageResponse);
  }
}(this, function(ApiClient, SubscriptionListResponse, SubscriptionResponse, CategoryListResponse, ImageResponse) {
  'use strict';

  /**
   * Subscriptions service.
   * @module api/SubscriptionsApi
   * @version 2.0.0
   */

  /**
   * Constructs a new SubscriptionsApi. 
   * @alias module:api/SubscriptionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach categories to subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @param {String} categoryIds List of category IDs to attach, separated with comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachCategoriesToSubscriptionWithHttpInfo = function(subscriptionId, categoryIds) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling attachCategoriesToSubscription");
      }

      // verify the required parameter 'categoryIds' is set
      if (categoryIds === undefined || categoryIds === null) {
        throw new Error("Missing the required parameter 'categoryIds' when calling attachCategoriesToSubscription");
      }


      var pathParams = {
        'subscription_id': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'category_ids': categoryIds
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/categories', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach categories to subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @param {String} categoryIds List of category IDs to attach, separated with comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachCategoriesToSubscription = function(subscriptionId, categoryIds) {
      return this.attachCategoriesToSubscriptionWithHttpInfo(subscriptionId, categoryIds)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach category from subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @param {Integer} categoryId Category ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachCategoryFromSubscriptionWithHttpInfo = function(subscriptionId, categoryId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling detachCategoryFromSubscription");
      }

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling detachCategoryFromSubscription");
      }


      var pathParams = {
        'subscription_id': subscriptionId,
        'category_id': categoryId
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
        '/subscriptions/{subscription_id}/categories/{category_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach category from subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @param {Integer} categoryId Category ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachCategoryFromSubscription = function(subscriptionId, categoryId) {
      return this.detachCategoryFromSubscriptionWithHttpInfo(subscriptionId, categoryId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get disabled subscriptions list
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionListResponse} and HTTP response
     */
    this.getDisabledSubscriptionsWithHttpInfo = function(videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getDisabledSubscriptions");
      }


      var pathParams = {
        'video_id': videoId
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
      var returnType = SubscriptionListResponse;

      return this.apiClient.callApi(
        '/videos/{video_id}/disabled-subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get disabled subscriptions list
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionListResponse}
     */
    this.getDisabledSubscriptions = function(videoId, opts) {
      return this.getDisabledSubscriptionsWithHttpInfo(videoId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Subscription linked to a Product
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionResponse} and HTTP response
     */
    this.getProductSubscriptionWithHttpInfo = function(productId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductSubscription");
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
      var returnType = SubscriptionResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/subscription', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subscription linked to a Product
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionResponse}
     */
    this.getProductSubscription = function(productId) {
      return this.getProductSubscriptionWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Subscription
     * @param {Integer} subscriptionId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionResponse} and HTTP response
     */
    this.getSubscriptionWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscription");
      }


      var pathParams = {
        'subscription_id': subscriptionId
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
      var returnType = SubscriptionResponse;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subscription
     * @param {Integer} subscriptionId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionResponse}
     */
    this.getSubscription = function(subscriptionId) {
      return this.getSubscriptionWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get categories list
     * @param {Integer} subscriptionId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategoryListResponse} and HTTP response
     */
    this.getSubscriptionCategoriesWithHttpInfo = function(subscriptionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionCategories");
      }


      var pathParams = {
        'subscription_id': subscriptionId
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
      var returnType = CategoryListResponse;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/categories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get categories list
     * @param {Integer} subscriptionId 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategoryListResponse}
     */
    this.getSubscriptionCategories = function(subscriptionId, opts) {
      return this.getSubscriptionCategoriesWithHttpInfo(subscriptionId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cover image of a subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getSubscriptionCoverImageWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionCoverImage");
      }


      var pathParams = {
        'subscription_id': subscriptionId
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
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getSubscriptionCoverImage = function(subscriptionId) {
      return this.getSubscriptionCoverImageWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Subscriptions list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionListResponse} and HTTP response
     */
    this.getSubscriptionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = SubscriptionListResponse;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subscriptions list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionListResponse}
     */
    this.getSubscriptions = function(opts) {
      return this.getSubscriptionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Subscription ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadSubscriptionCoverWithHttpInfo = function(subscriptionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling uploadSubscriptionCover");
      }


      var pathParams = {
        'subscription_id': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Subscription ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadSubscriptionCover = function(subscriptionId, opts) {
      return this.uploadSubscriptionCoverWithHttpInfo(subscriptionId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
