/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.18
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
    root.KinowJavascriptSdk.Promotion = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Promotion model module.
   * @module model/Promotion
   * @version 2.0.18
   */

  /**
   * Constructs a new <code>Promotion</code>.
   * @alias module:model/Promotion
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Promotion} obj Optional instance to populate.
   * @return {module:model/Promotion} The populated <code>Promotion</code> instance.
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
      if (data.hasOwnProperty('id_country')) {
        obj['id_country'] = ApiClient.convertToType(data['id_country'], 'Integer');
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} id_country
   */
  exports.prototype['id_country'] = undefined;
  /**
   * Promotion starts when this date is reached
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * Promotion ends when this date is reached
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;



  return exports;
}));


