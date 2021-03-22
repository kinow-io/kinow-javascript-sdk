/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.38
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
    root.KinowJavascriptSdk.PlayerConfiguration = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlayerConfiguration model module.
   * @module model/PlayerConfiguration
   * @version 1.4.38
   */

  /**
   * Constructs a new <code>PlayerConfiguration</code>.
   * @alias module:model/PlayerConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PlayerConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerConfiguration} obj Optional instance to populate.
   * @return {module:model/PlayerConfiguration} The populated <code>PlayerConfiguration</code> instance.
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
      if (data.hasOwnProperty('session_id')) {
        obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
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
  /**
   * @member {String} session_id
   */
  exports.prototype['session_id'] = undefined;



  return exports;
}));


