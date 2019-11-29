# KinowJavascriptSdk.PrepaymentsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrepaymentBalances**](PrepaymentsApi.md#getPrepaymentBalances) | **GET** /customers/{customer_id}/prepayment-balance/{type} | 
[**getPrepaymentBonus**](PrepaymentsApi.md#getPrepaymentBonus) | **GET** /prepayment/bonus | 
[**getPrepaymentBonus_0**](PrepaymentsApi.md#getPrepaymentBonus_0) | **GET** /prepayment/bonus/{prepayment_bonus_id} | 
[**getPrepaymentOperation**](PrepaymentsApi.md#getPrepaymentOperation) | **GET** /prepayment/operations/{prepayment_operation_id} | 
[**getPrepaymentOperations**](PrepaymentsApi.md#getPrepaymentOperations) | **GET** /customers/{customer_id}/prepayment-operation/{type} | 
[**getPrepaymentRecharge**](PrepaymentsApi.md#getPrepaymentRecharge) | **GET** /prepayment/recharges/{prepayment_recharge_id} | 
[**getPrepaymentRecharges**](PrepaymentsApi.md#getPrepaymentRecharges) | **GET** /prepayment/recharges | 


<a name="getPrepaymentBalances"></a>
# **getPrepaymentBalances**
> PrepaymentBalance getPrepaymentBalances(customerId, type)



Get PrepaymentBalances list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var customerId = 789; // Integer | Customer ID to fetch

var type = "type_example"; // String | PrepaymentBalance type to fetch (currency or credit)

apiInstance.getPrepaymentBalances(customerId, type).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **type** | **String**| PrepaymentBalance type to fetch (currency or credit) | 

### Return type

[**PrepaymentBalance**](PrepaymentBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentBonus"></a>
# **getPrepaymentBonus**
> PrepaymentBonus1 getPrepaymentBonus(opts)



Get PrepaymentBonus list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPrepaymentBonus(opts).then(function(data) {
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

[**PrepaymentBonus1**](PrepaymentBonus1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentBonus_0"></a>
# **getPrepaymentBonus_0**
> PrepaymentBonus getPrepaymentBonus_0(prepaymentBonusId)



Get PrepaymentBonus

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var prepaymentBonusId = 789; // Integer | PrepaymentBonus ID to fetch

apiInstance.getPrepaymentBonus_0(prepaymentBonusId).then(function(data) {
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

[**PrepaymentBonus**](PrepaymentBonus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentOperation"></a>
# **getPrepaymentOperation**
> PrepaymentOperation getPrepaymentOperation(prepaymentOperationId)



Get PrepaymentOperation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**PrepaymentOperation**](PrepaymentOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentOperations"></a>
# **getPrepaymentOperations**
> PrepaymentOperations getPrepaymentOperations(customerId, type, opts)



Get PrepaymentOperations list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PrepaymentsApi();

var customerId = 789; // Integer | Customer ID to fetch

var type = "type_example"; // String | PrepaymentOperation type to fetch (currency or credit)

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getPrepaymentOperations(customerId, type, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **type** | **String**| PrepaymentOperation type to fetch (currency or credit) | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**PrepaymentOperations**](PrepaymentOperations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentRecharge"></a>
# **getPrepaymentRecharge**
> PrepaymentRecharge getPrepaymentRecharge(prepaymentRechargeId)



Get PrepaymentRecharge

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**PrepaymentRecharge**](PrepaymentRecharge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPrepaymentRecharges"></a>
# **getPrepaymentRecharges**
> PrepaymentRecharges getPrepaymentRecharges(opts)



Get PrepaymentRecharges list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**PrepaymentRecharges**](PrepaymentRecharges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

