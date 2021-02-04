/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.30
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
    root.KinowJavascriptSdk.I18nField = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The I18nField model module.
   * @module model/I18nField
   * @version 1.4.30
   */

  /**
   * Constructs a new <code>I18nField</code>.
   * @alias module:model/I18nField
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>I18nField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/I18nField} obj Optional instance to populate.
   * @return {module:model/I18nField} The populated <code>I18nField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lang')) {
        obj['lang'] = ApiClient.convertToType(data['lang'], 'Integer');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} lang
   */
  exports.prototype['lang'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


