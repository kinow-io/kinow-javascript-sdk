/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.48
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
    root.KinowJavascriptSdk.VideoFreeAccess = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoFreeAccess model module.
   * @module model/VideoFreeAccess
   * @version 1.4.48
   */

  /**
   * Constructs a new <code>VideoFreeAccess</code>.
   * @alias module:model/VideoFreeAccess
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VideoFreeAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoFreeAccess} obj Optional instance to populate.
   * @return {module:model/VideoFreeAccess} The populated <code>VideoFreeAccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hasStreaming')) {
        obj['hasStreaming'] = ApiClient.convertToType(data['hasStreaming'], 'Boolean');
      }
      if (data.hasOwnProperty('hasDownload')) {
        obj['hasDownload'] = ApiClient.convertToType(data['hasDownload'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} hasStreaming
   */
  exports.prototype['hasStreaming'] = undefined;
  /**
   * @member {Boolean} hasDownload
   */
  exports.prototype['hasDownload'] = undefined;



  return exports;
}));


