/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.17
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateTaskRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateTaskRequest model module.
   * @module model/CreateTaskRequest
   * @version 2.0.17
   */

  /**
   * Constructs a new <code>CreateTaskRequest</code>.
   * @alias module:model/CreateTaskRequest
   * @class
   * @param name {String} 
   * @param data {String} 
   */
  var exports = function(name, data) {
    var _this = this;

    _this['name'] = name;
    _this['data'] = data;

  };

  /**
   * Constructs a <code>CreateTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTaskRequest} obj Optional instance to populate.
   * @return {module:model/CreateTaskRequest} The populated <code>CreateTaskRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('id_employee')) {
        obj['id_employee'] = ApiClient.convertToType(data['id_employee'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Integer} id_employee
   */
  exports.prototype['id_employee'] = undefined;



  return exports;
}));


