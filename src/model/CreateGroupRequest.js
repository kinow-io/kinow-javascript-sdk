/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    root.KinowJavascriptSdk.CreateGroupRequest = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nFieldInput);
  }
}(this, function(ApiClient, I18nFieldInput) {
  'use strict';




  /**
   * The CreateGroupRequest model module.
   * @module model/CreateGroupRequest
   * @version 2.0.28
   */

  /**
   * Constructs a new <code>CreateGroupRequest</code>.
   * @alias module:model/CreateGroupRequest
   * @class
   * @param name {Array.<module:model/I18nFieldInput>} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>CreateGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateGroupRequest} obj Optional instance to populate.
   * @return {module:model/CreateGroupRequest} The populated <code>CreateGroupRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nFieldInput]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/I18nFieldInput>} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


