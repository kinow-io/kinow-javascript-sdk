# KinowJavascriptSdk.ProductsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachFeaturesToProduct**](ProductsApi.md#attachFeaturesToProduct) | **POST** /products/{product_id}/features | 
[**attachProductToActor**](ProductsApi.md#attachProductToActor) | **POST** /products/{product_id}/actors | 
[**attachProductToCategory**](ProductsApi.md#attachProductToCategory) | **POST** /products/{product_id}/categories | 
[**attachProductToDirector**](ProductsApi.md#attachProductToDirector) | **POST** /products/{product_id}/directors | 
[**attachProductToDirector_0**](ProductsApi.md#attachProductToDirector_0) | **POST** /products/{product_id}/groups | 
[**attachVideoToProduct**](ProductsApi.md#attachVideoToProduct) | **POST** /products/{product_id}/videos | 
[**createProduct**](ProductsApi.md#createProduct) | **POST** /products | 
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{product_id} | 
[**detachFeatureToProduct**](ProductsApi.md#detachFeatureToProduct) | **DELETE** products/{product_id}/features/{feature_id} | 
[**detachProductFromActor**](ProductsApi.md#detachProductFromActor) | **DELETE** /products/{product_id}/actors/{actor_id} | 
[**detachProductFromCategory**](ProductsApi.md#detachProductFromCategory) | **DELETE** /products/{product_id}/categories/{category_id} | 
[**detachProductFromDirector**](ProductsApi.md#detachProductFromDirector) | **DELETE** /products/{product_id}/directors/{director_id} | 
[**detachProductFromGroup**](ProductsApi.md#detachProductFromGroup) | **POST** /products/{product_id}/groups/{group_id} | 
[**getCategoryProducts**](ProductsApi.md#getCategoryProducts) | **GET** /categories/{category_id}/products | 
[**getCustomerHasAccessToProduct**](ProductsApi.md#getCustomerHasAccessToProduct) | **GET** /customers/{customer_id}/products/{product_id}/has-access | 
[**getProduct**](ProductsApi.md#getProduct) | **GET** /products/{product_id} | 
[**getProductActors**](ProductsApi.md#getProductActors) | **GET** /products/{product_id}/actors | 
[**getProductAttributes**](ProductsApi.md#getProductAttributes) | **GET** /products/{product_id}/attributes | 
[**getProductAvailability**](ProductsApi.md#getProductAvailability) | **GET** /products/{product_id}/access | 
[**getProductCategories**](ProductsApi.md#getProductCategories) | **GET** /products/{product_id}/categories | 
[**getProductCoverImage**](ProductsApi.md#getProductCoverImage) | **GET** /products/{product_id}/cover | 
[**getProductDirectors**](ProductsApi.md#getProductDirectors) | **GET** /products/{product_id}/directors | 
[**getProductExtracts**](ProductsApi.md#getProductExtracts) | **GET** /products/{product_id}/extracts | 
[**getProductFeatures**](ProductsApi.md#getProductFeatures) | **GET** /products/{product_id}/features | 
[**getProductGeolocations**](ProductsApi.md#getProductGeolocations) | **GET** /products/{product_id}/geolocations | 
[**getProductGeolocationsByIp**](ProductsApi.md#getProductGeolocationsByIp) | **POST** /products/{product_id}/geolocations | 
[**getProductImages**](ProductsApi.md#getProductImages) | **GET** /products/{product_id}/images | 
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | 
[**getProductsFromProduct**](ProductsApi.md#getProductsFromProduct) | **GET** /products/{product_id}/products | 
[**getVideosFromProduct**](ProductsApi.md#getVideosFromProduct) | **GET** /products/{product_id}/videos | 
[**searchProducts**](ProductsApi.md#searchProducts) | **GET** /products/search/{search_query} | 
[**setProductGeolocation**](ProductsApi.md#setProductGeolocation) | **PUT** /products/{product_id}/geolocations | 
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /products/{product_id} | 


<a name="attachFeaturesToProduct"></a>
# **attachFeaturesToProduct**
> attachFeaturesToProduct(productId, features)



Attach feature to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var actorId = 789; // Integer | ID of the actor to attach

apiInstance.attachProductToActor(productId, actorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **actorId** | **Integer**| ID of the actor to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Id of the product

var categoryId = 789; // Integer | ID of the category to attach

apiInstance.attachProductToCategory(productId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Id of the product | 
 **categoryId** | **Integer**| ID of the category to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var directorId = 789; // Integer | ID of the director to attach

apiInstance.attachProductToDirector(productId, directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **directorId** | **Integer**| ID of the director to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachProductToDirector_0"></a>
# **attachProductToDirector_0**
> attachProductToDirector_0(productId, groupId)



Attach product to group

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var groupId = 789; // Integer | ID of the group to attach

apiInstance.attachProductToDirector_0(productId, groupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **groupId** | **Integer**| ID of the group to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

var videoId = 789; // Integer | ID of the video to attach

apiInstance.attachVideoToProduct(productId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 
 **videoId** | **Integer**| ID of the video to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

apiInstance.deleteProduct(productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachProductFromActor"></a>
# **detachProductFromActor**
> detachProductFromActor(productId, actorId)



Detach product from actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var actorId = 789; // Integer | ID of the actor to detach

apiInstance.detachProductFromActor(productId, actorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **actorId** | **Integer**| ID of the actor to detach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | Id of the product

var categoryId = 789; // Integer | ID of the category to detach

apiInstance.detachProductFromCategory(productId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Id of the product | 
 **categoryId** | **Integer**| ID of the category to detach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachProductFromDirector"></a>
# **detachProductFromDirector**
> detachProductFromDirector(productId, directorId)



Detach product from director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var directorId = 789; // Integer | ID of the director to detach

apiInstance.detachProductFromDirector(productId, directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **directorId** | **Integer**| ID of the director to detach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product

var groupId = 789; // Integer | ID of the group to detach

apiInstance.detachProductFromGroup(productId, groupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product | 
 **groupId** | **Integer**| ID of the group to detach | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var categoryId = 789; // Integer | ID of the category to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | filter by customer ip
  'features': "features_example", // String |      ```     features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId.
  'filters': "filters_example" // String |      ```     name[value]=string&name][operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be strict, contains, gt or lt.
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
 **categoryId** | **Integer**| ID of the category to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **features** | **String**|      &#x60;&#x60;&#x60;     features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var customerId = 789; // Integer | ID of the customer to fetch

var productId = 789; // Integer | ID of the product to fetch

apiInstance.getCustomerHasAccessToProduct(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **productId** | **Integer**| ID of the product to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

apiInstance.getProduct(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **imageType** | **String**|  | [optional] 

### Return type

[**Actors**](Actors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAttributes"></a>
# **getProductAttributes**
> ProductAttributesResponse getProductAttributes(productId, opts)



Get product attributes. Important to add product to a cart. Allow to select if the customer will buy the product for download, streaming or both

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**ProductAttributesResponse**](ProductAttributesResponse.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

apiInstance.getProductAvailability(productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be strict, contains, gt or lt.
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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

apiInstance.getProductCoverImage(productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectors"></a>
# **getProductDirectors**
> Director1 getProductDirectors(productId, opts)



Get directors of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **imageType** | **String**|  | [optional] 

### Return type

[**Director1**](Director1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> ProductExtractsResponse getProductExtracts(productId, opts)



Get extracts of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

var opts = { 
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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**ProductExtractsResponse**](ProductExtractsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductFeatures"></a>
# **getProductFeatures**
> Features getProductFeatures(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Features**](Features.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocations"></a>
# **getProductGeolocations**
> Geolocs getProductGeolocations(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Geolocs**](Geolocs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocationsByIp"></a>
# **getProductGeolocationsByIp**
> getProductGeolocationsByIp(productId, ipAddress, opts)



check access to a product by geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **ipAddress** | **String**| address ip | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductImages"></a>
# **getProductImages**
> ProductImagesResponse getProductImages(productId, opts)



Get images attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

var opts = { 
  'type': "type_example", // String | type as screen_small or screen_large
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
 **productId** | **Integer**| ID of the product to fetch | 
 **type** | **String**| type as screen_small or screen_large | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**ProductImagesResponse**](ProductImagesResponse.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |      ```     features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | filter by customer ip
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
 **features** | **String**|      &#x60;&#x60;&#x60;     features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **customerId** | **String**| Check if customer can see this product, if it&#39;s group is not restricted | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |      ```     features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"contains\"     },     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example" // String | filter by customer ip
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
 **features** | **String**|      &#x60;&#x60;&#x60;     features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosFromProduct"></a>
# **getVideosFromProduct**
> Videos getVideosFromProduct(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

var opts = { 
  'page': 789, // Integer | 
  'filters': "filters_example", // String |      ```     name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"duration\": {     \"value\": \"string\",     \"operator\": \"gt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'perPage': 789, // Integer | 
  'ip': "ip_example", // String | filter by customer ip
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos**](Videos.md)

### Authorization

No authorization required

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

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **enabled** | **Integer**| Enabled | 
 **behaviorDetectedCountries** | **String**| Behavior for detected countries | 
 **behaviorNonDetectedCountries** | **String**| Behavior for non-detected countries | 
 **countries** | **String**| IDs of the non-detected countries separated by comma | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new KinowJavascriptSdk.ProductsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **body** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

