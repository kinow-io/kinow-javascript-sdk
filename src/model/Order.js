/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient', 'model/OrderHistory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderHistory'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Order = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.OrderHistory);
  }
}(this, function(ApiClient, OrderHistory) {
  'use strict';




  /**
   * The Order model module.
   * @module model/Order
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_order_renew')) {
        obj['id_order_renew'] = ApiClient.convertToType(data['id_order_renew'], 'Integer');
      }
      if (data.hasOwnProperty('id_cart')) {
        obj['id_cart'] = ApiClient.convertToType(data['id_cart'], 'Integer');
      }
      if (data.hasOwnProperty('id_currency')) {
        obj['id_currency'] = ApiClient.convertToType(data['id_currency'], 'Integer');
      }
      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('current_state')) {
        obj['current_state'] = ApiClient.convertToType(data['current_state'], 'Integer');
      }
      if (data.hasOwnProperty('payment')) {
        obj['payment'] = ApiClient.convertToType(data['payment'], 'String');
      }
      if (data.hasOwnProperty('module')) {
        obj['module'] = ApiClient.convertToType(data['module'], 'String');
      }
      if (data.hasOwnProperty('total_discounts')) {
        obj['total_discounts'] = ApiClient.convertToType(data['total_discounts'], 'Number');
      }
      if (data.hasOwnProperty('total_discounts_tax_incl')) {
        obj['total_discounts_tax_incl'] = ApiClient.convertToType(data['total_discounts_tax_incl'], 'Number');
      }
      if (data.hasOwnProperty('total_discounts_tax_excl')) {
        obj['total_discounts_tax_excl'] = ApiClient.convertToType(data['total_discounts_tax_excl'], 'Number');
      }
      if (data.hasOwnProperty('total_paid')) {
        obj['total_paid'] = ApiClient.convertToType(data['total_paid'], 'Number');
      }
      if (data.hasOwnProperty('total_paid_tax_incl')) {
        obj['total_paid_tax_incl'] = ApiClient.convertToType(data['total_paid_tax_incl'], 'Number');
      }
      if (data.hasOwnProperty('total_paid_tax_excl')) {
        obj['total_paid_tax_excl'] = ApiClient.convertToType(data['total_paid_tax_excl'], 'Number');
      }
      if (data.hasOwnProperty('total_products')) {
        obj['total_products'] = ApiClient.convertToType(data['total_products'], 'Number');
      }
      if (data.hasOwnProperty('total_products_wt')) {
        obj['total_products_wt'] = ApiClient.convertToType(data['total_products_wt'], 'Number');
      }
      if (data.hasOwnProperty('conversion_rate')) {
        obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'Integer');
      }
      if (data.hasOwnProperty('invoice_date')) {
        obj['invoice_date'] = ApiClient.convertToType(data['invoice_date'], 'String');
      }
      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('histories')) {
        obj['histories'] = ApiClient.convertToType(data['histories'], [OrderHistory]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_order_renew
   */
  exports.prototype['id_order_renew'] = undefined;
  /**
   * @member {Integer} id_cart
   */
  exports.prototype['id_cart'] = undefined;
  /**
   * @member {Integer} id_currency
   */
  exports.prototype['id_currency'] = undefined;
  /**
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * @member {Integer} current_state
   */
  exports.prototype['current_state'] = undefined;
  /**
   * @member {String} payment
   */
  exports.prototype['payment'] = undefined;
  /**
   * @member {String} module
   */
  exports.prototype['module'] = undefined;
  /**
   * @member {Number} total_discounts
   */
  exports.prototype['total_discounts'] = undefined;
  /**
   * @member {Number} total_discounts_tax_incl
   */
  exports.prototype['total_discounts_tax_incl'] = undefined;
  /**
   * @member {Number} total_discounts_tax_excl
   */
  exports.prototype['total_discounts_tax_excl'] = undefined;
  /**
   * @member {Number} total_paid
   */
  exports.prototype['total_paid'] = undefined;
  /**
   * @member {Number} total_paid_tax_incl
   */
  exports.prototype['total_paid_tax_incl'] = undefined;
  /**
   * @member {Number} total_paid_tax_excl
   */
  exports.prototype['total_paid_tax_excl'] = undefined;
  /**
   * @member {Number} total_products
   */
  exports.prototype['total_products'] = undefined;
  /**
   * @member {Number} total_products_wt
   */
  exports.prototype['total_products_wt'] = undefined;
  /**
   * @member {Number} conversion_rate
   */
  exports.prototype['conversion_rate'] = undefined;
  /**
   * @member {Integer} invoice_number
   */
  exports.prototype['invoice_number'] = undefined;
  /**
   * @member {String} invoice_date
   */
  exports.prototype['invoice_date'] = undefined;
  /**
   * @member {Boolean} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * @member {Array.<module:model/OrderHistory>} histories
   */
  exports.prototype['histories'] = undefined;



  return exports;
}));


