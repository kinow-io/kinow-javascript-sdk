/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.50
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
    root.KinowJavascriptSdk.PrepaymentOperation = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PrepaymentOperation model module.
   * @module model/PrepaymentOperation
   * @version 1.4.50
   */

  /**
   * Constructs a new <code>PrepaymentOperation</code>.
   * @alias module:model/PrepaymentOperation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PrepaymentOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepaymentOperation} obj Optional instance to populate.
   * @return {module:model/PrepaymentOperation} The populated <code>PrepaymentOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('id_order')) {
        obj['id_order'] = ApiClient.convertToType(data['id_order'], 'Integer');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * @member {Integer} id_order
   */
  exports.prototype['id_order'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;



  return exports;
}));


