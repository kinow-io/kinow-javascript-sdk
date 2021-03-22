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
    root.KinowJavascriptSdk.Address1 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address1 model module.
   * @module model/Address1
   * @version 1.4.38
   */

  /**
   * Constructs a new <code>Address1</code>.
   * @alias module:model/Address1
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Address1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address1} obj Optional instance to populate.
   * @return {module:model/Address1} The populated <code>Address1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('postcode')) {
        obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('id_state')) {
        obj['id_state'] = ApiClient.convertToType(data['id_state'], 'Integer');
      }
      if (data.hasOwnProperty('id_country')) {
        obj['id_country'] = ApiClient.convertToType(data['id_country'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Company
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Postcode
   * @member {String} postcode
   */
  exports.prototype['postcode'] = undefined;
  /**
   * City
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * State ID
   * @member {Integer} id_state
   */
  exports.prototype['id_state'] = undefined;
  /**
   * Country ID
   * @member {Integer} id_country
   */
  exports.prototype['id_country'] = undefined;



  return exports;
}));


