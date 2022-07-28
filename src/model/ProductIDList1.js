/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.15
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
    root.KinowJavascriptSdk.ProductIDList1 = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductIDList1 model module.
   * @module model/ProductIDList1
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>ProductIDList1</code>.
   * @alias module:model/ProductIDList1
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ProductIDList1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductIDList1} obj Optional instance to populate.
   * @return {module:model/ProductIDList1} The populated <code>ProductIDList1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product_ids')) {
        obj['product_ids'] = ApiClient.convertToType(data['product_ids'], 'String');
      }
      if (data.hasOwnProperty('currency_id')) {
        obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'Integer');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Integer');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} product_ids
   */
  exports.prototype['product_ids'] = undefined;
  /**
   * @member {Integer} currency_id
   */
  exports.prototype['currency_id'] = undefined;
  /**
   * @member {Integer} customer_id
   */
  exports.prototype['customer_id'] = undefined;
  /**
   * Required when Customer ID is empty
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;



  return exports;
}));


