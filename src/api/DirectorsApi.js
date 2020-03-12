/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.49
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
    define(['ApiClient', 'model/Director1', 'model/Director', 'model/Products', 'model/Directors', 'model/Director2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Director1'), require('../model/Director'), require('../model/Products'), require('../model/Directors'), require('../model/Director2'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DirectorsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Director1, root.KinowJavascriptSdk.Director, root.KinowJavascriptSdk.Products, root.KinowJavascriptSdk.Directors, root.KinowJavascriptSdk.Director2);
  }
}(this, function(ApiClient, Director1, Director, Products, Directors, Director2) {
  'use strict';

  /**
   * Directors service.
   * @module api/DirectorsApi
   * @version 1.3.49
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
     * Attach product to director
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachProductToDirectorWithHttpInfo = function(productId, directorId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling attachProductToDirector");
      }

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling attachProductToDirector");
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

      var authNames = [];
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
     * Attach product to director
     * @param {Integer} productId Product ID to fetch
     * @param {Integer} directorId Director ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachProductToDirector = function(productId, directorId) {
      return this.attachProductToDirectorWithHttpInfo(productId, directorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new director
     * @param {module:model/Director1} body Directory settings
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

      var authNames = [];
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
     * @param {module:model/Director1} body Directory settings
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

      var authNames = [];
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
     * Get Director
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director} and HTTP response
     */
    this.getDirectorWithHttpInfo = function(directorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirector");
      }


      var pathParams = {
        'director_id': directorId
      };
      var queryParams = {
        'image_type': opts['imageType'],
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
      var returnType = Director;

      return this.apiClient.callApi(
        '/directors/{director_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Director
     * @param {Integer} directorId Director ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director}
     */
    this.getDirector = function(directorId, opts) {
      return this.getDirectorWithHttpInfo(directorId, opts)
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
     * @param {String} opts.ip filter by customer ip
     * @param {String} opts.features       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Products;

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
     * @param {String} opts.ip filter by customer ip
     * @param {String} opts.features       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Products;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products}
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
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Directors} and HTTP response
     */
    this.getDirectorsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Directors;

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
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Directors}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Directors} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Directors;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Directors}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Directors} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Directors;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Directors}
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
     * @param {module:model/Director2} body Directory settings
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

      var authNames = [];
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
     * @param {module:model/Director2} body Directory settings
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateDirector = function(directorId, body) {
      return this.updateDirectorWithHttpInfo(directorId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
