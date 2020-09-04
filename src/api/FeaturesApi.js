/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.3
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
    define(['ApiClient', 'model/Features', 'model/Products1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Features'), require('../model/Products1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.FeaturesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Features, root.KinowJavascriptSdk.Products1);
  }
}(this, function(ApiClient, Features, Products1) {
  'use strict';

  /**
   * Features service.
   * @module api/FeaturesApi
   * @version 1.4.3
   */

  /**
   * Constructs a new FeaturesApi. 
   * @alias module:api/FeaturesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach feature to extract
     * @param {Integer} extractId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachFeaturesToExtractWithHttpInfo = function(extractId, features) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling attachFeaturesToExtract");
      }

      // verify the required parameter 'features' is set
      if (features === undefined || features === null) {
        throw new Error("Missing the required parameter 'features' when calling attachFeaturesToExtract");
      }


      var pathParams = {
        'extract_id': extractId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'features': features
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/features', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach feature to extract
     * @param {Integer} extractId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachFeaturesToExtract = function(extractId, features) {
      return this.attachFeaturesToExtractWithHttpInfo(extractId, features)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach feature to product
     * @param {Integer} productId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]&#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]&#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachFeaturesToProductWithHttpInfo = function(productId, features) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachFeaturesToProduct");
      }

      // verify the required parameter 'features' is set
      if (features === undefined || features === null) {
        throw new Error("Missing the required parameter 'features' when calling attachFeaturesToProduct");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'features': features
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/features', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach feature to product
     * @param {Integer} productId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]&#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]&#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachFeaturesToProduct = function(productId, features) {
      return this.attachFeaturesToProductWithHttpInfo(productId, features)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach feature to video
     * @param {Integer} videoId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachFeaturesToVideoWithHttpInfo = function(videoId, features) {
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling attachFeaturesToVideo");
      }

      // verify the required parameter 'features' is set
      if (features === undefined || features === null) {
        throw new Error("Missing the required parameter 'features' when calling attachFeaturesToVideo");
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
        'features': features
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/videos/{video_id}/features', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach feature to video
     * @param {Integer} videoId 
     * @param {String} features       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachFeaturesToVideo = function(videoId, features) {
      return this.attachFeaturesToVideoWithHttpInfo(videoId, features)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach feature to product
     * @param {Integer} productId 
     * @param {Integer} featureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachFeatureToProductWithHttpInfo = function(productId, featureId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling detachFeatureToProduct");
      }

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling detachFeatureToProduct");
      }


      var pathParams = {
        'product_id': productId,
        'feature_id': featureId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/features/{feature_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach feature to product
     * @param {Integer} productId 
     * @param {Integer} featureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachFeatureToProduct = function(productId, featureId) {
      return this.detachFeatureToProductWithHttpInfo(productId, featureId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get category features
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Features} and HTTP response
     */
    this.getCategoryFeaturesWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryFeatures");
      }


      var pathParams = {
        'category_id': categoryId
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
      var returnType = Features;

      return this.apiClient.callApi(
        '/categories/{category_id}/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get category features
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Features}
     */
    this.getCategoryFeatures = function(categoryId, opts) {
      return this.getCategoryFeaturesWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extract features
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Features} and HTTP response
     */
    this.getExtractFeaturesWithHttpInfo = function(extractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtractFeatures");
      }


      var pathParams = {
        'extract_id': extractId
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
      var returnType = Features;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extract features
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Features}
     */
    this.getExtractFeatures = function(extractId, opts) {
      return this.getExtractFeaturesWithHttpInfo(extractId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get feature value list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products1} and HTTP response
     */
    this.getFeatureValuesWithHttpInfo = function(opts) {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Products1;

      return this.apiClient.callApi(
        '/feature-values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get feature value list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products1}
     */
    this.getFeatureValues = function(opts) {
      return this.getFeatureValuesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get feature list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Features} and HTTP response
     */
    this.getFeaturesWithHttpInfo = function(opts) {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Features;

      return this.apiClient.callApi(
        '/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get feature list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Features}
     */
    this.getFeatures = function(opts) {
      return this.getFeaturesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product features
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Features} and HTTP response
     */
    this.getProductFeaturesWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductFeatures");
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
      var returnType = Features;

      return this.apiClient.callApi(
        '/products/{product_id}/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product features
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Features}
     */
    this.getProductFeatures = function(productId, opts) {
      return this.getProductFeaturesWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video features
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Features} and HTTP response
     */
    this.getVideoFeaturesWithHttpInfo = function(videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoFeatures");
      }


      var pathParams = {
        'video_id': videoId
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
      var returnType = Features;

      return this.apiClient.callApi(
        '/videos/{video_id}/features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video features
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Features}
     */
    this.getVideoFeatures = function(videoId, opts) {
      return this.getVideoFeaturesWithHttpInfo(videoId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
