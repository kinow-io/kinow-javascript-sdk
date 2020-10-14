/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.12
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
    define(['ApiClient', 'model/ProductPricePrices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductPricePrices'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ProductPrice = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ProductPricePrices);
  }
}(this, function(ApiClient, ProductPricePrices) {
  'use strict';




  /**
   * The ProductPrice model module.
   * @module model/ProductPrice
   * @version 1.4.12
   */

  /**
   * Constructs a new <code>ProductPrice</code>.
   * @alias module:model/ProductPrice
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProductPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPrice} obj Optional instance to populate.
   * @return {module:model/ProductPrice} The populated <code>ProductPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [ProductPricePrices]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Array.<module:model/ProductPricePrices>} prices
   */
  exports.prototype['prices'] = undefined;



  return exports;
}));


