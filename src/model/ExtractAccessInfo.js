/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.12
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
    root.KinowJavascriptSdk.ExtractAccessInfo = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExtractAccessInfo model module.
   * @module model/ExtractAccessInfo
   * @version 2.0.12
   */

  /**
   * Constructs a new <code>ExtractAccessInfo</code>.
   * @alias module:model/ExtractAccessInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ExtractAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtractAccessInfo} obj Optional instance to populate.
   * @return {module:model/ExtractAccessInfo} The populated <code>ExtractAccessInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_extract')) {
        obj['id_extract'] = ApiClient.convertToType(data['id_extract'], 'Number');
      }
      if (data.hasOwnProperty('streaming')) {
        obj['streaming'] = ApiClient.convertToType(data['streaming'], 'Boolean');
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id_extract
   */
  exports.prototype['id_extract'] = undefined;
  /**
   * @member {Boolean} streaming
   */
  exports.prototype['streaming'] = undefined;
  /**
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;



  return exports;
}));


