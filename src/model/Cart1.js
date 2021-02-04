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
    root.KinowJavascriptSdk.Cart1 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Cart1 model module.
   * @module model/Cart1
   * @version 1.4.30
   */

  /**
   * Constructs a new <code>Cart1</code>.
   * @alias module:model/Cart1
   * @class
   * @param idCustomer {Integer} Customer ID to attach this Cart
   * @param idCurrency {Integer} Currency ID to use in Cart
   * @param idLang {Integer} Language ID to use in Cart
   */
  var exports = function(idCustomer, idCurrency, idLang) {
    var _this = this;

    _this['id_customer'] = idCustomer;
    _this['id_currency'] = idCurrency;
    _this['id_lang'] = idLang;
  };

  /**
   * Constructs a <code>Cart1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cart1} obj Optional instance to populate.
   * @return {module:model/Cart1} The populated <code>Cart1</code> instance.
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


