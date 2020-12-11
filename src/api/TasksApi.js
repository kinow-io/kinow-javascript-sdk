/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.24
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
    define(['ApiClient', 'model/Task', 'model/TaskCreateRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Task'), require('../model/TaskCreateRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.TasksApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Task, root.KinowJavascriptSdk.TaskCreateRequest);
  }
}(this, function(ApiClient, Task, TaskCreateRequest) {
  'use strict';

  /**
   * Tasks service.
   * @module api/TasksApi
   * @version 1.4.24
   */

  /**
   * Constructs a new TasksApi. 
   * @alias module:api/TasksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new task
     * @param {module:model/TaskCreateRequest} body Create task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
     */
    this.createTaskWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTask");
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
      var returnType = Task;

      return this.apiClient.callApi(
        '/tasks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new task
     * @param {module:model/TaskCreateRequest} body Create task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */
    this.createTask = function(body) {
      return this.createTaskWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
