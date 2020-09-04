/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.3
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
    root.KinowJavascriptSdk.VideoCategory = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoCategory model module.
   * @module model/VideoCategory
   * @version 1.4.3
   */

  /**
   * Constructs a new <code>VideoCategory</code>.
   * @alias module:model/VideoCategory
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>VideoCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoCategory} obj Optional instance to populate.
   * @return {module:model/VideoCategory} The populated <code>VideoCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_category')) {
        obj['id_category'] = ApiClient.convertToType(data['id_category'], 'Integer');
      }
      if (data.hasOwnProperty('id_media_source')) {
        obj['id_media_source'] = ApiClient.convertToType(data['id_media_source'], 'Integer');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
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
   * @member {Integer} id_category
   */
  exports.prototype['id_category'] = undefined;
  /**
   * 
   * @member {Integer} id_media_source
   */
  exports.prototype['id_media_source'] = undefined;
  /**
   * 
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * 
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * 
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * 
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * 
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;



  return exports;
}));


