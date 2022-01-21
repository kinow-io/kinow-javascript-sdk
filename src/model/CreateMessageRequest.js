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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateMessageRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateMessageRequest model module.
   * @module model/CreateMessageRequest
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>CreateMessageRequest</code>.
   * @alias module:model/CreateMessageRequest
   * @class
   * @param idLang {Integer} Language ID used by user to write his message
   * @param email {String} User email in order to send him a response
   * @param idContact {Integer} Contact ID to send the user message
   * @param message {String} User message
   */
  var exports = function(idLang, email, idContact, message) {
    var _this = this;

    _this['id_lang'] = idLang;

    _this['email'] = email;
    _this['id_contact'] = idContact;
    _this['message'] = message;



  };

  /**
   * Constructs a <code>CreateMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMessageRequest} obj Optional instance to populate.
   * @return {module:model/CreateMessageRequest} The populated <code>CreateMessageRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
      if (data.hasOwnProperty('id_support')) {
        obj['id_support'] = ApiClient.convertToType(data['id_support'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('id_contact')) {
        obj['id_contact'] = ApiClient.convertToType(data['id_contact'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_order')) {
        obj['id_order'] = ApiClient.convertToType(data['id_order'], 'Integer');
      }
      if (data.hasOwnProperty('send_mail')) {
        obj['send_mail'] = ApiClient.convertToType(data['send_mail'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Language ID used by user to write his message
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;
  /**
   * Link the message to a previous message
   * @member {Integer} id_support
   */
  exports.prototype['id_support'] = undefined;
  /**
   * User email in order to send him a response
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Contact ID to send the user message
   * @member {Integer} id_contact
   */
  exports.prototype['id_contact'] = undefined;
  /**
   * User message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Link the message to a product in catalog
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * Link the message to an existing order
   * @member {Integer} id_order
   */
  exports.prototype['id_order'] = undefined;
  /**
   * Send confirmation email to the providen email
   * @member {Boolean} send_mail
   */
  exports.prototype['send_mail'] = undefined;



  return exports;
}));


