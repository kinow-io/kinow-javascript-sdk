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
    define(['ApiClient', 'model/Director', 'model/CreateDirectorRequest', 'model/CategoryDirectorsListResponse', 'model/DirectorResponse', 'model/ImageResponse', 'model/DirectorProductListResponse', 'model/DirectorProductRoleListResponse', 'model/DirectorListResponse', 'model/DirectorRoleListResponse', 'model/UpdateDirectorRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Director'), require('../model/CreateDirectorRequest'), require('../model/CategoryDirectorsListResponse'), require('../model/DirectorResponse'), require('../model/ImageResponse'), require('../model/DirectorProductListResponse'), require('../model/DirectorProductRoleListResponse'), require('../model/DirectorListResponse'), require('../model/DirectorRoleListResponse'), require('../model/UpdateDirectorRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DirectorsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Director, root.KinowJavascriptSdk.CreateDirectorRequest, root.KinowJavascriptSdk.CategoryDirectorsListResponse, root.KinowJavascriptSdk.DirectorResponse, root.KinowJavascriptSdk.ImageResponse, root.KinowJavascriptSdk.DirectorProductListResponse, root.KinowJavascriptSdk.DirectorProductRoleListResponse, root.KinowJavascriptSdk.DirectorListResponse, root.KinowJavascriptSdk.DirectorRoleListResponse, root.KinowJavascriptSdk.UpdateDirectorRequest);
  }
}(this, function(ApiClient, Director, CreateDirectorRequest, CategoryDirectorsListResponse, DirectorResponse, ImageResponse, DirectorProductListResponse, DirectorProductRoleListResponse, DirectorListResponse, DirectorRoleListResponse, UpdateDirectorRequest) {
  'use strict';

  /**
   * Directors service.
   * @module api/DirectorsApi
   * @version 2.0.24
   */

  /**
   * Constructs a new DirectorsApi. 
   * @alias module:api/DirectorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach director to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachDirectorToCategoryWithHttpInfo = function(categoryId, directorId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling attachDirectorToCategory");
      }

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling attachDirectorToCategory");
      }


      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'director_id': directorId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/categories/{category_id}/directors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach director to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachDirectorToCategory = function(categoryId, directorId) {
      return this.attachDirectorToCategoryWithHttpInfo(categoryId, directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach director to product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachDirectorToProductWithHttpInfo = function(productId, directorId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachDirectorToProduct");
      }

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling attachDirectorToProduct");
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
        'director_id': directorId
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{product_id}/directors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach director to product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachDirectorToProduct = function(productId, directorId) {
      return this.attachDirectorToProductWithHttpInfo(productId, directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new director
     * @param {module:model/CreateDirectorRequest} body Directory settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director} and HTTP response
     */
    this.createDirectorWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDirector");
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
      var returnType = Director;

      return this.apiClient.callApi(
        '/directors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new director
     * @param {module:model/CreateDirectorRequest} body Directory settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director}
     */
    this.createDirector = function(body) {
      return this.createDirectorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete director
     * @param {Integer} directorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDirectorWithHttpInfo = function(directorId) {
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling deleteDirector");
      }


      var pathParams = {
        'director_id': directorId
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
        '/directors/{director_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete director
     * @param {Integer} directorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDirector = function(directorId) {
      return this.deleteDirectorWithHttpInfo(directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach director from category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} directorId Director ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachDirectorFromCategoryWithHttpInfo = function(categoryId, directorId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling detachDirectorFromCategory");
      }

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling detachDirectorFromCategory");
      }


      var pathParams = {
        'category_id': categoryId,
        'director_id': directorId
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
        '/categories/{category_id}/directors/{director_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach director from category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Integer} directorId Director ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachDirectorFromCategory = function(categoryId, directorId) {
      return this.detachDirectorFromCategoryWithHttpInfo(categoryId, directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Detach director from product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.detachDirectorFromProductWithHttpInfo = function(productId, directorId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling detachDirectorFromProduct");
      }

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling detachDirectorFromProduct");
      }


      var pathParams = {
        'product_id': productId,
        'director_id': directorId
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
        '/products/{product_id}/directors/{director_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Detach director from product
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.detachDirectorFromProduct = function(productId, directorId) {
      return this.detachDirectorFromProductWithHttpInfo(productId, directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get directors attached to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategoryDirectorsListResponse} and HTTP response
     */
    this.getCategoryDirectorsWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryDirectors");
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = CategoryDirectorsListResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/directors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get directors attached to category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategoryDirectorsListResponse}
     */
    this.getCategoryDirectors = function(categoryId, opts) {
      return this.getCategoryDirectorsWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Director
     * @param {Integer} directorId Director ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorResponse} and HTTP response
     */
    this.getDirectorWithHttpInfo = function(directorId) {
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirector");
      }


      var pathParams = {
        'director_id': directorId
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
      var returnType = DirectorResponse;

      return this.apiClient.callApi(
        '/directors/{director_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Director
     * @param {Integer} directorId Director ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorResponse}
     */
    this.getDirector = function(directorId) {
      return this.getDirectorWithHttpInfo(directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cover image of a director
     * @param {Integer} directorId Director ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getDirectorCoverImageWithHttpInfo = function(directorId) {
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirectorCoverImage");
      }


      var pathParams = {
        'director_id': directorId
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
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/directors/{director_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a director
     * @param {Integer} directorId Director ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getDirectorCoverImage = function(directorId) {
      return this.getDirectorCoverImageWithHttpInfo(directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get director products
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorProductListResponse} and HTTP response
     */
    this.getDirectorProductsWithHttpInfo = function(directorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirectorProducts");
      }


      var pathParams = {
        'director_id': directorId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'ip': opts['ip'],
        'features': opts['features'],
        'filters': opts['filters'],
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
      var returnType = DirectorProductListResponse;

      return this.apiClient.callApi(
        '/directors/{director_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get director products
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip Filter by user IP
     * @param {String} opts.features  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
     * @param {String} opts.filters  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorProductListResponse}
     */
    this.getDirectorProducts = function(directorId, opts) {
      return this.getDirectorProductsWithHttpInfo(directorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Products linked to Product with their role
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorProductRoleListResponse} and HTTP response
     */
    this.getDirectorProductsRoleWithHttpInfo = function(directorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirectorProductsRole");
      }


      var pathParams = {
        'director_id': directorId
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
      var returnType = DirectorProductRoleListResponse;

      return this.apiClient.callApi(
        '/directors/{director_id}/products-role', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Products linked to Product with their role
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorProductRoleListResponse}
     */
    this.getDirectorProductsRole = function(directorId, opts) {
      return this.getDirectorProductsRoleWithHttpInfo(directorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get directors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorListResponse} and HTTP response
     */
    this.getDirectorsWithHttpInfo = function(opts) {
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
      var returnType = DirectorListResponse;

      return this.apiClient.callApi(
        '/directors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get directors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorListResponse}
     */
    this.getDirectors = function(opts) {
      return this.getDirectorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get directors of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorListResponse} and HTTP response
     */
    this.getProductDirectorsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductDirectors");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = DirectorListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/directors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get directors of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorListResponse}
     */
    this.getProductDirectors = function(productId, opts) {
      return this.getProductDirectorsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Directors attached to Product with their role
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DirectorRoleListResponse} and HTTP response
     */
    this.getProductDirectorsRoleWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductDirectorsRole");
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
      var returnType = DirectorRoleListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/directors-role', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Directors attached to Product with their role
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DirectorRoleListResponse}
     */
    this.getProductDirectorsRole = function(productId, opts) {
      return this.getProductDirectorsRoleWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update director
     * @param {Integer} directorId 
     * @param {module:model/UpdateDirectorRequest} body Directory settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateDirectorWithHttpInfo = function(directorId, body) {
      var postBody = body;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling updateDirector");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDirector");
      }


      var pathParams = {
        'director_id': directorId
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
        '/directors/{director_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update director
     * @param {Integer} directorId 
     * @param {module:model/UpdateDirectorRequest} body Directory settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateDirector = function(directorId, body) {
      return this.updateDirectorWithHttpInfo(directorId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload director cover
     * @param {Number} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadDirectorCoverWithHttpInfo = function(directorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling uploadDirectorCover");
      }


      var pathParams = {
        'director_id': directorId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/directors/{director_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload director cover
     * @param {Number} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadDirectorCover = function(directorId, opts) {
      return this.uploadDirectorCoverWithHttpInfo(directorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
