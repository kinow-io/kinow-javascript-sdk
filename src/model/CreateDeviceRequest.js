/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    root.KinowJavascriptSdk.CreateDeviceRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateDeviceRequest model module.
   * @module model/CreateDeviceRequest
   * @version 2.0.28
   */

  /**
   * Constructs a new <code>CreateDeviceRequest</code>.
   * @alias module:model/CreateDeviceRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CreateDeviceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDeviceRequest} obj Optional instance to populate.
   * @return {module:model/CreateDeviceRequest} The populated <code>CreateDeviceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('fingerprint')) {
        obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('application')) {
        obj['application'] = ApiClient.convertToType(data['application'], 'String');
      }
    }
    return obj;
  }

  /**
   * Customer ID to attach this Device
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * Uniq fingerprint to identify Device
   * @member {String} fingerprint
   */
  exports.prototype['fingerprint'] = undefined;
  /**
   * Device type (eg. Desktop, mobile, STB)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Device OS (eg. Windows 10, iOS, Android)
   * @member {String} os
   */
  exports.prototype['os'] = undefined;
  /**
   * Device application (eg. Chrome, Firefox)
   * @member {String} application
   */
  exports.prototype['application'] = undefined;



  return exports;
}));


