/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.37
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
    define(['ApiClient', 'model/BlogPage', 'model/BlogPageLists'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BlogPage'), require('../model/BlogPageLists'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.BlogPagesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.BlogPage, root.KinowJavascriptSdk.BlogPageLists);
  }
}(this, function(ApiClient, BlogPage, BlogPageLists) {
  'use strict';

  /**
   * BlogPages service.
   * @module api/BlogPagesApi
   * @version 1.3.37
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
     * Get blog page
     * @param {Integer} blogPageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPage} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = BlogPage;

      return this.apiClient.callApi(
        '/blog-pages/{blog_page_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get blog page
     * @param {Integer} blogPageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPage}
     */
    this.getBlogPage = function(blogPageId) {
      return this.getBlogPageWithHttpInfo(blogPageId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get blog pages
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters   &#x60;&#x60;&#x60;  name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt  _______________    {  \&quot;name\&quot;: {  \&quot;value\&quot;: \&quot;string\&quot;,  \&quot;operator\&quot;: \&quot;contains\&quot;  },  \&quot;date_add\&quot;: {  \&quot;value\&quot;: \&quot;string\&quot;,  \&quot;operator\&quot;: \&quot;lt\&quot;  }  } &#x60;&#x60;&#x60;  Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlogPageLists} and HTTP response
     */
    this.getBlogPagesWithHttpInfo = function(opts) {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = BlogPageLists;

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
     * @param {String} opts.filters   &#x60;&#x60;&#x60;  name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt  _______________    {  \&quot;name\&quot;: {  \&quot;value\&quot;: \&quot;string\&quot;,  \&quot;operator\&quot;: \&quot;contains\&quot;  },  \&quot;date_add\&quot;: {  \&quot;value\&quot;: \&quot;string\&quot;,  \&quot;operator\&quot;: \&quot;lt\&quot;  }  } &#x60;&#x60;&#x60;  Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlogPageLists}
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
