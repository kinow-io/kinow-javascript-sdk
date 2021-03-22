/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.76
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
    root.KinowJavascriptSdk.MarlinToken = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MarlinToken model module.
   * @module model/MarlinToken
   * @version 1.0.76
   */

  /**
   * Constructs a new <code>MarlinToken</code>.
   * @alias module:model/MarlinToken
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MarlinToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarlinToken} obj Optional instance to populate.
   * @return {module:model/MarlinToken} The populated <code>MarlinToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marlin_token')) {
        obj['marlin_token'] = ApiClient.convertToType(data['marlin_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} marlin_token
   */
  exports.prototype['marlin_token'] = undefined;



  return exports;
}));


