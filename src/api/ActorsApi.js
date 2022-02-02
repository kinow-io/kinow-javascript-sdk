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
    define(['ApiClient', 'model/CreateActorRequest', 'model/ActorResponse', 'model/ImageResponse', 'model/ActorProductListResponse', 'model/ActorProductRoleListResponse', 'model/ActorListResponse', 'model/CategoryActorsListResponse', 'model/ActorRoleListResponse', 'model/UpdateActorRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateActorRequest'), require('../model/ActorResponse'), require('../model/ImageResponse'), require('../model/ActorProductListResponse'), require('../model/ActorProductRoleListResponse'), require('../model/ActorListResponse'), require('../model/CategoryActorsListResponse'), require('../model/ActorRoleListResponse'), require('../model/UpdateActorRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ActorsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CreateActorRequest, root.KinowJavascriptSdk.ActorResponse, root.KinowJavascriptSdk.ImageResponse, root.KinowJavascriptSdk.ActorProductListResponse, root.KinowJavascriptSdk.ActorProductRoleListResponse, root.KinowJavascriptSdk.ActorListResponse, root.KinowJavascriptSdk.CategoryActorsListResponse, root.KinowJavascriptSdk.ActorRoleListResponse, root.KinowJavascriptSdk.UpdateActorRequest);
  }
}(this, function(ApiClient, CreateActorRequest, ActorResponse, ImageResponse, ActorProductListResponse, ActorProductRoleListResponse, ActorListResponse, CategoryActorsListResponse, ActorRoleListResponse, UpdateActorRequest) {
  'use strict';

  /**
   * Actors service.
   * @module api/ActorsApi
   * @version 2.0.5
   */

  /**
   * Constructs a new ActorsApi. 
   * @alias module:api/ActorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach actor to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} actorId Actor ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachActorToCategoryWithHttpInfo = function(categoryId, actorId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling attachActorToCategory");
      }

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling attachActorToCategory");
      }


      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'actor_id': actorId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/categories/{category_id}/actors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach actor to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} actorId Actor ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachActorToCategory = function(categoryId, actorId) {
      return this.attachActorToCategoryWithHttpInfo(categoryId, actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach actor to product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} actorId Actor ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachActorToProductWithHttpInfo = function(productId, actorId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachActorToProduct");
      }

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling attachActorToProduct");
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
        'actor_id': actorId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/actors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach actor to product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} actorId Actor ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachActorToProduct = function(productId, actorId) {
      return this.attachActorToProductWithHttpInfo(productId, actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new actor
     * @param {module:model/CreateActorRequest} body Create an actor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorResponse} and HTTP response
     */
    this.createActorWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createActor");
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
      var returnType = ActorResponse;

      return this.apiClient.callApi(
        '/actors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new actor
     * @param {module:model/CreateActorRequest} body Create an actor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorResponse}
     */
    this.createActor = function(body) {
      return this.createActorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete actor
     * @param {Integer} actorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteActorWithHttpInfo = function(actorId) {
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling deleteActor");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete actor
     * @param {Integer} actorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteActor = function(actorId) {
      return this.deleteActorWithHttpInfo(actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach actor from category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} actorId Actor ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachActorFromCategoryWithHttpInfo = function(categoryId, actorId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling detachActorFromCategory");
      }

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling detachActorFromCategory");
      }


      var pathParams = {
        'category_id': categoryId,
        'actor_id': actorId
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
        '/categories/{category_id}/actors/{actor_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach actor from category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} actorId Actor ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachActorFromCategory = function(categoryId, actorId) {
      return this.detachActorFromCategoryWithHttpInfo(categoryId, actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorResponse} and HTTP response
     */
    this.getActorWithHttpInfo = function(actorId) {
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActor");
      }


      var pathParams = {
        'actor_id': actorId
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
      var returnType = ActorResponse;

      return this.apiClient.callApi(
        '/actors/{actor_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorResponse}
     */
    this.getActor = function(actorId) {
      return this.getActorWithHttpInfo(actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cover image of an actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getActorCoverImageWithHttpInfo = function(actorId) {
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActorCoverImage");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of an actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getActorCoverImage = function(actorId) {
      return this.getActorCoverImageWithHttpInfo(actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actor products
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorProductListResponse} and HTTP response
     */
    this.getActorProductsWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActorProducts");
      }


      var pathParams = {
        'actor_id': actorId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'ip': opts['ip'],
        'features': opts['features'],
        'filters': opts['filters'],
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
      var returnType = ActorProductListResponse;

      return this.apiClient.callApi(
        '/actors/{actor_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actor products
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorProductListResponse}
     */
    this.getActorProducts = function(actorId, opts) {
      return this.getActorProductsWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Products linked to Actor with their role
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorProductRoleListResponse} and HTTP response
     */
    this.getActorProductsRoleWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActorProductsRole");
      }


      var pathParams = {
        'actor_id': actorId
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
      var returnType = ActorProductRoleListResponse;

      return this.apiClient.callApi(
        '/actors/{actor_id}/products-role', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Products linked to Actor with their role
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorProductRoleListResponse}
     */
    this.getActorProductsRole = function(actorId, opts) {
      return this.getActorProductsRoleWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorListResponse} and HTTP response
     */
    this.getActorsWithHttpInfo = function(opts) {
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
      var returnType = ActorListResponse;

      return this.apiClient.callApi(
        '/actors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorListResponse}
     */
    this.getActors = function(opts) {
      return this.getActorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actors attached to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategoryActorsListResponse} and HTTP response
     */
    this.getCategoryActorsWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryActors");
      }


      var pathParams = {
        'category_id': categoryId
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
      var returnType = CategoryActorsListResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/actors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actors attached to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategoryActorsListResponse}
     */
    this.getCategoryActors = function(categoryId, opts) {
      return this.getCategoryActorsWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actors attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorListResponse} and HTTP response
     */
    this.getProductActorsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductActors");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = ActorListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/actors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actors attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorListResponse}
     */
    this.getProductActors = function(productId, opts) {
      return this.getProductActorsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Actors attached to Product with their role
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActorRoleListResponse} and HTTP response
     */
    this.getProductActorsRoleWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductActorsRole");
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
      var returnType = ActorRoleListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/actors-role', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Actors attached to Product with their role
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActorRoleListResponse}
     */
    this.getProductActorsRole = function(productId, opts) {
      return this.getProductActorsRoleWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update actor
     * @param {Integer} actorId 
     * @param {module:model/UpdateActorRequest} body Actor settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateActorWithHttpInfo = function(actorId, body) {
      var postBody = body;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling updateActor");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateActor");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update actor
     * @param {Integer} actorId 
     * @param {module:model/UpdateActorRequest} body Actor settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateActor = function(actorId, body) {
      return this.updateActorWithHttpInfo(actorId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload actor cover
     * @param {Number} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadActorCoverWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling uploadActorCover");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload actor cover
     * @param {Number} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadActorCover = function(actorId, opts) {
      return this.uploadActorCoverWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
