/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.1
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
    define(['ApiClient', 'model/Extract', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Extract'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Videos1 = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Extract, root.KinowJavascriptSdk.Pagination);
  }
}(this, function(ApiClient, Extract, Pagination) {
  'use strict';




  /**
   * The Videos1 model module.
   * @module model/Videos1
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>Videos1</code>.
   * @alias module:model/Videos1
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Videos1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Videos1} obj Optional instance to populate.
   * @return {module:model/Videos1} The populated <code>Videos1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Extract]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/Extract>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


