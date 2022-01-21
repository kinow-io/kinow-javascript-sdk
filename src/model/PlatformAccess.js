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
    root.KinowJavascriptSdk.PlatformAccess = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlatformAccess model module.
   * @module model/PlatformAccess
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>PlatformAccess</code>.
   * @alias module:model/PlatformAccess
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PlatformAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlatformAccess} obj Optional instance to populate.
   * @return {module:model/PlatformAccess} The populated <code>PlatformAccess</code> instance.
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

