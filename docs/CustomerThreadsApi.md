# KinowJavascriptSdk.CustomerThreadsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerThread**](CustomerThreadsApi.md#getCustomerThread) | **GET** /customer-threads/{customer_thread_id} | 
[**getCustomerThreads**](CustomerThreadsApi.md#getCustomerThreads) | **GET** /customer-threads | 


<a name="getCustomerThread"></a>
# **getCustomerThread**
> CustomerThread getCustomerThread(customerThreadId)



Get customer thread

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomerThreadsApi();

var customerThreadId = 789; // Integer | Customer thread ID to fetch

apiInstance.getCustomerThread(customerThreadId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerThreadId** | **Integer**| Customer thread ID to fetch | 

### Return type

[**CustomerThread**](CustomerThread.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerThreads"></a>
# **getCustomerThreads**
> CustomerThread1 getCustomerThreads(opts)



Get customer threads list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomerThreadsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'dateAdd': "dateAdd_example", // String | 
  'dateAddOperator': "dateAddOperator_example" // String | 
};
apiInstance.getCustomerThreads(opts).then(function(data) {
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
 **dateAdd** | **String**|  | [optional] 
 **dateAddOperator** | **String**|  | [optional] 

### Return type

[**CustomerThread1**](CustomerThread1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

