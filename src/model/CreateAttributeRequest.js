/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.27
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
    root.KinowJavascriptSdk.CreateAttributeRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateAttributeRequest model module.
   * @module model/CreateAttributeRequest
   * @version 2.0.27
   */

  /**
   * Constructs a new <code>CreateAttributeRequest</code>.
   * @alias module:model/CreateAttributeRequest
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CreateAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAttributeRequest} obj Optional instance to populate.
   * @return {module:model/CreateAttributeRequest} The populated <code>CreateAttributeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Integer');
      }
      if (data.hasOwnProperty('video_group_id')) {
        obj['video_group_id'] = ApiClient.convertToType(data['video_group_id'], 'Integer');
      }
      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('quality')) {
        obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_mode')) {
        obj['price_mode'] = ApiClient.convertToType(data['price_mode'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('watching_duration')) {
        obj['watching_duration'] = ApiClient.convertToType(data['watching_duration'], 'Integer');
      }
      if (data.hasOwnProperty('maximum_views')) {
        obj['maximum_views'] = ApiClient.convertToType(data['maximum_views'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Product ID to attach this access
   * @member {Integer} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * Video Group ID to restrict this access
   * @member {Integer} video_group_id
   */
  exports.prototype['video_group_id'] = undefined;
  /**
   * Video ID to restrict this access
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * RENT, BUY or SUBSCRIPTION
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * BOTH (Streaming & Download), STREAMING or DOWNLOAD
   * @member {String} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * ALL, HD or SD
   * @member {String} quality
   */
  exports.prototype['quality'] = undefined;
  /**
   * Retail price to sell this access
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Pre-tax price (0) or price with tax (1)
   * @member {Integer} price_mode
   */
  exports.prototype['price_mode'] = undefined;
  /**
   * Duration in days while user can access videos
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Duration in days while user can watch video after first play
   * @member {Integer} watching_duration
   */
  exports.prototype['watching_duration'] = undefined;
  /**
   * Maximum views a user can watch video
   * @member {Integer} maximum_views
   */
  exports.prototype['maximum_views'] = undefined;



  return exports;
}));


