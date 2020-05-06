/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.68
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
    define(['ApiClient', 'model/Support', 'model/Contacts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Support'), require('../model/Contacts'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SupportApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Support, root.KinowJavascriptSdk.Contacts);
  }
}(this, function(ApiClient, Support, Contacts) {
  'use strict';

  /**
   * Support service.
   * @module api/SupportApi
   * @version 1.3.68
   */

  /**
   * Constructs a new SupportApi. 
   * @alias module:api/SupportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new message
     * @param {Integer} idLang 
     * @param {String} email 
     * @param {Integer} idContact 
     * @param {String} message 
     * @param {Integer} idProduct 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idOrder 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Support} and HTTP response
     */
    this.createMessageWithHttpInfo = function(idLang, email, idContact, message, idProduct, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idLang' is set
      if (idLang === undefined || idLang === null) {
        throw new Error("Missing the required parameter 'idLang' when calling createMessage");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling createMessage");
      }

      // verify the required parameter 'idContact' is set
      if (idContact === undefined || idContact === null) {
        throw new Error("Missing the required parameter 'idContact' when calling createMessage");
      }

      // verify the required parameter 'message' is set
      if (message === undefined || message === null) {
        throw new Error("Missing the required parameter 'message' when calling createMessage");
      }

      // verify the required parameter 'idProduct' is set
      if (idProduct === undefined || idProduct === null) {
        throw new Error("Missing the required parameter 'idProduct' when calling createMessage");
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
        'id_lang': idLang,
        'email': email,
        'id_contact': idContact,
        'message': message,
        'id_product': idProduct,
        'id_order': opts['idOrder']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Support;

      return this.apiClient.callApi(
        '/support', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new message
     * @param {Integer} idLang 
     * @param {String} email 
     * @param {Integer} idContact 
     * @param {String} message 
     * @param {Integer} idProduct 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idOrder 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Support}
     */
    this.createMessage = function(idLang, email, idContact, message, idProduct, opts) {
      return this.createMessageWithHttpInfo(idLang, email, idContact, message, idProduct, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get contacts list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contacts} and HTTP response
     */
    this.getContactsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
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
      var returnType = Contacts;

      return this.apiClient.callApi(
        '/support/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get contacts list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contacts}
     */
    this.getContacts = function(opts) {
      return this.getContactsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
