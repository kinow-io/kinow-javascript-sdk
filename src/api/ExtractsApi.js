/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    define(['ApiClient', 'model/ExtractResponse', 'model/CreateExtractRequest', 'model/SubtitleResponse', 'model/CreateExtractSubtitleRequest', 'model/Features', 'model/PlayerConfiguration', 'model/ExtractSubtitlesResponse', 'model/ExtractListResponse', 'model/ExtractAccessInfo', 'model/ExtractIDList', 'model/UpdateExtractRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExtractResponse'), require('../model/CreateExtractRequest'), require('../model/SubtitleResponse'), require('../model/CreateExtractSubtitleRequest'), require('../model/Features'), require('../model/PlayerConfiguration'), require('../model/ExtractSubtitlesResponse'), require('../model/ExtractListResponse'), require('../model/ExtractAccessInfo'), require('../model/ExtractIDList'), require('../model/UpdateExtractRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ExtractsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ExtractResponse, root.KinowJavascriptSdk.CreateExtractRequest, root.KinowJavascriptSdk.SubtitleResponse, root.KinowJavascriptSdk.CreateExtractSubtitleRequest, root.KinowJavascriptSdk.Features, root.KinowJavascriptSdk.PlayerConfiguration, root.KinowJavascriptSdk.ExtractSubtitlesResponse, root.KinowJavascriptSdk.ExtractListResponse, root.KinowJavascriptSdk.ExtractAccessInfo, root.KinowJavascriptSdk.ExtractIDList, root.KinowJavascriptSdk.UpdateExtractRequest);
  }
}(this, function(ApiClient, ExtractResponse, CreateExtractRequest, SubtitleResponse, CreateExtractSubtitleRequest, Features, PlayerConfiguration, ExtractSubtitlesResponse, ExtractListResponse, ExtractAccessInfo, ExtractIDList, UpdateExtractRequest) {
  'use strict';

  /**
   * Extracts service.
   * @module api/ExtractsApi
   * @version 2.0.28
   */

  /**
   * Constructs a new ExtractsApi. 
   * @alias module:api/ExtractsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach cover to extract (the image need to be attached to the product)
     * @param {Integer} extractId Extract ID to fetch
     * @param {Integer} idImage Image ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachCoverToExtractWithHttpInfo = function(extractId, idImage) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling attachCoverToExtract");
      }

      // verify the required parameter 'idImage' is set
      if (idImage === undefined || idImage === null) {
        throw new Error("Missing the required parameter 'idImage' when calling attachCoverToExtract");
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
        'id_image': idImage
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach cover to extract (the image need to be attached to the product)
     * @param {Integer} extractId Extract ID to fetch
     * @param {Integer} idImage Image ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachCoverToExtract = function(extractId, idImage) {
      return this.attachCoverToExtractWithHttpInfo(extractId, idImage)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach feature to extract
     * @param {Integer} extractId 
     * @param {String} features      To attach existing FeatureValue to Product:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;id_feature_value\&quot;:5     }]     &#x60;&#x60;&#x60;      To create a custom FeatureValue:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;custom_value\&quot;:[{     \&quot;lang\&quot;: 1,     \&quot;value\&quot;: \&quot;string\&quot;     }]     }]     &#x60;&#x60;&#x60;
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
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
     * @param {String} features      To attach existing FeatureValue to Product:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;id_feature_value\&quot;:5     }]     &#x60;&#x60;&#x60;      To create a custom FeatureValue:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;custom_value\&quot;:[{     \&quot;lang\&quot;: 1,     \&quot;value\&quot;: \&quot;string\&quot;     }]     }]     &#x60;&#x60;&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachFeaturesToExtract = function(extractId, features) {
      return this.attachFeaturesToExtractWithHttpInfo(extractId, features)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new extract
     * @param {module:model/CreateExtractRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractResponse} and HTTP response
     */
    this.createExtractWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createExtract");
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
      var returnType = ExtractResponse;

      return this.apiClient.callApi(
        '/extracts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new extract
     * @param {module:model/CreateExtractRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractResponse}
     */
    this.createExtract = function(body) {
      return this.createExtractWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new Extract Subtitle
     * @param {Integer} extractId Extract ID to attach the created Subtitle
     * @param {module:model/CreateExtractSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubtitleResponse} and HTTP response
     */
    this.createExtractSubtitleWithHttpInfo = function(extractId, body) {
      var postBody = body;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling createExtractSubtitle");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createExtractSubtitle");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = SubtitleResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/subtitle', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new Extract Subtitle
     * @param {Integer} extractId Extract ID to attach the created Subtitle
     * @param {module:model/CreateExtractSubtitleRequest} body Subtitle settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubtitleResponse}
     */
    this.createExtractSubtitle = function(extractId, body) {
      return this.createExtractSubtitleWithHttpInfo(extractId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete extract
     * @param {Integer} extractId Extract ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteExtractWithHttpInfo = function(extractId) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling deleteExtract");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/extracts/{extract_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete extract
     * @param {Integer} extractId Extract ID to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteExtract = function(extractId) {
      return this.deleteExtractWithHttpInfo(extractId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extract
     * @param {Integer} extractId Extract ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractResponse} and HTTP response
     */
    this.getExtractWithHttpInfo = function(extractId) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtract");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ExtractResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extract
     * @param {Integer} extractId Extract ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractResponse}
     */
    this.getExtract = function(extractId) {
      return this.getExtractWithHttpInfo(extractId)
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
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
     * Get extract&#39;s player
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {String} opts.ipAddress IP address
     * @param {String} opts.isoCode Define the player UI language. If not providen, fallback on platform default language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PlayerConfiguration} and HTTP response
     */
    this.getExtractPlayerWithHttpInfo = function(extractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtractPlayer");
      }


      var pathParams = {
        'extract_id': extractId
      };
      var queryParams = {
        'customer_id': opts['customerId'],
        'ip_address': opts['ipAddress'],
        'iso_code': opts['isoCode'],
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
      var returnType = PlayerConfiguration;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/player', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extract&#39;s player
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId Customer ID to fetch
     * @param {String} opts.ipAddress IP address
     * @param {String} opts.isoCode Define the player UI language. If not providen, fallback on platform default language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PlayerConfiguration}
     */
    this.getExtractPlayer = function(extractId, opts) {
      return this.getExtractPlayerWithHttpInfo(extractId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get subtitles of an extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractSubtitlesResponse} and HTTP response
     */
    this.getExtractSubtitlesWithHttpInfo = function(extractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtractSubtitles");
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ExtractSubtitlesResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subtitles of an extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractSubtitlesResponse}
     */
    this.getExtractSubtitles = function(extractId, opts) {
      return this.getExtractSubtitlesWithHttpInfo(extractId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extracts list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractListResponse} and HTTP response
     */
    this.getExtractsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'features': opts['features'],
        'filters': opts['filters'],
        'ip': opts['ip'],
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
      var returnType = ExtractListResponse;

      return this.apiClient.callApi(
        '/extracts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extracts list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractListResponse}
     */
    this.getExtracts = function(opts) {
      return this.getExtractsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extracts of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractListResponse} and HTTP response
     */
    this.getProductExtractsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductExtracts");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'ip': opts['ip'],
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
      var returnType = ExtractListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/extracts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extracts of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.ip Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractListResponse}
     */
    this.getProductExtracts = function(productId, opts) {
      return this.getProductExtractsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Check access to Extracts
     * @param {module:model/ExtractIDList} body List of Extract IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ExtractAccessInfo>} and HTTP response
     */
    this.hasAccessToExtractsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling hasAccessToExtracts");
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
      var returnType = [ExtractAccessInfo];

      return this.apiClient.callApi(
        '/extracts/has-access', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check access to Extracts
     * @param {module:model/ExtractIDList} body List of Extract IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ExtractAccessInfo>}
     */
    this.hasAccessToExtracts = function(body) {
      return this.hasAccessToExtractsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {module:model/UpdateExtractRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtractResponse} and HTTP response
     */
    this.updateExtractWithHttpInfo = function(extractId, body) {
      var postBody = body;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling updateExtract");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateExtract");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ExtractResponse;

      return this.apiClient.callApi(
        '/extracts/{extract_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {module:model/UpdateExtractRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtractResponse}
     */
    this.updateExtract = function(extractId, body) {
      return this.updateExtractWithHttpInfo(extractId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
