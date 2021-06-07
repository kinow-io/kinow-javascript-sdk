/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.41
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
    define(['ApiClient', 'model/Device', 'model/ProductAttributeCreateRequest1', 'model/DeviceList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Device'), require('../model/ProductAttributeCreateRequest1'), require('../model/DeviceList'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DevicesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Device, root.KinowJavascriptSdk.ProductAttributeCreateRequest1, root.KinowJavascriptSdk.DeviceList);
  }
}(this, function(ApiClient, Device, ProductAttributeCreateRequest1, DeviceList) {
  'use strict';

  /**
   * Devices service.
   * @module api/DevicesApi
   * @version 1.4.41
   */

  /**
   * Constructs a new DevicesApi. 
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new devices
     * @param {module:model/ProductAttributeCreateRequest1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Device} and HTTP response
     */
    this.createDevicesWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDevices");
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
      var returnType = Device;

      return this.apiClient.callApi(
        '/devices', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new devices
     * @param {module:model/ProductAttributeCreateRequest1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Device}
     */
    this.createDevices = function(body) {
      return this.createDevicesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete Device
     * @param {Integer} deviceId Device ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeviceWithHttpInfo = function(deviceId) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling deleteDevice");
      }


      var pathParams = {
        'device_id': deviceId
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
        '/devices/{device_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Device
     * @param {Integer} deviceId Device ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDevice = function(deviceId) {
      return this.deleteDeviceWithHttpInfo(deviceId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer devices list
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceList} and HTTP response
     */
    this.getCustomerDevicesWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerDevices");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = DeviceList;

      return this.apiClient.callApi(
        '/devices/{customer_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer devices list
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceList}
     */
    this.getCustomerDevices = function(customerId, opts) {
      return this.getCustomerDevicesWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
