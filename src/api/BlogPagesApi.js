/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.17
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
    define(['ApiClient', 'model/BlogPageResponse', 'model/BlogPageProductsResponse', 'model/BlogPageListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BlogPageResponse'), require('../model/BlogPageProductsResponse'), require('../model/BlogPageListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.BlogPagesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.BlogPageResponse, root.KinowJavascriptSdk.BlogPageProductsResponse, root.KinowJavascriptSdk.BlogPageListResponse);
  }
}(this, function(ApiClient, BlogPageResponse, BlogPageProductsResponse, BlogPageListResponse) {
  'use strict';

  /**
   * BlogPages service.
   * @module api/BlogPagesApi
   * @version 2.0.17
   */

  /**
   * Constructs a new BlogPagesApi. 
   * @alias module:api/BlogPagesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach product to blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Integer} productId Product ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachProductToBlogPageWithHttpInfo = function(blogPageId, productId) {
      var postBody = null;

      // verify the required parameter 'blogPageId' is set
      if (blogPageId === undefined || blogPageId === null) {
        throw new Error("Missing the required parameter 'blogPageId' when calling attachProductToBlogPage");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachProductToBlogPage");
      }


      var pathParams = {
        'blog_page_id': blogPageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'product_id': productId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/blog-pages/{blog_page_id}/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach product to blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Integer} productId Product ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachProductToBlogPage = function(blogPageId, productId) {
      return this.attachProductToBlogPageWithHttpInfo(blogPageId, productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach product from blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Integer} productId Product ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachProductFromBlogPageWithHttpInfo = function(blogPageId, productId) {
      var postBody = null;

      // verify the required parameter 'blogPageId' is set
      if (blogPageId === undefined || blogPageId === null) {
        throw new Error("Missing the required parameter 'blogPageId' when calling detachProductFromBlogPage");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling detachProductFromBlogPage");
      }


      var pathParams = {
        'blog_page_id': blogPageId,
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
        '/blog-pages/{blog_page_id}/products/{product_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach product from blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Integer} productId Product ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachProductFromBlogPage = function(blogPageId, productId) {
      return this.detachProductFromBlogPageWithHttpInfo(blogPageId, productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageResponse} and HTTP response
     */
    this.getBlogPageWithHttpInfo = function(blogPageId) {
      var postBody = null;

      // verify the required parameter 'blogPageId' is set
      if (blogPageId === undefined || blogPageId === null) {
        throw new Error("Missing the required parameter 'blogPageId' when calling getBlogPage");
      }


      var pathParams = {
        'blog_page_id': blogPageId
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
      var returnType = BlogPageResponse;

      return this.apiClient.callApi(
        '/blog-pages/{blog_page_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageResponse}
     */
    this.getBlogPage = function(blogPageId) {
      return this.getBlogPageWithHttpInfo(blogPageId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get products linked to a blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageProductsResponse} and HTTP response
     */
    this.getBlogPageProductsWithHttpInfo = function(blogPageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'blogPageId' is set
      if (blogPageId === undefined || blogPageId === null) {
        throw new Error("Missing the required parameter 'blogPageId' when calling getBlogPageProducts");
      }


      var pathParams = {
        'blog_page_id': blogPageId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
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
      var returnType = BlogPageProductsResponse;

      return this.apiClient.callApi(
        '/blog-pages/{blog_page_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get products linked to a blog page
     * @param {Integer} blogPageId Page ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageProductsResponse}
     */
    this.getBlogPageProducts = function(blogPageId, opts) {
      return this.getBlogPageProductsWithHttpInfo(blogPageId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get blog pages
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageListResponse} and HTTP response
     */
    this.getBlogPagesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
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
      var returnType = BlogPageListResponse;

      return this.apiClient.callApi(
        '/blog-pages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get blog pages
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageListResponse}
     */
    this.getBlogPages = function(opts) {
      return this.getBlogPagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
