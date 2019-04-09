# KinowJavascriptSdk.ExtractsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToExtract**](ExtractsApi.md#attachCoverToExtract) | **POST** /extracts/{extract_id}/cover | 
[**createExtract**](ExtractsApi.md#createExtract) | **POST** /extracts | 
[**deleteExtract**](ExtractsApi.md#deleteExtract) | **DELETE** /extracts/{extract_id} | 
[**getExtractPlayer**](ExtractsApi.md#getExtractPlayer) | **GET** /extracts/{extract_id}/player | 
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

var extractId = 789; // Integer | ID of the extract to fetch

var idImage = 789; // Integer | ID of the image to attach

apiInstance.attachCoverToExtract(extractId, idImage).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| ID of the extract to fetch | 
 **idImage** | **Integer**| ID of the image to attach | 

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

<a name="getExtractPlayer"></a>
# **getExtractPlayer**
> PlayerConfiguration getExtractPlayer(extractId)



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

[**PlayerConfiguration**](PlayerConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> ProductExtractsResponse getProductExtracts(productId, opts)



Get extracts of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var productId = 789; // Integer | ID of the product to fetch

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
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**ProductExtractsResponse**](ProductExtractsResponse.md)

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

