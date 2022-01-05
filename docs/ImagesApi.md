# KinowJavascriptSdk.ImagesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActorCoverImage**](ImagesApi.md#getActorCoverImage) | **GET** /actors/{actor_id}/cover | 
[**getCategoryBanner**](ImagesApi.md#getCategoryBanner) | **GET** /categories/{category_id}/banner | 
[**getCategoryImageTypes**](ImagesApi.md#getCategoryImageTypes) | **GET** /categories/image-types | 
[**getCategoryImages**](ImagesApi.md#getCategoryImages) | **GET** /categories/{category_id}/images | 
[**getDirectorCoverImage**](ImagesApi.md#getDirectorCoverImage) | **GET** /directors/{director_id}/cover | 
[**getProductCoverImage**](ImagesApi.md#getProductCoverImage) | **GET** /products/{product_id}/cover | 
[**getProductImageTypes**](ImagesApi.md#getProductImageTypes) | **GET** /products/image-types | 
[**getProductImages**](ImagesApi.md#getProductImages) | **GET** /products/{product_id}/images | 
[**getProductScreenshots**](ImagesApi.md#getProductScreenshots) | **GET** /products/{product_id}/screenshots | 
[**getSliderImage**](ImagesApi.md#getSliderImage) | **GET** /widgets/slider/images | 
[**getSubscriptionCoverImage**](ImagesApi.md#getSubscriptionCoverImage) | **GET** /subscriptions/{subscription_id}/cover | 
[**getVideoCover**](ImagesApi.md#getVideoCover) | **GET** /videos/{video_id}/cover | 
[**uploadActorCover**](ImagesApi.md#uploadActorCover) | **POST** /actors/{actor_id}/cover | 
[**uploadCategoryCover**](ImagesApi.md#uploadCategoryCover) | **POST** /categories/{category_id}/cover | 
[**uploadCategoryImage**](ImagesApi.md#uploadCategoryImage) | **POST** /categories/{category_id}/image | 
[**uploadDirectorCover**](ImagesApi.md#uploadDirectorCover) | **POST** /directors/{director_id}/cover | 
[**uploadProductCover**](ImagesApi.md#uploadProductCover) | **POST** /products/{product_id}/cover | 
[**uploadProductImage**](ImagesApi.md#uploadProductImage) | **POST** /products/{product_id}/image | 
[**uploadSubscriptionCover**](ImagesApi.md#uploadSubscriptionCover) | **POST** /subscriptions/{subscription_id}/cover | 


<a name="getActorCoverImage"></a>
# **getActorCoverImage**
> ImageResponse getActorCoverImage(actorId)



Get cover image of an actor

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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryBanner"></a>
# **getCategoryBanner**
> ImageResponse getCategoryBanner(categoryId)



Get Category cover

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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryImageTypes"></a>
# **getCategoryImageTypes**
> [ImageType] getCategoryImageTypes()



Get image types for categories

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();
apiInstance.getCategoryImageTypes().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ImageType]**](ImageType.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryImages"></a>
# **getCategoryImages**
> CategoryImagesResponse getCategoryImages(categoryId, opts)



Get images attached to Category

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'type': "type_example", // String | Filter on specific Image type
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCategoryImages(categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 
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

<a name="getDirectorCoverImage"></a>
# **getDirectorCoverImage**
> ImageResponse getDirectorCoverImage(directorId)



Get cover image of a director

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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductCoverImage"></a>
# **getProductCoverImage**
> ImageResponse getProductCoverImage(productId)



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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductImageTypes"></a>
# **getProductImageTypes**
> [ImageType] getProductImageTypes()



Get image types for products

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();
apiInstance.getProductImageTypes().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ImageType]**](ImageType.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductImages"></a>
# **getProductImages**
> ImageListResponse getProductImages(productId, opts)



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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

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

[**ImageListResponse**](ImageListResponse.md)

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

[**[Image]**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSliderImage"></a>
# **getSliderImage**
> ImageListResponse getSliderImage()



Get slider images

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();
apiInstance.getSliderImage().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ImageListResponse**](ImageListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionCoverImage"></a>
# **getSubscriptionCoverImage**
> ImageResponse getSubscriptionCoverImage(subscriptionId)



Get cover image of a subscription

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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoCover"></a>
# **getVideoCover**
> ImageResponse getVideoCover(videoId)



Get video cover

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

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadActorCover"></a>
# **uploadActorCover**
> ImageResponse uploadActorCover(body)



Upload actor cover

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var body = new KinowJavascriptSdk.UploadActorCoverRequest(); // UploadActorCoverRequest | 

apiInstance.uploadActorCover(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadActorCoverRequest**](UploadActorCoverRequest.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadCategoryCover"></a>
# **uploadCategoryCover**
> ImageResponse uploadCategoryCover(body)



Upload Category cover

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var body = new KinowJavascriptSdk.UploadCategoryCoverRequest(); // UploadCategoryCoverRequest | 

apiInstance.uploadCategoryCover(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadCategoryCoverRequest**](UploadCategoryCoverRequest.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadCategoryImage"></a>
# **uploadCategoryImage**
> Image uploadCategoryImage(categoryId, file, hash, imageTypeName, opts)



Upload Category image

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var categoryId = 3.4; // Number | Category ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var imageTypeName = "imageTypeName_example"; // String | Image types name to use to generate image assets

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadCategoryImage(categoryId, file, hash, imageTypeName, opts).then(function(data) {
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
 **imageTypeName** | **String**| Image types name to use to generate image assets | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadDirectorCover"></a>
# **uploadDirectorCover**
> Image uploadDirectorCover(body)



Upload director cover

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var body = new KinowJavascriptSdk.UploadDirectorCoverRequest(); // UploadDirectorCoverRequest | 

apiInstance.uploadDirectorCover(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadDirectorCoverRequest**](UploadDirectorCoverRequest.md)|  | 

### Return type

[**Image**](Image.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="uploadProductCover"></a>
# **uploadProductCover**
> ImageResponse uploadProductCover(body)



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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var body = new KinowJavascriptSdk.UploadProductCoverRequest(); // UploadProductCoverRequest | 

apiInstance.uploadProductCover(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadProductCoverRequest**](UploadProductCoverRequest.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

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

<a name="uploadSubscriptionCover"></a>
# **uploadSubscriptionCover**
> ImageResponse uploadSubscriptionCover(body)



Upload subscription cover

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

var apiInstance = new KinowJavascriptSdk.ImagesApi();

var body = new KinowJavascriptSdk.UploadSubscriptionCoverRequest(); // UploadSubscriptionCoverRequest | 

apiInstance.uploadSubscriptionCover(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadSubscriptionCoverRequest**](UploadSubscriptionCoverRequest.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

