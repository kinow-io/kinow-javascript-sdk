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
    root.KinowJavascriptSdk.SubscriptionResponse = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubscriptionResponse model module.
   * @module model/SubscriptionResponse
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>SubscriptionResponse</code>.
   * @alias module:model/SubscriptionResponse
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>SubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionResponse} obj Optional instance to populate.
   * @return {module:model/SubscriptionResponse} The populated <code>SubscriptionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = ApiClient.convertToType(data['download'], 'Boolean');
      }
      if (data.hasOwnProperty('trial_duration')) {
        obj['trial_duration'] = ApiClient.convertToType(data['trial_duration'], 'Integer');
      }
      if (data.hasOwnProperty('trial_percent')) {
        obj['trial_percent'] = ApiClient.convertToType(data['trial_percent'], 'Integer');
      }
      if (data.hasOwnProperty('trial_sub')) {
        obj['trial_sub'] = ApiClient.convertToType(data['trial_sub'], 'Integer');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Boolean');
      }
      if (data.hasOwnProperty('limit_duration')) {
        obj['limit_duration'] = ApiClient.convertToType(data['limit_duration'], 'Integer');
      }
      if (data.hasOwnProperty('alert_type')) {
        obj['alert_type'] = ApiClient.convertToType(data['alert_type'], 'String');
      }
      if (data.hasOwnProperty('alert_qty')) {
        obj['alert_qty'] = ApiClient.convertToType(data['alert_qty'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('recurring_payment')) {
        obj['recurring_payment'] = ApiClient.convertToType(data['recurring_payment'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Boolean} download
   */
  exports.prototype['download'] = undefined;
  /**
   * @member {Integer} trial_duration
   */
  exports.prototype['trial_duration'] = undefined;
  /**
   * @member {Integer} trial_percent
   */
  exports.prototype['trial_percent'] = undefined;
  /**
   * @member {Integer} trial_sub
   */
  exports.prototype['trial_sub'] = undefined;
  /**
   * @member {Boolean} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Integer} limit_duration
   */
  exports.prototype['limit_duration'] = undefined;
  /**
   * @member {String} alert_type
   */
  exports.prototype['alert_type'] = undefined;
  /**
   * @member {Integer} alert_qty
   */
  exports.prototype['alert_qty'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Integer} recurring_payment
   */
  exports.prototype['recurring_payment'] = undefined;



  return exports;
}));

