/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.24
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
    instance = new KinowJavascriptSdk.CartRule();
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

  describe('CartRule', function() {
    it('should create an instance of CartRule', function() {
      // uncomment below and update the code to test CartRule
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be.a(KinowJavascriptSdk.CartRule);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property partialUse (base name: "partial_use")', function() {
      // uncomment below and update the code to test the property partialUse
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property dateAdd (base name: "date_add")', function() {
      // uncomment below and update the code to test the property dateAdd
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property dateUpd (base name: "date_upd")', function() {
      // uncomment below and update the code to test the property dateUpd
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "date_from")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "date_to")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property quantityPerUser (base name: "quantity_per_user")', function() {
      // uncomment below and update the code to test the property quantityPerUser
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property minimumAmount (base name: "minimum_amount")', function() {
      // uncomment below and update the code to test the property minimumAmount
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property minimumAmountTax (base name: "minimum_amount_tax")', function() {
      // uncomment below and update the code to test the property minimumAmountTax
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property minimumAmountCurrency (base name: "minimum_amount_currency")', function() {
      // uncomment below and update the code to test the property minimumAmountCurrency
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property everyRecurringPayments (base name: "every_recurring_payments")', function() {
      // uncomment below and update the code to test the property everyRecurringPayments
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property reductionPercent (base name: "reduction_percent")', function() {
      // uncomment below and update the code to test the property reductionPercent
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property reductionAmount (base name: "reduction_amount")', function() {
      // uncomment below and update the code to test the property reductionAmount
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property reductionCurrency (base name: "reduction_currency")', function() {
      // uncomment below and update the code to test the property reductionCurrency
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property reductionTax (base name: "reduction_tax")', function() {
      // uncomment below and update the code to test the property reductionTax
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

    it('should have the property restrictionGroups (base name: "restriction_groups")', function() {
      // uncomment below and update the code to test the property restrictionGroups
      //var instance = new KinowJavascriptSdk.CartRule();
      //expect(instance).to.be();
    });

  });

}));
