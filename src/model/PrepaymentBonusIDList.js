/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.7
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
    root.KinowJavascriptSdk.PrepaymentBonusIDList = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PrepaymentBonusIDList model module.
   * @module model/PrepaymentBonusIDList
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>PrepaymentBonusIDList</code>.
   * @alias module:model/PrepaymentBonusIDList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PrepaymentBonusIDList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepaymentBonusIDList} obj Optional instance to populate.
   * @return {module:model/PrepaymentBonusIDList} The populated <code>PrepaymentBonusIDList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prepayment_bonus_ids')) {
        obj['prepayment_bonus_ids'] = ApiClient.convertToType(data['prepayment_bonus_ids'], 'String');
      }
      if (data.hasOwnProperty('currency_id')) {
        obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} prepayment_bonus_ids
   */
  exports.prototype['prepayment_bonus_ids'] = undefined;
  /**
   * @member {Integer} currency_id
   */
  exports.prototype['currency_id'] = undefined;



  return exports;
}));


