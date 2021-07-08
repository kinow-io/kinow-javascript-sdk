/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.44
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
    root.KinowJavascriptSdk.CredentialsValidation = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CredentialsValidation model module.
   * @module model/CredentialsValidation
   * @version 1.4.44
   */

  /**
   * Constructs a new <code>CredentialsValidation</code>.
   * @alias module:model/CredentialsValidation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CredentialsValidation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialsValidation} obj Optional instance to populate.
   * @return {module:model/CredentialsValidation} The populated <code>CredentialsValidation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} valid
   */
  exports.prototype['valid'] = undefined;
  /**
   * @member {Integer} customer_id
   */
  exports.prototype['customer_id'] = undefined;



  return exports;
}));


