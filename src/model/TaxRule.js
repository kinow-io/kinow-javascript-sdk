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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.TaxRule = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaxRule model module.
   * @module model/TaxRule
   * @version 2.0.8
   */

  /**
   * Constructs a new <code>TaxRule</code>.
   * @alias module:model/TaxRule
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TaxRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxRule} obj Optional instance to populate.
   * @return {module:model/TaxRule} The populated <code>TaxRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_country')) {
        obj['id_country'] = ApiClient.convertToType(data['id_country'], 'Integer');
      }
      if (data.hasOwnProperty('id_state')) {
        obj['id_state'] = ApiClient.convertToType(data['id_state'], 'Integer');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} id_country
   */
  exports.prototype['id_country'] = undefined;
  /**
   * @member {Integer} id_state
   */
  exports.prototype['id_state'] = undefined;
  /**
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


