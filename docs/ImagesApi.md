# KinowJavascriptSdk.ImagesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProductScreenshot**](ImagesApi.md#deleteProductScreenshot) | **DELETE** /products/{product_id}/screenshots/{image_id} | 
[**getActorCoverImage**](ImagesApi.md#getActorCoverImage) | **GET** /actors/{actor_id}/cover | 
[**getCategoryBanner**](ImagesApi.md#getCategoryBanner) | **GET** /categories/{category_id}/banner | 
[**getDirectorCoverImage**](ImagesApi.md#getDirectorCoverImage) | **GET** /directors/{director_id}/cover | 
[**getIntroImage**](ImagesApi.md#getIntroImage) | **GET** /widgets/intro/images | 
[**getProductCoverImage**](ImagesApi.md#getProductCoverImage) | **GET** /products/{product_id}/cover | 
[**getProductImages**](ImagesApi.md#getProductImages) | **GET** /products/{product_id}/images | 
[**getProductScreenshots**](ImagesApi.md#getProductScreenshots) | **GET** /products/{product_id}/screenshots | 
[**getSubscriptionCoverImage**](ImagesApi.md#getSubscriptionCoverImage) | **GET** /subscriptions/{subscription_id}/cover | 
[**getVideoCover**](ImagesApi.md#getVideoCover) | **GET** /videos/{video_id}/cover | 
[**uploadActorCover**](ImagesApi.md#uploadActorCover) | **POST** /actors/{actor_id}/cover | 
[**uploadCategoryBanner**](ImagesApi.md#uploadCategoryBanner) | **POST** /category/{category_id}/banner | 
[**uploadDirectorCover**](ImagesApi.md#uploadDirectorCover) | **POST** /directors/{director_id}/cover | 
[**uploadProductCover**](ImagesApi.md#uploadProductCover) | **POST** /products/{product_id}/cover | 
[**uploadProductScreenshot**](ImagesApi.md#uploadProductScreenshot) | **PUT** /products/{product_id}/screenshots/{image_id} | 
[**uploadProductScreenshots**](ImagesApi.md#uploadProductScreenshots) | **POST** /products/{product_id}/screenshots | 
[**uploadSubscriptionCover**](ImagesApi.md#uploadSubscriptionCover) | **POST** /subscriptions/{subscription_id}/cover | 


<a name="deleteProductScreenshot"></a>
# **deleteProductScreenshot**
> deleteProductScreenshot(productId, imageId)



Delete product screenshot

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var productId = 3.4; // Number | Product ID to fetch

var imageId = 3.4; // Number | Image ID to delete

apiInstance.deleteProductScreenshot(productId, imageId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Product ID to fetch | 
 **imageId** | **Number**| Image ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getActorCoverImage"></a>
# **getActorCoverImage**
> Image getActorCoverImage(actorId)



Get cover image of an actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var actorId = 789; // Integer | Actor ID to fetch

apiInstance.getActorCoverImage(actorId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actorId** | **Integer**| Actor ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryBanner"></a>
# **getCategoryBanner**
> Image getCategoryBanner(categoryId)



Get banner of a category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var categoryId = 789; // Integer | Category ID to fetch

apiInstance.getCategoryBanner(categoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectorCoverImage"></a>
# **getDirectorCoverImage**
> Image getDirectorCoverImage(directorId)



Get cover image of a director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var directorId = 789; // Integer | Director ID to fetch

apiInstance.getDirectorCoverImage(directorId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**| Director ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIntroImage"></a>
# **getIntroImage**
> [Image] getIntroImage()



Get introduction image

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();
apiInstance.getIntroImage().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Image]**](Image.md)

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var productId = 789; // Integer | Product ID to fetch

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
 **productId** | **Integer**| Product ID to fetch | 
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

<a name="getProductScreenshots"></a>
# **getProductScreenshots**
> [Screenshot] getProductScreenshots(productId)



Get product screenshots

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

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

[**[Screenshot]**](Screenshot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionCoverImage"></a>
# **getSubscriptionCoverImage**
> Image getSubscriptionCoverImage(subscriptionId)



Get cover image of a subscription

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var subscriptionId = 789; // Integer | Subscription ID to fetch

apiInstance.getSubscriptionCoverImage(subscriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**| Subscription ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoCover"></a>
# **getVideoCover**
> Image getVideoCover(videoId)



Get video cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getVideoCover(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadActorCover"></a>
# **uploadActorCover**
> Image uploadActorCover(actorId, file, hash, opts)



Upload actor cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var actorId = 3.4; // Number | Actor ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadActorCover(actorId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actorId** | **Number**| Actor ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadCategoryBanner"></a>
# **uploadCategoryBanner**
> Image uploadCategoryBanner(categoryId, file, hash, opts)



Upload category banner

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var categoryId = 3.4; // Number | Category ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadCategoryBanner(categoryId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**| Category ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadDirectorCover"></a>
# **uploadDirectorCover**
> Image uploadDirectorCover(directorId, file, hash, opts)



Upload director cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var directorId = 3.4; // Number | Director ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadDirectorCover(directorId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Number**| Director ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadProductCover"></a>
# **uploadProductCover**
> Image uploadProductCover(productId, file, hash, opts)



Upload product cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

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

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadProductScreenshot"></a>
# **uploadProductScreenshot**
> Screenshot uploadProductScreenshot(productId, imageId, opts)



Upload product screenshot

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var productId = 3.4; // Number | Product ID to fetch

var imageId = 3.4; // Number | Image ID to fetch

var opts = { 
  'position': 3.4 // Number | 
};
apiInstance.uploadProductScreenshot(productId, imageId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| Product ID to fetch | 
 **imageId** | **Number**| Image ID to fetch | 
 **position** | **Number**|  | [optional] 

### Return type

[**Screenshot**](Screenshot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadProductScreenshots"></a>
# **uploadProductScreenshots**
> [Screenshot] uploadProductScreenshots(productId, file, hash, opts)



Upload product screenshots

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var productId = 3.4; // Number | Product ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example", // String | Hash algorithm to check the hash file (default value is: sha256)
  'position': 3.4 // Number | 
};
apiInstance.uploadProductScreenshots(productId, file, hash, opts).then(function(data) {
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
 **position** | **Number**|  | [optional] 

### Return type

[**[Screenshot]**](Screenshot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadSubscriptionCover"></a>
# **uploadSubscriptionCover**
> Image uploadSubscriptionCover(subscriptionId, file, hash, opts)



Upload subscription cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var subscriptionId = 3.4; // Number | Subscription ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadSubscriptionCover(subscriptionId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Number**| Subscription ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

