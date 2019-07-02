# KinowJavascriptSdk.ActorsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActor**](ActorsApi.md#createActor) | **POST** /actors | 
[**deleteActor**](ActorsApi.md#deleteActor) | **DELETE** /actors/{actor_id} | 
[**getActor**](ActorsApi.md#getActor) | **GET** /actors/{actor_id} | 
[**getActors**](ActorsApi.md#getActors) | **GET** /actors | 
[**getProductActors**](ActorsApi.md#getProductActors) | **GET** /products/{product_id}/actors | 
[**updateActor**](ActorsApi.md#updateActor) | **PUT** /actors/{actor_id} | 


<a name="createActor"></a>
# **createActor**
> Actor createActor(body)



Create new actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var body = new KinowJavascriptSdk.Actor(); // Actor | 

apiInstance.createActor(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Actor**](Actor.md)|  | 

### Return type

[**Actor**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteActor"></a>
# **deleteActor**
> deleteActor(actorId)



Delete actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var actorId = 56; // Integer | 

apiInstance.deleteActor(actorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actorId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getActor"></a>
# **getActor**
> Actor getActor(actorId, opts)



Get actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var actorId = 789; // Integer | Actor ID to fetch

var opts = { 
  'imageType': "imageType_example" // String | 
};
apiInstance.getActor(actorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actorId** | **Integer**| Actor ID to fetch | 
 **imageType** | **String**|  | [optional] 

### Return type

[**Actor**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getActors"></a>
# **getActors**
> Actors getActors(opts)



Get actors list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getActors(opts).then(function(data) {
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

[**Actors**](Actors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductActors"></a>
# **getProductActors**
> Actors getProductActors(productId, opts)



Get actors attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getProductActors(productId, opts).then(function(data) {
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

[**Actors**](Actors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateActor"></a>
# **updateActor**
> updateActor(actorId, body)



Update actor

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ActorsApi();

var actorId = 56; // Integer | 

var body = new KinowJavascriptSdk.Actor(); // Actor | 

apiInstance.updateActor(actorId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actorId** | **Integer**|  | 
 **body** | [**Actor**](Actor.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

