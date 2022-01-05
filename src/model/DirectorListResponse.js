/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.5.0
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
    define(['ApiClient', 'model/Director', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Director'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DirectorListResponse = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Director, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Director, Pagination) {
  'use strict';




  /**
   * The DirectorListResponse model module.
   * @module model/DirectorListResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>DirectorListResponse</code>.
   * @alias module:model/DirectorListResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DirectorListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectorListResponse} obj Optional instance to populate.
   * @return {module:model/DirectorListResponse} The populated <code>DirectorListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Director]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Director>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


