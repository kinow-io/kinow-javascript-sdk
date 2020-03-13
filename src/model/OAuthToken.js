/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.50
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
    root.KinowJavascriptSdk.OAuthToken = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OAuthToken model module.
   * @module model/OAuthToken
   * @version 1.3.50
   */

  /**
   * Constructs a new <code>OAuthToken</code>.
   * @alias module:model/OAuthToken
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OAuthToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthToken} obj Optional instance to populate.
   * @return {module:model/OAuthToken} The populated <code>OAuthToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Integer');
      }
      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;
  /**
   * @member {Integer} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;



  return exports;
}));


