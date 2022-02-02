/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.5
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
    define(['ApiClient', 'model/ImageResponse', 'model/ImageType', 'model/CategoryImagesListResponse', 'model/ImageListResponse', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageResponse'), require('../model/ImageType'), require('../model/CategoryImagesListResponse'), require('../model/ImageListResponse'), require('../model/Image'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ImagesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ImageResponse, root.KinowJavascriptSdk.ImageType, root.KinowJavascriptSdk.CategoryImagesListResponse, root.KinowJavascriptSdk.ImageListResponse, root.KinowJavascriptSdk.Image);
  }
}(this, function(ApiClient, ImageResponse, ImageType, CategoryImagesListResponse, ImageListResponse, Image) {
  'use strict';

  /**
   * Images service.
   * @module api/ImagesApi
   * @version 2.0.5
   */

  /**
   * Constructs a new ImagesApi. 
   * @alias module:api/ImagesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get cover image of an actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getActorCoverImageWithHttpInfo = function(actorId) {
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActorCoverImage");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of an actor
     * @param {Integer} actorId Actor ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getActorCoverImage = function(actorId) {
      return this.getActorCoverImageWithHttpInfo(actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get Category cover
     * @param {Integer} categoryId Category ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getCategoryBannerWithHttpInfo = function(categoryId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryBanner");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/banner', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Category cover
     * @param {Integer} categoryId Category ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getCategoryBanner = function(categoryId) {
      return this.getCategoryBannerWithHttpInfo(categoryId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get image types for categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ImageType>} and HTTP response
     */
    this.getCategoryImageTypesWithHttpInfo = function() {
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
      var returnType = [ImageType];

      return this.apiClient.callApi(
        '/categories/image-types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get image types for categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ImageType>}
     */
    this.getCategoryImageTypes = function() {
      return this.getCategoryImageTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get images attached to Category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter on specific Image type
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategoryImagesListResponse} and HTTP response
     */
    this.getCategoryImagesWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryImages");
      }


      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {
        'type': opts['type'],
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
      var returnType = CategoryImagesListResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get images attached to Category
     * @param {Integer} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter on specific Image type
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategoryImagesListResponse}
     */
    this.getCategoryImages = function(categoryId, opts) {
      return this.getCategoryImagesWithHttpInfo(categoryId, opts)
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
     * Get cover image of a product
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getProductCoverImageWithHttpInfo = function(productId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductCoverImage");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a product
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getProductCoverImage = function(productId) {
      return this.getProductCoverImageWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get image types for products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ImageType>} and HTTP response
     */
    this.getProductImageTypesWithHttpInfo = function() {
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
      var returnType = [ImageType];

      return this.apiClient.callApi(
        '/products/image-types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get image types for products
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ImageType>}
     */
    this.getProductImageTypes = function() {
      return this.getProductImageTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get images attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter on specific Image type
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageListResponse} and HTTP response
     */
    this.getProductImagesWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductImages");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'type': opts['type'],
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
      var returnType = ImageListResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get images attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter on specific Image type
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageListResponse}
     */
    this.getProductImages = function(productId, opts) {
      return this.getProductImagesWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product screenshots
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Image>} and HTTP response
     */
    this.getProductScreenshotsWithHttpInfo = function(productId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductScreenshots");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Image];

      return this.apiClient.callApi(
        '/products/{product_id}/screenshots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product screenshots
     * @param {Integer} productId Product ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Image>}
     */
    this.getProductScreenshots = function(productId) {
      return this.getProductScreenshotsWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


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
     * Get cover image of a subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getSubscriptionCoverImageWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionCoverImage");
      }


      var pathParams = {
        'subscription_id': subscriptionId
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
        '/subscriptions/{subscription_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a subscription
     * @param {Integer} subscriptionId Subscription ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getSubscriptionCoverImage = function(subscriptionId) {
      return this.getSubscriptionCoverImageWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get video cover
     * @param {Integer} videoId Video ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.getVideoCoverWithHttpInfo = function(videoId) {
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoCover");
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
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/videos/{video_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video cover
     * @param {Integer} videoId Video ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.getVideoCover = function(videoId) {
      return this.getVideoCoverWithHttpInfo(videoId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload actor cover
     * @param {Number} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadActorCoverWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling uploadActorCover");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload actor cover
     * @param {Number} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadActorCover = function(actorId, opts) {
      return this.uploadActorCoverWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload Category cover
     * @param {Number} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadCategoryCoverWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling uploadCategoryCover");
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
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload Category cover
     * @param {Number} categoryId Category ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadCategoryCover = function(categoryId, opts) {
      return this.uploadCategoryCoverWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload Category image
     * @param {Number} categoryId Category ID to fetch
     * @param {String} imageTypeName Image types name to use to generate image assets
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadCategoryImageWithHttpInfo = function(categoryId, imageTypeName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling uploadCategoryImage");
      }

      // verify the required parameter 'imageTypeName' is set
      if (imageTypeName === undefined || imageTypeName === null) {
        throw new Error("Missing the required parameter 'imageTypeName' when calling uploadCategoryImage");
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
        'image_type_name': imageTypeName,
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/categories/{category_id}/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload Category image
     * @param {Number} categoryId Category ID to fetch
     * @param {String} imageTypeName Image types name to use to generate image assets
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadCategoryImage = function(categoryId, imageTypeName, opts) {
      return this.uploadCategoryImageWithHttpInfo(categoryId, imageTypeName, opts)
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


    /**
     * Upload product cover
     * @param {Number} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadProductCoverWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductCover");
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
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product cover
     * @param {Number} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadProductCover = function(productId, opts) {
      return this.uploadProductCoverWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload product image
     * @param {Number} productId Product ID to fetch
     * @param {String} imageTypeName Image types name to use to generate image assets
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadProductImageWithHttpInfo = function(productId, imageTypeName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductImage");
      }

      // verify the required parameter 'imageTypeName' is set
      if (imageTypeName === undefined || imageTypeName === null) {
        throw new Error("Missing the required parameter 'imageTypeName' when calling uploadProductImage");
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
        'image_type_name': imageTypeName,
        'file': opts['file'],
        'hash': opts['hash'],
        'hash_algorithm': opts['hashAlgorithm']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ImageResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product image
     * @param {Number} productId Product ID to fetch
     * @param {String} imageTypeName Image types name to use to generate image assets
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadProductImage = function(productId, imageTypeName, opts) {
      return this.uploadProductImageWithHttpInfo(productId, imageTypeName, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Subscription ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageResponse} and HTTP response
     */
    this.uploadSubscriptionCoverWithHttpInfo = function(subscriptionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling uploadSubscriptionCover");
      }


      var pathParams = {
        'subscription_id': subscriptionId
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
        '/subscriptions/{subscription_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Subscription ID to fetch
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {String} opts.hash 
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageResponse}
     */
    this.uploadSubscriptionCover = function(subscriptionId, opts) {
      return this.uploadSubscriptionCoverWithHttpInfo(subscriptionId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
