/**
 * Kinow API
 * Client API for Kinow Rest API
 *
 * OpenAPI spec version: 1.4.34
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
    root.KinowJavascriptSdk.ProductPriceAttributes = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductPriceAttributes model module.
   * @module model/ProductPriceAttributes
   * @version 1.4.34
   */

  /**
   * Constructs a new <code>ProductPriceAttributes</code>.
   * @alias module:model/ProductPriceAttributes
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ProductPriceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPriceAttributes} obj Optional instance to populate.
   * @return {module:model/ProductPriceAttributes} The populated <code>ProductPriceAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_without_reduction')) {
        obj['price_without_reduction'] = ApiClient.convertToType(data['price_without_reduction'], 'Number');
      }
      if (data.hasOwnProperty('reduction')) {
        obj['reduction'] = ApiClient.convertToType(data['reduction'], 'Number');
      }
      if (data.hasOwnProperty('price_formatted')) {
        obj['price_formatted'] = ApiClient.convertToType(data['price_formatted'], 'String');
      }
      if (data.hasOwnProperty('price_without_reduction_formatted')) {
        obj['price_without_reduction_formatted'] = ApiClient.convertToType(data['price_without_reduction_formatted'], 'String');
      }
      if (data.hasOwnProperty('reduction_formatted')) {
        obj['reduction_formatted'] = ApiClient.convertToType(data['reduction_formatted'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} attribute_id
   */
  exports.prototype['attribute_id'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} price_without_reduction
   */
  exports.prototype['price_without_reduction'] = undefined;
  /**
   * @member {Number} reduction
   */
  exports.prototype['reduction'] = undefined;
  /**
   * @member {String} price_formatted
   */
  exports.prototype['price_formatted'] = undefined;
  /**
   * @member {String} price_without_reduction_formatted
   */
  exports.prototype['price_without_reduction_formatted'] = undefined;
  /**
   * @member {String} reduction_formatted
   */
  exports.prototype['reduction_formatted'] = undefined;



  return exports;
}));


