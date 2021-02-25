/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.37
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
    root.KinowJavascriptSdk.VideoAccessInfo = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoAccessInfo model module.
   * @module model/VideoAccessInfo
   * @version 1.4.37
   */

  /**
   * Constructs a new <code>VideoAccessInfo</code>.
   * @alias module:model/VideoAccessInfo
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>VideoAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoAccessInfo} obj Optional instance to populate.
   * @return {module:model/VideoAccessInfo} The populated <code>VideoAccessInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_video')) {
        obj['id_video'] = ApiClient.convertToType(data['id_video'], 'Number');
      }
      if (data.hasOwnProperty('streaming')) {
        obj['streaming'] = ApiClient.convertToType(data['streaming'], 'Boolean');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = ApiClient.convertToType(data['download'], 'Boolean');
      }
      if (data.hasOwnProperty('maximum_watched')) {
        obj['maximum_watched'] = ApiClient.convertToType(data['maximum_watched'], 'Boolean');
      }
      if (data.hasOwnProperty('maximum_viewing')) {
        obj['maximum_viewing'] = ApiClient.convertToType(data['maximum_viewing'], 'Boolean');
      }
      if (data.hasOwnProperty('quality_hd')) {
        obj['quality_hd'] = ApiClient.convertToType(data['quality_hd'], 'Boolean');
      }
      if (data.hasOwnProperty('quality_sd')) {
        obj['quality_sd'] = ApiClient.convertToType(data['quality_sd'], 'Boolean');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'String');
      }
      if (data.hasOwnProperty('play_duration')) {
        obj['play_duration'] = ApiClient.convertToType(data['play_duration'], 'Number');
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id_video
   */
  exports.prototype['id_video'] = undefined;
  /**
   * @member {Boolean} streaming
   */
  exports.prototype['streaming'] = undefined;
  /**
   * @member {Boolean} download
   */
  exports.prototype['download'] = undefined;
  /**
   * @member {Boolean} maximum_watched
   */
  exports.prototype['maximum_watched'] = undefined;
  /**
   * @member {Boolean} maximum_viewing
   */
  exports.prototype['maximum_viewing'] = undefined;
  /**
   * @member {Boolean} quality_hd
   */
  exports.prototype['quality_hd'] = undefined;
  /**
   * @member {Boolean} quality_sd
   */
  exports.prototype['quality_sd'] = undefined;
  /**
   * @member {String} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {Number} play_duration
   */
  exports.prototype['play_duration'] = undefined;
  /**
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;



  return exports;
}));


