/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.3.3
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
    root.KinowJavascriptSdk.Group = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The Group model module.
   * @module model/Group
   * @version 1.3.3
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
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
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
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



  return exports;
}));


