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
    root.KinowJavascriptSdk.UpdateProductAccessRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateProductAccessRequest model module.
   * @module model/UpdateProductAccessRequest
   * @version 2.0.23
   */

  /**
   * Constructs a new <code>UpdateProductAccessRequest</code>.
   * @alias module:model/UpdateProductAccessRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>UpdateProductAccessRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateProductAccessRequest} obj Optional instance to populate.
   * @return {module:model/UpdateProductAccessRequest} The populated <code>UpdateProductAccessRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_product_attribute')) {
        obj['id_product_attribute'] = ApiClient.convertToType(data['id_product_attribute'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Integer');
      }
      if (data.hasOwnProperty('date_exp')) {
        obj['date_exp'] = ApiClient.convertToType(data['date_exp'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Integer} id_product_attribute
   */
  exports.prototype['id_product_attribute'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Integer} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} date_exp
   */
  exports.prototype['date_exp'] = undefined;



  return exports;
}));


