/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.12
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
    root.KinowJavascriptSdk.CreateVideoStatSessionRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateVideoStatSessionRequest model module.
   * @module model/CreateVideoStatSessionRequest
   * @version 2.0.12
   */

  /**
   * Constructs a new <code>CreateVideoStatSessionRequest</code>.
   * @alias module:model/CreateVideoStatSessionRequest
   * @class
   * @param customerId {Integer} 
   * @param videoId {Integer} 
   * @param _date {String} 
   * @param watchedTime {Integer} 
   * @param userAgent {String} 
   */
  var exports = function(customerId, videoId, _date, watchedTime, userAgent) {
    var _this = this;

    _this['customer_id'] = customerId;
    _this['video_id'] = videoId;
    _this['date'] = _date;
    _this['watched_time'] = watchedTime;
    _this['user_agent'] = userAgent;





  };

  /**
   * Constructs a <code>CreateVideoStatSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateVideoStatSessionRequest} obj Optional instance to populate.
   * @return {module:model/CreateVideoStatSessionRequest} The populated <code>CreateVideoStatSessionRequest</code> instance.
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
      if (data.hasOwnProperty('watched_time')) {
        obj['watched_time'] = ApiClient.convertToType(data['watched_time'], 'Integer');
      }
      if (data.hasOwnProperty('user_agent')) {
        obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('access_id')) {
        obj['access_id'] = ApiClient.convertToType(data['access_id'], 'Integer');
      }
      if (data.hasOwnProperty('device_id')) {
        obj['device_id'] = ApiClient.convertToType(data['device_id'], 'Integer');
      }
      if (data.hasOwnProperty('seek')) {
        obj['seek'] = ApiClient.convertToType(data['seek'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Integer} watched_time
   */
  exports.prototype['watched_time'] = undefined;
  /**
   * @member {String} user_agent
   */
  exports.prototype['user_agent'] = undefined;
  /**
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;
  /**
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {Integer} access_id
   */
  exports.prototype['access_id'] = undefined;
  /**
   * @member {Integer} device_id
   */
  exports.prototype['device_id'] = undefined;
  /**
   * @member {Number} seek
   */
  exports.prototype['seek'] = undefined;



  return exports;
}));


