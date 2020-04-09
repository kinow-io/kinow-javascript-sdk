/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.60
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
    root.KinowJavascriptSdk.CustomerCurrentViews = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerCurrentViews model module.
   * @module model/CustomerCurrentViews
   * @version 1.3.60
   */

  /**
   * Constructs a new <code>CustomerCurrentViews</code>.
   * @alias module:model/CustomerCurrentViews
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CustomerCurrentViews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerCurrentViews} obj Optional instance to populate.
   * @return {module:model/CustomerCurrentViews} The populated <code>CustomerCurrentViews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Count of the current views for this customer
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));


