/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.3
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
    root.KinowJavascriptSdk.AddProductToCartRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddProductToCartRequest model module.
   * @module model/AddProductToCartRequest
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>AddProductToCartRequest</code>.
   * @alias module:model/AddProductToCartRequest
   * @class
   * @param productId {Integer} Product ID to add to cart
   */
  var exports = function(productId) {
    var _this = this;

    _this['product_id'] = productId;





  };

  /**
   * Constructs a <code>AddProductToCartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddProductToCartRequest} obj Optional instance to populate.
   * @return {module:model/AddProductToCartRequest} The populated <code>AddProductToCartRequest</code> instance.
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
      if (data.hasOwnProperty('switch_subscription_id')) {
        obj['switch_subscription_id'] = ApiClient.convertToType(data['switch_subscription_id'], 'Integer');
      }
      if (data.hasOwnProperty('is_gift')) {
        obj['is_gift'] = ApiClient.convertToType(data['is_gift'], 'Boolean');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
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
  /**
   * When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel
   * @member {Integer} switch_subscription_id
   */
  exports.prototype['switch_subscription_id'] = undefined;
  /**
   * Allows bypass of access check (in case the current user already bought the product and it cannot be reordered)
   * @member {Boolean} is_gift
   */
  exports.prototype['is_gift'] = undefined;
  /**
   * IP address
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;



  return exports;
}));


