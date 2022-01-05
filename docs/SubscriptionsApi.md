# KinowJavascriptSdk.SubscriptionsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCategoriesToSubscription**](SubscriptionsApi.md#attachCategoriesToSubscription) | **POST** /subscriptions/{subscription_id}/categories | 
[**detachCategoryFromSubscription**](SubscriptionsApi.md#detachCategoryFromSubscription) | **DELETE** /subscriptions/{subscription_id}/categories/{category_id} | 
[**getDisabledSubscriptions**](SubscriptionsApi.md#getDisabledSubscriptions) | **GET** /videos/{video_id}/disabled-subscriptions | 
[**getProductSubscription**](SubscriptionsApi.md#getProductSubscription) | **GET** /products/{product_id}/subscription | 
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{subscription_id} | 
[**getSubscriptionCategories**](SubscriptionsApi.md#getSubscriptionCategories) | **GET** /subscriptions/{subscription_id}/categories | 
[**getSubscriptionCoverImage**](SubscriptionsApi.md#getSubscriptionCoverImage) | **GET** /subscriptions/{subscription_id}/cover | 
[**getSubscriptions**](SubscriptionsApi.md#getSubscriptions) | **GET** /subscriptions | 
[**uploadSubscriptionCover**](SubscriptionsApi.md#uploadSubscriptionCover) | **POST** /subscriptions/{subscription_id}/cover | 


<a name="attachCategoriesToSubscription"></a>
# **attachCategoriesToSubscription**
> attachCategoriesToSubscription(subscriptionId, categoryIds)



Attach categories to subscription

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var subscriptionId = 789; // Integer | Subscription ID to fetch

var categoryIds = "categoryIds_example"; // String | List of category IDs to attach, separated with comma

apiInstance.attachCategoriesToSubscription(subscriptionId, categoryIds).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**| Subscription ID to fetch | 
 **categoryIds** | **String**| List of category IDs to attach, separated with comma | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachCategoryFromSubscription"></a>
# **detachCategoryFromSubscription**
> detachCategoryFromSubscription(subscriptionId, categoryId)



Detach category from subscription

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var subscriptionId = 789; // Integer | Subscription ID to fetch

var categoryId = 789; // Integer | Category ID to detach

apiInstance.detachCategoryFromSubscription(subscriptionId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**| Subscription ID to fetch | 
 **categoryId** | **Integer**| Category ID to detach | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDisabledSubscriptions"></a>
# **getDisabledSubscriptions**
> SubscriptionListResponse getDisabledSubscriptions(videoId, opts)



Get disabled subscriptions list

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getDisabledSubscriptions(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductSubscription"></a>
# **getProductSubscription**
> SubscriptionResponse getProductSubscription(productId)



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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

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

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscription"></a>
# **getSubscription**
> SubscriptionResponse getSubscription(subscriptionId)



Get Subscription

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var subscriptionId = 789; // Integer | Product ID to fetch

apiInstance.getSubscription(subscriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**| Product ID to fetch | 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionCategories"></a>
# **getSubscriptionCategories**
> CategoryListResponse getSubscriptionCategories(subscriptionId, opts)



Get categories list

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var subscriptionId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getSubscriptionCategories(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**CategoryListResponse**](CategoryListResponse.md)

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

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

<a name="getSubscriptions"></a>
# **getSubscriptions**
> SubscriptionListResponse getSubscriptions(opts)



Get Subscriptions list

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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getSubscriptions(opts).then(function(data) {
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

### Return type

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
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

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

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

