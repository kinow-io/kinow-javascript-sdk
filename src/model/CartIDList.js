/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.14
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
    root.KinowJavascriptSdk.CartIDList = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartIDList model module.
   * @module model/CartIDList
   * @version 1.4.14
   */

  /**
   * Constructs a new <code>CartIDList</code>.
   * @alias module:model/CartIDList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CartIDList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartIDList} obj Optional instance to populate.
   * @return {module:model/CartIDList} The populated <code>CartIDList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart_ids')) {
        obj['cart_ids'] = ApiClient.convertToType(data['cart_ids'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} cart_ids
   */
  exports.prototype['cart_ids'] = undefined;



  return exports;
}));


