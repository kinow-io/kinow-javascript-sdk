/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.3.3
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
    root.KinowJavascriptSdk.Currency = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Currency model module.
   * @module model/Currency
   * @version 1.3.3
   */

  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:model/Currency
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Currency} obj Optional instance to populate.
   * @return {module:model/Currency} The populated <code>Currency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
      if (data.hasOwnProperty('iso_code_num')) {
        obj['iso_code_num'] = ApiClient.convertToType(data['iso_code_num'], 'String');
      }
      if (data.hasOwnProperty('sign')) {
        obj['sign'] = ApiClient.convertToType(data['sign'], 'String');
      }
      if (data.hasOwnProperty('conversion_rate')) {
        obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'Integer');
      }
      if (data.hasOwnProperty('blank')) {
        obj['blank'] = ApiClient.convertToType(data['blank'], 'Integer');
      }
      if (data.hasOwnProperty('decimals')) {
        obj['decimals'] = ApiClient.convertToType(data['decimals'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;
  /**
   * 
   * @member {String} iso_code_num
   */
  exports.prototype['iso_code_num'] = undefined;
  /**
   * 
   * @member {String} sign
   */
  exports.prototype['sign'] = undefined;
  /**
   * 
   * @member {Number} conversion_rate
   */
  exports.prototype['conversion_rate'] = undefined;
  /**
   * 
   * @member {Integer} format
   */
  exports.prototype['format'] = undefined;
  /**
   * 
   * @member {Integer} blank
   */
  exports.prototype['blank'] = undefined;
  /**
   * 
   * @member {Integer} decimals
   */
  exports.prototype['decimals'] = undefined;



  return exports;
}));


