/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.26
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
    root.KinowJavascriptSdk.CMSPage = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The CMSPage model module.
   * @module model/CMSPage
   * @version 1.4.26
   */

  /**
   * Constructs a new <code>CMSPage</code>.
   * @alias module:model/CMSPage
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CMSPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CMSPage} obj Optional instance to populate.
   * @return {module:model/CMSPage} The populated <code>CMSPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_cms_category')) {
        obj['id_cms_category'] = ApiClient.convertToType(data['id_cms_category'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('link_rewrite')) {
        obj['link_rewrite'] = ApiClient.convertToType(data['link_rewrite'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_title')) {
        obj['meta_title'] = ApiClient.convertToType(data['meta_title'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], [I18nField]);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [I18nField]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_cms_category
   */
  exports.prototype['id_cms_category'] = undefined;
  /**
   * $active
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} link_rewrite
   */
  exports.prototype['link_rewrite'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


