/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.7
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
    root.KinowJavascriptSdk.PageResponse = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The PageResponse model module.
   * @module model/PageResponse
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>PageResponse</code>.
   * @alias module:model/PageResponse
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageResponse} obj Optional instance to populate.
   * @return {module:model/PageResponse} The populated <code>PageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], [I18nField]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nField]);
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], [I18nField]);
      }
      if (data.hasOwnProperty('url_rewrite')) {
        obj['url_rewrite'] = ApiClient.convertToType(data['url_rewrite'], [I18nField]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} page
   */
  exports.prototype['page'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} url_rewrite
   */
  exports.prototype['url_rewrite'] = undefined;



  return exports;
}));


