/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.55
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
    root.KinowJavascriptSdk.WidgetFooterMenu = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The WidgetFooterMenu model module.
   * @module model/WidgetFooterMenu
   * @version 1.4.55
   */

  /**
   * Constructs a new <code>WidgetFooterMenu</code>.
   * @alias module:model/WidgetFooterMenu
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>WidgetFooterMenu</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WidgetFooterMenu} obj Optional instance to populate.
   * @return {module:model/WidgetFooterMenu} The populated <code>WidgetFooterMenu</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], [I18nField]);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], [I18nField]);
      }
      if (data.hasOwnProperty('column')) {
        obj['column'] = ApiClient.convertToType(data['column'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
      if (data.hasOwnProperty('blank')) {
        obj['blank'] = ApiClient.convertToType(data['blank'], 'Integer');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} column
   */
  exports.prototype['column'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * @member {Integer} blank
   */
  exports.prototype['blank'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));


