/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.25
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
    root.KinowJavascriptSdk.ExtractIDList = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExtractIDList model module.
   * @module model/ExtractIDList
   * @version 2.0.25
   */

  /**
   * Constructs a new <code>ExtractIDList</code>.
   * @alias module:model/ExtractIDList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ExtractIDList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtractIDList} obj Optional instance to populate.
   * @return {module:model/ExtractIDList} The populated <code>ExtractIDList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extract_ids')) {
        obj['extract_ids'] = ApiClient.convertToType(data['extract_ids'], 'String');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} extract_ids
   */
  exports.prototype['extract_ids'] = undefined;
  /**
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;



  return exports;
}));


