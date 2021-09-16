/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 1.4.52
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
    instance = new KinowJavascriptSdk.CustomersApi();
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

  describe('CustomersApi', function() {
    describe('attachCartToCustomer', function() {
      it('should call attachCartToCustomer successfully', function(done) {
        //uncomment below and update the code to test attachCartToCustomer
        //instance.attachCartToCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkAuthenticationToken', function() {
      it('should call checkAuthenticationToken successfully', function(done) {
        //uncomment below and update the code to test checkAuthenticationToken
        //instance.checkAuthenticationToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkCustomerCredentials', function() {
      it('should call checkCustomerCredentials successfully', function(done) {
        //uncomment below and update the code to test checkCustomerCredentials
        //instance.checkCustomerCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCustomer', function() {
      it('should call createCustomer successfully', function(done) {
        //uncomment below and update the code to test createCustomer
        //instance.createCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFacebookId', function() {
      it('should call createFacebookId successfully', function(done) {
        //uncomment below and update the code to test createFacebookId
        //instance.createFacebookId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGoogleId', function() {
      it('should call createGoogleId successfully', function(done) {
        //uncomment below and update the code to test createGoogleId
        //instance.createGoogleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomer', function() {
      it('should call deleteCustomer successfully', function(done) {
        //uncomment below and update the code to test deleteCustomer
        //instance.deleteCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateAuthenticationToken', function() {
      it('should call generateAuthenticationToken successfully', function(done) {
        //uncomment below and update the code to test generateAuthenticationToken
        //instance.generateAuthenticationToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomer', function() {
      it('should call getCustomer successfully', function(done) {
        //uncomment below and update the code to test getCustomer
        //instance.getCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesSubscriptions', function() {
      it('should call getCustomerAccessesSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesSubscriptions
        //instance.getCustomerAccessesSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesVideos', function() {
      it('should call getCustomerAccessesVideos successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesVideos
        //instance.getCustomerAccessesVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAddress', function() {
      it('should call getCustomerAddress successfully', function(done) {
        //uncomment below and update the code to test getCustomerAddress
        //instance.getCustomerAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCanSeeProduct', function() {
      it('should call getCustomerCanSeeProduct successfully', function(done) {
        //uncomment below and update the code to test getCustomerCanSeeProduct
        //instance.getCustomerCanSeeProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCarts', function() {
      it('should call getCustomerCarts successfully', function(done) {
        //uncomment below and update the code to test getCustomerCarts
        //instance.getCustomerCarts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCurrentViews', function() {
      it('should call getCustomerCurrentViews successfully', function(done) {
        //uncomment below and update the code to test getCustomerCurrentViews
        //instance.getCustomerCurrentViews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerGroups', function() {
      it('should call getCustomerGroups successfully', function(done) {
        //uncomment below and update the code to test getCustomerGroups
        //instance.getCustomerGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToProduct', function() {
      it('should call getCustomerHasAccessToProduct successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToProduct
        //instance.getCustomerHasAccessToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToProducts', function() {
      it('should call getCustomerHasAccessToProducts successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToProducts
        //instance.getCustomerHasAccessToProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToVideo', function() {
      it('should call getCustomerHasAccessToVideo successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToVideo
        //instance.getCustomerHasAccessToVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToVideos', function() {
      it('should call getCustomerHasAccessToVideos successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToVideos
        //instance.getCustomerHasAccessToVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerOrders', function() {
      it('should call getCustomerOrders successfully', function(done) {
        //uncomment below and update the code to test getCustomerOrders
        //instance.getCustomerOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerPlaylists', function() {
      it('should call getCustomerPlaylists successfully', function(done) {
        //uncomment below and update the code to test getCustomerPlaylists
        //instance.getCustomerPlaylists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerPrepaymentBalances', function() {
      it('should call getCustomerPrepaymentBalances successfully', function(done) {
        //uncomment below and update the code to test getCustomerPrepaymentBalances
        //instance.getCustomerPrepaymentBalances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerPrepaymentOperations', function() {
      it('should call getCustomerPrepaymentOperations successfully', function(done) {
        //uncomment below and update the code to test getCustomerPrepaymentOperations
        //instance.getCustomerPrepaymentOperations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomers', function() {
      it('should call getCustomers successfully', function(done) {
        //uncomment below and update the code to test getCustomers
        //instance.getCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFacebookCustomer', function() {
      it('should call getFacebookCustomer successfully', function(done) {
        //uncomment below and update the code to test getFacebookCustomer
        //instance.getFacebookCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoogleCustomer', function() {
      it('should call getGoogleCustomer successfully', function(done) {
        //uncomment below and update the code to test getGoogleCustomer
        //instance.getGoogleCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethods', function() {
      it('should call getPaymentMethods successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethods
        //instance.getPaymentMethods(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentMethodsWithIp', function() {
      it('should call getPaymentMethodsWithIp successfully', function(done) {
        //uncomment below and update the code to test getPaymentMethodsWithIp
        //instance.getPaymentMethodsWithIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPendingPayments', function() {
      it('should call getPendingPayments successfully', function(done) {
        //uncomment below and update the code to test getPendingPayments
        //instance.getPendingPayments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPendingPaymentsWithIp', function() {
      it('should call getPendingPaymentsWithIp successfully', function(done) {
        //uncomment below and update the code to test getPendingPaymentsWithIp
        //instance.getPendingPaymentsWithIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRegistrationFields', function() {
      it('should call getRegistrationFields successfully', function(done) {
        //uncomment below and update the code to test getRegistrationFields
        //instance.getRegistrationFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loginWithFacebook', function() {
      it('should call loginWithFacebook successfully', function(done) {
        //uncomment below and update the code to test loginWithFacebook
        //instance.loginWithFacebook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loginWithGoogle', function() {
      it('should call loginWithGoogle successfully', function(done) {
        //uncomment below and update the code to test loginWithGoogle
        //instance.loginWithGoogle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('passwordToken', function() {
      it('should call passwordToken successfully', function(done) {
        //uncomment below and update the code to test passwordToken
        //instance.passwordToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('passwordTokenConsume', function() {
      it('should call passwordTokenConsume successfully', function(done) {
        //uncomment below and update the code to test passwordTokenConsume
        //instance.passwordTokenConsume(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopSubscription', function() {
      it('should call stopSubscription successfully', function(done) {
        //uncomment below and update the code to test stopSubscription
        //instance.stopSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomer', function() {
      it('should call updateCustomer successfully', function(done) {
        //uncomment below and update the code to test updateCustomer
        //instance.updateCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentMethod', function() {
      it('should call updatePaymentMethod successfully', function(done) {
        //uncomment below and update the code to test updatePaymentMethod
        //instance.updatePaymentMethod(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateCustomerCredentials', function() {
      it('should call validateCustomerCredentials successfully', function(done) {
        //uncomment below and update the code to test validateCustomerCredentials
        //instance.validateCustomerCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
