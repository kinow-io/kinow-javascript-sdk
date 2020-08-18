/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.79
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
    define(['ApiClient', 'model/CartRuleRestrictionGroupItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartRuleRestrictionGroupItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartRuleRestrictionGroup = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CartRuleRestrictionGroupItem);
  }
}(this, function(ApiClient, CartRuleRestrictionGroupItem) {
  'use strict';




  /**
   * The CartRuleRestrictionGroup model module.
   * @module model/CartRuleRestrictionGroup
   * @version 1.3.79
   */

  /**
   * Constructs a new <code>CartRuleRestrictionGroup</code>.
   * @alias module:model/CartRuleRestrictionGroup
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartRuleRestrictionGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartRuleRestrictionGroup} obj Optional instance to populate.
   * @return {module:model/CartRuleRestrictionGroup} The populated <code>CartRuleRestrictionGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CartRuleRestrictionGroupItem]);
      }
    }
    return obj;
  }

  /**
   * Cart must contain at least product(s) \"X\" matching the following restrictions:
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Array.<module:model/CartRuleRestrictionGroupItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


