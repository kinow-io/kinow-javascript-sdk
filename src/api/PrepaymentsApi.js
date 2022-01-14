/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.0
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
    define(['ApiClient', 'model/PrepaymentBalanceListResponse', 'model/PrepaymentOperationListResponse', 'model/PrepaymentBonusResponse', 'model/PrepaymentBonusIDList', 'model/PrepaymentBonusAmount', 'model/PrepaymentBonusListResponse', 'model/PrepaymentOperationResponse', 'model/PrepaymentOperationIDList', 'model/PrepaymentOperationAmount', 'model/PrepaymentRechargeResponse', 'model/PrepaymentRechargeListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PrepaymentBalanceListResponse'), require('../model/PrepaymentOperationListResponse'), require('../model/PrepaymentBonusResponse'), require('../model/PrepaymentBonusIDList'), require('../model/PrepaymentBonusAmount'), require('../model/PrepaymentBonusListResponse'), require('../model/PrepaymentOperationResponse'), require('../model/PrepaymentOperationIDList'), require('../model/PrepaymentOperationAmount'), require('../model/PrepaymentRechargeResponse'), require('../model/PrepaymentRechargeListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PrepaymentsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.PrepaymentBalanceListResponse, root.KinowJavascriptSdk.PrepaymentOperationListResponse, root.KinowJavascriptSdk.PrepaymentBonusResponse, root.KinowJavascriptSdk.PrepaymentBonusIDList, root.KinowJavascriptSdk.PrepaymentBonusAmount, root.KinowJavascriptSdk.PrepaymentBonusListResponse, root.KinowJavascriptSdk.PrepaymentOperationResponse, root.KinowJavascriptSdk.PrepaymentOperationIDList, root.KinowJavascriptSdk.PrepaymentOperationAmount, root.KinowJavascriptSdk.PrepaymentRechargeResponse, root.KinowJavascriptSdk.PrepaymentRechargeListResponse);
  }
}(this, function(ApiClient, PrepaymentBalanceListResponse, PrepaymentOperationListResponse, PrepaymentBonusResponse, PrepaymentBonusIDList, PrepaymentBonusAmount, PrepaymentBonusListResponse, PrepaymentOperationResponse, PrepaymentOperationIDList, PrepaymentOperationAmount, PrepaymentRechargeResponse, PrepaymentRechargeListResponse) {
  'use strict';

  /**
   * Prepayments service.
   * @module api/PrepaymentsApi
   * @version 2.0.0
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
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.currencyId Currency ID to format amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentBalanceListResponse} and HTTP response
     */
    this.getCustomerPrepaymentBalancesWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerPrepaymentBalances");
      }


      var pathParams = {
        'customer_id': customerId
      };
      var queryParams = {
        'currency_id': opts['currencyId'],
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
      var returnType = PrepaymentBalanceListResponse;

      return this.apiClient.callApi(
        '/customers/{customer_id}/prepayment-balance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentBalances list
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.currencyId Currency ID to format amount
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentBalanceListResponse}
     */
    this.getCustomerPrepaymentBalances = function(customerId, opts) {
      return this.getCustomerPrepaymentBalancesWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentOperations list
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentOperationListResponse} and HTTP response
     */
    this.getCustomerPrepaymentOperationsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerPrepaymentOperations");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = PrepaymentOperationListResponse;

      return this.apiClient.callApi(
        '/customers/{customer_id}/prepayment-operations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentOperations list
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentOperationListResponse}
     */
    this.getCustomerPrepaymentOperations = function(customerId, opts) {
      return this.getCustomerPrepaymentOperationsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentBonus
     * @param {Integer} prepaymentBonusId PrepaymentBonus ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentBonusResponse} and HTTP response
     */
    this.getPrepaymentBonusWithHttpInfo = function(prepaymentBonusId) {
      var postBody = null;

      // verify the required parameter 'prepaymentBonusId' is set
      if (prepaymentBonusId === undefined || prepaymentBonusId === null) {
        throw new Error("Missing the required parameter 'prepaymentBonusId' when calling getPrepaymentBonus");
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = PrepaymentBonusResponse;

      return this.apiClient.callApi(
        '/prepayment/bonus/{prepayment_bonus_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentBonus
     * @param {Integer} prepaymentBonusId PrepaymentBonus ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentBonusResponse}
     */
    this.getPrepaymentBonus = function(prepaymentBonusId) {
      return this.getPrepaymentBonusWithHttpInfo(prepaymentBonusId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get prices for multiple PrepaymentBonus
     * @param {module:model/PrepaymentBonusIDList} body List of PrepaymentBonus IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PrepaymentBonusAmount>} and HTTP response
     */
    this.getPrepaymentBonusAmountWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getPrepaymentBonusAmount");
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
      var returnType = [PrepaymentBonusAmount];

      return this.apiClient.callApi(
        '/prepayment/bonus/amount', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get prices for multiple PrepaymentBonus
     * @param {module:model/PrepaymentBonusIDList} body List of PrepaymentBonus IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrepaymentBonusAmount>}
     */
    this.getPrepaymentBonusAmount = function(body) {
      return this.getPrepaymentBonusAmountWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentBonus list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentBonusListResponse} and HTTP response
     */
    this.getPrepaymentBonusListWithHttpInfo = function(opts) {
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
      var returnType = PrepaymentBonusListResponse;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentBonusListResponse}
     */
    this.getPrepaymentBonusList = function(opts) {
      return this.getPrepaymentBonusListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentOperation
     * @param {Integer} prepaymentOperationId PrepaymentOperation ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentOperationResponse} and HTTP response
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = PrepaymentOperationResponse;

      return this.apiClient.callApi(
        '/prepayment/operations/{prepayment_operation_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentOperation
     * @param {Integer} prepaymentOperationId PrepaymentOperation ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentOperationResponse}
     */
    this.getPrepaymentOperation = function(prepaymentOperationId) {
      return this.getPrepaymentOperationWithHttpInfo(prepaymentOperationId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentOperations list
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentOperationListResponse} and HTTP response
     */
    this.getPrepaymentOperationsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PrepaymentOperationListResponse;

      return this.apiClient.callApi(
        '/prepayment/operations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentOperations list
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type 
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentOperationListResponse}
     */
    this.getPrepaymentOperations = function(opts) {
      return this.getPrepaymentOperationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get prices for multiple PrepaymentOperations
     * @param {module:model/PrepaymentOperationIDList} body List of PrepaymentOperation IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PrepaymentOperationAmount>} and HTTP response
     */
    this.getPrepaymentOperationsAmountWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getPrepaymentOperationsAmount");
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
      var returnType = [PrepaymentOperationAmount];

      return this.apiClient.callApi(
        '/prepayment/operations/amount', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get prices for multiple PrepaymentOperations
     * @param {module:model/PrepaymentOperationIDList} body List of PrepaymentOperation IDs separated by comma, eg. &#39;42,21,84&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrepaymentOperationAmount>}
     */
    this.getPrepaymentOperationsAmount = function(body) {
      return this.getPrepaymentOperationsAmountWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get PrepaymentRecharge
     * @param {Integer} prepaymentRechargeId PrepaymentRecharge ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentRechargeResponse} and HTTP response
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = PrepaymentRechargeResponse;

      return this.apiClient.callApi(
        '/prepayment/recharges/{prepayment_recharge_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get PrepaymentRecharge
     * @param {Integer} prepaymentRechargeId PrepaymentRecharge ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentRechargeResponse}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepaymentRechargeListResponse} and HTTP response
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = PrepaymentRechargeListResponse;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepaymentRechargeListResponse}
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
