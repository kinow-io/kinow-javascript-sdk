/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.31
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
    define(['ApiClient', 'model/FeatureValue', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureValue'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Feature = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.FeatureValue, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, FeatureValue, I18nField) {
  'use strict';




  /**
   * The Feature model module.
   * @module model/Feature
   * @version 1.4.31
   */

  /**
   * Constructs a new <code>Feature</code>.
   * @alias module:model/Feature
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Feature} obj Optional instance to populate.
   * @return {module:model/Feature} The populated <code>Feature</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('name_i18n')) {
        obj['name_i18n'] = ApiClient.convertToType(data['name_i18n'], [I18nField]);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = FeatureValue.constructFromObject(data['value']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} name_i18n
   */
  exports.prototype['name_i18n'] = undefined;
  /**
   * @member {module:model/FeatureValue} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


