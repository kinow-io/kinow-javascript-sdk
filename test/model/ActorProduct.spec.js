/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.14
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KinowJavascriptSdk);
  }
}(this, function(expect, KinowJavascriptSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KinowJavascriptSdk.ActorProduct();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ActorProduct', function() {
    it('should create an instance of ActorProduct', function() {
      // uncomment below and update the code to test ActorProduct
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be.a(KinowJavascriptSdk.ActorProduct);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "date_from")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "date_to")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property visibleBeforePublication (base name: "visible_before_publication")', function() {
      // uncomment below and update the code to test the property visibleBeforePublication
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property visibleAfterPublication (base name: "visible_after_publication")', function() {
      // uncomment below and update the code to test the property visibleAfterPublication
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property priceMode (base name: "price_mode")', function() {
      // uncomment below and update the code to test the property priceMode
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property availableForOrder (base name: "available_for_order")', function() {
      // uncomment below and update the code to test the property availableForOrder
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property idCategoryDefault (base name: "id_category_default")', function() {
      // uncomment below and update the code to test the property idCategoryDefault
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property metaDescription (base name: "meta_description")', function() {
      // uncomment below and update the code to test the property metaDescription
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property metaKeywords (base name: "meta_keywords")', function() {
      // uncomment below and update the code to test the property metaKeywords
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property metaTitle (base name: "meta_title")', function() {
      // uncomment below and update the code to test the property metaTitle
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property linkRewrite (base name: "link_rewrite")', function() {
      // uncomment below and update the code to test the property linkRewrite
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property descriptionShort (base name: "description_short")', function() {
      // uncomment below and update the code to test the property descriptionShort
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property canBuy (base name: "can_buy")', function() {
      // uncomment below and update the code to test the property canBuy
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property availableInSubscriptions (base name: "available_in_subscriptions")', function() {
      // uncomment below and update the code to test the property availableInSubscriptions
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property groupRestrictionBehavior (base name: "group_restriction_behavior")', function() {
      // uncomment below and update the code to test the property groupRestrictionBehavior
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property geolocEnabled (base name: "geoloc_enabled")', function() {
      // uncomment below and update the code to test the property geolocEnabled
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property behaviorDetectedCountries (base name: "behavior_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorDetectedCountries
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property behaviorNonDetectedCountries (base name: "behavior_non_detected_countries")', function() {
      // uncomment below and update the code to test the property behaviorNonDetectedCountries
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property idProductAttribute (base name: "id_product_attribute")', function() {
      // uncomment below and update the code to test the property idProductAttribute
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instance = new KinowJavascriptSdk.ActorProduct();
      //expect(instance).to.be();
    });

  });

}));
