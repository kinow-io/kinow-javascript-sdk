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
    define(['ApiClient', 'model/ImageListResponse', 'model/GoogleAnalyticsResponse', 'model/WidgetFooterMenuListResponse', 'model/WidgetHomeRailListResponse', 'model/WidgetHomeRailVideoListResponse', 'model/WidgetHookPhraseListResponse', 'model/WidgetSliderListResponse', 'model/WidgetSliderResponse', 'model/Player', 'model/WidgetTopMenuListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageListResponse'), require('../model/GoogleAnalyticsResponse'), require('../model/WidgetFooterMenuListResponse'), require('../model/WidgetHomeRailListResponse'), require('../model/WidgetHomeRailVideoListResponse'), require('../model/WidgetHookPhraseListResponse'), require('../model/WidgetSliderListResponse'), require('../model/WidgetSliderResponse'), require('../model/Player'), require('../model/WidgetTopMenuListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.WidgetsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ImageListResponse, root.KinowJavascriptSdk.GoogleAnalyticsResponse, root.KinowJavascriptSdk.WidgetFooterMenuListResponse, root.KinowJavascriptSdk.WidgetHomeRailListResponse, root.KinowJavascriptSdk.WidgetHomeRailVideoListResponse, root.KinowJavascriptSdk.WidgetHookPhraseListResponse, root.KinowJavascriptSdk.WidgetSliderListResponse, root.KinowJavascriptSdk.WidgetSliderResponse, root.KinowJavascriptSdk.Player, root.KinowJavascriptSdk.WidgetTopMenuListResponse);
  }
}(this, function(ApiClient, ImageListResponse, GoogleAnalyticsResponse, WidgetFooterMenuListResponse, WidgetHomeRailListResponse, WidgetHomeRailVideoListResponse, WidgetHookPhraseListResponse, WidgetSliderListResponse, WidgetSliderResponse, Player, WidgetTopMenuListResponse) {
  'use strict';

  /**
   * Widgets service.
   * @module api/WidgetsApi
   * @version 2.0.24
   */

  /**
   * Constructs a new WidgetsApi. 
   * @alias module:api/WidgetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get slider images
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageListResponse} and HTTP response
     */
    this.getSliderImageWithHttpInfo = function() {
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
      var returnType = ImageListResponse;

      return this.apiClient.callApi(
        '/widgets/slider/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get slider images
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageListResponse}
     */
    this.getSliderImage = function() {
      return this.getSliderImageWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Google Analytics configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GoogleAnalyticsResponse} and HTTP response
     */
    this.getWidgetAnalyticsWithHttpInfo = function() {
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
      var returnType = GoogleAnalyticsResponse;

      return this.apiClient.callApi(
        '/widgets/analytics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Google Analytics configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoogleAnalyticsResponse}
     */
    this.getWidgetAnalytics = function() {
      return this.getWidgetAnalyticsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get footer menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetFooterMenuListResponse} and HTTP response
     */
    this.getWidgetFooterMenuWithHttpInfo = function(opts) {
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
      var returnType = WidgetFooterMenuListResponse;

      return this.apiClient.callApi(
        '/widgets/footer-menu', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get footer menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetFooterMenuListResponse}
     */
    this.getWidgetFooterMenu = function(opts) {
      return this.getWidgetFooterMenuWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get home rails list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetHomeRailListResponse} and HTTP response
     */
    this.getWidgetHomeRailWithHttpInfo = function(opts) {
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
      var returnType = WidgetHomeRailListResponse;

      return this.apiClient.callApi(
        '/widgets/home-rail', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get home rails list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetHomeRailListResponse}
     */
    this.getWidgetHomeRail = function(opts) {
      return this.getWidgetHomeRailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get home rails list
     * @param {Integer} homerailId Homerail ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetHomeRailVideoListResponse} and HTTP response
     */
    this.getWidgetHomeRailVideoWithHttpInfo = function(homerailId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homerailId' is set
      if (homerailId === undefined || homerailId === null) {
        throw new Error("Missing the required parameter 'homerailId' when calling getWidgetHomeRailVideo");
      }


      var pathParams = {
        'homerail_id': homerailId
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
      var returnType = WidgetHomeRailVideoListResponse;

      return this.apiClient.callApi(
        '/widgets/home-rail/{homerail_id}/videos', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get home rails list
     * @param {Integer} homerailId Homerail ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetHomeRailVideoListResponse}
     */
    this.getWidgetHomeRailVideo = function(homerailId, opts) {
      return this.getWidgetHomeRailVideoWithHttpInfo(homerailId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get hook phrase list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetHookPhraseListResponse} and HTTP response
     */
    this.getWidgetHookPhraseWithHttpInfo = function(opts) {
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
      var returnType = WidgetHookPhraseListResponse;

      return this.apiClient.callApi(
        '/widgets/hook-phrase', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get hook phrase list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetHookPhraseListResponse}
     */
    this.getWidgetHookPhrase = function(opts) {
      return this.getWidgetHookPhraseWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get slider list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetSliderListResponse} and HTTP response
     */
    this.getWidgetSliderWithHttpInfo = function(opts) {
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
      var returnType = WidgetSliderListResponse;

      return this.apiClient.callApi(
        '/widgets/slider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get slider list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetSliderListResponse}
     */
    this.getWidgetSlider = function(opts) {
      return this.getWidgetSliderWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get slider item
     * @param {Integer} sliderId Slider ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetSliderResponse} and HTTP response
     */
    this.getWidgetSliderItemWithHttpInfo = function(sliderId) {
      var postBody = null;

      // verify the required parameter 'sliderId' is set
      if (sliderId === undefined || sliderId === null) {
        throw new Error("Missing the required parameter 'sliderId' when calling getWidgetSliderItem");
      }


      var pathParams = {
        'slider_id': sliderId
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
      var returnType = WidgetSliderResponse;

      return this.apiClient.callApi(
        '/widgets/slider/{slider_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get slider item
     * @param {Integer} sliderId Slider ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetSliderResponse}
     */
    this.getWidgetSliderItem = function(sliderId) {
      return this.getWidgetSliderItemWithHttpInfo(sliderId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video player
     * @param {Integer} sliderId Slider ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.countryId Country ID to use in video analytics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Player} and HTTP response
     */
    this.getWidgetSliderVideoPlayerWithHttpInfo = function(sliderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sliderId' is set
      if (sliderId === undefined || sliderId === null) {
        throw new Error("Missing the required parameter 'sliderId' when calling getWidgetSliderVideoPlayer");
      }


      var pathParams = {
        'slider_id': sliderId
      };
      var queryParams = {
        'customer_id': opts['customerId'],
        'country_id': opts['countryId'],
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
      var returnType = Player;

      return this.apiClient.callApi(
        '/widgets/slider/{slider_id}/player', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video player
     * @param {Integer} sliderId Slider ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {Integer} opts.countryId Country ID to use in video analytics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Player}
     */
    this.getWidgetSliderVideoPlayer = function(sliderId, opts) {
      return this.getWidgetSliderVideoPlayerWithHttpInfo(sliderId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get top menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetTopMenuListResponse} and HTTP response
     */
    this.getWidgetTopMenuWithHttpInfo = function(opts) {
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
      var returnType = WidgetTopMenuListResponse;

      return this.apiClient.callApi(
        '/widgets/top-menu', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get top menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetTopMenuListResponse}
     */
    this.getWidgetTopMenu = function(opts) {
      return this.getWidgetTopMenuWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
