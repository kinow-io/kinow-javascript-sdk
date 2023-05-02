/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.27
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
    instance = new KinowJavascriptSdk.OrderResponse();
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

  describe('OrderResponse', function() {
    it('should create an instance of OrderResponse', function() {
      // uncomment below and update the code to test OrderResponse
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be.a(KinowJavascriptSdk.OrderResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property idOrderRenew (base name: "id_order_renew")', function() {
      // uncomment below and update the code to test the property idOrderRenew
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCart (base name: "id_cart")', function() {
      // uncomment below and update the code to test the property idCart
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCurrency (base name: "id_currency")', function() {
      // uncomment below and update the code to test the property idCurrency
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property currentState (base name: "current_state")', function() {
      // uncomment below and update the code to test the property currentState
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property payment (base name: "payment")', function() {
      // uncomment below and update the code to test the property payment
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property module (base name: "module")', function() {
      // uncomment below and update the code to test the property module
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscounts (base name: "total_discounts")', function() {
      // uncomment below and update the code to test the property totalDiscounts
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscountsTaxIncl (base name: "total_discounts_tax_incl")', function() {
      // uncomment below and update the code to test the property totalDiscountsTaxIncl
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscountsTaxExcl (base name: "total_discounts_tax_excl")', function() {
      // uncomment below and update the code to test the property totalDiscountsTaxExcl
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPaid (base name: "total_paid")', function() {
      // uncomment below and update the code to test the property totalPaid
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPaidTaxIncl (base name: "total_paid_tax_incl")', function() {
      // uncomment below and update the code to test the property totalPaidTaxIncl
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPaidTaxExcl (base name: "total_paid_tax_excl")', function() {
      // uncomment below and update the code to test the property totalPaidTaxExcl
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalProducts (base name: "total_products")', function() {
      // uncomment below and update the code to test the property totalProducts
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalProductsWt (base name: "total_products_wt")', function() {
      // uncomment below and update the code to test the property totalProductsWt
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property conversionRate (base name: "conversion_rate")', function() {
      // uncomment below and update the code to test the property conversionRate
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoice_number")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoice_date")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property valid (base name: "valid")', function() {
      // uncomment below and update the code to test the property valid
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property histories (base name: "histories")', function() {
      // uncomment below and update the code to test the property histories
      //var instance = new KinowJavascriptSdk.OrderResponse();
      //expect(instance).to.be();
    });

  });

}));
