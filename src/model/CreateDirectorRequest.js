/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.8
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
    define(['ApiClient', 'model/I18nFieldInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nFieldInput'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateDirectorRequest = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nFieldInput);
  }
}(this, function(ApiClient, I18nFieldInput) {
  'use strict';




  /**
   * The CreateDirectorRequest model module.
   * @module model/CreateDirectorRequest
   * @version 2.0.8
   */

  /**
   * Constructs a new <code>CreateDirectorRequest</code>.
   * @alias module:model/CreateDirectorRequest
   * @class
   * @param name {String} 
   * @param linkRewrite {Array.<module:model/I18nFieldInput>} 
   */
  var exports = function(name, linkRewrite) {
    var _this = this;

    _this['name'] = name;





    _this['link_rewrite'] = linkRewrite;

  };

  /**
   * Constructs a <code>CreateDirectorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDirectorRequest} obj Optional instance to populate.
   * @return {module:model/CreateDirectorRequest} The populated <code>CreateDirectorRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description_short')) {
        obj['description_short'] = ApiClient.convertToType(data['description_short'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('meta_title')) {
        obj['meta_title'] = ApiClient.convertToType(data['meta_title'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('link_rewrite')) {
        obj['link_rewrite'] = ApiClient.convertToType(data['link_rewrite'], [I18nFieldInput]);
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} description_short
   */
  exports.prototype['description_short'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * @member {Array.<module:model/I18nFieldInput>} link_rewrite
   */
  exports.prototype['link_rewrite'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


