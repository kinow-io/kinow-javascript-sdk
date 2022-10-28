/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.21
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
    root.KinowJavascriptSdk.RemoveProductFromCartRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveProductFromCartRequest model module.
   * @module model/RemoveProductFromCartRequest
   * @version 2.0.21
   */

  /**
   * Constructs a new <code>RemoveProductFromCartRequest</code>.
   * @alias module:model/RemoveProductFromCartRequest
   * @class
   * @param productId {Integer} Product ID to add to cart
   */
  var exports = function(productId) {
    var _this = this;

    _this['product_id'] = productId;


  };

  /**
   * Constructs a <code>RemoveProductFromCartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveProductFromCartRequest} obj Optional instance to populate.
   * @return {module:model/RemoveProductFromCartRequest} The populated <code>RemoveProductFromCartRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Integer');
      }
      if (data.hasOwnProperty('product_attribute_id')) {
        obj['product_attribute_id'] = ApiClient.convertToType(data['product_attribute_id'], 'Integer');
      }
      if (data.hasOwnProperty('gift_id')) {
        obj['gift_id'] = ApiClient.convertToType(data['gift_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Product ID to add to cart
   * @member {Integer} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * ProductAttribute ID, required to add product to cart if product is not a subscription
   * @member {Integer} product_attribute_id
   */
  exports.prototype['product_attribute_id'] = undefined;
  /**
   * Gift ID linked to the item in cart
   * @member {Integer} gift_id
   */
  exports.prototype['gift_id'] = undefined;



  return exports;
}));


