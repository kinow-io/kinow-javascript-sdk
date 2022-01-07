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
    root.KinowJavascriptSdk.UpdateCustomerRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateCustomerRequest model module.
   * @module model/UpdateCustomerRequest
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>UpdateCustomerRequest</code>.
   * @alias module:model/UpdateCustomerRequest
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>UpdateCustomerRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCustomerRequest} obj Optional instance to populate.
   * @return {module:model/UpdateCustomerRequest} The populated <code>UpdateCustomerRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = ApiClient.convertToType(data['notification'], 'Boolean');
      }
      if (data.hasOwnProperty('max_viewing')) {
        obj['max_viewing'] = ApiClient.convertToType(data['max_viewing'], 'Integer');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
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
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;
  /**
   * @member {Boolean} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * @member {Integer} max_viewing
   */
  exports.prototype['max_viewing'] = undefined;
  /**
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;



  return exports;
}));


