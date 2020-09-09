/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.5
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
    root.KinowJavascriptSdk.CartRuleRestrictionGroupItem = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartRuleRestrictionGroupItem model module.
   * @module model/CartRuleRestrictionGroupItem
   * @version 1.4.5
   */

  /**
   * Constructs a new <code>CartRuleRestrictionGroupItem</code>.
   * @alias module:model/CartRuleRestrictionGroupItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartRuleRestrictionGroupItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartRuleRestrictionGroupItem} obj Optional instance to populate.
   * @return {module:model/CartRuleRestrictionGroupItem} The populated <code>CartRuleRestrictionGroupItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id_item')) {
        obj['id_item'] = ApiClient.convertToType(data['id_item'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Can be: product, subscription, category, actor or director
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Item ID to restrict
   * @member {Integer} id_item
   */
  exports.prototype['id_item'] = undefined;



  return exports;
}));


