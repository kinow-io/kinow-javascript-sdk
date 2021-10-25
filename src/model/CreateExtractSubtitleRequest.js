/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.58
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
    root.KinowJavascriptSdk.CreateExtractSubtitleRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateExtractSubtitleRequest model module.
   * @module model/CreateExtractSubtitleRequest
   * @version 1.4.58
   */

  /**
   * Constructs a new <code>CreateExtractSubtitleRequest</code>.
   * @alias module:model/CreateExtractSubtitleRequest
   * @class
   * @param filename {String} Filename
   * @param name {String} Name
   * @param idLang {Integer} Language ID
   */
  var exports = function(filename, name, idLang) {
    var _this = this;

    _this['filename'] = filename;
    _this['name'] = name;
    _this['id_lang'] = idLang;





  };

  /**
   * Constructs a <code>CreateExtractSubtitleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateExtractSubtitleRequest} obj Optional instance to populate.
   * @return {module:model/CreateExtractSubtitleRequest} The populated <code>CreateExtractSubtitleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id_lang')) {
        obj['id_lang'] = ApiClient.convertToType(data['id_lang'], 'Integer');
      }
      if (data.hasOwnProperty('background')) {
        obj['background'] = ApiClient.convertToType(data['background'], 'Integer');
      }
      if (data.hasOwnProperty('font')) {
        obj['font'] = ApiClient.convertToType(data['font'], 'Integer');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('text_shadow')) {
        obj['text_shadow'] = ApiClient.convertToType(data['text_shadow'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filename
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Language ID
   * @member {Integer} id_lang
   */
  exports.prototype['id_lang'] = undefined;
  /**
   * Background color
   * @member {Integer} background
   */
  exports.prototype['background'] = undefined;
  /**
   * Font name
   * @member {Integer} font
   */
  exports.prototype['font'] = undefined;
  /**
   * Font size
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Font color
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * Text shadow
   * @member {String} text_shadow
   */
  exports.prototype['text_shadow'] = undefined;



  return exports;
}));


