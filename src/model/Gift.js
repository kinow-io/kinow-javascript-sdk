/**
 * Kinow API
 * Client API for Kinow Rest API
 *
 * OpenAPI spec version: 1.4.34
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
    root.KinowJavascriptSdk.Gift = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Gift model module.
   * @module model/Gift
   * @version 1.4.34
   */

  /**
   * Constructs a new <code>Gift</code>.
   * @alias module:model/Gift
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Gift</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gift} obj Optional instance to populate.
   * @return {module:model/Gift} The populated <code>Gift</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
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
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('used')) {
        obj['used'] = ApiClient.convertToType(data['used'], 'Boolean');
      }
      if (data.hasOwnProperty('date_send')) {
        obj['date_send'] = ApiClient.convertToType(data['date_send'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_cart
   */
  exports.prototype['id_cart'] = undefined;
  /**
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Integer} id_product_attribute
   */
  exports.prototype['id_product_attribute'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} used
   */
  exports.prototype['used'] = undefined;
  /**
   * @member {String} date_send
   */
  exports.prototype['date_send'] = undefined;



  return exports;
}));


