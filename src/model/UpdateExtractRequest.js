/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.13
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
    define(['ApiClient', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.UpdateExtractRequest = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The UpdateExtractRequest model module.
   * @module model/UpdateExtractRequest
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>UpdateExtractRequest</code>.
   * @alias module:model/UpdateExtractRequest
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>UpdateExtractRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateExtractRequest} obj Optional instance to populate.
   * @return {module:model/UpdateExtractRequest} The populated <code>UpdateExtractRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_product_image')) {
        obj['id_product_image'] = ApiClient.convertToType(data['id_product_image'], 'Integer');
      }
      if (data.hasOwnProperty('id_media_player')) {
        obj['id_media_player'] = ApiClient.convertToType(data['id_media_player'], 'Integer');
      }
      if (data.hasOwnProperty('id_media_source')) {
        obj['id_media_source'] = ApiClient.convertToType(data['id_media_source'], 'Integer');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nField]);
      }
      if (data.hasOwnProperty('cover')) {
        obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
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
   * @member {Integer} id_product_image
   */
  exports.prototype['id_product_image'] = undefined;
  /**
   * @member {Integer} id_media_player
   */
  exports.prototype['id_media_player'] = undefined;
  /**
   * @member {Integer} id_media_source
   */
  exports.prototype['id_media_source'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
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
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} cover
   */
  exports.prototype['cover'] = undefined;
  /**
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {String} advertising_url
   */
  exports.prototype['advertising_url'] = undefined;



  return exports;
}));


