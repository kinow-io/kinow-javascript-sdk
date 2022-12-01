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
    root.KinowJavascriptSdk.DownloadInformations = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DownloadInformations model module.
   * @module model/DownloadInformations
   * @version 2.0.22
   */

  /**
   * Constructs a new <code>DownloadInformations</code>.
   * @alias module:model/DownloadInformations
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DownloadInformations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadInformations} obj Optional instance to populate.
   * @return {module:model/DownloadInformations} The populated <code>DownloadInformations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source_url')) {
        obj['source_url'] = ApiClient.convertToType(data['source_url'], 'String');
      }
      if (data.hasOwnProperty('manifest')) {
        obj['manifest'] = ApiClient.convertToType(data['manifest'], Object);
      }
      if (data.hasOwnProperty('session_id')) {
        obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
      }
      if (data.hasOwnProperty('captions')) {
        obj['captions'] = ApiClient.convertToType(data['captions'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} source_url
   */
  exports.prototype['source_url'] = undefined;
  /**
   * @member {Object} manifest
   */
  exports.prototype['manifest'] = undefined;
  /**
   * @member {String} session_id
   */
  exports.prototype['session_id'] = undefined;
  /**
   * @member {String} captions
   */
  exports.prototype['captions'] = undefined;



  return exports;
}));


