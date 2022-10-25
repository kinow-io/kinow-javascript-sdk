/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.20
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
    define(['ApiClient', 'model/I18nField', 'model/I18nFieldInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'), require('./I18nFieldInput'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CreateProductRequest = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField, root.KinowJavascriptSdk.I18nFieldInput);
  }
}(this, function(ApiClient, I18nField, I18nFieldInput) {
  'use strict';




  /**
   * The CreateProductRequest model module.
   * @module model/CreateProductRequest
   * @version 2.0.20
   */

  /**
   * Constructs a new <code>CreateProductRequest</code>.
   * @alias module:model/CreateProductRequest
   * @class
   * @param name {Array.<module:model/I18nFieldInput>} 
   * @param linkRewrite {Array.<module:model/I18nFieldInput>} 
   * @param idCategoryDefault {Integer} 
   */
  var exports = function(name, linkRewrite, idCategoryDefault) {
    var _this = this;

    _this['name'] = name;





    _this['link_rewrite'] = linkRewrite;






    _this['id_category_default'] = idCategoryDefault;

  };

  /**
   * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateProductRequest} obj Optional instance to populate.
   * @return {module:model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nFieldInput]);
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
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('availability_before')) {
        obj['availability_before'] = ApiClient.convertToType(data['availability_before'], 'Integer');
      }
      if (data.hasOwnProperty('availability_after')) {
        obj['availability_after'] = ApiClient.convertToType(data['availability_after'], 'Integer');
      }
      if (data.hasOwnProperty('id_category_default')) {
        obj['id_category_default'] = ApiClient.convertToType(data['id_category_default'], 'Integer');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [I18nField]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/I18nFieldInput>} name
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
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * Value can be 0, 1 or 2
   * @member {Integer} availability_before
   */
  exports.prototype['availability_before'] = undefined;
  /**
   * Value can be 0, 1 or 2
   * @member {Integer} availability_after
   */
  exports.prototype['availability_after'] = undefined;
  /**
   * @member {Integer} id_category_default
   */
  exports.prototype['id_category_default'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


