# KinowJavascriptSdk.ExtractsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToExtract**](ExtractsApi.md#attachCoverToExtract) | **POST** /extracts/{extract_id}/cover | 
[**createExtract**](ExtractsApi.md#createExtract) | **POST** /extracts | 
[**deleteExtract**](ExtractsApi.md#deleteExtract) | **DELETE** /extracts/{extract_id} | 
[**getExtract**](ExtractsApi.md#getExtract) | **GET** /extracts/{extract_id} | 
[**getExtractPlayer**](ExtractsApi.md#getExtractPlayer) | **GET** /extracts/{extract_id}/player | 
[**getExtracts**](ExtractsApi.md#getExtracts) | **GET** /extracts | 
[**getProductExtracts**](ExtractsApi.md#getProductExtracts) | **GET** /products/{product_id}/extracts | 
[**updateExtract**](ExtractsApi.md#updateExtract) | **PUT** /extracts/{extract_id} | 


<a name="attachCoverToExtract"></a>
# **attachCoverToExtract**
> attachCoverToExtract(extractId, idImage)



Attach cover to extract (the image need to be attached to the product)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var idImage = 789; // Integer | Image ID to attach

apiInstance.attachCoverToExtract(extractId, idImage).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **idImage** | **Integer**| Image ID to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createExtract"></a>
# **createExtract**
> Extract createExtract(body)



Create new extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var body = new KinowJavascriptSdk.Extract(); // Extract | 

apiInstance.createExtract(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Extract**](Extract.md)|  | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteExtract"></a>
# **deleteExtract**
> deleteExtract(extractId)



Delete extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to update

apiInstance.deleteExtract(extractId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtract"></a>
# **getExtract**
> Extract getExtract(extractId)



Get extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

apiInstance.getExtract(extractId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtractPlayer"></a>
# **getExtractPlayer**
> Player getExtractPlayer(extractId)



Get extract&#39;s player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

apiInstance.getExtractPlayer(extractId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtracts"></a>
# **getExtracts**
> Videos1 getExtracts(opts)



Get extracts list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getExtracts(opts).then(function(data) {
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

[**Videos1**](Videos1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> Videos1 getProductExtracts(productId, opts)



Get extracts of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductExtracts(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Videos1**](Videos1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateExtract"></a>
# **updateExtract**
> Extract updateExtract(extractId, body)



Update extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var body = new KinowJavascriptSdk.Extract(); // Extract | 

apiInstance.updateExtract(extractId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **body** | [**Extract**](Extract.md)|  | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

