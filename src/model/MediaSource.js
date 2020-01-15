/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.44
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
    root.KinowJavascriptSdk.MediaSource = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaSource model module.
   * @module model/MediaSource
   * @version 1.3.44
   */

  /**
   * Constructs a new <code>MediaSource</code>.
   * @alias module:model/MediaSource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MediaSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaSource} obj Optional instance to populate.
   * @return {module:model/MediaSource} The populated <code>MediaSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('external_player')) {
        obj['external_player'] = ApiClient.convertToType(data['external_player'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {Integer} external_player
   */
  exports.prototype['external_player'] = undefined;



  return exports;
}));


