/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.51
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
    define(['ApiClient', 'model/Pagination', 'model/SessionVideoStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./SessionVideoStat'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SessionVideoStats = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Pagination, root.KinowJavascriptSdk.SessionVideoStat);
  }
}(this, function(ApiClient, Pagination, SessionVideoStat) {
  'use strict';




  /**
   * The SessionVideoStats model module.
   * @module model/SessionVideoStats
   * @version 1.3.51
   */

  /**
   * Constructs a new <code>SessionVideoStats</code>.
   * @alias module:model/SessionVideoStats
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SessionVideoStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionVideoStats} obj Optional instance to populate.
   * @return {module:model/SessionVideoStats} The populated <code>SessionVideoStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SessionVideoStat]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/SessionVideoStat>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


