/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.45
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
    root.KinowJavascriptSdk.Gift2 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Gift2 model module.
   * @module model/Gift2
   * @version 1.3.45
   */

  /**
   * Constructs a new <code>Gift2</code>.
   * @alias module:model/Gift2
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Gift2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gift2} obj Optional instance to populate.
   * @return {module:model/Gift2} The populated <code>Gift2</code> instance.
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
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('date_send')) {
        obj['date_send'] = ApiClient.convertToType(data['date_send'], 'String');
      }
    }
    return obj;
  }

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



  return exports;
}));


