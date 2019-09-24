# KinowJavascriptSdk.OrdersApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerOrders**](OrdersApi.md#getCustomerOrders) | **GET** /customers/{customer_id}/orders | 
[**getOrder**](OrdersApi.md#getOrder) | **GET** /orders/{order_id} | 
[**getOrderHistories**](OrdersApi.md#getOrderHistories) | **GET** /orders/{order_id}/histories | 
[**getOrderInvoice**](OrdersApi.md#getOrderInvoice) | **GET** /orders/{order_id}/invoice | 
[**getOrders**](OrdersApi.md#getOrders) | **GET** /orders | 


<a name="getCustomerOrders"></a>
# **getCustomerOrders**
> Orders getCustomerOrders(customerId, opts)



Get customer orders

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrdersApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerOrders(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Orders**](Orders.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrder"></a>
# **getOrder**
> Order getOrder(orderId)



Get order

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrdersApi();

var orderId = 789; // Integer | Order ID to fetch

apiInstance.getOrder(orderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**| Order ID to fetch | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrderHistories"></a>
# **getOrderHistories**
> OrderHistories getOrderHistories(orderId, opts)



Get order histories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrdersApi();

var orderId = 789; // Integer | Order ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getOrderHistories(orderId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**| Order ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**OrderHistories**](OrderHistories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrderInvoice"></a>
# **getOrderInvoice**
> &#39;String&#39; getOrderInvoice(orderId)



Get order invoice

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrdersApi();

var orderId = 789; // Integer | Order ID to fetch

apiInstance.getOrderInvoice(orderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**| Order ID to fetch | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrders"></a>
# **getOrders**
> Orders getOrders(opts)



Get order list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OrdersApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |   email[value]=string&email[operator]=strict&firstname[value]=string&firstname[operator]=contains    ```  {      \"email\": {          \"value\": \"string\",          \"operator\": \"strict\"      },      \"firstname\": {          \"value\": \"string\",          \"operator\": \"contains\"      },      \"invoice_date\": {          \"value\": [\"Y-m-d\", \"Y-m-d\"],          \"operator\": \"between\"      }  }```  Operator can be strict, contains, between, gt or lt.
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getOrders(opts).then(function(data) {
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
 **filters** | **String**|   email[value]&#x3D;string&amp;email[operator]&#x3D;strict&amp;firstname[value]&#x3D;string&amp;firstname[operator]&#x3D;contains    &#x60;&#x60;&#x60;  {      \&quot;email\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;firstname\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;invoice_date\&quot;: {          \&quot;value\&quot;: [\&quot;Y-m-d\&quot;, \&quot;Y-m-d\&quot;],          \&quot;operator\&quot;: \&quot;between\&quot;      }  }&#x60;&#x60;&#x60;  Operator can be strict, contains, between, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Orders**](Orders.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

