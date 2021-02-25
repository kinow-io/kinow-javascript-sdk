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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Player = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Player model module.
   * @module model/Player
   * @version 1.4.34
   */

  /**
   * Constructs a new <code>Player</code>.
   * @alias module:model/Player
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Player</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Player} obj Optional instance to populate.
   * @return {module:model/Player} The populated <code>Player</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('manifest')) {
        obj['manifest'] = ApiClient.convertToType(data['manifest'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Object} manifest
   */
  exports.prototype['manifest'] = undefined;



  return exports;
}));


