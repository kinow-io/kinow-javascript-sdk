# KinowJavascriptSdk.FacebookApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFacebookId**](FacebookApi.md#createFacebookId) | **POST** /facebook/customers | 
[**getFacebookCustomer**](FacebookApi.md#getFacebookCustomer) | **GET** /facebook/customers/{facebook_id} | 


<a name="createFacebookId"></a>
# **createFacebookId**
> createFacebookId(customerId, facebookId)



Create new Facebook ID for user

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.FacebookApi();

var customerId = 789; // Integer | Customer ID

var facebookId = "facebookId_example"; // String | Facebook ID

apiInstance.createFacebookId(customerId, facebookId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID | 
 **facebookId** | **String**| Facebook ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getFacebookCustomer"></a>
# **getFacebookCustomer**
> CustomerId getFacebookCustomer(facebookId)



Get customer ID by Facebook ID

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.FacebookApi();

var facebookId = 789; // Integer | Facebook ID to fetch

apiInstance.getFacebookCustomer(facebookId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facebookId** | **Integer**| Facebook ID to fetch | 

### Return type

[**CustomerId**](CustomerId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

