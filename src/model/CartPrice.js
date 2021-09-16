/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.52
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
    root.KinowJavascriptSdk.CartPrice = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartPrice model module.
   * @module model/CartPrice
   * @version 1.4.52
   */

  /**
   * Constructs a new <code>CartPrice</code>.
   * @alias module:model/CartPrice
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CartPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartPrice} obj Optional instance to populate.
   * @return {module:model/CartPrice} The populated <code>CartPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart_id')) {
        obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'Integer');
      }
      if (data.hasOwnProperty('total_without_tax')) {
        obj['total_without_tax'] = ApiClient.convertToType(data['total_without_tax'], 'Number');
      }
      if (data.hasOwnProperty('total_tax')) {
        obj['total_tax'] = ApiClient.convertToType(data['total_tax'], 'Number');
      }
      if (data.hasOwnProperty('total_discount')) {
        obj['total_discount'] = ApiClient.convertToType(data['total_discount'], 'Number');
      }
      if (data.hasOwnProperty('total_trial')) {
        obj['total_trial'] = ApiClient.convertToType(data['total_trial'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('total_without_tax_formatted')) {
        obj['total_without_tax_formatted'] = ApiClient.convertToType(data['total_without_tax_formatted'], 'String');
      }
      if (data.hasOwnProperty('total_tax_formatted')) {
        obj['total_tax_formatted'] = ApiClient.convertToType(data['total_tax_formatted'], 'String');
      }
      if (data.hasOwnProperty('total_discount_formatted')) {
        obj['total_discount_formatted'] = ApiClient.convertToType(data['total_discount_formatted'], 'String');
      }
      if (data.hasOwnProperty('total_trial_formatted')) {
        obj['total_trial_formatted'] = ApiClient.convertToType(data['total_trial_formatted'], 'String');
      }
      if (data.hasOwnProperty('total_formatted')) {
        obj['total_formatted'] = ApiClient.convertToType(data['total_formatted'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} cart_id
   */
  exports.prototype['cart_id'] = undefined;
  /**
   * @member {Number} total_without_tax
   */
  exports.prototype['total_without_tax'] = undefined;
  /**
   * @member {Number} total_tax
   */
  exports.prototype['total_tax'] = undefined;
  /**
   * @member {Number} total_discount
   */
  exports.prototype['total_discount'] = undefined;
  /**
   * @member {Number} total_trial
   */
  exports.prototype['total_trial'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {String} total_without_tax_formatted
   */
  exports.prototype['total_without_tax_formatted'] = undefined;
  /**
   * @member {String} total_tax_formatted
   */
  exports.prototype['total_tax_formatted'] = undefined;
  /**
   * @member {String} total_discount_formatted
   */
  exports.prototype['total_discount_formatted'] = undefined;
  /**
   * @member {String} total_trial_formatted
   */
  exports.prototype['total_trial_formatted'] = undefined;
  /**
   * @member {String} total_formatted
   */
  exports.prototype['total_formatted'] = undefined;



  return exports;
}));


