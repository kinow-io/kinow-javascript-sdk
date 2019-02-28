/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.74
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
    define(['ApiClient', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CategoryImages = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';




  /**
   * The CategoryImages model module.
   * @module model/CategoryImages
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>CategoryImages</code>.
   * @alias module:model/CategoryImages
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CategoryImages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryImages} obj Optional instance to populate.
   * @return {module:model/CategoryImages} The populated <code>CategoryImages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('coverThumbnail')) {
        obj['coverThumbnail'] = Image.constructFromObject(data['coverThumbnail']);
      }
      if (data.hasOwnProperty('banner')) {
        obj['banner'] = Image.constructFromObject(data['banner']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Image} coverThumbnail
   */
  exports.prototype['coverThumbnail'] = undefined;
  /**
   * @member {module:model/Image} banner
   */
  exports.prototype['banner'] = undefined;



  return exports;
}));


