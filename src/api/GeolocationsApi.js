/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.44
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
    define(['ApiClient', 'model/GeolocSettings', 'model/IPLocation', 'model/PlatformAccessInfo', 'model/Geolocs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeolocSettings'), require('../model/IPLocation'), require('../model/PlatformAccessInfo'), require('../model/Geolocs'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.GeolocationsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.GeolocSettings, root.KinowJavascriptSdk.IPLocation, root.KinowJavascriptSdk.PlatformAccessInfo, root.KinowJavascriptSdk.Geolocs);
  }
}(this, function(ApiClient, GeolocSettings, IPLocation, PlatformAccessInfo, Geolocs) {
  'use strict';

  /**
   * Geolocations service.
   * @module api/GeolocationsApi
   * @version 1.4.44
   */

  /**
   * Constructs a new GeolocationsApi. 
   * @alias module:api/GeolocationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get geolocation settings for an item
     * @param {String} type Item type, available values are: category, subscription, product, video, extract, blogpage, slider, topmenu, homerail
     * @param {Integer} typeId Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeolocSettings} and HTTP response
     */
    this.getGeolocSettingsWithHttpInfo = function(type, typeId) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getGeolocSettings");
      }

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw new Error("Missing the required parameter 'typeId' when calling getGeolocSettings");
      }


      var pathParams = {
      };
      var queryParams = {
        'type': type,
        'type_id': typeId,
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
      var returnType = GeolocSettings;

      return this.apiClient.callApi(
        '/geolocations/settings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get geolocation settings for an item
     * @param {String} type Item type, available values are: category, subscription, product, video, extract, blogpage, slider, topmenu, homerail
     * @param {Integer} typeId Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeolocSettings}
     */
    this.getGeolocSettings = function(type, typeId) {
      return this.getGeolocSettingsWithHttpInfo(type, typeId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get IP location
     * @param {String} ipAddress address ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IPLocation} and HTTP response
     */
    this.getIPLocationWithHttpInfo = function(ipAddress) {
      var postBody = null;

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getIPLocation");
      }


      var pathParams = {
      };
      var queryParams = {
        'ip_address': ipAddress,
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
      var returnType = IPLocation;

      return this.apiClient.callApi(
        '/geolocations/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get IP location
     * @param {String} ipAddress address ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IPLocation}
     */
    this.getIPLocation = function(ipAddress) {
      return this.getIPLocationWithHttpInfo(ipAddress)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PlatformAccessInfo by ip
     * @param {String} ipAddress IP address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PlatformAccessInfo} and HTTP response
     */
    this.getPlatformAccessInfoWithHttpInfo = function(ipAddress) {
      var postBody = null;

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getPlatformAccessInfo");
      }


      var pathParams = {
      };
      var queryParams = {
        'ip_address': ipAddress,
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
      var returnType = PlatformAccessInfo;

      return this.apiClient.callApi(
        '/geolocations/platform-access', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PlatformAccessInfo by ip
     * @param {String} ipAddress IP address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PlatformAccessInfo}
     */
    this.getPlatformAccessInfo = function(ipAddress) {
      return this.getPlatformAccessInfoWithHttpInfo(ipAddress)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product geolocation restrictions
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Geolocs} and HTTP response
     */
    this.getProductGeolocationsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductGeolocations");
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
      var returnType = Geolocs;

      return this.apiClient.callApi(
        '/products/{product_id}/geolocations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product geolocation restrictions
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Geolocs}
     */
    this.getProductGeolocations = function(productId, opts) {
      return this.getProductGeolocationsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Check product access using geolocation
     * @param {Integer} productId Product ID to fetch
     * @param {String} ipAddress address ip
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getProductGeolocationsByIpWithHttpInfo = function(productId, ipAddress, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductGeolocationsByIp");
      }

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getProductGeolocationsByIp");
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
        'ip_address': ipAddress
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/geolocations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check product access using geolocation
     * @param {Integer} productId Product ID to fetch
     * @param {String} ipAddress address ip
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getProductGeolocationsByIp = function(productId, ipAddress, opts) {
      return this.getProductGeolocationsByIpWithHttpInfo(productId, ipAddress, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Check access to a video by geolocation
     * @param {Integer} videoId Video ID to fetch
     * @param {String} ipAddress IP address
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getVideoGeolocationByIpWithHttpInfo = function(videoId, ipAddress, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoGeolocationByIp");
      }

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getVideoGeolocationByIp");
      }


      var pathParams = {
        'video_id': videoId,
        'ip_address': ipAddress
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
      var returnType = null;

      return this.apiClient.callApi(
        '/videos/{video_id}/geolocations/{ip_address}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check access to a video by geolocation
     * @param {Integer} videoId Video ID to fetch
     * @param {String} ipAddress IP address
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getVideoGeolocationByIp = function(videoId, ipAddress, opts) {
      return this.getVideoGeolocationByIpWithHttpInfo(videoId, ipAddress, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Handle geolocation for products by countries
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} enabled Enabled
     * @param {module:model/String} behaviorDetectedCountries Behavior for detected countries
     * @param {module:model/String} behaviorNonDetectedCountries Behavior for non-detected countries
     * @param {Object} opts Optional parameters
     * @param {String} opts.countries IDs of the non-detected countries separated by comma
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setProductGeolocationWithHttpInfo = function(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling setProductGeolocation");
      }

      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw new Error("Missing the required parameter 'enabled' when calling setProductGeolocation");
      }

      // verify the required parameter 'behaviorDetectedCountries' is set
      if (behaviorDetectedCountries === undefined || behaviorDetectedCountries === null) {
        throw new Error("Missing the required parameter 'behaviorDetectedCountries' when calling setProductGeolocation");
      }

      // verify the required parameter 'behaviorNonDetectedCountries' is set
      if (behaviorNonDetectedCountries === undefined || behaviorNonDetectedCountries === null) {
        throw new Error("Missing the required parameter 'behaviorNonDetectedCountries' when calling setProductGeolocation");
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
        'countries': opts['countries'],
        'enabled': enabled,
        'behavior_detected_countries': behaviorDetectedCountries,
        'behavior_non_detected_countries': behaviorNonDetectedCountries
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/geolocations', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Handle geolocation for products by countries
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} enabled Enabled
     * @param {module:model/String} behaviorDetectedCountries Behavior for detected countries
     * @param {module:model/String} behaviorNonDetectedCountries Behavior for non-detected countries
     * @param {Object} opts Optional parameters
     * @param {String} opts.countries IDs of the non-detected countries separated by comma
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setProductGeolocation = function(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts) {
      return this.setProductGeolocationWithHttpInfo(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Handle geolocation for videos by countries
     * @param {Integer} videoId Video ID to fetch
     * @param {Integer} enabled Enabled
     * @param {module:model/String} behaviorDetectedCountries Behavior for detected countries
     * @param {module:model/String} behaviorNonDetectedCountries Behavior for non-detected countries
     * @param {Object} opts Optional parameters
     * @param {String} opts.countries IDs of the non-detected countries separated by comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setVideoGeolocationWithHttpInfo = function(videoId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling setVideoGeolocation");
      }

      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw new Error("Missing the required parameter 'enabled' when calling setVideoGeolocation");
      }

      // verify the required parameter 'behaviorDetectedCountries' is set
      if (behaviorDetectedCountries === undefined || behaviorDetectedCountries === null) {
        throw new Error("Missing the required parameter 'behaviorDetectedCountries' when calling setVideoGeolocation");
      }

      // verify the required parameter 'behaviorNonDetectedCountries' is set
      if (behaviorNonDetectedCountries === undefined || behaviorNonDetectedCountries === null) {
        throw new Error("Missing the required parameter 'behaviorNonDetectedCountries' when calling setVideoGeolocation");
      }


      var pathParams = {
        'video_id': videoId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'countries': opts['countries'],
        'enabled': enabled,
        'behavior_detected_countries': behaviorDetectedCountries,
        'behavior_non_detected_countries': behaviorNonDetectedCountries
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/videos/{video_id}/geolocations', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Handle geolocation for videos by countries
     * @param {Integer} videoId Video ID to fetch
     * @param {Integer} enabled Enabled
     * @param {module:model/String} behaviorDetectedCountries Behavior for detected countries
     * @param {module:model/String} behaviorNonDetectedCountries Behavior for non-detected countries
     * @param {Object} opts Optional parameters
     * @param {String} opts.countries IDs of the non-detected countries separated by comma
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setVideoGeolocation = function(videoId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts) {
      return this.setVideoGeolocationWithHttpInfo(videoId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
