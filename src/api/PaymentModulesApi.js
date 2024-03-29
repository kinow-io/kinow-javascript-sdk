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
    define(['ApiClient', 'model/PaymentModuleListResponse1', 'model/PaymentMethods', 'model/PaymentModuleListResponse', 'model/PaymentToken1', 'model/PaymentUrlResponse', 'model/PaymentDetails', 'model/PaymentDetailsResponse', 'model/PaymentArguments', 'model/UpdatePaymentRequest', 'model/PaymentArgumentsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentModuleListResponse1'), require('../model/PaymentMethods'), require('../model/PaymentModuleListResponse'), require('../model/PaymentToken1'), require('../model/PaymentUrlResponse'), require('../model/PaymentDetails'), require('../model/PaymentDetailsResponse'), require('../model/PaymentArguments'), require('../model/UpdatePaymentRequest'), require('../model/PaymentArgumentsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PaymentModulesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.PaymentModuleListResponse1, root.KinowJavascriptSdk.PaymentMethods, root.KinowJavascriptSdk.PaymentModuleListResponse, root.KinowJavascriptSdk.PaymentToken1, root.KinowJavascriptSdk.PaymentUrlResponse, root.KinowJavascriptSdk.PaymentDetails, root.KinowJavascriptSdk.PaymentDetailsResponse, root.KinowJavascriptSdk.PaymentArguments, root.KinowJavascriptSdk.UpdatePaymentRequest, root.KinowJavascriptSdk.PaymentArgumentsResponse);
  }
}(this, function(ApiClient, PaymentModuleListResponse1, PaymentMethods, PaymentModuleListResponse, PaymentToken1, PaymentUrlResponse, PaymentDetails, PaymentDetailsResponse, PaymentArguments, UpdatePaymentRequest, PaymentArgumentsResponse) {
  'use strict';

  /**
   * PaymentModules service.
   * @module api/PaymentModulesApi
   * @version 2.0.28
   */

  /**
   * Constructs a new PaymentModulesApi. 
   * @alias module:api/PaymentModulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get payment gateways list available for given cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentModuleListResponse1} and HTTP response
     */
    this.getCartPaymentModulesWithHttpInfo = function(cartId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getCartPaymentModules");
      }


      var pathParams = {
        'cart_id': cartId
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
      var returnType = PaymentModuleListResponse1;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment gateways list available for given cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentModuleListResponse1}
     */
    this.getCartPaymentModules = function(cartId, opts) {
      return this.getCartPaymentModulesWithHttpInfo(cartId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment methods saved for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentMethods>} and HTTP response
     */
    this.getPaymentMethodsWithHttpInfo = function(customerId, paymentName) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPaymentMethods");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPaymentMethods");
      }


      var pathParams = {
        'customer_id': customerId,
        'payment_name': paymentName
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
      var returnType = [PaymentMethods];

      return this.apiClient.callApi(
        '/customers/{customer_id}/payments/{payment_name}/payment-methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment methods saved for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentMethods>}
     */
    this.getPaymentMethods = function(customerId, paymentName) {
      return this.getPaymentMethodsWithHttpInfo(customerId, paymentName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment methods saved for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @param {String} ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentMethods>} and HTTP response
     */
    this.getPaymentMethodsWithIpWithHttpInfo = function(customerId, paymentName, ipAddress) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPaymentMethodsWithIp");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPaymentMethodsWithIp");
      }

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getPaymentMethodsWithIp");
      }


      var pathParams = {
        'customer_id': customerId,
        'payment_name': paymentName,
        'ip_address': ipAddress
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
      var returnType = [PaymentMethods];

      return this.apiClient.callApi(
        '/customers/{customer_id}/payments/{payment_name}/payment-methods/{ip_address}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment methods saved for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @param {String} ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentMethods>}
     */
    this.getPaymentMethodsWithIp = function(customerId, paymentName, ipAddress) {
      return this.getPaymentMethodsWithIpWithHttpInfo(customerId, paymentName, ipAddress)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment gateways list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentModuleListResponse} and HTTP response
     */
    this.getPaymentModulesWithHttpInfo = function(opts) {
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
      var returnType = PaymentModuleListResponse;

      return this.apiClient.callApi(
        '/payment-modules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment gateways list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentModuleListResponse}
     */
    this.getPaymentModules = function(opts) {
      return this.getPaymentModulesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment token details
     * @param {Integer} token Token to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentToken1} and HTTP response
     */
    this.getPaymentTokenWithHttpInfo = function(token) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getPaymentToken");
      }


      var pathParams = {
        'token': token
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
      var returnType = PaymentToken1;

      return this.apiClient.callApi(
        '/payment-modules/token/{token}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment token details
     * @param {Integer} token Token to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentToken1}
     */
    this.getPaymentToken = function(token) {
      return this.getPaymentTokenWithHttpInfo(token)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment gateway URL to use in iframe
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentUrlResponse} and HTTP response
     */
    this.getPaymentUrlWithHttpInfo = function(cartId, paymentName) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getPaymentUrl");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPaymentUrl");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
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
      var returnType = PaymentUrlResponse;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments/{payment_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment gateway URL to use in iframe
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentUrlResponse}
     */
    this.getPaymentUrl = function(cartId, paymentName) {
      return this.getPaymentUrlWithHttpInfo(cartId, paymentName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get pending payments for a Customer on a payment gateway
     * @param {String} paymentName 
     * @param {Integer} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentDetails>} and HTTP response
     */
    this.getPendingPaymentsWithHttpInfo = function(paymentName, customerId) {
      var postBody = null;

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPendingPayments");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPendingPayments");
      }


      var pathParams = {
        'payment_name': paymentName,
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

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = [PaymentDetails];

      return this.apiClient.callApi(
        '/customers/{customer_id}/payments/{payment_name}/pending', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get pending payments for a Customer on a payment gateway
     * @param {String} paymentName 
     * @param {Integer} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentDetails>}
     */
    this.getPendingPayments = function(paymentName, customerId) {
      return this.getPendingPaymentsWithHttpInfo(paymentName, customerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get pending payments for a Customer on a payment gateway
     * @param {String} paymentName 
     * @param {Integer} customerId 
     * @param {String} ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentDetails>} and HTTP response
     */
    this.getPendingPaymentsWithIpWithHttpInfo = function(paymentName, customerId, ipAddress) {
      var postBody = null;

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPendingPaymentsWithIp");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getPendingPaymentsWithIp");
      }

      // verify the required parameter 'ipAddress' is set
      if (ipAddress === undefined || ipAddress === null) {
        throw new Error("Missing the required parameter 'ipAddress' when calling getPendingPaymentsWithIp");
      }


      var pathParams = {
        'payment_name': paymentName,
        'customer_id': customerId,
        'ip_address': ipAddress
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
      var returnType = [PaymentDetails];

      return this.apiClient.callApi(
        '/customers/{customer_id}/payments/{payment_name}/pending/{ip_address}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get pending payments for a Customer on a payment gateway
     * @param {String} paymentName 
     * @param {Integer} customerId 
     * @param {String} ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentDetails>}
     */
    this.getPendingPaymentsWithIp = function(paymentName, customerId, ipAddress) {
      return this.getPendingPaymentsWithIpWithHttpInfo(paymentName, customerId, ipAddress)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Prepare payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipAddress Use IP address in payment process
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentDetailsResponse} and HTTP response
     */
    this.preparePaymentWithHttpInfo = function(cartId, paymentName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling preparePayment");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling preparePayment");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'ip_address': opts['ipAddress']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = PaymentDetailsResponse;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments/{payment_name}/prepare', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Prepare payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipAddress Use IP address in payment process
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentDetailsResponse}
     */
    this.preparePayment = function(cartId, paymentName, opts) {
      return this.preparePaymentWithHttpInfo(cartId, paymentName, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Validate recurring payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArguments} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.recurringPaymentWithHttpInfo = function(cartId, paymentName, paymentArgument) {
      var postBody = paymentArgument;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling recurringPayment");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling recurringPayment");
      }

      // verify the required parameter 'paymentArgument' is set
      if (paymentArgument === undefined || paymentArgument === null) {
        throw new Error("Missing the required parameter 'paymentArgument' when calling recurringPayment");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
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
        '/carts/{cart_id}/payments/{payment_name}/recurring', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate recurring payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArguments} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.recurringPayment = function(cartId, paymentName, paymentArgument) {
      return this.recurringPaymentWithHttpInfo(cartId, paymentName, paymentArgument)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update payment method for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @param {module:model/UpdatePaymentRequest} paymentArguments Payment arguments
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updatePaymentMethodWithHttpInfo = function(customerId, paymentName, paymentArguments, opts) {
      opts = opts || {};
      var postBody = paymentArguments;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updatePaymentMethod");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling updatePaymentMethod");
      }

      // verify the required parameter 'paymentArguments' is set
      if (paymentArguments === undefined || paymentArguments === null) {
        throw new Error("Missing the required parameter 'paymentArguments' when calling updatePaymentMethod");
      }


      var pathParams = {
        'customer_id': customerId,
        'payment_name': paymentName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'ip_address': opts['ipAddress']
      };

      var authNames = ['ApiClientId', 'ApiClientSecret'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/customers/{customer_id}/payments/{payment_name}/payment-method', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update payment method for a Customer on a payment gateway
     * @param {Integer} customerId 
     * @param {String} paymentName 
     * @param {module:model/UpdatePaymentRequest} paymentArguments Payment arguments
     * @param {Object} opts Optional parameters
     * @param {String} opts.ipAddress Filter by user IP
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updatePaymentMethod = function(customerId, paymentName, paymentArguments, opts) {
      return this.updatePaymentMethodWithHttpInfo(customerId, paymentName, paymentArguments, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Validate cart without payment method (only for carts with a total of 0)
     * @param {Integer} cartId Cart ID to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validateFreeOrderWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling validateFreeOrder");
      }


      var pathParams = {
        'cart_id': cartId
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
        '/carts/{cart_id}/validate-free-order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate cart without payment method (only for carts with a total of 0)
     * @param {Integer} cartId Cart ID to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validateFreeOrder = function(cartId) {
      return this.validateFreeOrderWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Validate payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArgumentsResponse} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validatePaymentWithHttpInfo = function(cartId, paymentName, paymentArgument) {
      var postBody = paymentArgument;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling validatePayment");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling validatePayment");
      }

      // verify the required parameter 'paymentArgument' is set
      if (paymentArgument === undefined || paymentArgument === null) {
        throw new Error("Missing the required parameter 'paymentArgument' when calling validatePayment");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
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
        '/carts/{cart_id}/payments/{payment_name}/validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArgumentsResponse} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validatePayment = function(cartId, paymentName, paymentArgument) {
      return this.validatePaymentWithHttpInfo(cartId, paymentName, paymentArgument)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
