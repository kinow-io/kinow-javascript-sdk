# KinowJavascriptSdk.PaymentModulesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentMethods**](PaymentModulesApi.md#getPaymentMethods) | **GET** /customers/{customer_id}/payments/{payment_name}/payment-methods | 
[**getPaymentModules**](PaymentModulesApi.md#getPaymentModules) | **GET** /payment-modules | 
[**getPaymentUrl**](PaymentModulesApi.md#getPaymentUrl) | **GET** /carts/{cart_id}/payments/{payment_name} | 
[**getPendingPayments**](PaymentModulesApi.md#getPendingPayments) | **GET** /customers/{customer_id}/payments/{payment_name}/pending | 
[**preparePayment**](PaymentModulesApi.md#preparePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/prepare | 
[**updatePaymentMethod**](PaymentModulesApi.md#updatePaymentMethod) | **PUT** /customers/{customer_id}/payments/{payment_name}/payment-method | 
[**validateFreeOrder**](PaymentModulesApi.md#validateFreeOrder) | **POST** /carts/{cart_id}/validate-free-order | 
[**validatePayment**](PaymentModulesApi.md#validatePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/validate | 


<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> [PaymentMethods] getPaymentMethods(customerId, paymentName)



Get payment methods saved for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

apiInstance.getPaymentMethods(customerId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **paymentName** | **String**|  | 

### Return type

[**[PaymentMethods]**](PaymentMethods.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentModules"></a>
# **getPaymentModules**
> PaymentModules getPaymentModules(opts)



Get payment gateways list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPaymentModules(opts).then(function(data) {
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

[**PaymentModules**](PaymentModules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentUrl"></a>
# **getPaymentUrl**
> PaymentUrl getPaymentUrl(cartId, paymentName)



Get payment gateway URL to use in iframe

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

apiInstance.getPaymentUrl(cartId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 

### Return type

[**PaymentUrl**](PaymentUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPendingPayments"></a>
# **getPendingPayments**
> [PaymentDetails] getPendingPayments(paymentName, customerId)



Get pending payments for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var paymentName = "paymentName_example"; // String | 

var customerId = 789; // Integer | 

apiInstance.getPendingPayments(paymentName, customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentName** | **String**|  | 
 **customerId** | **Integer**|  | 

### Return type

[**[PaymentDetails]**](PaymentDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="preparePayment"></a>
# **preparePayment**
> PaymentDetails1 preparePayment(cartId, paymentName)



Prepare payment on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

apiInstance.preparePayment(cartId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 

### Return type

[**PaymentDetails1**](PaymentDetails1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePaymentMethod"></a>
# **updatePaymentMethod**
> updatePaymentMethod(customerId, paymentName, paymentArguments)



Update payment method for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

var paymentArguments = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | Payment arguments

apiInstance.updatePaymentMethod(customerId, paymentName, paymentArguments).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **paymentName** | **String**|  | 
 **paymentArguments** | [**PaymentArguments**](PaymentArguments.md)| Payment arguments | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateFreeOrder"></a>
# **validateFreeOrder**
> validateFreeOrder(cartId)



Validate cart without payment method (only for carts with a total of 0)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to validate

apiInstance.validateFreeOrder(cartId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to validate | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validatePayment"></a>
# **validatePayment**
> validatePayment(cartId, paymentName, paymentArgument)



Validate payment on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

var paymentArgument = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | Payment argument

apiInstance.validatePayment(cartId, paymentName, paymentArgument).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 
 **paymentArgument** | [**PaymentArguments**](PaymentArguments.md)| Payment argument | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

