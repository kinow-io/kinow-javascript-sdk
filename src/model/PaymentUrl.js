/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.25
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
    root.KinowJavascriptSdk.PaymentUrl = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentUrl model module.
   * @module model/PaymentUrl
   * @version 1.4.25
   */

  /**
   * Constructs a new <code>PaymentUrl</code>.
   * @alias module:model/PaymentUrl
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentUrl} obj Optional instance to populate.
   * @return {module:model/PaymentUrl} The populated <code>PaymentUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


