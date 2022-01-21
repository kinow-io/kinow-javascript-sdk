/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.2
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
    root.KinowJavascriptSdk.Pagination = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
      if (data.hasOwnProperty('current_page')) {
        obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Integer');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Integer');
      }
      if (data.hasOwnProperty('last_page')) {
        obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Integer');
      }
      if (data.hasOwnProperty('next_page_url')) {
        obj['next_page_url'] = ApiClient.convertToType(data['next_page_url'], 'String');
      }
      if (data.hasOwnProperty('prev_page_url')) {
        obj['prev_page_url'] = ApiClient.convertToType(data['prev_page_url'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Integer');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Integer} current_page
   */
  exports.prototype['current_page'] = undefined;
  /**
   * @member {Integer} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Integer} last_page
   */
  exports.prototype['last_page'] = undefined;
  /**
   * @member {String} next_page_url
   */
  exports.prototype['next_page_url'] = undefined;
  /**
   * @member {String} prev_page_url
   */
  exports.prototype['prev_page_url'] = undefined;
  /**
   * @member {Integer} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Integer} to
   */
  exports.prototype['to'] = undefined;



  return exports;
}));


