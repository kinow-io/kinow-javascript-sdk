/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.23
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
    define(['ApiClient', 'model/I18nField', 'model/VideoFreeAccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'), require('./VideoFreeAccess'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateVideoRequest = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField, root.KinowJavascriptSdk.VideoFreeAccess);
  }
}(this, function(ApiClient, I18nField, VideoFreeAccess) {
  'use strict';




  /**
   * The CreateVideoRequest model module.
   * @module model/CreateVideoRequest
   * @version 2.0.23
   */

  /**
   * Constructs a new <code>CreateVideoRequest</code>.
   * @alias module:model/CreateVideoRequest
   * @class
   * @param idProduct {Integer} 
   * @param idLanguage {Integer} 
   * @param idMediaSource {Integer} 
   * @param name {Array.<module:model/I18nField>} 
   * @param filename {String} 
   */
  var exports = function(idProduct, idLanguage, idMediaSource, name, filename) {
    var _this = this;

    _this['id_product'] = idProduct;


    _this['id_language'] = idLanguage;

    _this['id_media_source'] = idMediaSource;
    _this['name'] = name;



    _this['filename'] = filename;















  };

  /**
   * Constructs a <code>CreateVideoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateVideoRequest} obj Optional instance to populate.
   * @return {module:model/CreateVideoRequest} The populated <code>CreateVideoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_video_group')) {
        obj['id_video_group'] = ApiClient.convertToType(data['id_video_group'], 'Integer');
      }
      if (data.hasOwnProperty('id_product_image')) {
        obj['id_product_image'] = ApiClient.convertToType(data['id_product_image'], 'Integer');
      }
      if (data.hasOwnProperty('id_language')) {
        obj['id_language'] = ApiClient.convertToType(data['id_language'], 'Integer');
      }
      if (data.hasOwnProperty('language_filter')) {
        obj['language_filter'] = ApiClient.convertToType(data['language_filter'], 'Integer');
      }
      if (data.hasOwnProperty('id_media_source')) {
        obj['id_media_source'] = ApiClient.convertToType(data['id_media_source'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nField]);
      }
      if (data.hasOwnProperty('description_short')) {
        obj['description_short'] = ApiClient.convertToType(data['description_short'], [I18nField]);
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = ApiClient.convertToType(data['subscription'], 'Integer');
      }
      if (data.hasOwnProperty('free')) {
        obj['free'] = ApiClient.convertToType(data['free'], 'Integer');
      }
      if (data.hasOwnProperty('download')) {
        obj['download'] = ApiClient.convertToType(data['download'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('can_watch')) {
        obj['can_watch'] = ApiClient.convertToType(data['can_watch'], 'Boolean');
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('geoloc_enabled')) {
        obj['geoloc_enabled'] = ApiClient.convertToType(data['geoloc_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('behavior_detected_countries')) {
        obj['behavior_detected_countries'] = ApiClient.convertToType(data['behavior_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('behavior_non_detected_countries')) {
        obj['behavior_non_detected_countries'] = ApiClient.convertToType(data['behavior_non_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('has_free_access')) {
        obj['has_free_access'] = VideoFreeAccess.constructFromObject(data['has_free_access']);
      }
      if (data.hasOwnProperty('advertising_url')) {
        obj['advertising_url'] = ApiClient.convertToType(data['advertising_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Integer} id_video_group
   */
  exports.prototype['id_video_group'] = undefined;
  /**
   * @member {Integer} id_product_image
   */
  exports.prototype['id_product_image'] = undefined;
  /**
   * @member {Integer} id_language
   */
  exports.prototype['id_language'] = undefined;
  /**
   * @member {Integer} language_filter
   */
  exports.prototype['language_filter'] = undefined;
  /**
   * @member {Integer} id_media_source
   */
  exports.prototype['id_media_source'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description_short
   */
  exports.prototype['description_short'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Integer} subscription
   */
  exports.prototype['subscription'] = undefined;
  /**
   * @member {Integer} free
   */
  exports.prototype['free'] = undefined;
  /**
   * @member {Integer} download
   */
  exports.prototype['download'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * @member {Boolean} can_watch
   */
  exports.prototype['can_watch'] = undefined;
  /**
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
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
   * @member {module:model/VideoFreeAccess} has_free_access
   */
  exports.prototype['has_free_access'] = undefined;
  /**
   * @member {String} advertising_url
   */
  exports.prototype['advertising_url'] = undefined;



  return exports;
}));


