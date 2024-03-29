# KinowJavascriptSdk.PrepaymentsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerPrepaymentBalances**](PrepaymentsApi.md#getCustomerPrepaymentBalances) | **GET** /customers/{customer_id}/prepayment-balance | 
[**getCustomerPrepaymentOperations**](PrepaymentsApi.md#getCustomerPrepaymentOperations) | **GET** /customers/{customer_id}/prepayment-operations | 
[**getPrepaymentBonus**](PrepaymentsApi.md#getPrepaymentBonus) | **GET** /prepayment/bonus/{prepayment_bonus_id} | 
[**getPrepaymentBonusAmount**](PrepaymentsApi.md#getPrepaymentBonusAmount) | **POST** /prepayment/bonus/amount | 
[**getPrepaymentBonusList**](PrepaymentsApi.md#getPrepaymentBonusList) | **GET** /prepayment/bonus | 
[**getPrepaymentOperation**](PrepaymentsApi.md#getPrepaymentOperation) | **GET** /prepayment/operations/{prepayment_operation_id} | 
[**getPrepaymentOperations**](PrepaymentsApi.md#getPrepaymentOperations) | **GET** /prepayment/operations | 
[**getPrepaymentOperationsAmount**](PrepaymentsApi.md#getPrepaymentOperationsAmount) | **POST** /prepayment/operations/amount | 
[**getPrepaymentRecharge**](PrepaymentsApi.md#getPrepaymentRecharge) | **GET** /prepayment/recharges/{prepayment_recharge_id} | 
[**getPrepaymentRecharges**](PrepaymentsApi.md#getPrepaymentRecharges) | **GET** /prepayment/recharges | 


<a name="getCustomerPrepaymentBalances"></a>
# **getCustomerPrepaymentBalances**
> [PrepaymentBalance] getCustomerPrepaymentBalances(customerId, opts)



Get PrepaymentBalances list

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'currencyId': 56 // Integer | Currency ID to format amount
};
apiInstance.getCustomerPrepaymentBalances(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **currencyId** | **Integer**| Currency ID to format amount | [optional] 

### Return type

[**[PrepaymentBalance]**](PrepaymentBalance.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerPrepaymentOperations"></a>
# **getCustomerPrepaymentOperations**
> PrepaymentOperationListResponse getCustomerPrepaymentOperations(customerId, opts)



Get PrepaymentOperations list

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'type': "type_example", // String | 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerPrepaymentOperations(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **type** | **String**|  | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**PrepaymentOperationListResponse**](PrepaymentOperationListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentBonus"></a>
# **getPrepaymentBonus**
> PrepaymentBonusResponse getPrepaymentBonus(prepaymentBonusId)



Get PrepaymentBonus

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var prepaymentBonusId = 789; // Integer | PrepaymentBonus ID to fetch

apiInstance.getPrepaymentBonus(prepaymentBonusId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepaymentBonusId** | **Integer**| PrepaymentBonus ID to fetch | 

### Return type

[**PrepaymentBonusResponse**](PrepaymentBonusResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentBonusAmount"></a>
# **getPrepaymentBonusAmount**
> [PrepaymentBonusAmount] getPrepaymentBonusAmount(body)



Get prices for multiple PrepaymentBonus

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var body = new KinowJavascriptSdk.PrepaymentBonusIDList(); // PrepaymentBonusIDList | List of PrepaymentBonus IDs separated by comma, eg. '42,21,84'

apiInstance.getPrepaymentBonusAmount(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PrepaymentBonusIDList**](PrepaymentBonusIDList.md)| List of PrepaymentBonus IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[PrepaymentBonusAmount]**](PrepaymentBonusAmount.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentBonusList"></a>
# **getPrepaymentBonusList**
> PrepaymentBonusListResponse getPrepaymentBonusList(opts)



Get PrepaymentBonus list

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPrepaymentBonusList(opts).then(function(data) {
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

[**PrepaymentBonusListResponse**](PrepaymentBonusListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentOperation"></a>
# **getPrepaymentOperation**
> PrepaymentOperationResponse getPrepaymentOperation(prepaymentOperationId)



Get PrepaymentOperation

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var prepaymentOperationId = 789; // Integer | PrepaymentOperation ID to fetch

apiInstance.getPrepaymentOperation(prepaymentOperationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepaymentOperationId** | **Integer**| PrepaymentOperation ID to fetch | 

### Return type

[**PrepaymentOperationResponse**](PrepaymentOperationResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentOperations"></a>
# **getPrepaymentOperations**
> PrepaymentOperationListResponse getPrepaymentOperations(opts)



Get PrepaymentOperations list

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var opts = { 
  'type': "type_example", // String | 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPrepaymentOperations(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**PrepaymentOperationListResponse**](PrepaymentOperationListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentOperationsAmount"></a>
# **getPrepaymentOperationsAmount**
> [PrepaymentOperationAmount] getPrepaymentOperationsAmount(body)



Get prices for multiple PrepaymentOperations

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var body = new KinowJavascriptSdk.PrepaymentOperationIDList(); // PrepaymentOperationIDList | List of PrepaymentOperation IDs separated by comma, eg. '42,21,84'

apiInstance.getPrepaymentOperationsAmount(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PrepaymentOperationIDList**](PrepaymentOperationIDList.md)| List of PrepaymentOperation IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[PrepaymentOperationAmount]**](PrepaymentOperationAmount.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentRecharge"></a>
# **getPrepaymentRecharge**
> PrepaymentRechargeResponse getPrepaymentRecharge(prepaymentRechargeId)



Get PrepaymentRecharge

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var prepaymentRechargeId = 789; // Integer | PrepaymentRecharge ID to fetch

apiInstance.getPrepaymentRecharge(prepaymentRechargeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepaymentRechargeId** | **Integer**| PrepaymentRecharge ID to fetch | 

### Return type

[**PrepaymentRechargeResponse**](PrepaymentRechargeResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentRecharges"></a>
# **getPrepaymentRecharges**
> PrepaymentRechargeListResponse getPrepaymentRecharges(opts)



Get PrepaymentRecharges list

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

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPrepaymentRecharges(opts).then(function(data) {
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

[**PrepaymentRechargeListResponse**](PrepaymentRechargeListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

