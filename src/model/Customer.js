/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.55
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
    root.KinowJavascriptSdk.Customer = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Customer model module.
   * @module model/Customer
   * @version 1.4.55
   */

  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:model/Customer
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customer} obj Optional instance to populate.
   * @return {module:model/Customer} The populated <code>Customer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('id_gender')) {
        obj['id_gender'] = ApiClient.convertToType(data['id_gender'], 'Integer');
      }
      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
      }
      if (data.hasOwnProperty('newsletter')) {
        obj['newsletter'] = ApiClient.convertToType(data['newsletter'], 'Boolean');
      }
      if (data.hasOwnProperty('optin')) {
        obj['optin'] = ApiClient.convertToType(data['optin'], 'Boolean');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = ApiClient.convertToType(data['notification'], 'Boolean');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('max_viewing')) {
        obj['max_viewing'] = ApiClient.convertToType(data['max_viewing'], 'Integer');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('last_passwd_gen')) {
        obj['last_passwd_gen'] = ApiClient.convertToType(data['last_passwd_gen'], 'String');
      }
      if (data.hasOwnProperty('id_country')) {
        obj['id_country'] = ApiClient.convertToType(data['id_country'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Integer} id_gender
   */
  exports.prototype['id_gender'] = undefined;
  /**
   * @member {String} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {Boolean} newsletter
   */
  exports.prototype['newsletter'] = undefined;
  /**
   * @member {Boolean} optin
   */
  exports.prototype['optin'] = undefined;
  /**
   * @member {Boolean} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * @member {Integer} max_viewing
   */
  exports.prototype['max_viewing'] = undefined;
  /**
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * Only available in body
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} last_passwd_gen
   */
  exports.prototype['last_passwd_gen'] = undefined;
  /**
   * Only available in body
   * @member {Integer} id_country
   */
  exports.prototype['id_country'] = undefined;



  return exports;
}));


