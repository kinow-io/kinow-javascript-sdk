# KinowJavascriptSdk.GiftsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumeGift**](GiftsApi.md#consumeGift) | **PUT** /gifts/{gift_id}/consume | 
[**createGift**](GiftsApi.md#createGift) | **POST** /gifts | 
[**deleteGift**](GiftsApi.md#deleteGift) | **DELETE** /gifts/{gift_id} | 
[**deleteGiftsInCart**](GiftsApi.md#deleteGiftsInCart) | **DELETE** /carts/{cart_id}/gift/ | 
[**getGift**](GiftsApi.md#getGift) | **GET** /gifts/{gift_id} | 
[**getGiftInCart**](GiftsApi.md#getGiftInCart) | **GET** /carts/{cart_id}/gift | 
[**getGiftToken**](GiftsApi.md#getGiftToken) | **GET** /gifts/{gift_id}/token | 
[**getGifts**](GiftsApi.md#getGifts) | **GET** /gifts | 
[**sendGift**](GiftsApi.md#sendGift) | **POST** /gifts/{gift_id}/send | 
[**updateGift**](GiftsApi.md#updateGift) | **PUT** /gifts/{gift_id} | 


<a name="consumeGift"></a>
# **consumeGift**
> consumeGift(giftId, customerId)



Consume gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.consumeGift(giftId, customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 
 **customerId** | **Integer**| Customer ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createGift"></a>
# **createGift**
> Gift createGift(body)



Create gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var body = new KinowJavascriptSdk.Gift(); // Gift | 

apiInstance.createGift(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Gift**](Gift.md)|  | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteGift"></a>
# **deleteGift**
> deleteGift(giftId)



Delete gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

apiInstance.deleteGift(giftId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteGiftsInCart"></a>
# **deleteGiftsInCart**
> deleteGiftsInCart(cartId)



Delete gifts in cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var cartId = 789; // Integer | Cart ID to fetch

apiInstance.deleteGiftsInCart(cartId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGift"></a>
# **getGift**
> Gift getGift(giftId)



Get gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

apiInstance.getGift(giftId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGiftInCart"></a>
# **getGiftInCart**
> Gift getGiftInCart(cartId)



Get gift in cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var cartId = 789; // Integer | Cart ID to fetch

apiInstance.getGiftInCart(cartId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGiftToken"></a>
# **getGiftToken**
> getGiftToken(giftId)



Get gift token

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

apiInstance.getGiftToken(giftId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGifts"></a>
# **getGifts**
> Gifts getGifts(opts)



Get gifts

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var opts = { 
  'unusedOnly': 56 // Integer | Only unused gifts
};
apiInstance.getGifts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unusedOnly** | **Integer**| Only unused gifts | [optional] 

### Return type

[**Gifts**](Gifts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendGift"></a>
# **sendGift**
> sendGift(giftId)



Send gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

apiInstance.sendGift(giftId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateGift"></a>
# **updateGift**
> Gift updateGift(giftId, body)



Update gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

var body = new KinowJavascriptSdk.Gift(); // Gift | 

apiInstance.updateGift(giftId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftId** | **Integer**| Gift ID to fetch | 
 **body** | [**Gift**](Gift.md)|  | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

