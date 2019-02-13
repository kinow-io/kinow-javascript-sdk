# KinowJavascriptSdk.BookmarksApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachBookmarkToCustomer**](BookmarksApi.md#attachBookmarkToCustomer) | **POST** /customers/{customer_id}/bookmarks | 
[**detachBookmarkFromCustomer**](BookmarksApi.md#detachBookmarkFromCustomer) | **DELETE** /customers/{customer_id}/bookmarks/{product_id} | 
[**getCustomerBookmarks**](BookmarksApi.md#getCustomerBookmarks) | **GET** /customers/{customer_id}/bookmarks | 


<a name="attachBookmarkToCustomer"></a>
# **attachBookmarkToCustomer**
> attachBookmarkToCustomer(customerId, productId)



Attach bookmark to customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.BookmarksApi();

var customerId = 789; // Integer | ID of the customer to fetch

var productId = 789; // Integer | 

apiInstance.attachBookmarkToCustomer(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **productId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="detachBookmarkFromCustomer"></a>
# **detachBookmarkFromCustomer**
> detachBookmarkFromCustomer(customerId, productId)



Detach bookmark from customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.BookmarksApi();

var customerId = 789; // Integer | ID of the customer to fetch

var productId = 789; // Integer | 

apiInstance.detachBookmarkFromCustomer(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **productId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerBookmarks"></a>
# **getCustomerBookmarks**
> Products getCustomerBookmarks(customerId, opts)



Get customer bookmarks

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.BookmarksApi();

var customerId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCustomerBookmarks(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

