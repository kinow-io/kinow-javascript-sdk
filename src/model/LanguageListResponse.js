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
    define(['ApiClient', 'model/Language', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Language'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.LanguageListResponse = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Language, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Language, Pagination) {
  'use strict';




  /**
   * The LanguageListResponse model module.
   * @module model/LanguageListResponse
   * @version 2.0.7
   */

  /**
   * Constructs a new <code>LanguageListResponse</code>.
   * @alias module:model/LanguageListResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LanguageListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguageListResponse} obj Optional instance to populate.
   * @return {module:model/LanguageListResponse} The populated <code>LanguageListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Language]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Language>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


