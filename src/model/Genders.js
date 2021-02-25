/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.36
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
    define(['ApiClient', 'model/Gender', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Gender'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Genders = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Gender, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Gender, Pagination) {
  'use strict';




  /**
   * The Genders model module.
   * @module model/Genders
   * @version 1.4.36
   */

  /**
   * Constructs a new <code>Genders</code>.
   * @alias module:model/Genders
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Genders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Genders} obj Optional instance to populate.
   * @return {module:model/Genders} The populated <code>Genders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Gender]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/Gender>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


