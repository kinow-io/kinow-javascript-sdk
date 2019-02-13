# KinowJavascriptSdk.ProductAccessesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductAccess**](ProductAccessesApi.md#createProductAccess) | **POST** /product-accesses | 
[**deleteProductAccess**](ProductAccessesApi.md#deleteProductAccess) | **DELETE** /product-accesses/{product_access_id} | 
[**getCustomerAccessesSubscriptions**](ProductAccessesApi.md#getCustomerAccessesSubscriptions) | **GET** /customers/{customer_id}/accesses/subscriptions | 
[**getCustomerAccessesVideos**](ProductAccessesApi.md#getCustomerAccessesVideos) | **GET** /customers/{customer_id}/accesses/videos | 
[**getProductAccess**](ProductAccessesApi.md#getProductAccess) | **GET** /product-accesses/{product_access_id} | 
[**getProductAccesses**](ProductAccessesApi.md#getProductAccesses) | **GET** /product-accesses | 
[**stopSubscription**](ProductAccessesApi.md#stopSubscription) | **PUT** /customers/{customer_id}/unsubscribe | 
[**updateProductAccess**](ProductAccessesApi.md#updateProductAccess) | **PUT** /product-accesses/{product_access_id} | 


<a name="createProductAccess"></a>
# **createProductAccess**
> ProductAccess createProductAccess(body)



Create new product access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var body = new KinowJavascriptSdk.ProductAccess(); // ProductAccess | 

apiInstance.createProductAccess(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductAccess**](ProductAccess.md)|  | 

### Return type

[**ProductAccess**](ProductAccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProductAccess"></a>
# **deleteProductAccess**
> deleteProductAccess(productAccessId)



Delete product access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var productAccessId = 789; // Integer | ID of the product access to fetch

apiInstance.deleteProductAccess(productAccessId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAccessId** | **Integer**| ID of the product access to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerAccessesSubscriptions"></a>
# **getCustomerAccessesSubscriptions**
> SubscriptionAccesses getCustomerAccessesSubscriptions(customerId, opts)



Get customer accesses for subscription

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var customerId = 789; // Integer | ID of the customer to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example" // String |      ```     filters[type][value]=string&filters[type][operator]=strict&filters[cancel][value]=string&filters[cancel][operator]=contains     _______________      {     \"type\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"cancel\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```Operator can be strict, contains, gt or lt.
};
apiInstance.getCustomerAccessesSubscriptions(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     filters[type][value]&#x3D;string&amp;filters[type][operator]&#x3D;strict&amp;filters[cancel][value]&#x3D;string&amp;filters[cancel][operator]&#x3D;contains     _______________      {     \&quot;type\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;cancel\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt. | [optional] 

### Return type

[**SubscriptionAccesses**](SubscriptionAccesses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerAccessesVideos"></a>
# **getCustomerAccessesVideos**
> SubscriptionAccesses getCustomerAccessesVideos(customerId, opts)



Get customer access for videos

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var customerId = 789; // Integer | ID of the customer to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerAccessesVideos(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**SubscriptionAccesses**](SubscriptionAccesses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAccess"></a>
# **getProductAccess**
> ProductAccess getProductAccess(productAccessId)



Get product access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var productAccessId = 789; // Integer | ID of the product access to fetch

apiInstance.getProductAccess(productAccessId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAccessId** | **Integer**| ID of the product access to fetch | 

### Return type

[**ProductAccess**](ProductAccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductAccesses"></a>
# **getProductAccesses**
> SubscriptionAccesses getProductAccesses(opts)



Get product accesses list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'type': "type_example", // String | Filter by access type, available values are: video, sub
  'dateAdd': "dateAdd_example", // String | Filter by creation date
  'dateAddDirection': "dateAddDirection_example", // String | Choose the direction for date_add parameter, default value is after ,available values are: before, equal, after
  'dateExp': "dateExp_example", // String | Filter by expiration date
  'dateExpDirection': "dateExpDirection_example" // String | Choose the direction for date_exp parameter, default value is after ,available values are: before, equal, after
};
apiInstance.getProductAccesses(opts).then(function(data) {
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
 **type** | **String**| Filter by access type, available values are: video, sub | [optional] 
 **dateAdd** | **String**| Filter by creation date | [optional] 
 **dateAddDirection** | **String**| Choose the direction for date_add parameter, default value is after ,available values are: before, equal, after | [optional] 
 **dateExp** | **String**| Filter by expiration date | [optional] 
 **dateExpDirection** | **String**| Choose the direction for date_exp parameter, default value is after ,available values are: before, equal, after | [optional] 

### Return type

[**SubscriptionAccesses**](SubscriptionAccesses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stopSubscription"></a>
# **stopSubscription**
> stopSubscription(customerId, productAccessId)



unsubcribe a user from a access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var customerId = 789; // Integer | ID of the user to unsubscribe

var productAccessId = "productAccessId_example"; // String | ID of the product access to unsubscribe from

apiInstance.stopSubscription(customerId, productAccessId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the user to unsubscribe | 
 **productAccessId** | **String**| ID of the product access to unsubscribe from | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateProductAccess"></a>
# **updateProductAccess**
> ProductAccess updateProductAccess(productAccessId, body)



Update product access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ProductAccessesApi();

var productAccessId = 789; // Integer | ID of the product access to update

var body = new KinowJavascriptSdk.ProductAccess(); // ProductAccess | 

apiInstance.updateProductAccess(productAccessId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAccessId** | **Integer**| ID of the product access to update | 
 **body** | [**ProductAccess**](ProductAccess.md)|  | 

### Return type

[**ProductAccess**](ProductAccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

