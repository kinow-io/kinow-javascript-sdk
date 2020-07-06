/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.77
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
    root.KinowJavascriptSdk.ProductAttribute = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAttribute model module.
   * @module model/ProductAttribute
   * @version 1.3.77
   */

  /**
   * Constructs a new <code>ProductAttribute</code>.
   * @alias module:model/ProductAttribute
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ProductAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAttribute} obj Optional instance to populate.
   * @return {module:model/ProductAttribute} The populated <code>ProductAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_mode')) {
        obj['price_mode'] = ApiClient.convertToType(data['price_mode'], 'Number');
      }
      if (data.hasOwnProperty('price_noreduc')) {
        obj['price_noreduc'] = ApiClient.convertToType(data['price_noreduc'], 'Number');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('quality')) {
        obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('watching_duration')) {
        obj['watching_duration'] = ApiClient.convertToType(data['watching_duration'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Integer} video_id
   */
  exports.prototype['video_id'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * 
   * @member {Number} price_mode
   */
  exports.prototype['price_mode'] = undefined;
  /**
   * 
   * @member {Number} price_noreduc
   */
  exports.prototype['price_noreduc'] = undefined;
  /**
   * 
   * @member {String} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} quality
   */
  exports.prototype['quality'] = undefined;
  /**
   * 
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * 
   * @member {Integer} watching_duration
   */
  exports.prototype['watching_duration'] = undefined;
  /**
   * 
   * @member {Integer} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


