/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.51
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
    root.KinowJavascriptSdk.Cart2 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Cart2 model module.
   * @module model/Cart2
   * @version 1.4.51
   */

  /**
   * Constructs a new <code>Cart2</code>.
   * @alias module:model/Cart2
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Cart2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cart2} obj Optional instance to populate.
   * @return {module:model/Cart2} The populated <code>Cart2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('id_currency')) {
        obj['id_currency'] = ApiClient.convertToType(data['id_currency'], 'Integer');
      }
      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Customer ID to attach this Cart
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * Currency ID to use in Cart
   * @member {Integer} id_currency
   */
  exports.prototype['id_currency'] = undefined;
  /**
   * Language ID to use in Cart
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;



  return exports;
}));


