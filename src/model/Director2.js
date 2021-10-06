/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.53
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
    root.KinowJavascriptSdk.Director2 = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The Director2 model module.
   * @module model/Director2
   * @version 1.4.53
   */

  /**
   * Constructs a new <code>Director2</code>.
   * @alias module:model/Director2
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Director2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Director2} obj Optional instance to populate.
   * @return {module:model/Director2} The populated <code>Director2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description_short')) {
        obj['description_short'] = ApiClient.convertToType(data['description_short'], [I18nField]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nField]);
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
      if (data.hasOwnProperty('link_rewrite')) {
        obj['link_rewrite'] = ApiClient.convertToType(data['link_rewrite'], [I18nField]);
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Director's name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Director's short description
   * @member {Array.<module:model/I18nField>} description_short
   */
  exports.prototype['description_short'] = undefined;
  /**
   * Director's description
   * @member {Array.<module:model/I18nField>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Title page for search engines
   * @member {Array.<module:model/I18nField>} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * Short description for search engines
   * @member {Array.<module:model/I18nField>} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * List of keywords for search engines
   * @member {Array.<module:model/I18nField>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * Friendly URL used to reach real page
   * @member {Array.<module:model/I18nField>} link_rewrite
   */
  exports.prototype['link_rewrite'] = undefined;
  /**
   * Director's status
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


