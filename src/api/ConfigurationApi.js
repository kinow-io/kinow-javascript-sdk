/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.24
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
    define(['ApiClient', 'model/ConfigurationListResponse', 'model/AnalyticListResponse', 'model/ConfigurationResponse', 'model/LogoSettings', 'model/SocialSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfigurationListResponse'), require('../model/AnalyticListResponse'), require('../model/ConfigurationResponse'), require('../model/LogoSettings'), require('../model/SocialSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ConfigurationApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ConfigurationListResponse, root.KinowJavascriptSdk.AnalyticListResponse, root.KinowJavascriptSdk.ConfigurationResponse, root.KinowJavascriptSdk.LogoSettings, root.KinowJavascriptSdk.SocialSettings);
  }
}(this, function(ApiClient, ConfigurationListResponse, AnalyticListResponse, ConfigurationResponse, LogoSettings, SocialSettings) {
  'use strict';

  /**
   * Configuration service.
   * @module api/ConfigurationApi
   * @version 2.0.24
   */

  /**
   * Constructs a new ConfigurationApi. 
   * @alias module:api/ConfigurationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all configurations
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationListResponse} and HTTP response
     */
    this.getConfigurationWithHttpInfo = function(opts) {
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
      var returnType = ConfigurationListResponse;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all configurations
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationListResponse}
     */
    this.getConfiguration = function(opts) {
      return this.getConfigurationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get analytics configuration
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AnalyticListResponse} and HTTP response
     */
    this.getConfigurationAnalyticsWithHttpInfo = function(opts) {
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
      var returnType = AnalyticListResponse;

      return this.apiClient.callApi(
        '/configuration/analytics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get analytics configuration
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AnalyticListResponse}
     */
    this.getConfigurationAnalytics = function(opts) {
      return this.getConfigurationAnalyticsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get configuration by name
     * @param {String} configurationName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationResponse} and HTTP response
     */
    this.getConfigurationByNameWithHttpInfo = function(configurationName) {
      var postBody = null;

      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getConfigurationByName");
      }


      var pathParams = {
        'configuration_name': configurationName
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
      var returnType = ConfigurationResponse;

      return this.apiClient.callApi(
        '/configuration/{configuration_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get configuration by name
     * @param {String} configurationName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationResponse}
     */
    this.getConfigurationByName = function(configurationName) {
      return this.getConfigurationByNameWithHttpInfo(configurationName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get logo settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogoSettings} and HTTP response
     */
    this.getConfigurationLogoWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = LogoSettings;

      return this.apiClient.callApi(
        '/configuration/logo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get logo settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogoSettings}
     */
    this.getConfigurationLogo = function() {
      return this.getConfigurationLogoWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get social networks settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SocialSettings} and HTTP response
     */
    this.getConfigurationSocialWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = SocialSettings;

      return this.apiClient.callApi(
        '/configuration/social', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get social networks settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SocialSettings}
     */
    this.getConfigurationSocial = function() {
      return this.getConfigurationSocialWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
