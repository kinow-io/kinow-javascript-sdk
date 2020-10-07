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
    root.KinowJavascriptSdk.SocialSettings = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SocialSettings model module.
   * @module model/SocialSettings
   * @version 1.4.9
   */

  /**
   * Constructs a new <code>SocialSettings</code>.
   * @alias module:model/SocialSettings
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SocialSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocialSettings} obj Optional instance to populate.
   * @return {module:model/SocialSettings} The populated <code>SocialSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
      if (data.hasOwnProperty('youtube')) {
        obj['youtube'] = ApiClient.convertToType(data['youtube'], 'String');
      }
      if (data.hasOwnProperty('pinterest')) {
        obj['pinterest'] = ApiClient.convertToType(data['pinterest'], 'String');
      }
      if (data.hasOwnProperty('dailymotion')) {
        obj['dailymotion'] = ApiClient.convertToType(data['dailymotion'], 'String');
      }
      if (data.hasOwnProperty('tumblr')) {
        obj['tumblr'] = ApiClient.convertToType(data['tumblr'], 'String');
      }
      if (data.hasOwnProperty('myspace')) {
        obj['myspace'] = ApiClient.convertToType(data['myspace'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;
  /**
   * @member {String} youtube
   */
  exports.prototype['youtube'] = undefined;
  /**
   * @member {String} pinterest
   */
  exports.prototype['pinterest'] = undefined;
  /**
   * @member {String} dailymotion
   */
  exports.prototype['dailymotion'] = undefined;
  /**
   * @member {String} tumblr
   */
  exports.prototype['tumblr'] = undefined;
  /**
   * @member {String} myspace
   */
  exports.prototype['myspace'] = undefined;



  return exports;
}));


