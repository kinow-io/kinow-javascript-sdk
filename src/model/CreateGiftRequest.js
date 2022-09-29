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
    root.KinowJavascriptSdk.CreateGiftRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateGiftRequest model module.
   * @module model/CreateGiftRequest
   * @version 2.0.18
   */

  /**
   * Constructs a new <code>CreateGiftRequest</code>.
   * @alias module:model/CreateGiftRequest
   * @class
   * @param idCart {Integer} Cart ID to attach this Gift
   * @param idProduct {Integer} Product ID to offer
   * @param firstname {String} Recipient firstname
   * @param lastname {String} Recipient lastname
   * @param email {String} Recipient email
   * @param message {String} Message for the recipient
   */
  var exports = function(idCart, idProduct, firstname, lastname, email, message) {
    var _this = this;

    _this['id_cart'] = idCart;
    _this['id_product'] = idProduct;

    _this['firstname'] = firstname;
    _this['lastname'] = lastname;
    _this['email'] = email;
    _this['message'] = message;



  };

  /**
   * Constructs a <code>CreateGiftRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateGiftRequest} obj Optional instance to populate.
   * @return {module:model/CreateGiftRequest} The populated <code>CreateGiftRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_cart')) {
        obj['id_cart'] = ApiClient.convertToType(data['id_cart'], 'Integer');
      }
      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_product_attribute')) {
        obj['id_product_attribute'] = ApiClient.convertToType(data['id_product_attribute'], 'Integer');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('date_send')) {
        obj['date_send'] = ApiClient.convertToType(data['date_send'], 'String');
      }
      if (data.hasOwnProperty('auto_link')) {
        obj['auto_link'] = ApiClient.convertToType(data['auto_link'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Cart ID to attach this Gift
   * @member {Integer} id_cart
   */
  exports.prototype['id_cart'] = undefined;
  /**
   * Product ID to offer
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * ID Product Attribute to offer
   * @member {Integer} id_product_attribute
   */
  exports.prototype['id_product_attribute'] = undefined;
  /**
   * Recipient firstname
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * Recipient lastname
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * Recipient email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Message for the recipient
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Custom data
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * Date to send the Gift to the recipient
   * @member {String} date_send
   */
  exports.prototype['date_send'] = undefined;
  /**
   * Auto-link Gift to an existing Product in Cart with same IDs - true by default
   * @member {Boolean} auto_link
   */
  exports.prototype['auto_link'] = undefined;



  return exports;
}));


