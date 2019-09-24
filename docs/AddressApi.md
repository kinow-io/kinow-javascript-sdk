# KinowJavascriptSdk.AddressApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerAddress**](AddressApi.md#getCustomerAddress) | **GET** /customers/{customer_id}/address | 
[**updateAddress**](AddressApi.md#updateAddress) | **PUT** /addresses/{address_id} | 


<a name="getCustomerAddress"></a>
# **getCustomerAddress**
> Address getCustomerAddress(customerId)



Get customer address

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AddressApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getCustomerAddress(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateAddress"></a>
# **updateAddress**
> Address updateAddress(addressId, body)



Update address

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AddressApi();

var addressId = 789; // Integer | Address ID to update

var body = new KinowJavascriptSdk.Address(); // Address | 

apiInstance.updateAddress(addressId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressId** | **Integer**| Address ID to update | 
 **body** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

