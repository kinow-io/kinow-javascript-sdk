# KinowJavascriptSdk.ProductsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**associateProducts**](ProductsApi.md#associateProducts) | **POST** /products/{product_id}/products | 
[**attachFeaturesToProduct**](ProductsApi.md#attachFeaturesToProduct) | **POST** /products/{product_id}/features | 
[**attachProductToActor**](ProductsApi.md#attachProductToActor) | **POST** /products/{product_id}/actors | 
[**attachProductToCategory**](ProductsApi.md#attachProductToCategory) | **POST** /products/{product_id}/categories | 
[**attachProductToDirector**](ProductsApi.md#attachProductToDirector) | **POST** /products/{product_id}/directors | 
[**attachProductToGroup**](ProductsApi.md#attachProductToGroup) | **POST** /products/{product_id}/groups | 
[**attachVideoToProduct**](ProductsApi.md#attachVideoToProduct) | **POST** /products/{product_id}/videos | 
[**createProduct**](ProductsApi.md#createProduct) | **POST** /products | 
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{product_id} | 
[**detachFeatureToProduct**](ProductsApi.md#detachFeatureToProduct) | **DELETE** /products/{product_id}/features/{feature_id} | 
[**detachProductFromCategory**](ProductsApi.md#detachProductFromCategory) | **DELETE** /products/{product_id}/categories/{category_id} | 
[**detachProductFromGroup**](ProductsApi.md#detachProductFromGroup) | **DELETE** /products/{product_id}/groups/{group_id} | 
[**getBestSales**](ProductsApi.md#getBestSales) | **GET** /products/best-sales | 
[**getCategoryProducts**](ProductsApi.md#getCategoryProducts) | **GET** /categories/{category_id}/products | 
[**getCustomerHasAccessToProduct**](ProductsApi.md#getCustomerHasAccessToProduct) | **GET** /customers/{customer_id}/products/{product_id}/has-access | 
[**getCustomerHasAccessToProducts**](ProductsApi.md#getCustomerHasAccessToProducts) | **POST** /customers/{customer_id}/products/has-access | 
[**getMostWatched**](ProductsApi.md#getMostWatched) | **GET** /products/most-watched | 
[**getNewProducts**](ProductsApi.md#getNewProducts) | **GET** /products/new | 
[**getPrice**](ProductsApi.md#getPrice) | **POST** /products/price | 
[**getProduct**](ProductsApi.md#getProduct) | **GET** /products/{product_id} | 
[**getProductActors**](ProductsApi.md#getProductActors) | **GET** /products/{product_id}/actors | 
[**getProductActorsRole**](ProductsApi.md#getProductActorsRole) | **GET** /products/{product_id}/actors-role | 
[**getProductAttributes**](ProductsApi.md#getProductAttributes) | **GET** /products/{product_id}/attributes | 
[**getProductAvailability**](ProductsApi.md#getProductAvailability) | **GET** /products/{product_id}/access | 
[**getProductCategories**](ProductsApi.md#getProductCategories) | **GET** /products/{product_id}/categories | 
[**getProductCoverImage**](ProductsApi.md#getProductCoverImage) | **GET** /products/{product_id}/cover | 
[**getProductDirectors**](ProductsApi.md#getProductDirectors) | **GET** /products/{product_id}/directors | 
[**getProductDirectorsRole**](ProductsApi.md#getProductDirectorsRole) | **GET** /products/{product_id}/directors-role | 
[**getProductExtracts**](ProductsApi.md#getProductExtracts) | **GET** /products/{product_id}/extracts | 
[**getProductFeatures**](ProductsApi.md#getProductFeatures) | **GET** /products/{product_id}/features | 
[**getProductGeolocations**](ProductsApi.md#getProductGeolocations) | **GET** /products/{product_id}/geolocations | 
[**getProductGeolocationsByIp**](ProductsApi.md#getProductGeolocationsByIp) | **POST** /products/{product_id}/geolocations | 
[**getProductGroups**](ProductsApi.md#getProductGroups) | **GET** /products/{product_id}/groups | 
[**getProductImages**](ProductsApi.md#getProductImages) | **GET** /products/{product_id}/images | 
[**getProductScreenshots**](ProductsApi.md#getProductScreenshots) | **GET** /products/{product_id}/screenshots | 
[**getProductSubscription**](ProductsApi.md#getProductSubscription) | **GET** /products/{product_id}/subscription | 
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | 
[**getProductsFromProduct**](ProductsApi.md#getProductsFromProduct) | **GET** /products/{product_id}/products | 
[**getVideoGroupsFromProduct**](ProductsApi.md#getVideoGroupsFromProduct) | **GET** /products/{product_id}/video-groups | 
[**getVideosFromProduct**](ProductsApi.md#getVideosFromProduct) | **GET** /products/{product_id}/videos | 
[**searchProducts**](ProductsApi.md#searchProducts) | **GET** /products/search/{search_query} | 
[**setProductGeolocation**](ProductsApi.md#setProductGeolocation) | **PUT** /products/{product_id}/geolocations | 
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /products/{product_id} | 
[**updateProductGroupRestrictionBehavior**](ProductsApi.md#updateProductGroupRestrictionBehavior) | **PUT** /products/{product_id}/groups/behavior | 
[**uploadProductCover**](ProductsApi.md#uploadProductCover) | **POST** /products/{product_id}/cover | 
[**uploadProductImage**](ProductsApi.md#uploadProductImage) | **POST** /products/{product_id}/image | 


<a name="associateProducts"></a>
# **associateProducts**
> associateProducts(productId, associatedProductIds)



Associate products to another product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var associatedProductIds = "associatedProductIds_example"; // String | Products IDs to associate to another product. IDs must be separated with comma (,)

apiInstance.associateProducts(productId, associatedProductIds).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **associatedProductIds** | **String**| Products IDs to associate to another product. IDs must be separated with comma (,) | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachFeaturesToProduct"></a>
# **attachFeaturesToProduct**
> attachFeaturesToProduct(productId, features)



Attach feature to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | 

var features = "features_example"; // String |      To attach existing FeatureValue to Product:     ```     [{     \"id_feature\":3,     \"id_feature_value\":5     }]```      To create a custom FeatureValue:     ```     [{     \"id_feature\":3,     \"custom_value\":[{     \"lang\": 1,     \"value\": \"string\"     }]     }]```

apiInstance.attachFeaturesToProduct(productId, features).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | 
 **features** | **String**|      To attach existing FeatureValue to Product:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;id_feature_value\&quot;:5     }]&#x60;&#x60;&#x60;      To create a custom FeatureValue:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;custom_value\&quot;:[{     \&quot;lang\&quot;: 1,     \&quot;value\&quot;: \&quot;string\&quot;     }]     }]&#x60;&#x60;&#x60; | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachProductToActor"></a>
# **attachProductToActor**
> attachProductToActor(productId, actorId)



Attach product to actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var actorId = 789; // Integer | Actor ID to attach

apiInstance.attachProductToActor(productId, actorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **actorId** | **Integer**| Actor ID to attach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachProductToCategory"></a>
# **attachProductToCategory**
> attachProductToCategory(productId, categoryId)



Attach product to category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var categoryId = 789; // Integer | Category ID to attach

apiInstance.attachProductToCategory(productId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **categoryId** | **Integer**| Category ID to attach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachProductToDirector"></a>
# **attachProductToDirector**
> attachProductToDirector(productId, directorId)



Attach product to director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var directorId = 789; // Integer | Director ID to attach

apiInstance.attachProductToDirector(productId, directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **directorId** | **Integer**| Director ID to attach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachProductToGroup"></a>
# **attachProductToGroup**
> attachProductToGroup(productId, groupId)



Attach product to group

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var groupId = 789; // Integer | Group ID to attach

apiInstance.attachProductToGroup(productId, groupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **groupId** | **Integer**| Group ID to attach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachVideoToProduct"></a>
# **attachVideoToProduct**
> attachVideoToProduct(productId, videoId)



Attach video to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var videoId = 789; // Integer | Video ID to attach

apiInstance.attachVideoToProduct(productId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **videoId** | **Integer**| Video ID to attach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createProduct"></a>
# **createProduct**
> Product createProduct(body)



Create new product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var body = new KinowJavascriptSdk.Product(); // Product | 

apiInstance.createProduct(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productId)



Delete product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.deleteProduct(productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachFeatureToProduct"></a>
# **detachFeatureToProduct**
> detachFeatureToProduct(productId, featureId)



Detach feature to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | 

var featureId = 789; // Integer | 

apiInstance.detachFeatureToProduct(productId, featureId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | 
 **featureId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachProductFromCategory"></a>
# **detachProductFromCategory**
> detachProductFromCategory(productId, categoryId)



Detach product from category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var categoryId = 789; // Integer | Category ID to detach

apiInstance.detachProductFromCategory(productId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **categoryId** | **Integer**| Category ID to detach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachProductFromGroup"></a>
# **detachProductFromGroup**
> detachProductFromGroup(productId, groupId)



Detach product from group

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var groupId = 789; // Integer | Group ID to detach

apiInstance.detachProductFromGroup(productId, groupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **groupId** | **Integer**| Group ID to detach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBestSales"></a>
# **getBestSales**
> Products getBestSales(opts)



Get most saled Products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'ip': "ip_example", // String | Filter by Customer IP
  'isoCode': "isoCode_example" // String | Filter by ISO Code
};
apiInstance.getBestSales(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by Customer IP | [optional] 
 **isoCode** | **String**| Filter by ISO Code | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryProducts"></a>
# **getCategoryProducts**
> Products getCategoryProducts(categoryId, opts)



Get category products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | Filter by user IP
  'features': "features_example", // String |      ```     features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId.
  'filters': "filters_example" // String |      ```     name[value]=string&name][operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
};
apiInstance.getCategoryProducts(categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **features** | **String**|      &#x60;&#x60;&#x60;     features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToProduct"></a>
# **getCustomerHasAccessToProduct**
> getCustomerHasAccessToProduct(customerId, productId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var customerId = 789; // Integer | Customer ID to fetch

var productId = 789; // Integer | Product ID to fetch

apiInstance.getCustomerHasAccessToProduct(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **productId** | **Integer**| Product ID to fetch | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToProducts"></a>
# **getCustomerHasAccessToProducts**
> [ProductAccessInfo] getCustomerHasAccessToProducts(customerId, body)



Get customer access to Products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.ProductIDList(); // ProductIDList | List of Product IDs separated by comma, eg. '42,21,84'

apiInstance.getCustomerHasAccessToProducts(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**ProductIDList**](ProductIDList.md)| List of Product IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[ProductAccessInfo]**](ProductAccessInfo.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMostWatched"></a>
# **getMostWatched**
> Products getMostWatched(opts)



Get most watched products list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'ip': "ip_example", // String | Filter by user IP
  'isoCode': "isoCode_example" // String | Filter by ISO Code
};
apiInstance.getMostWatched(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **isoCode** | **String**| Filter by ISO Code | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNewProducts"></a>
# **getNewProducts**
> Products getNewProducts(opts)



Get new products list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'ip': "ip_example" // String | Filter by user IP
};
apiInstance.getNewProducts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrice"></a>
# **getPrice**
> [ProductPrice] getPrice(body)



Get prices for multiple Products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var body = new KinowJavascriptSdk.ProductIDList1(); // ProductIDList1 | List of Product IDs separated by comma, eg. '42,21,84'

apiInstance.getPrice(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductIDList1**](ProductIDList1.md)| List of Product IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[ProductPrice]**](ProductPrice.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(productId)



Get product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.getProduct(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

[**Product**](Product.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductActors"></a>
# **getProductActors**
> Actors getProductActors(productId, opts)



Get actors attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getProductActors(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **imageType** | **String**|  | [optional] 

### Return type

[**Actors**](Actors.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductActorsRole"></a>
# **getProductActorsRole**
> Actors getProductActorsRole(productId, opts)



Get Actors attached to Product with their role

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductActorsRole(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Actors**](Actors.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAttributes"></a>
# **getProductAttributes**
> ProductAttributesResponse getProductAttributes(productId, opts)



Get Product attributes. Mandatory to add TVOD Product in cart.

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductAttributes(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**ProductAttributesResponse**](ProductAttributesResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAvailability"></a>
# **getProductAvailability**
> getProductAvailability(productId)



Get availability of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.getProductAvailability(productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductCategories"></a>
# **getProductCategories**
> Categories getProductCategories(productId, opts)



Get product categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getProductCategories(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductCoverImage"></a>
# **getProductCoverImage**
> Image getProductCoverImage(productId)



Get cover image of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.getProductCoverImage(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectors"></a>
# **getProductDirectors**
> Directors getProductDirectors(productId, opts)



Get directors of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getProductDirectors(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **imageType** | **String**|  | [optional] 

### Return type

[**Directors**](Directors.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectorsRole"></a>
# **getProductDirectorsRole**
> Directors getProductDirectorsRole(productId, opts)



Get Directors attached to Product with their role

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductDirectorsRole(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Directors**](Directors.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> Videos1 getProductExtracts(productId, opts)



Get extracts of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'ip': "ip_example", // String | Filter by user IP
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductExtracts(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **ip** | **String**| Filter by user IP | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Videos1**](Videos1.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductFeatures"></a>
# **getProductFeatures**
> Features getProductFeatures(productId, opts)



Get product features

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductFeatures(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Features**](Features.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocations"></a>
# **getProductGeolocations**
> Geolocs getProductGeolocations(productId, opts)



Get product geolocation restrictions

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductGeolocations(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Geolocs**](Geolocs.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocationsByIp"></a>
# **getProductGeolocationsByIp**
> getProductGeolocationsByIp(productId, ipAddress, opts)



Check product access using geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var ipAddress = "ipAddress_example"; // String | address ip

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductGeolocationsByIp(productId, ipAddress, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **ipAddress** | **String**| address ip | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGroups"></a>
# **getProductGroups**
> Groups getProductGroups(productId, opts)



Get groups allowed to see this product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductGroups(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Groups**](Groups.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductImages"></a>
# **getProductImages**
> CategoryImagesResponse getProductImages(productId, opts)



Get images attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'type': "type_example", // String | Filter on specific Image type
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductImages(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **type** | **String**| Filter on specific Image type | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**CategoryImagesResponse**](CategoryImagesResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductScreenshots"></a>
# **getProductScreenshots**
> [Image] getProductScreenshots(productId)



Get product screenshots

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.getProductScreenshots(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

[**[Image]**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductSubscription"></a>
# **getProductSubscription**
> Subscription getProductSubscription(productId)



Get Subscription linked to a Product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

apiInstance.getProductSubscription(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProducts"></a>
# **getProducts**
> Products getProducts(opts)



Get products list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |      ```     featureId[value]=string&featureId[operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | Filter by user IP
  'customerId': "customerId_example" // String | Check if customer can see this product, if it's group is not restricted
};
apiInstance.getProducts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **features** | **String**|      &#x60;&#x60;&#x60;     featureId[value]&#x3D;string&amp;featureId[operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **customerId** | **String**| Check if customer can see this product, if it&#39;s group is not restricted | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductsFromProduct"></a>
# **getProductsFromProduct**
> Products getProductsFromProduct(productId, opts)



Get products linked to another product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |      ```     featureId[value]=string&featureId[operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example" // String | Filter by user IP
};
apiInstance.getProductsFromProduct(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **features** | **String**|      &#x60;&#x60;&#x60;     featureId[value]&#x3D;string&amp;featureId[operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoGroupsFromProduct"></a>
# **getVideoGroupsFromProduct**
> VideoGroup1 getVideoGroupsFromProduct(productId, opts)



Get Video Groups attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"duration\": {     \"value\": \"string\",     \"operator\": \"gt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getVideoGroupsFromProduct(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**VideoGroup1**](VideoGroup1.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosFromProduct"></a>
# **getVideosFromProduct**
> Videos2 getVideosFromProduct(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"duration\": {     \"value\": \"string\",     \"operator\": \"gt\"     }     } ```     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'ip': "ip_example", // String | Filter by user IP
  'sortBy': "sortBy_example", // String | Sort by this attribute (default is ID)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getVideosFromProduct(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **sortBy** | **String**| Sort by this attribute (default is ID) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos2**](Videos2.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="searchProducts"></a>
# **searchProducts**
> Products searchProducts(searchQuery, opts)



Search product with a keyword

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var searchQuery = "searchQuery_example"; // String | Keyword used to search the products

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | default: position
  'sortDirection': "sortDirection_example", // String | default: desc
  'inCategories': "inCategories_example", // String | Search in given categories. Values are separated with comma (,)
  'inFeatures': "inFeatures_example", // String | Search in given features. Values are separated with comma (,)
  'featureValues': "featureValues_example" // String | Search by feature values. Values are separated with comma (,)
};
apiInstance.searchProducts(searchQuery, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchQuery** | **String**| Keyword used to search the products | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| default: position | [optional] 
 **sortDirection** | **String**| default: desc | [optional] 
 **inCategories** | **String**| Search in given categories. Values are separated with comma (,) | [optional] 
 **inFeatures** | **String**| Search in given features. Values are separated with comma (,) | [optional] 
 **featureValues** | **String**| Search by feature values. Values are separated with comma (,) | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setProductGeolocation"></a>
# **setProductGeolocation**
> setProductGeolocation(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts)



Handle geolocation for products by countries

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var enabled = 56; // Integer | Enabled

var behaviorDetectedCountries = "behaviorDetectedCountries_example"; // String | Behavior for detected countries

var behaviorNonDetectedCountries = "behaviorNonDetectedCountries_example"; // String | Behavior for non-detected countries

var opts = { 
  'countries': "countries_example", // String | IDs of the non-detected countries separated by comma
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.setProductGeolocation(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **enabled** | **Integer**| Enabled | 
 **behaviorDetectedCountries** | **String**| Behavior for detected countries | 
 **behaviorNonDetectedCountries** | **String**| Behavior for non-detected countries | 
 **countries** | **String**| IDs of the non-detected countries separated by comma | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(productId, body)



Update product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var body = new KinowJavascriptSdk.Product(); // Product | 

apiInstance.updateProduct(productId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **body** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateProductGroupRestrictionBehavior"></a>
# **updateProductGroupRestrictionBehavior**
> updateProductGroupRestrictionBehavior(productId, behavior)



Update product group restriction behavior

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Product ID to fetch

var behavior = 56; // Integer |      Group restriction behavior      0 - Disable     1 - Allow Groups     2 - Forbid Groups

apiInstance.updateProductGroupRestrictionBehavior(productId, behavior).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **behavior** | **Integer**|      Group restriction behavior      0 - Disable     1 - Allow Groups     2 - Forbid Groups | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadProductCover"></a>
# **uploadProductCover**
> Image uploadProductCover(productId, file, hash, opts)



Upload product cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 3.4; // Number | Product ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadProductCover(productId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Product ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadProductImage"></a>
# **uploadProductImage**
> Image uploadProductImage(productId, file, hash, imageTypeName, opts)



Upload product image

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 3.4; // Number | Product ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var imageTypeName = "imageTypeName_example"; // String | Image types name to use to generate image assets

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadProductImage(productId, file, hash, imageTypeName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Product ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **imageTypeName** | **String**| Image types name to use to generate image assets | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

