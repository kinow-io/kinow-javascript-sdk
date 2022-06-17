/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.12
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
    define(['ApiClient', 'model/Pagination', 'model/PaymentModule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./PaymentModule'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PaymentModuleListResponse1 = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Pagination, root.KinowJavascriptSdk.PaymentModule);
  }
}(this, function(ApiClient, Pagination, PaymentModule) {
  'use strict';




  /**
   * The PaymentModuleListResponse1 model module.
   * @module model/PaymentModuleListResponse1
   * @version 2.0.12
   */

  /**
   * Constructs a new <code>PaymentModuleListResponse1</code>.
   * @alias module:model/PaymentModuleListResponse1
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentModuleListResponse1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentModuleListResponse1} obj Optional instance to populate.
   * @return {module:model/PaymentModuleListResponse1} The populated <code>PaymentModuleListResponse1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [PaymentModule]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/PaymentModule>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


