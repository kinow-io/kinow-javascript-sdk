/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.35
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
    define(['ApiClient', 'model/PrepaymentBalance', 'model/PrepaymentBonus1', 'model/PrepaymentBonus', 'model/PrepaymentOperation', 'model/PrepaymentOperations', 'model/PrepaymentRecharge', 'model/PrepaymentRecharges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PrepaymentBalance'), require('../model/PrepaymentBonus1'), require('../model/PrepaymentBonus'), require('../model/PrepaymentOperation'), require('../model/PrepaymentOperations'), require('../model/PrepaymentRecharge'), require('../model/PrepaymentRecharges'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PrepaymentsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.PrepaymentBalance, root.KinowJavascriptSdk.PrepaymentBonus1, root.KinowJavascriptSdk.PrepaymentBonus, root.KinowJavascriptSdk.PrepaymentOperation, root.KinowJavascriptSdk.PrepaymentOperations, root.KinowJavascriptSdk.PrepaymentRecharge, root.KinowJavascriptSdk.PrepaymentRecharges);
  }
}(this, function(ApiClient, PrepaymentBalance, PrepaymentBonus1, PrepaymentBonus, PrepaymentOperation, PrepaymentOperations, PrepaymentRecharge, PrepaymentRecharges) {
  'use strict';

  /**
   * Prepayments service.
   * @module api/PrepaymentsApi
   * @version 1.3.35
   */

  /**
   * Constructs a new PrepaymentsApi. 
   * @alias module:api/PrepaymentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get PrepaymentBalances list
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PrepaymentBalance>} and HTTP response
     */
    this.getPrepaymentBalancesWithHttpInfo = function(customerId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPrepaymentBalances");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = [PrepaymentBalance];

      return this.apiClient.callApi(
        '/customers/{customer_id}/prepayment-balance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentBalances list
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrepaymentBalance>}
     */
    this.getPrepaymentBalances = function(customerId) {
      return this.getPrepaymentBalancesWithHttpInfo(customerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentBonus list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentBonus1} and HTTP response
     */
    this.getPrepaymentBonusWithHttpInfo = function(opts) {
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
      var returnType = PrepaymentBonus1;

      return this.apiClient.callApi(
        '/prepayment/bonus', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentBonus list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentBonus1}
     */
    this.getPrepaymentBonus = function(opts) {
      return this.getPrepaymentBonusWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentBonus
     * @param {Integer} prepaymentBonusId PrepaymentBonus ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentBonus} and HTTP response
     */
    this.getPrepaymentBonus_0WithHttpInfo = function(prepaymentBonusId) {
      var postBody = null;

      // verify the required parameter 'prepaymentBonusId' is set
      if (prepaymentBonusId === undefined || prepaymentBonusId === null) {
        throw new Error("Missing the required parameter 'prepaymentBonusId' when calling getPrepaymentBonus_0");
      }


      var pathParams = {
        'prepayment_bonus_id': prepaymentBonusId
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
      var returnType = PrepaymentBonus;

      return this.apiClient.callApi(
        '/prepayment/bonus/{prepayment_bonus_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentBonus
     * @param {Integer} prepaymentBonusId PrepaymentBonus ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentBonus}
     */
    this.getPrepaymentBonus_0 = function(prepaymentBonusId) {
      return this.getPrepaymentBonus_0WithHttpInfo(prepaymentBonusId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentOperation
     * @param {Integer} prepaymentOperationId PrepaymentOperation ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentOperation} and HTTP response
     */
    this.getPrepaymentOperationWithHttpInfo = function(prepaymentOperationId) {
      var postBody = null;

      // verify the required parameter 'prepaymentOperationId' is set
      if (prepaymentOperationId === undefined || prepaymentOperationId === null) {
        throw new Error("Missing the required parameter 'prepaymentOperationId' when calling getPrepaymentOperation");
      }


      var pathParams = {
        'prepayment_operation_id': prepaymentOperationId
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
      var returnType = PrepaymentOperation;

      return this.apiClient.callApi(
        '/prepayment/operations/{prepayment_operation_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentOperation
     * @param {Integer} prepaymentOperationId PrepaymentOperation ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentOperation}
     */
    this.getPrepaymentOperation = function(prepaymentOperationId) {
      return this.getPrepaymentOperationWithHttpInfo(prepaymentOperationId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentOperations list
     * @param {Integer} customerId Customer ID to fetch
     * @param {String} type PrepaymentOperation type to fetch (currency or credit)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentOperations} and HTTP response
     */
    this.getPrepaymentOperationsWithHttpInfo = function(customerId, type, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPrepaymentOperations");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getPrepaymentOperations");
      }


      var pathParams = {
        'customer_id': customerId,
        'type': type
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
      var returnType = PrepaymentOperations;

      return this.apiClient.callApi(
        '/customers/{customer_id}/prepayment-operation/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentOperations list
     * @param {Integer} customerId Customer ID to fetch
     * @param {String} type PrepaymentOperation type to fetch (currency or credit)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentOperations}
     */
    this.getPrepaymentOperations = function(customerId, type, opts) {
      return this.getPrepaymentOperationsWithHttpInfo(customerId, type, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentRecharge
     * @param {Integer} prepaymentRechargeId PrepaymentRecharge ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentRecharge} and HTTP response
     */
    this.getPrepaymentRechargeWithHttpInfo = function(prepaymentRechargeId) {
      var postBody = null;

      // verify the required parameter 'prepaymentRechargeId' is set
      if (prepaymentRechargeId === undefined || prepaymentRechargeId === null) {
        throw new Error("Missing the required parameter 'prepaymentRechargeId' when calling getPrepaymentRecharge");
      }


      var pathParams = {
        'prepayment_recharge_id': prepaymentRechargeId
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
      var returnType = PrepaymentRecharge;

      return this.apiClient.callApi(
        '/prepayment/recharges/{prepayment_recharge_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentRecharge
     * @param {Integer} prepaymentRechargeId PrepaymentRecharge ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentRecharge}
     */
    this.getPrepaymentRecharge = function(prepaymentRechargeId) {
      return this.getPrepaymentRechargeWithHttpInfo(prepaymentRechargeId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentRecharges list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentRecharges} and HTTP response
     */
    this.getPrepaymentRechargesWithHttpInfo = function(opts) {
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
      var returnType = PrepaymentRecharges;

      return this.apiClient.callApi(
        '/prepayment/recharges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentRecharges list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentRecharges}
     */
    this.getPrepaymentRecharges = function(opts) {
      return this.getPrepaymentRechargesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
