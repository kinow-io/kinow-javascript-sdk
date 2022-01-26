# KinowJavascriptSdk.PaymentModulesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCartPaymentModules**](PaymentModulesApi.md#getCartPaymentModules) | **GET** /carts/{cart_id}/payments | 
[**getPaymentMethods**](PaymentModulesApi.md#getPaymentMethods) | **GET** /customers/{customer_id}/payments/{payment_name}/payment-methods | 
[**getPaymentMethodsWithIp**](PaymentModulesApi.md#getPaymentMethodsWithIp) | **GET** /customers/{customer_id}/payments/{payment_name}/payment-methods/{ip_address} | 
[**getPaymentModules**](PaymentModulesApi.md#getPaymentModules) | **GET** /payment-modules | 
[**getPaymentToken**](PaymentModulesApi.md#getPaymentToken) | **GET** /payment-modules/token/{token} | 
[**getPaymentUrl**](PaymentModulesApi.md#getPaymentUrl) | **GET** /carts/{cart_id}/payments/{payment_name} | 
[**getPendingPayments**](PaymentModulesApi.md#getPendingPayments) | **GET** /customers/{customer_id}/payments/{payment_name}/pending | 
[**getPendingPaymentsWithIp**](PaymentModulesApi.md#getPendingPaymentsWithIp) | **GET** /customers/{customer_id}/payments/{payment_name}/pending/{ip_address} | 
[**preparePayment**](PaymentModulesApi.md#preparePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/prepare | 
[**recurringPayment**](PaymentModulesApi.md#recurringPayment) | **POST** /carts/{cart_id}/payments/{payment_name}/recurring | 
[**updatePaymentMethod**](PaymentModulesApi.md#updatePaymentMethod) | **PUT** /customers/{customer_id}/payments/{payment_name}/payment-method | 
[**validateFreeOrder**](PaymentModulesApi.md#validateFreeOrder) | **POST** /carts/{cart_id}/validate-free-order | 
[**validatePayment**](PaymentModulesApi.md#validatePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/validate | 


<a name="getCartPaymentModules"></a>
# **getCartPaymentModules**
> PaymentModuleListResponse1 getCartPaymentModules(cartId, opts)



Get payment gateways list available for given cart

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCartPaymentModules(cartId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**PaymentModuleListResponse1**](PaymentModuleListResponse1.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> [PaymentMethods] getPaymentMethods(customerId, paymentName)



Get payment methods saved for a Customer on a payment gateway

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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentMethodsWithIp"></a>
# **getPaymentMethodsWithIp**
> [PaymentMethods] getPaymentMethodsWithIp(customerId, paymentName, ipAddress)



Get payment methods saved for a Customer on a payment gateway

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

var ipAddress = "ipAddress_example"; // String | Filter by user IP

apiInstance.getPaymentMethodsWithIp(customerId, paymentName, ipAddress).then(function(data) {
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
 **ipAddress** | **String**| Filter by user IP | 

### Return type

[**[PaymentMethods]**](PaymentMethods.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentModules"></a>
# **getPaymentModules**
> PaymentModuleListResponse getPaymentModules(opts)



Get payment gateways list

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

[**PaymentModuleListResponse**](PaymentModuleListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentToken"></a>
# **getPaymentToken**
> PaymentToken1 getPaymentToken(token)



Get payment token details

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var token = 56; // Integer | Token to fetch

apiInstance.getPaymentToken(token).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **Integer**| Token to fetch | 

### Return type

[**PaymentToken1**](PaymentToken1.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentUrl"></a>
# **getPaymentUrl**
> PaymentUrlResponse getPaymentUrl(cartId, paymentName)



Get payment gateway URL to use in iframe

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

[**PaymentUrlResponse**](PaymentUrlResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPendingPaymentsWithIp"></a>
# **getPendingPaymentsWithIp**
> PaymentDetailsListResponse getPendingPaymentsWithIp(paymentName, customerId, ipAddress)



Get pending payments for a Customer on a payment gateway

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var paymentName = "paymentName_example"; // String | 

var customerId = 789; // Integer | 

var ipAddress = "ipAddress_example"; // String | Filter by user IP

apiInstance.getPendingPaymentsWithIp(paymentName, customerId, ipAddress).then(function(data) {
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
 **ipAddress** | **String**| Filter by user IP | 

### Return type

[**PaymentDetailsListResponse**](PaymentDetailsListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="preparePayment"></a>
# **preparePayment**
> PaymentDetailsResponse preparePayment(cartId, paymentName, opts)



Prepare payment on a payment gateway

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

var opts = { 
  'ipAddress': "ipAddress_example" // String | Use IP address in payment process
};
apiInstance.preparePayment(cartId, paymentName, opts).then(function(data) {
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
 **ipAddress** | **String**| Use IP address in payment process | [optional] 

### Return type

[**PaymentDetailsResponse**](PaymentDetailsResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="recurringPayment"></a>
# **recurringPayment**
> recurringPayment(cartId, paymentName, paymentArgument)



Validate recurring payment on a payment gateway

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

var paymentArgument = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | Payment argument

apiInstance.recurringPayment(cartId, paymentName, paymentArgument).then(function() {
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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePaymentMethod"></a>
# **updatePaymentMethod**
> updatePaymentMethod(customerId, paymentName, paymentArguments, opts)



Update payment method for a Customer on a payment gateway

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

var paymentArguments = new KinowJavascriptSdk.UpdatePaymentRequest(); // UpdatePaymentRequest | Payment arguments

var opts = { 
  'ipAddress': "ipAddress_example" // String | Filter by user IP
};
apiInstance.updatePaymentMethod(customerId, paymentName, paymentArguments, opts).then(function() {
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
 **paymentArguments** | [**UpdatePaymentRequest**](UpdatePaymentRequest.md)| Payment arguments | 
 **ipAddress** | **String**| Filter by user IP | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

var apiInstance = new KinowJavascriptSdk.PaymentModulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

var paymentArgument = new KinowJavascriptSdk.PaymentArgumentsResponse(); // PaymentArgumentsResponse | Payment argument

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
 **paymentArgument** | [**PaymentArgumentsResponse**](PaymentArgumentsResponse.md)| Payment argument | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

