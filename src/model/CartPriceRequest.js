/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.20
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
    root.KinowJavascriptSdk.CartPriceRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartPriceRequest model module.
   * @module model/CartPriceRequest
   * @version 2.0.20
   */

  /**
   * Constructs a new <code>CartPriceRequest</code>.
   * @alias module:model/CartPriceRequest
   * @class
   * @param cartIds {String} List of Cart IDs separated by comma, eg. '42,21,84'
   */
  var exports = function(cartIds) {
    var _this = this;

    _this['cart_ids'] = cartIds;

  };

  /**
   * Constructs a <code>CartPriceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartPriceRequest} obj Optional instance to populate.
   * @return {module:model/CartPriceRequest} The populated <code>CartPriceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart_ids')) {
        obj['cart_ids'] = ApiClient.convertToType(data['cart_ids'], 'String');
      }
      if (data.hasOwnProperty('currency_id')) {
        obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * List of Cart IDs separated by comma, eg. '42,21,84'
   * @member {String} cart_ids
   */
  exports.prototype['cart_ids'] = undefined;
  /**
   * ID of the currency to apply
   * @member {Integer} currency_id
   */
  exports.prototype['currency_id'] = undefined;



  return exports;
}));


