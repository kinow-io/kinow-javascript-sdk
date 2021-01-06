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
[**getGiftsInCart**](GiftsApi.md#getGiftsInCart) | **GET** /carts/{cart_id}/gifts | 
[**sendGift**](GiftsApi.md#sendGift) | **POST** /gifts/{gift_id}/send | 
[**updateGift**](GiftsApi.md#updateGift) | **PUT** /gifts/{gift_id} | 


<a name="consumeGift"></a>
# **consumeGift**
> consumeGift(giftId, customerId, opts)



Consume Gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'token': "token_example" // String | Gift token to check (optional)
};
apiInstance.consumeGift(giftId, customerId, opts).then(function() {
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
 **token** | **String**| Gift token to check (optional) | [optional] 

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



Create Gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var body = new KinowJavascriptSdk.Gift2(); // Gift2 | Gift settings

apiInstance.createGift(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Gift2**](Gift2.md)| Gift settings | 

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



Delete Gift

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



Delete Gifts in cart

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



Get Gift

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



Get Gift in Cart

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
> GiftToken getGiftToken(giftId)



Get Gift token

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

apiInstance.getGiftToken(giftId).then(function(data) {
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

[**GiftToken**](GiftToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGifts"></a>
# **getGifts**
> Gifts1 getGifts(opts)



Get Gifts

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var opts = { 
  'unusedOnly': true, // Boolean | Filter only unused gifts
  'paidOnly': true, // Boolean | Filter only gifts linked to an order which is paid by the user
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
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
 **unusedOnly** | **Boolean**| Filter only unused gifts | [optional] 
 **paidOnly** | **Boolean**| Filter only gifts linked to an order which is paid by the user | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Gifts1**](Gifts1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGiftsInCart"></a>
# **getGiftsInCart**
> [Gift] getGiftsInCart(cartId)



Get Gifts in cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var cartId = 789; // Integer | Cart ID to fetch

apiInstance.getGiftsInCart(cartId).then(function(data) {
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

[**[Gift]**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendGift"></a>
# **sendGift**
> sendGift(giftId)



Send Gift

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



Update Gift

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GiftsApi();

var giftId = 789; // Integer | Gift ID to fetch

var body = new KinowJavascriptSdk.Gift3(); // Gift3 | Gift settings

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
 **body** | [**Gift3**](Gift3.md)| Gift settings | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

