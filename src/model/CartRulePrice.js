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
    define(['ApiClient', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartRulePrice = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The CartRulePrice model module.
   * @module model/CartRulePrice
   * @version 2.0.28
   */

  /**
   * Constructs a new <code>CartRulePrice</code>.
   * @alias module:model/CartRulePrice
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CartRulePrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartRulePrice} obj Optional instance to populate.
   * @return {module:model/CartRulePrice} The populated <code>CartRulePrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('amount_formatted')) {
        obj['amount_formatted'] = ApiClient.convertToType(data['amount_formatted'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} amount_formatted
   */
  exports.prototype['amount_formatted'] = undefined;



  return exports;
}));


