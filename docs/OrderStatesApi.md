# KinowJavascriptSdk.OrderStatesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderState**](OrderStatesApi.md#getOrderState) | **GET** /order-states/{order_state_id} | 
[**getOrderStates**](OrderStatesApi.md#getOrderStates) | **GET** /order-states | 


<a name="getOrderState"></a>
# **getOrderState**
> OrderState getOrderState(orderStateId)



Get order state

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrderStatesApi();

var orderStateId = 789; // Integer | ID of the order state to fetch

apiInstance.getOrderState(orderStateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderStateId** | **Integer**| ID of the order state to fetch | 

### Return type

[**OrderState**](OrderState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrderStates"></a>
# **getOrderStates**
> OrderStates getOrderStates(opts)



Get order state list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrderStatesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getOrderStates(opts).then(function(data) {
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

[**OrderStates**](OrderStates.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

