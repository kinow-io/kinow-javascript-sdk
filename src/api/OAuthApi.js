/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.19
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
    define(['ApiClient', 'model/OAuthToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuthToken'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.OAuthApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.OAuthToken);
  }
}(this, function(ApiClient, OAuthToken) {
  'use strict';

  /**
   * OAuth service.
   * @module api/OAuthApi
   * @version 1.4.19
   */

  /**
   * Constructs a new OAuthApi. 
   * @alias module:api/OAuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get authentication token
     * @param {String} clientId Client Id given by your back office
     * @param {String} clientSecret Client secret given by your back office
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuthToken} and HTTP response
     */
    this.getTokenWithHttpInfo = function(clientId, clientSecret) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getToken");
      }

      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling getToken");
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
        'client_id': clientId,
        'client_secret': clientSecret
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = OAuthToken;

      return this.apiClient.callApi(
        '/get-token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get authentication token
     * @param {String} clientId Client Id given by your back office
     * @param {String} clientSecret Client secret given by your back office
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuthToken}
     */
    this.getToken = function(clientId, clientSecret) {
      return this.getTokenWithHttpInfo(clientId, clientSecret)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
