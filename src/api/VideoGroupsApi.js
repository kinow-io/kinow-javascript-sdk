/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.30
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
    define(['ApiClient', 'model/VideoGroup', 'model/VideoGroup1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VideoGroup'), require('../model/VideoGroup1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.VideoGroupsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.VideoGroup, root.KinowJavascriptSdk.VideoGroup1);
  }
}(this, function(ApiClient, VideoGroup, VideoGroup1) {
  'use strict';

  /**
   * VideoGroups service.
   * @module api/VideoGroupsApi
   * @version 1.4.30
   */

  /**
   * Constructs a new VideoGroupsApi. 
   * @alias module:api/VideoGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get video group
     * @param {Integer} videoGroupId Video group ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoGroup} and HTTP response
     */
    this.getVideoGroupWithHttpInfo = function(videoGroupId) {
      var postBody = null;

      // verify the required parameter 'videoGroupId' is set
      if (videoGroupId === undefined || videoGroupId === null) {
        throw new Error("Missing the required parameter 'videoGroupId' when calling getVideoGroup");
      }


      var pathParams = {
        'video_group_id': videoGroupId
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
      var returnType = VideoGroup;

      return this.apiClient.callApi(
        '/video-groups/{video_group_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video group
     * @param {Integer} videoGroupId Video group ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoGroup}
     */
    this.getVideoGroup = function(videoGroupId) {
      return this.getVideoGroupWithHttpInfo(videoGroupId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video group list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters      &#x60;&#x60;&#x60;     email[value]&#x3D;string&amp;email[operator]&#x3D;strict&amp;firstname[value]&#x3D;string&amp;firstname[operator]&#x3D;contains     _______________      {     \&quot;email\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;firstname\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoGroup1} and HTTP response
     */
    this.getVideoGroupsWithHttpInfo = function(opts) {
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
      var returnType = VideoGroup1;

      return this.apiClient.callApi(
        '/video-groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video group list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters      &#x60;&#x60;&#x60;     email[value]&#x3D;string&amp;email[operator]&#x3D;strict&amp;firstname[value]&#x3D;string&amp;firstname[operator]&#x3D;contains     _______________      {     \&quot;email\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;firstname\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoGroup1}
     */
    this.getVideoGroups = function(opts) {
      return this.getVideoGroupsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Video Groups attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {String} opts.filters      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoGroup1} and HTTP response
     */
    this.getVideoGroupsFromProductWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getVideoGroupsFromProduct");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'filters': opts['filters'],
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = VideoGroup1;

      return this.apiClient.callApi(
        '/products/{product_id}/video-groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Video Groups attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {String} opts.filters      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoGroup1}
     */
    this.getVideoGroupsFromProduct = function(productId, opts) {
      return this.getVideoGroupsFromProductWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
