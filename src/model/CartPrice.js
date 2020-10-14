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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartPrice = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartPrice model module.
   * @module model/CartPrice
   * @version 1.4.12
   */

  /**
   * Constructs a new <code>CartPrice</code>.
   * @alias module:model/CartPrice
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CartPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartPrice} obj Optional instance to populate.
   * @return {module:model/CartPrice} The populated <code>CartPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_cart')) {
        obj['id_cart'] = ApiClient.convertToType(data['id_cart'], 'Integer');
      }
      if (data.hasOwnProperty('total_without_tax')) {
        obj['total_without_tax'] = ApiClient.convertToType(data['total_without_tax'], 'Number');
      }
      if (data.hasOwnProperty('total_discount')) {
        obj['total_discount'] = ApiClient.convertToType(data['total_discount'], 'Number');
      }
      if (data.hasOwnProperty('total_trial')) {
        obj['total_trial'] = ApiClient.convertToType(data['total_trial'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id_cart
   */
  exports.prototype['id_cart'] = undefined;
  /**
   * 
   * @member {Number} total_without_tax
   */
  exports.prototype['total_without_tax'] = undefined;
  /**
   * 
   * @member {Number} total_discount
   */
  exports.prototype['total_discount'] = undefined;
  /**
   * 
   * @member {Number} total_trial
   */
  exports.prototype['total_trial'] = undefined;
  /**
   * 
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


