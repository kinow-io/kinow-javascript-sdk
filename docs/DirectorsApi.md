# KinowJavascriptSdk.DirectorsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDirector**](DirectorsApi.md#createDirector) | **POST** /directors | 
[**deleteDirector**](DirectorsApi.md#deleteDirector) | **DELETE** /directors/{director_id} | 
[**getDirector**](DirectorsApi.md#getDirector) | **GET** /directors/{director_id} | 
[**getDirectors**](DirectorsApi.md#getDirectors) | **GET** /directors | 
[**getProductDirectors**](DirectorsApi.md#getProductDirectors) | **GET** /products/{product_id}/directors | 
[**updateDirector**](DirectorsApi.md#updateDirector) | **PUT** /directors/{director_id} | 


<a name="createDirector"></a>
# **createDirector**
> Director createDirector(body)



Create new director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var body = new KinowJavascriptSdk.Director(); // Director | 

apiInstance.createDirector(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Director**](Director.md)|  | 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDirector"></a>
# **deleteDirector**
> deleteDirector(directorId)



Delete director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 56; // Integer | 

apiInstance.deleteDirector(directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirector"></a>
# **getDirector**
> Director getDirector(directorId, opts)



Get director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 789; // Integer | Director ID to fetch

var opts = { 
  'imageType': "imageType_example" // String | 
};
apiInstance.getDirector(directorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**| Director ID to fetch | 
 **imageType** | **String**|  | [optional] 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectors"></a>
# **getDirectors**
> Director1 getDirectors(opts)



Get directors list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getDirectors(opts).then(function(data) {
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
 **imageType** | **String**|  | [optional] 

### Return type

[**Director1**](Director1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectors"></a>
# **getProductDirectors**
> Director1 getProductDirectors(productId, opts)



Get directors of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getProductDirectors(productId, opts).then(function(data) {
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
 **imageType** | **String**|  | [optional] 

### Return type

[**Director1**](Director1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateDirector"></a>
# **updateDirector**
> updateDirector(directorId, body)



Update director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 56; // Integer | 

var body = new KinowJavascriptSdk.Director(); // Director | 

apiInstance.updateDirector(directorId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**|  | 
 **body** | [**Director**](Director.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

