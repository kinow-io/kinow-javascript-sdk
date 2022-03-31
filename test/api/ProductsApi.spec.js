/**
 * Server API
 * Reference for Server API (REST/Json)
 *
 * OpenAPI spec version: 2.0.8
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
    instance = new KinowJavascriptSdk.ProductsApi();
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

  describe('ProductsApi', function() {
    describe('associateProducts', function() {
      it('should call associateProducts successfully', function(done) {
        //uncomment below and update the code to test associateProducts
        //instance.associateProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachActorToProduct', function() {
      it('should call attachActorToProduct successfully', function(done) {
        //uncomment below and update the code to test attachActorToProduct
        //instance.attachActorToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachDirectorToProduct', function() {
      it('should call attachDirectorToProduct successfully', function(done) {
        //uncomment below and update the code to test attachDirectorToProduct
        //instance.attachDirectorToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachFeaturesToProduct', function() {
      it('should call attachFeaturesToProduct successfully', function(done) {
        //uncomment below and update the code to test attachFeaturesToProduct
        //instance.attachFeaturesToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachProductToCategory', function() {
      it('should call attachProductToCategory successfully', function(done) {
        //uncomment below and update the code to test attachProductToCategory
        //instance.attachProductToCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachProductToGroup', function() {
      it('should call attachProductToGroup successfully', function(done) {
        //uncomment below and update the code to test attachProductToGroup
        //instance.attachProductToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attachVideoToProduct', function() {
      it('should call attachVideoToProduct successfully', function(done) {
        //uncomment below and update the code to test attachVideoToProduct
        //instance.attachVideoToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProduct', function() {
      it('should call deleteProduct successfully', function(done) {
        //uncomment below and update the code to test deleteProduct
        //instance.deleteProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachFeatureToProduct', function() {
      it('should call detachFeatureToProduct successfully', function(done) {
        //uncomment below and update the code to test detachFeatureToProduct
        //instance.detachFeatureToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachProductFromCategory', function() {
      it('should call detachProductFromCategory successfully', function(done) {
        //uncomment below and update the code to test detachProductFromCategory
        //instance.detachProductFromCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detachProductFromGroup', function() {
      it('should call detachProductFromGroup successfully', function(done) {
        //uncomment below and update the code to test detachProductFromGroup
        //instance.detachProductFromGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBestSales', function() {
      it('should call getBestSales successfully', function(done) {
        //uncomment below and update the code to test getBestSales
        //instance.getBestSales(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryProducts', function() {
      it('should call getCategoryProducts successfully', function(done) {
        //uncomment below and update the code to test getCategoryProducts
        //instance.getCategoryProducts(function(error) {
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
    describe('getMostWatched', function() {
      it('should call getMostWatched successfully', function(done) {
        //uncomment below and update the code to test getMostWatched
        //instance.getMostWatched(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNewProducts', function() {
      it('should call getNewProducts successfully', function(done) {
        //uncomment below and update the code to test getNewProducts
        //instance.getNewProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrice', function() {
      it('should call getPrice successfully', function(done) {
        //uncomment below and update the code to test getPrice
        //instance.getPrice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProduct', function() {
      it('should call getProduct successfully', function(done) {
        //uncomment below and update the code to test getProduct
        //instance.getProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductActors', function() {
      it('should call getProductActors successfully', function(done) {
        //uncomment below and update the code to test getProductActors
        //instance.getProductActors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductActorsRole', function() {
      it('should call getProductActorsRole successfully', function(done) {
        //uncomment below and update the code to test getProductActorsRole
        //instance.getProductActorsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAttributes', function() {
      it('should call getProductAttributes successfully', function(done) {
        //uncomment below and update the code to test getProductAttributes
        //instance.getProductAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAvailability', function() {
      it('should call getProductAvailability successfully', function(done) {
        //uncomment below and update the code to test getProductAvailability
        //instance.getProductAvailability(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCategories', function() {
      it('should call getProductCategories successfully', function(done) {
        //uncomment below and update the code to test getProductCategories
        //instance.getProductCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCoverImage', function() {
      it('should call getProductCoverImage successfully', function(done) {
        //uncomment below and update the code to test getProductCoverImage
        //instance.getProductCoverImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductDirectors', function() {
      it('should call getProductDirectors successfully', function(done) {
        //uncomment below and update the code to test getProductDirectors
        //instance.getProductDirectors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductDirectorsRole', function() {
      it('should call getProductDirectorsRole successfully', function(done) {
        //uncomment below and update the code to test getProductDirectorsRole
        //instance.getProductDirectorsRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductExtracts', function() {
      it('should call getProductExtracts successfully', function(done) {
        //uncomment below and update the code to test getProductExtracts
        //instance.getProductExtracts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductFeatures', function() {
      it('should call getProductFeatures successfully', function(done) {
        //uncomment below and update the code to test getProductFeatures
        //instance.getProductFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductGeolocations', function() {
      it('should call getProductGeolocations successfully', function(done) {
        //uncomment below and update the code to test getProductGeolocations
        //instance.getProductGeolocations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductGeolocationsByIp', function() {
      it('should call getProductGeolocationsByIp successfully', function(done) {
        //uncomment below and update the code to test getProductGeolocationsByIp
        //instance.getProductGeolocationsByIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductGroups', function() {
      it('should call getProductGroups successfully', function(done) {
        //uncomment below and update the code to test getProductGroups
        //instance.getProductGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductImages', function() {
      it('should call getProductImages successfully', function(done) {
        //uncomment below and update the code to test getProductImages
        //instance.getProductImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductScreenshots', function() {
      it('should call getProductScreenshots successfully', function(done) {
        //uncomment below and update the code to test getProductScreenshots
        //instance.getProductScreenshots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductSubscription', function() {
      it('should call getProductSubscription successfully', function(done) {
        //uncomment below and update the code to test getProductSubscription
        //instance.getProductSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProducts', function() {
      it('should call getProducts successfully', function(done) {
        //uncomment below and update the code to test getProducts
        //instance.getProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsFromProduct', function() {
      it('should call getProductsFromProduct successfully', function(done) {
        //uncomment below and update the code to test getProductsFromProduct
        //instance.getProductsFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoGroupsFromProduct', function() {
      it('should call getVideoGroupsFromProduct successfully', function(done) {
        //uncomment below and update the code to test getVideoGroupsFromProduct
        //instance.getVideoGroupsFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideosFromProduct', function() {
      it('should call getVideosFromProduct successfully', function(done) {
        //uncomment below and update the code to test getVideosFromProduct
        //instance.getVideosFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchProducts', function() {
      it('should call searchProducts successfully', function(done) {
        //uncomment below and update the code to test searchProducts
        //instance.searchProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProductGeolocation', function() {
      it('should call setProductGeolocation successfully', function(done) {
        //uncomment below and update the code to test setProductGeolocation
        //instance.setProductGeolocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProduct', function() {
      it('should call updateProduct successfully', function(done) {
        //uncomment below and update the code to test updateProduct
        //instance.updateProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductGroupRestrictionBehavior', function() {
      it('should call updateProductGroupRestrictionBehavior successfully', function(done) {
        //uncomment below and update the code to test updateProductGroupRestrictionBehavior
        //instance.updateProductGroupRestrictionBehavior(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadProductCover', function() {
      it('should call uploadProductCover successfully', function(done) {
        //uncomment below and update the code to test uploadProductCover
        //instance.uploadProductCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadProductImage', function() {
      it('should call uploadProductImage successfully', function(done) {
        //uncomment below and update the code to test uploadProductImage
        //instance.uploadProductImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
