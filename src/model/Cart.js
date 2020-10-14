/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.12
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
    define(['ApiClient', 'model/CartRule', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartRule'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Cart = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CartRule, root.KinowJavascriptSdk.Product);
  }
}(this, function(ApiClient, CartRule, Product) {
  'use strict';




  /**
   * The Cart model module.
   * @module model/Cart
   * @version 1.4.12
   */

  /**
   * Constructs a new <code>Cart</code>.
   * @alias module:model/Cart
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cart} obj Optional instance to populate.
   * @return {module:model/Cart} The populated <code>Cart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('id_currency')) {
        obj['id_currency'] = ApiClient.convertToType(data['id_currency'], 'Integer');
      }
      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('total_without_tax')) {
        obj['total_without_tax'] = ApiClient.convertToType(data['total_without_tax'], 'Number');
      }
      if (data.hasOwnProperty('total_trial')) {
        obj['total_trial'] = ApiClient.convertToType(data['total_trial'], 'Number');
      }
      if (data.hasOwnProperty('available_checkout_processes')) {
        obj['available_checkout_processes'] = ApiClient.convertToType(data['available_checkout_processes'], ['String']);
      }
      if (data.hasOwnProperty('cart_rules')) {
        obj['cart_rules'] = ApiClient.convertToType(data['cart_rules'], [CartRule]);
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
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
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * 
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * 
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * 
   * @member {Integer} id_currency
   */
  exports.prototype['id_currency'] = undefined;
  /**
   * 
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;
  /**
   * 
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * 
   * @member {Number} total_without_tax
   */
  exports.prototype['total_without_tax'] = undefined;
  /**
   * 
   * @member {Number} total_trial
   */
  exports.prototype['total_trial'] = undefined;
  /**
   * @member {Array.<module:model/Cart.AvailableCheckoutProcessesEnum>} available_checkout_processes
   */
  exports.prototype['available_checkout_processes'] = undefined;
  /**
   * @member {Array.<module:model/CartRule>} cart_rules
   */
  exports.prototype['cart_rules'] = undefined;
  /**
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;


  /**
   * Allowed values for the <code>availableCheckoutProcesses</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AvailableCheckoutProcessesEnum = {
    /**
     * value: "free"
     * @const
     */
    "free": "free",
    /**
     * value: "url"
     * @const
     */
    "url": "url",
    /**
     * value: "payment_intent"
     * @const
     */
    "payment_intent": "payment_intent",
    /**
     * value: "payment_authorization"
     * @const
     */
    "payment_authorization": "payment_authorization"  };


  return exports;
}));


