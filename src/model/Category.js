/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.5
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
    define(['ApiClient', 'model/I18nField', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Category = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField, root.KinowJavascriptSdk.Image);
  }
}(this, function(ApiClient, I18nField, Image) {
  'use strict';




  /**
   * The Category model module.
   * @module model/Category
   * @version 1.4.5
   */

  /**
   * Constructs a new <code>Category</code>.
   * @alias module:model/Category
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Category} obj Optional instance to populate.
   * @return {module:model/Category} The populated <code>Category</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_parent')) {
        obj['id_parent'] = ApiClient.convertToType(data['id_parent'], 'Integer');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('level_depth')) {
        obj['level_depth'] = ApiClient.convertToType(data['level_depth'], 'Integer');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_title')) {
        obj['meta_title'] = ApiClient.convertToType(data['meta_title'], [I18nField]);
      }
      if (data.hasOwnProperty('link_rewrite')) {
        obj['link_rewrite'] = ApiClient.convertToType(data['link_rewrite'], [I18nField]);
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
   * @member {Integer} id_parent
   */
  exports.prototype['id_parent'] = undefined;
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
  /**
   * 
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {Integer} level_depth
   */
  exports.prototype['level_depth'] = undefined;
  /**
   * 
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} link_rewrite
   */
  exports.prototype['link_rewrite'] = undefined;
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



  return exports;
}));


