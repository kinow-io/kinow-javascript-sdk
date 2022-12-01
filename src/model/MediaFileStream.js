/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.22
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
    root.KinowJavascriptSdk.MediaFileStream = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaFileStream model module.
   * @module model/MediaFileStream
   * @version 2.0.22
   */

  /**
   * Constructs a new <code>MediaFileStream</code>.
   * @alias module:model/MediaFileStream
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MediaFileStream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaFileStream} obj Optional instance to populate.
   * @return {module:model/MediaFileStream} The populated <code>MediaFileStream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('convertible')) {
        obj['convertible'] = ApiClient.convertToType(data['convertible'], 'Boolean');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_end')) {
        obj['date_end'] = ApiClient.convertToType(data['date_end'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Boolean} convertible
   */
  exports.prototype['convertible'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_end
   */
  exports.prototype['date_end'] = undefined;



  return exports;
}));

