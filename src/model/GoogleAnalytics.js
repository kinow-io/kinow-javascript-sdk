/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.9
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
    root.KinowJavascriptSdk.GoogleAnalytics = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GoogleAnalytics model module.
   * @module model/GoogleAnalytics
   * @version 1.4.9
   */

  /**
   * Constructs a new <code>GoogleAnalytics</code>.
   * @alias module:model/GoogleAnalytics
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GoogleAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoogleAnalytics} obj Optional instance to populate.
   * @return {module:model/GoogleAnalytics} The populated <code>GoogleAnalytics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('analytics_id')) {
        obj['analytics_id'] = ApiClient.convertToType(data['analytics_id'], 'String');
      }
      if (data.hasOwnProperty('analytics_universal')) {
        obj['analytics_universal'] = ApiClient.convertToType(data['analytics_universal'], 'Boolean');
      }
      if (data.hasOwnProperty('analytics_user_id')) {
        obj['analytics_user_id'] = ApiClient.convertToType(data['analytics_user_id'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} analytics_id
   */
  exports.prototype['analytics_id'] = undefined;
  /**
   * @member {Boolean} analytics_universal
   */
  exports.prototype['analytics_universal'] = undefined;
  /**
   * @member {Boolean} analytics_user_id
   */
  exports.prototype['analytics_user_id'] = undefined;



  return exports;
}));


