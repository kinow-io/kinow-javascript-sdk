/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.78
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
    root.KinowJavascriptSdk.VideoStat = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoStat model module.
   * @module model/VideoStat
   * @version 1.3.78
   */

  /**
   * Constructs a new <code>VideoStat</code>.
   * @alias module:model/VideoStat
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VideoStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoStat} obj Optional instance to populate.
   * @return {module:model/VideoStat} The populated <code>VideoStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Integer');
      }
      if (data.hasOwnProperty('played')) {
        obj['played'] = ApiClient.convertToType(data['played'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('views')) {
        obj['views'] = ApiClient.convertToType(data['views'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * 
   * @member {Integer} played
   */
  exports.prototype['played'] = undefined;
  /**
   * 
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * 
   * @member {Integer} views
   */
  exports.prototype['views'] = undefined;



  return exports;
}));


