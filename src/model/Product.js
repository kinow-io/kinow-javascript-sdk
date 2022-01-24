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
    define(['ApiClient', 'model/I18nField', 'model/Image', 'model/ProductAttribute', 'model/ProductCategories', 'model/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'), require('./Image'), require('./ProductAttribute'), require('./ProductCategories'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Product = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField, root.KinowJavascriptSdk.Image, root.KinowJavascriptSdk.ProductAttribute, root.KinowJavascriptSdk.ProductCategories, root.KinowJavascriptSdk.Tag);
  }
}(this, function(ApiClient, I18nField, Image, ProductAttribute, ProductCategories, Tag) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
    var _this = this;




































  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('visible_before_publication')) {
        obj['visible_before_publication'] = ApiClient.convertToType(data['visible_before_publication'], 'Boolean');
      }
      if (data.hasOwnProperty('visible_after_publication')) {
        obj['visible_after_publication'] = ApiClient.convertToType(data['visible_after_publication'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Integer');
      }
      if (data.hasOwnProperty('price_mode')) {
        obj['price_mode'] = ApiClient.convertToType(data['price_mode'], 'Integer');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('available_for_order')) {
        obj['available_for_order'] = ApiClient.convertToType(data['available_for_order'], 'Boolean');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'Integer');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'Integer');
      }
      if (data.hasOwnProperty('id_category_default')) {
        obj['id_category_default'] = ApiClient.convertToType(data['id_category_default'], 'Integer');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], [ProductAttribute]);
      }
      if (data.hasOwnProperty('meta_description')) {
        obj['meta_description'] = ApiClient.convertToType(data['meta_description'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_keywords')) {
        obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], [I18nField]);
      }
      if (data.hasOwnProperty('meta_title')) {
        obj['meta_title'] = ApiClient.convertToType(data['meta_title'], [I18nField]);
      }
      if (data.hasOwnProperty('link_rewrite')) {
        obj['link_rewrite'] = ApiClient.convertToType(data['link_rewrite'], [I18nField]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], [I18nField]);
      }
      if (data.hasOwnProperty('description_short')) {
        obj['description_short'] = ApiClient.convertToType(data['description_short'], [I18nField]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
      if (data.hasOwnProperty('can_buy')) {
        obj['can_buy'] = ApiClient.convertToType(data['can_buy'], 'Boolean');
      }
      if (data.hasOwnProperty('available_in_subscriptions')) {
        obj['available_in_subscriptions'] = ApiClient.convertToType(data['available_in_subscriptions'], 'Boolean');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('group_restriction_behavior')) {
        obj['group_restriction_behavior'] = ApiClient.convertToType(data['group_restriction_behavior'], 'Integer');
      }
      if (data.hasOwnProperty('geoloc_enabled')) {
        obj['geoloc_enabled'] = ApiClient.convertToType(data['geoloc_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('behavior_detected_countries')) {
        obj['behavior_detected_countries'] = ApiClient.convertToType(data['behavior_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('behavior_non_detected_countries')) {
        obj['behavior_non_detected_countries'] = ApiClient.convertToType(data['behavior_non_detected_countries'], 'String');
      }
      if (data.hasOwnProperty('id_product_attribute')) {
        obj['id_product_attribute'] = ApiClient.convertToType(data['id_product_attribute'], 'Integer');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [ProductCategories]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * @member {Boolean} visible_before_publication
   */
  exports.prototype['visible_before_publication'] = undefined;
  /**
   * @member {Boolean} visible_after_publication
   */
  exports.prototype['visible_after_publication'] = undefined;
  /**
   * @member {Integer} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Integer} price_mode
   */
  exports.prototype['price_mode'] = undefined;
  /**
   * @member {Integer} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Boolean} available_for_order
   */
  exports.prototype['available_for_order'] = undefined;
  /**
   * @member {Integer} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * @member {Integer} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * @member {Integer} id_category_default
   */
  exports.prototype['id_category_default'] = undefined;
  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {Array.<module:model/ProductAttribute>} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_description
   */
  exports.prototype['meta_description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_keywords
   */
  exports.prototype['meta_keywords'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} link_rewrite
   */
  exports.prototype['link_rewrite'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} description_short
   */
  exports.prototype['description_short'] = undefined;
  /**
   * @member {Array.<module:model/Tag>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Boolean} can_buy
   */
  exports.prototype['can_buy'] = undefined;
  /**
   * @member {Boolean} available_in_subscriptions
   */
  exports.prototype['available_in_subscriptions'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Integer} group_restriction_behavior
   */
  exports.prototype['group_restriction_behavior'] = undefined;
  /**
   * @member {Boolean} geoloc_enabled
   */
  exports.prototype['geoloc_enabled'] = undefined;
  /**
   * @member {String} behavior_detected_countries
   */
  exports.prototype['behavior_detected_countries'] = undefined;
  /**
   * @member {String} behavior_non_detected_countries
   */
  exports.prototype['behavior_non_detected_countries'] = undefined;
  /**
   * @member {Integer} id_product_attribute
   */
  exports.prototype['id_product_attribute'] = undefined;
  /**
   * @member {String} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {Array.<module:model/ProductCategories>} categories
   */
  exports.prototype['categories'] = undefined;



  return exports;
}));


