/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.5.1
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
    root.KinowJavascriptSdk.CartIDList = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartIDList model module.
   * @module model/CartIDList
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>CartIDList</code>.
   * @alias module:model/CartIDList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CartIDList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartIDList} obj Optional instance to populate.
   * @return {module:model/CartIDList} The populated <code>CartIDList</code> instance.
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
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} cart_ids
   */
  exports.prototype['cart_ids'] = undefined;
  /**
   * @member {Integer} currency_id
   */
  exports.prototype['currency_id'] = undefined;
  /**
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;



  return exports;
}));


