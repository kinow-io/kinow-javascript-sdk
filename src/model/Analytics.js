/**
 * Kinow API
 * Client API for Kinow Rest API
 *
 * OpenAPI spec version: 1.4.34
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
    define(['ApiClient', 'model/Analytic', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Analytic'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Analytics = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Analytic, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Analytic, Pagination) {
  'use strict';




  /**
   * The Analytics model module.
   * @module model/Analytics
   * @version 1.4.34
   */

  /**
   * Constructs a new <code>Analytics</code>.
   * @alias module:model/Analytics
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Analytics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Analytics} obj Optional instance to populate.
   * @return {module:model/Analytics} The populated <code>Analytics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Analytic]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/Analytic>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


