/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.41
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
    root.KinowJavascriptSdk.VideoViews = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoViews model module.
   * @module model/VideoViews
   * @version 1.4.41
   */

  /**
   * Constructs a new <code>VideoViews</code>.
   * @alias module:model/VideoViews
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VideoViews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoViews} obj Optional instance to populate.
   * @return {module:model/VideoViews} The populated <code>VideoViews</code> instance.
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
   * Video ID
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * Number of times the video was played
   * @member {Integer} played
   */
  exports.prototype['played'] = undefined;
  /**
   * Total viewing time
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Total number of views
   * @member {Integer} views
   */
  exports.prototype['views'] = undefined;



  return exports;
}));


