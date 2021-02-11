/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.31
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
    root.KinowJavascriptSdk.PlatformAccessInfo = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlatformAccessInfo model module.
   * @module model/PlatformAccessInfo
   * @version 1.4.31
   */

  /**
   * Constructs a new <code>PlatformAccessInfo</code>.
   * @alias module:model/PlatformAccessInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PlatformAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlatformAccessInfo} obj Optional instance to populate.
   * @return {module:model/PlatformAccessInfo} The populated <code>PlatformAccessInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('can_access')) {
        obj['can_access'] = ApiClient.convertToType(data['can_access'], 'Boolean');
      }
      if (data.hasOwnProperty('can_buy')) {
        obj['can_buy'] = ApiClient.convertToType(data['can_buy'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} can_access
   */
  exports.prototype['can_access'] = undefined;
  /**
   * @member {Boolean} can_buy
   */
  exports.prototype['can_buy'] = undefined;



  return exports;
}));


