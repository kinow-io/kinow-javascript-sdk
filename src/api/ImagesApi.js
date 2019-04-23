/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.81
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
    define(['ApiClient', 'model/Image', 'model/ProductImagesResponse', 'model/Screenshot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/ProductImagesResponse'), require('../model/Screenshot'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ImagesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Image, root.KinowJavascriptSdk.ProductImagesResponse, root.KinowJavascriptSdk.Screenshot);
  }
}(this, function(ApiClient, Image, ProductImagesResponse, Screenshot) {
  'use strict';

  /**
   * Images service.
   * @module api/ImagesApi
   * @version 1.0.81
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
     * @param {Integer} toId ID of the actor to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.getActorCoverImageWithHttpInfo = function(toId) {
      var postBody = null;

      // verify the required parameter 'toId' is set
      if (toId === undefined || toId === null) {
        throw new Error("Missing the required parameter 'toId' when calling getActorCoverImage");
      }


      var pathParams = {
        'to_id': toId
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/actors/{actor_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of an actor
     * @param {Integer} toId ID of the actor to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getActorCoverImage = function(toId) {
      return this.getActorCoverImageWithHttpInfo(toId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get banner of a category
     * @param {Integer} categoryId ID of the category to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/categories/{category_id}/banner', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get banner of a category
     * @param {Integer} categoryId ID of the category to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getCategoryBanner = function(categoryId) {
      return this.getCategoryBannerWithHttpInfo(categoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cover image of a director
     * @param {Integer} directorId ID of the director to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/directors/{director_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a director
     * @param {Integer} directorId ID of the director to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getDirectorCoverImage = function(directorId) {
      return this.getDirectorCoverImageWithHttpInfo(directorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get introduction image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Image>} and HTTP response
     */
    this.getIntroImageWithHttpInfo = function() {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Image];

      return this.apiClient.callApi(
        '/widgets/intro/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get introduction image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Image>}
     */
    this.getIntroImage = function() {
      return this.getIntroImageWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cover image of a product
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/products/{product_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a product
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getProductCoverImage = function(productId) {
      return this.getProductCoverImageWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get images attached to product
     * @param {Integer} productId ID of the product to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type as screen_small or screen_large
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductImagesResponse} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = ProductImagesResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get images attached to product
     * @param {Integer} productId ID of the product to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.type type as screen_small or screen_large
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductImagesResponse}
     */
    this.getProductImages = function(productId, opts) {
      return this.getProductImagesWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get product screenshots
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Screenshot>} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Screenshot];

      return this.apiClient.callApi(
        '/products/{product_id}/screenshots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product screenshots
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Screenshot>}
     */
    this.getProductScreenshots = function(productId) {
      return this.getProductScreenshotsWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cover image of a subscription
     * @param {Integer} subscriptionId ID of the subscription to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
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

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cover image of a subscription
     * @param {Integer} subscriptionId ID of the subscription to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getSubscriptionCoverImage = function(subscriptionId) {
      return this.getSubscriptionCoverImageWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get video cover
     * @param {Integer} video ID of the video to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.getVideoCoverWithHttpInfo = function(video) {
      var postBody = null;

      // verify the required parameter 'video' is set
      if (video === undefined || video === null) {
        throw new Error("Missing the required parameter 'video' when calling getVideoCover");
      }


      var pathParams = {
        'video': video
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/videos/{video_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video cover
     * @param {Integer} video ID of the video to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getVideoCover = function(video) {
      return this.getVideoCoverWithHttpInfo(video)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload actor cover
     * @param {Number} actorId Id of the actor
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.uploadActorCoverWithHttpInfo = function(actorId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling uploadActorCover");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadActorCover");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadActorCover");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/actors/{actor_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload actor cover
     * @param {Number} actorId Id of the actor
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.uploadActorCover = function(actorId, file, hash, opts) {
      return this.uploadActorCoverWithHttpInfo(actorId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload category banner
     * @param {Number} categoryId Id of the category
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.uploadCategoryBannerWithHttpInfo = function(categoryId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling uploadCategoryBanner");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadCategoryBanner");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadCategoryBanner");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/category/{category_id}/banner', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload category banner
     * @param {Number} categoryId Id of the category
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.uploadCategoryBanner = function(categoryId, file, hash, opts) {
      return this.uploadCategoryBannerWithHttpInfo(categoryId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload director cover
     * @param {Number} directorId Id of the director
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.uploadDirectorCoverWithHttpInfo = function(directorId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling uploadDirectorCover");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadDirectorCover");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadDirectorCover");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/directors/{director_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload director cover
     * @param {Number} directorId Id of the director
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.uploadDirectorCover = function(directorId, file, hash, opts) {
      return this.uploadDirectorCoverWithHttpInfo(directorId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload product cover
     * @param {Number} productId Id of the product
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.uploadProductCoverWithHttpInfo = function(productId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductCover");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadProductCover");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadProductCover");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/products/{product_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product cover
     * @param {Number} productId Id of the product
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.uploadProductCover = function(productId, file, hash, opts) {
      return this.uploadProductCoverWithHttpInfo(productId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload product screenshot
     * @param {Number} productId Id of the product
     * @param {Number} imageId Id of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.position 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Screenshot} and HTTP response
     */
    this.uploadProductScreenshotWithHttpInfo = function(productId, imageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductScreenshot");
      }

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling uploadProductScreenshot");
      }


      var pathParams = {
        'product_id': productId,
        'image_id': imageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'position': opts['position']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Screenshot;

      return this.apiClient.callApi(
        '/products/{product_id}/screenshots/{image_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product screenshot
     * @param {Number} productId Id of the product
     * @param {Number} imageId Id of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.position 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Screenshot}
     */
    this.uploadProductScreenshot = function(productId, imageId, opts) {
      return this.uploadProductScreenshotWithHttpInfo(productId, imageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload product screenshot
     * @param {Number} productId Id of the product
     * @param {Number} imageId Id of the image to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.uploadProductScreenshot_0WithHttpInfo = function(productId, imageId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductScreenshot_0");
      }

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling uploadProductScreenshot_0");
      }


      var pathParams = {
        'product_id': productId,
        'image_id': imageId
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
        '/products/{product_id}/screenshots/{image_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product screenshot
     * @param {Number} productId Id of the product
     * @param {Number} imageId Id of the image to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.uploadProductScreenshot_0 = function(productId, imageId) {
      return this.uploadProductScreenshot_0WithHttpInfo(productId, imageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload product screenshots
     * @param {Number} productId Id of the product
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @param {Number} opts.position 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Screenshot>} and HTTP response
     */
    this.uploadProductScreenshotsWithHttpInfo = function(productId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling uploadProductScreenshots");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadProductScreenshots");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadProductScreenshots");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm'],
        'position': opts['position']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = [Screenshot];

      return this.apiClient.callApi(
        '/products/{product_id}/screenshots', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload product screenshots
     * @param {Number} productId Id of the product
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @param {Number} opts.position 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Screenshot>}
     */
    this.uploadProductScreenshots = function(productId, file, hash, opts) {
      return this.uploadProductScreenshotsWithHttpInfo(productId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Id of the subscription
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.uploadSubscriptionCoverWithHttpInfo = function(subscriptionId, file, hash, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling uploadSubscriptionCover");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadSubscriptionCover");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling uploadSubscriptionCover");
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
        'file': file,
        'hash': hash,
        'hash-algorithm': opts['hashAlgorithm']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = Image;

      return this.apiClient.callApi(
        '/subscriptions/{subscription_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload subscription cover
     * @param {Number} subscriptionId Id of the subscription
     * @param {File} file 
     * @param {String} hash 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hashAlgorithm Hash algorithm to check the hash file (default value is: sha256)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.uploadSubscriptionCover = function(subscriptionId, file, hash, opts) {
      return this.uploadSubscriptionCoverWithHttpInfo(subscriptionId, file, hash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
