/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.60
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
    define(['ApiClient', 'model/Pagination', 'model/WidgetHookPhrase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./WidgetHookPhrase'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.WidgetHookPhrases = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Pagination, root.KinowJavascriptSdk.WidgetHookPhrase);
  }
}(this, function(ApiClient, Pagination, WidgetHookPhrase) {
  'use strict';




  /**
   * The WidgetHookPhrases model module.
   * @module model/WidgetHookPhrases
   * @version 1.3.60
   */

  /**
   * Constructs a new <code>WidgetHookPhrases</code>.
   * @alias module:model/WidgetHookPhrases
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>WidgetHookPhrases</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WidgetHookPhrases} obj Optional instance to populate.
   * @return {module:model/WidgetHookPhrases} The populated <code>WidgetHookPhrases</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [WidgetHookPhrase]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/WidgetHookPhrase>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


