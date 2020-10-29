# KinowJavascriptSdk.AttributesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductAttribute**](AttributesApi.md#createProductAttribute) | **POST** /attributes | 
[**deleteAttribute**](AttributesApi.md#deleteAttribute) | **DELETE** /attributes/{attribute_id} | 
[**getProductAttributes**](AttributesApi.md#getProductAttributes) | **GET** /products/{product_id}/attributes | 


<a name="createProductAttribute"></a>
# **createProductAttribute**
> ProductAttribute createProductAttribute(body)



Create new product attribute

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AttributesApi();

var body = new KinowJavascriptSdk.ProductAttributeCreateRequest(); // ProductAttributeCreateRequest | 

apiInstance.createProductAttribute(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductAttributeCreateRequest**](ProductAttributeCreateRequest.md)|  | 

### Return type

[**ProductAttribute**](ProductAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAttribute"></a>
# **deleteAttribute**
> deleteAttribute(attributeId)



Delete Attribute

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AttributesApi();

var attributeId = 789; // Integer | Attribute ID to delete

apiInstance.deleteAttribute(attributeId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Integer**| Attribute ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAttributes"></a>
# **getProductAttributes**
> ProductAttributesResponse getProductAttributes(productId, opts)



Get Product attributes. Mandatory to add TVOD Product in cart.

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.AttributesApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductAttributes(productId, opts).then(function(data) {
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

[**ProductAttributesResponse**](ProductAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

