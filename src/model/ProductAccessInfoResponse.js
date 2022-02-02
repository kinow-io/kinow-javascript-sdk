/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.5
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
    root.KinowJavascriptSdk.ProductAccessInfoResponse = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAccessInfoResponse model module.
   * @module model/ProductAccessInfoResponse
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>ProductAccessInfoResponse</code>.
   * @alias module:model/ProductAccessInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ProductAccessInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAccessInfoResponse} obj Optional instance to populate.
   * @return {module:model/ProductAccessInfoResponse} The populated <code>ProductAccessInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Number');
      }
      if (data.hasOwnProperty('can_see')) {
        obj['can_see'] = ApiClient.convertToType(data['can_see'], 'Boolean');
      }
      if (data.hasOwnProperty('can_buy')) {
        obj['can_buy'] = ApiClient.convertToType(data['can_buy'], 'Boolean');
      }
      if (data.hasOwnProperty('can_watch')) {
        obj['can_watch'] = ApiClient.convertToType(data['can_watch'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * @member {Boolean} can_see
   */
  exports.prototype['can_see'] = undefined;
  /**
   * @member {Boolean} can_buy
   */
  exports.prototype['can_buy'] = undefined;
  /**
   * @member {Boolean} can_watch
   */
  exports.prototype['can_watch'] = undefined;



  return exports;
}));


