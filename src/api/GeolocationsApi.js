/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.32
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
    define(['ApiClient', 'model/IPLocation', 'model/Geolocs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IPLocation'), require('../model/Geolocs'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.GeolocationsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.IPLocation, root.KinowJavascriptSdk.Geolocs);
  }
}(this, function(ApiClient, IPLocation, Geolocs) {
  'use strict';

  /**
   * Geolocations service.
   * @module api/GeolocationsApi
   * @version 1.3.32
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
     * Check access to platform by ip
     * @param {String} ipAddress address ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.geolocationsWithHttpInfo = function(ipAddress) {
      var postBody = null;

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling geolocations");
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
        'ip_address': ipAddress
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/geolocations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check access to platform by ip
     * @param {String} ipAddress address ip
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.geolocations = function(ipAddress) {
      return this.geolocationsWithHttpInfo(ipAddress)
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

      var authNames = [];
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

      var authNames = [];
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

      var authNames = [];
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
     * Check access to a product by geolocation
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

      var authNames = [];
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
     * Check access to a product by geolocation
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

      var authNames = [];
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

      var authNames = [];
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
