# KinowJavascriptSdk.AccessesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableCategories**](AccessesApi.md#getAvailableCategories) | **GET** /categories-accesses | 
[**getCustomerHasAccessToProduct**](AccessesApi.md#getCustomerHasAccessToProduct) | **GET** /customers/{customer_id}/products/{product_id}/has-access | 
[**getCustomerHasAccessToVideo**](AccessesApi.md#getCustomerHasAccessToVideo) | **GET** /customers/{customer_id}/videos/{video_id}/has-access | 
[**getProductAvailability**](AccessesApi.md#getProductAvailability) | **GET** /products/{product_id}/access | 


<a name="getAvailableCategories"></a>
# **getAvailableCategories**
> Categories getAvailableCategories(opts)



Get available categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AccessesApi();

var opts = { 
  'customerId': 789, // Integer | ID of the customer to fetch
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getAvailableCategories(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Categories**](Categories.md)

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

var apiInstance = new KinowJavascriptSdk.AccessesApi();

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

<a name="getCustomerHasAccessToVideo"></a>
# **getCustomerHasAccessToVideo**
> getCustomerHasAccessToVideo(customerId, videoId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AccessesApi();

var customerId = 789; // Integer | ID of the customer to fetch

var videoId = 789; // Integer | ID of the video to fetch

apiInstance.getCustomerHasAccessToVideo(customerId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **videoId** | **Integer**| ID of the video to fetch | 

### Return type

null (empty response body)

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

var apiInstance = new KinowJavascriptSdk.AccessesApi();

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

