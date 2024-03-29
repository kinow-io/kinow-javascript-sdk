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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateFreeGiftRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateFreeGiftRequest model module.
   * @module model/CreateFreeGiftRequest
   * @version 2.0.28
   */

  /**
   * Constructs a new <code>CreateFreeGiftRequest</code>.
   * @alias module:model/CreateFreeGiftRequest
   * @class
   * @param idCustomer {Integer} Customer  ID to attach this Gift
   * @param idProduct {Integer} Product ID to offer
   * @param firstname {String} Recipient firstname
   * @param lastname {String} Recipient lastname
   * @param email {String} Recipient email
   */
  var exports = function(idCustomer, idProduct, firstname, lastname, email) {
    var _this = this;

    _this['id_customer'] = idCustomer;
    _this['id_product'] = idProduct;

    _this['firstname'] = firstname;
    _this['lastname'] = lastname;
    _this['email'] = email;
  };

  /**
   * Constructs a <code>CreateFreeGiftRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFreeGiftRequest} obj Optional instance to populate.
   * @return {module:model/CreateFreeGiftRequest} The populated <code>CreateFreeGiftRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
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
    }
    return obj;
  }

  /**
   * Customer  ID to attach this Gift
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
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



  return exports;
}));


