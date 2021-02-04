/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.4.30
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
    instance = new KinowJavascriptSdk.WidgetsApi();
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

  describe('WidgetsApi', function() {
    describe('getSliderImage', function() {
      it('should call getSliderImage successfully', function(done) {
        //uncomment below and update the code to test getSliderImage
        //instance.getSliderImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetAnalytics', function() {
      it('should call getWidgetAnalytics successfully', function(done) {
        //uncomment below and update the code to test getWidgetAnalytics
        //instance.getWidgetAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetFooterMenu', function() {
      it('should call getWidgetFooterMenu successfully', function(done) {
        //uncomment below and update the code to test getWidgetFooterMenu
        //instance.getWidgetFooterMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetHomeRail', function() {
      it('should call getWidgetHomeRail successfully', function(done) {
        //uncomment below and update the code to test getWidgetHomeRail
        //instance.getWidgetHomeRail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetHookPhrase', function() {
      it('should call getWidgetHookPhrase successfully', function(done) {
        //uncomment below and update the code to test getWidgetHookPhrase
        //instance.getWidgetHookPhrase(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetSlider', function() {
      it('should call getWidgetSlider successfully', function(done) {
        //uncomment below and update the code to test getWidgetSlider
        //instance.getWidgetSlider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetSliderItem', function() {
      it('should call getWidgetSliderItem successfully', function(done) {
        //uncomment below and update the code to test getWidgetSliderItem
        //instance.getWidgetSliderItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWidgetTopMenu', function() {
      it('should call getWidgetTopMenu successfully', function(done) {
        //uncomment below and update the code to test getWidgetTopMenu
        //instance.getWidgetTopMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
