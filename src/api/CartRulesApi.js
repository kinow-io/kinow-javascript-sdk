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
    define(['ApiClient', 'model/CreateCartRuleRequest', 'model/CartRuleResponse', 'model/CartRuleListResponse', 'model/UpdateCartRuleRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateCartRuleRequest'), require('../model/CartRuleResponse'), require('../model/CartRuleListResponse'), require('../model/UpdateCartRuleRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartRulesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CreateCartRuleRequest, root.KinowJavascriptSdk.CartRuleResponse, root.KinowJavascriptSdk.CartRuleListResponse, root.KinowJavascriptSdk.UpdateCartRuleRequest);
  }
}(this, function(ApiClient, CreateCartRuleRequest, CartRuleResponse, CartRuleListResponse, UpdateCartRuleRequest) {
  'use strict';

  /**
   * CartRules service.
   * @module api/CartRulesApi
   * @version 2.0.2
   */

  /**
   * Constructs a new CartRulesApi. 
   * @alias module:api/CartRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach cart rule to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} code Code of the cart rule to attach
     * @param {Object} opts Optional parameters
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachCartRuleToCartWithHttpInfo = function(cartId, code, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling attachCartRuleToCart");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling attachCartRuleToCart");
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
        'code': code,
        'ip': opts['ip']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/carts/{cart_id}/cart-rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach cart rule to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} code Code of the cart rule to attach
     * @param {Object} opts Optional parameters
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachCartRuleToCart = function(cartId, code, opts) {
      return this.attachCartRuleToCartWithHttpInfo(cartId, code, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new cart rule
     * @param {module:model/CreateCartRuleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createCartRuleWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCartRule");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/cart-rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new cart rule
     * @param {module:model/CreateCartRuleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createCartRule = function(body) {
      return this.createCartRuleWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete cart rule
     * @param {Integer} cartRuleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCartRuleWithHttpInfo = function(cartRuleId) {
      var postBody = null;

      // verify the required parameter 'cartRuleId' is set
      if (cartRuleId === undefined || cartRuleId === null) {
        throw new Error("Missing the required parameter 'cartRuleId' when calling deleteCartRule");
      }


      var pathParams = {
        'cart_rule_id': cartRuleId
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
        '/cart-rules/{cart_rule_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete cart rule
     * @param {Integer} cartRuleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCartRule = function(cartRuleId) {
      return this.deleteCartRuleWithHttpInfo(cartRuleId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach Cart rule from Cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} cartRuleId Cart rule ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachCartRuleFromCartWithHttpInfo = function(cartId, cartRuleId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling detachCartRuleFromCart");
      }

      // verify the required parameter 'cartRuleId' is set
      if (cartRuleId === undefined || cartRuleId === null) {
        throw new Error("Missing the required parameter 'cartRuleId' when calling detachCartRuleFromCart");
      }


      var pathParams = {
        'cart_id': cartId,
        'cart_rule_id': cartRuleId
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
        '/carts/{cart_id}/cart-rules/{cart_rule_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach Cart rule from Cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} cartRuleId Cart rule ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachCartRuleFromCart = function(cartId, cartRuleId) {
      return this.detachCartRuleFromCartWithHttpInfo(cartId, cartRuleId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cart rule by id
     * @param {Integer} cartRuleId Cart rule ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CartRuleResponse} and HTTP response
     */
    this.getCartRuleWithHttpInfo = function(cartRuleId) {
      var postBody = null;

      // verify the required parameter 'cartRuleId' is set
      if (cartRuleId === undefined || cartRuleId === null) {
        throw new Error("Missing the required parameter 'cartRuleId' when calling getCartRule");
      }


      var pathParams = {
        'cart_rule_id': cartRuleId
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
      var returnType = CartRuleResponse;

      return this.apiClient.callApi(
        '/cart-rules/{cart_rule_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cart rule by id
     * @param {Integer} cartRuleId Cart rule ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CartRuleResponse}
     */
    this.getCartRule = function(cartRuleId) {
      return this.getCartRuleWithHttpInfo(cartRuleId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cart rules list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CartRuleListResponse} and HTTP response
     */
    this.getCartRulesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = CartRuleListResponse;

      return this.apiClient.callApi(
        '/cart-rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cart rules list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CartRuleListResponse}
     */
    this.getCartRules = function(opts) {
      return this.getCartRulesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update cart rule
     * @param {Integer} cartRuleId 
     * @param {module:model/UpdateCartRuleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCartRuleWithHttpInfo = function(cartRuleId, body) {
      var postBody = body;

      // verify the required parameter 'cartRuleId' is set
      if (cartRuleId === undefined || cartRuleId === null) {
        throw new Error("Missing the required parameter 'cartRuleId' when calling updateCartRule");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCartRule");
      }


      var pathParams = {
        'cart_rule_id': cartRuleId
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
        '/cart-rules/{cart_rule_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update cart rule
     * @param {Integer} cartRuleId 
     * @param {module:model/UpdateCartRuleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateCartRule = function(cartRuleId, body) {
      return this.updateCartRuleWithHttpInfo(cartRuleId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
