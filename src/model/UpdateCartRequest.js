/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.18
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
    root.KinowJavascriptSdk.UpdateCartRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateCartRequest model module.
   * @module model/UpdateCartRequest
   * @version 2.0.18
   */

  /**
   * Constructs a new <code>UpdateCartRequest</code>.
   * @alias module:model/UpdateCartRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UpdateCartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCartRequest} obj Optional instance to populate.
   * @return {module:model/UpdateCartRequest} The populated <code>UpdateCartRequest</code> instance.
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
      if (data.hasOwnProperty('affiliate')) {
        obj['affiliate'] = ApiClient.convertToType(data['affiliate'], 'Integer');
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
  /**
   * Language ID to use in Cart
   * @member {Integer} affiliate
   */
  exports.prototype['affiliate'] = undefined;



  return exports;
}));


