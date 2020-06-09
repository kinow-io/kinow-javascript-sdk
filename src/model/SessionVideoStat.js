/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.72
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
    root.KinowJavascriptSdk.SessionVideoStat = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SessionVideoStat model module.
   * @module model/SessionVideoStat
   * @version 1.3.72
   */

  /**
   * Constructs a new <code>SessionVideoStat</code>.
   * @alias module:model/SessionVideoStat
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SessionVideoStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionVideoStat} obj Optional instance to populate.
   * @return {module:model/SessionVideoStat} The populated <code>SessionVideoStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Integer');
      }
      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Integer');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
      if (data.hasOwnProperty('watched_time')) {
        obj['watched_time'] = ApiClient.convertToType(data['watched_time'], 'Number');
      }
      if (data.hasOwnProperty('watched_number')) {
        obj['watched_number'] = ApiClient.convertToType(data['watched_number'], 'Integer');
      }
      if (data.hasOwnProperty('played_number')) {
        obj['played_number'] = ApiClient.convertToType(data['played_number'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * 
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * 
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * 
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;
  /**
   * 
   * @member {Number} watched_time
   */
  exports.prototype['watched_time'] = undefined;
  /**
   * 
   * @member {Integer} watched_number
   */
  exports.prototype['watched_number'] = undefined;
  /**
   * 
   * @member {Integer} played_number
   */
  exports.prototype['played_number'] = undefined;



  return exports;
}));


