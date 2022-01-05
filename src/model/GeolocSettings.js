/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.5.0
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
    root.KinowJavascriptSdk.GeolocSettings = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GeolocSettings model module.
   * @module model/GeolocSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GeolocSettings</code>.
   * @alias module:model/GeolocSettings
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GeolocSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeolocSettings} obj Optional instance to populate.
   * @return {module:model/GeolocSettings} The populated <code>GeolocSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('geoloc_enabled')) {
        obj['geoloc_enabled'] = ApiClient.convertToType(data['geoloc_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('behavior_detected_countries')) {
        obj['behavior_detected_countries'] = ApiClient.convertToType(data['behavior_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('behavior_non_detected_countries')) {
        obj['behavior_non_detected_countries'] = ApiClient.convertToType(data['behavior_non_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} geoloc_enabled
   */
  exports.prototype['geoloc_enabled'] = undefined;
  /**
   * @member {String} behavior_detected_countries
   */
  exports.prototype['behavior_detected_countries'] = undefined;
  /**
   * @member {String} behavior_non_detected_countries
   */
  exports.prototype['behavior_non_detected_countries'] = undefined;
  /**
   * @member {Array.<String>} countries
   */
  exports.prototype['countries'] = undefined;



  return exports;
}));


