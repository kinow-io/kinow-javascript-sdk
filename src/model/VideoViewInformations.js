/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.13
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
    root.KinowJavascriptSdk.VideoViewInformations = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoViewInformations model module.
   * @module model/VideoViewInformations
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>VideoViewInformations</code>.
   * @alias module:model/VideoViewInformations
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VideoViewInformations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoViewInformations} obj Optional instance to populate.
   * @return {module:model/VideoViewInformations} The populated <code>VideoViewInformations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product_video')) {
        obj['id_product_video'] = ApiClient.convertToType(data['id_product_video'], 'Number');
      }
      if (data.hasOwnProperty('view')) {
        obj['view'] = ApiClient.convertToType(data['view'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id_product_video
   */
  exports.prototype['id_product_video'] = undefined;
  /**
   * @member {Boolean} view
   */
  exports.prototype['view'] = undefined;



  return exports;
}));


