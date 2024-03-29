/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.28
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
    root.KinowJavascriptSdk.ProductPriceAttribute = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductPriceAttribute model module.
   * @module model/ProductPriceAttribute
   * @version 2.0.28
   */

  /**
   * Constructs a new <code>ProductPriceAttribute</code>.
   * @alias module:model/ProductPriceAttribute
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ProductPriceAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPriceAttribute} obj Optional instance to populate.
   * @return {module:model/ProductPriceAttribute} The populated <code>ProductPriceAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'Integer');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('reduction')) {
        obj['reduction'] = ApiClient.convertToType(data['reduction'], 'Number');
      }
      if (data.hasOwnProperty('price_without_taxes')) {
        obj['price_without_taxes'] = ApiClient.convertToType(data['price_without_taxes'], 'Number');
      }
      if (data.hasOwnProperty('price_without_reduction')) {
        obj['price_without_reduction'] = ApiClient.convertToType(data['price_without_reduction'], 'Number');
      }
      if (data.hasOwnProperty('price_formatted')) {
        obj['price_formatted'] = ApiClient.convertToType(data['price_formatted'], 'String');
      }
      if (data.hasOwnProperty('reduction_formatted')) {
        obj['reduction_formatted'] = ApiClient.convertToType(data['reduction_formatted'], 'String');
      }
      if (data.hasOwnProperty('price_without_taxes_formatted')) {
        obj['price_without_taxes_formatted'] = ApiClient.convertToType(data['price_without_taxes_formatted'], 'String');
      }
      if (data.hasOwnProperty('price_without_reduction_formatted')) {
        obj['price_without_reduction_formatted'] = ApiClient.convertToType(data['price_without_reduction_formatted'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} attribute_id
   */
  exports.prototype['attribute_id'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} reduction
   */
  exports.prototype['reduction'] = undefined;
  /**
   * @member {Number} price_without_taxes
   */
  exports.prototype['price_without_taxes'] = undefined;
  /**
   * @member {Number} price_without_reduction
   */
  exports.prototype['price_without_reduction'] = undefined;
  /**
   * @member {String} price_formatted
   */
  exports.prototype['price_formatted'] = undefined;
  /**
   * @member {String} reduction_formatted
   */
  exports.prototype['reduction_formatted'] = undefined;
  /**
   * @member {String} price_without_taxes_formatted
   */
  exports.prototype['price_without_taxes_formatted'] = undefined;
  /**
   * @member {String} price_without_reduction_formatted
   */
  exports.prototype['price_without_reduction_formatted'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


