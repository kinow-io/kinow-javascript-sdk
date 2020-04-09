# KinowJavascriptSdk.SubscriptionsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDisabledSubscriptions**](SubscriptionsApi.md#getDisabledSubscriptions) | **GET** /videos/{video_id}/disabled-subscriptions | 
[**getProductSubscription**](SubscriptionsApi.md#getProductSubscription) | **GET** /products/{product_id}/subscription | 
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{subscription_id} | 
[**getSubscriptionCategories**](SubscriptionsApi.md#getSubscriptionCategories) | **GET** /subscriptions/{subscription_id}/categories | 
[**getSubscriptionCoverImage**](SubscriptionsApi.md#getSubscriptionCoverImage) | **GET** /subscriptions/{subscription_id}/cover | 
[**getSubscriptions**](SubscriptionsApi.md#getSubscriptions) | **GET** /subscriptions | 
[**uploadSubscriptionCover**](SubscriptionsApi.md#uploadSubscriptionCover) | **POST** /subscriptions/{subscription_id}/cover | 


<a name="getDisabledSubscriptions"></a>
# **getDisabledSubscriptions**
> Subscriptions getDisabledSubscriptions(videoId, opts)



Get disabled subscriptions list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**Subscriptions**](Subscriptions.md)

### Authorization

No authorization required

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

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscription"></a>
# **getSubscription**
> Subscription getSubscription(subscriptionId)



Get Subscription

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionCategories"></a>
# **getSubscriptionCategories**
> Categories getSubscriptionCategories(subscriptionId, opts)



Get categories list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

var subscriptionId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
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

[**Categories**](Categories.md)

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

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptions"></a>
# **getSubscriptions**
> Subscriptions getSubscriptions(opts)



Get Subscriptions list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**Subscriptions**](Subscriptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadSubscriptionCover"></a>
# **uploadSubscriptionCover**
> Image uploadSubscriptionCover(subscriptionId, file, hash, opts)



Upload subscription cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SubscriptionsApi();

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

