/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.40
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
    root.KinowJavascriptSdk.FreeGift1 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FreeGift1 model module.
   * @module model/FreeGift1
   * @version 1.4.40
   */

  /**
   * Constructs a new <code>FreeGift1</code>.
   * @alias module:model/FreeGift1
   * @class
   * @param idProduct {Integer} Product ID to offer
   * @param idCustomer {Integer} Sender Customer ID
   * @param firstname {String} Recipient firstname
   * @param lastname {String} Recipient lastname
   * @param email {String} Recipient email
   */
  var exports = function(idProduct, idCustomer, firstname, lastname, email) {
    var _this = this;

    _this['id_product'] = idProduct;
    _this['id_customer'] = idCustomer;
    _this['firstname'] = firstname;
    _this['lastname'] = lastname;
    _this['email'] = email;
  };

  /**
   * Constructs a <code>FreeGift1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FreeGift1} obj Optional instance to populate.
   * @return {module:model/FreeGift1} The populated <code>FreeGift1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
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
   * Product ID to offer
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * Sender Customer ID
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
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


