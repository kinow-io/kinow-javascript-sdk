/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.23
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
    root.KinowJavascriptSdk.ConvertMediaLiveRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ConvertMediaLiveRequest model module.
   * @module model/ConvertMediaLiveRequest
   * @version 2.0.23
   */

  /**
   * Constructs a new <code>ConvertMediaLiveRequest</code>.
   * @alias module:model/ConvertMediaLiveRequest
   * @class
   * @param streamId {String} 
   */
  var exports = function(streamId) {
    var _this = this;

    _this['stream_id'] = streamId;
  };

  /**
   * Constructs a <code>ConvertMediaLiveRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvertMediaLiveRequest} obj Optional instance to populate.
   * @return {module:model/ConvertMediaLiveRequest} The populated <code>ConvertMediaLiveRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stream_id')) {
        obj['stream_id'] = ApiClient.convertToType(data['stream_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} stream_id
   */
  exports.prototype['stream_id'] = undefined;



  return exports;
}));


