/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.53
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
    define(['ApiClient', 'model/Configuration', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Configuration'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ConfigurationList = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Configuration, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Configuration, Pagination) {
  'use strict';




  /**
   * The ConfigurationList model module.
   * @module model/ConfigurationList
   * @version 1.4.53
   */

  /**
   * Constructs a new <code>ConfigurationList</code>.
   * @alias module:model/ConfigurationList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ConfigurationList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigurationList} obj Optional instance to populate.
   * @return {module:model/ConfigurationList} The populated <code>ConfigurationList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Configuration]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/Configuration>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


