/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.22
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
    root.KinowJavascriptSdk.PrepaymentOperationIDList = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PrepaymentOperationIDList model module.
   * @module model/PrepaymentOperationIDList
   * @version 2.0.22
   */

  /**
   * Constructs a new <code>PrepaymentOperationIDList</code>.
   * @alias module:model/PrepaymentOperationIDList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PrepaymentOperationIDList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepaymentOperationIDList} obj Optional instance to populate.
   * @return {module:model/PrepaymentOperationIDList} The populated <code>PrepaymentOperationIDList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prepayment_operation_ids')) {
        obj['prepayment_operation_ids'] = ApiClient.convertToType(data['prepayment_operation_ids'], 'String');
      }
      if (data.hasOwnProperty('currency_id')) {
        obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} prepayment_operation_ids
   */
  exports.prototype['prepayment_operation_ids'] = undefined;
  /**
   * @member {Integer} currency_id
   */
  exports.prototype['currency_id'] = undefined;



  return exports;
}));


