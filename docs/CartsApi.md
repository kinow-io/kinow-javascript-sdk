# KinowJavascriptSdk.CartsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductToCart**](CartsApi.md#addProductToCart) | **POST** /carts/{cart_id}/products | 
[**attachCartRuleToCart**](CartsApi.md#attachCartRuleToCart) | **POST** /carts/{cart_id}/cart-rules | 
[**attachCartToCustomer**](CartsApi.md#attachCartToCustomer) | **POST** /customers/{customer_id}/carts | 
[**createCart**](CartsApi.md#createCart) | **POST** /carts | 
[**deleteCart**](CartsApi.md#deleteCart) | **DELETE** /carts/{cart_id} | 
[**deleteProductFromCart**](CartsApi.md#deleteProductFromCart) | **DELETE** /carts/{cart_id}/products | 
[**getCart**](CartsApi.md#getCart) | **GET** /carts/{cart_id} | 
[**getCustomerCarts**](CartsApi.md#getCustomerCarts) | **GET** /customers/{customer_id}/carts | 
[**getLastCart**](CartsApi.md#getLastCart) | **GET** /customers/{customer_id}/last-cart | 
[**getPaymentUrl**](CartsApi.md#getPaymentUrl) | **GET** /carts/{cart_id}/payments/{payment_name} | 
[**preparePayment**](CartsApi.md#preparePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/prepare | 
[**updateCart**](CartsApi.md#updateCart) | **PUT** /carts/{cart_id} | 
[**validateFreeOrder**](CartsApi.md#validateFreeOrder) | **POST** /carts/{cart_id}/validate-free-order | 
[**validatePayment**](CartsApi.md#validatePayment) | **POST** /carts/{cart_id}/payments/{payment_name}/validate | 


<a name="addProductToCart"></a>
# **addProductToCart**
> Cart addProductToCart(cartId, productId, ipAddress, opts)



Add product to cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var productId = 789; // Integer | Product ID to add to cart

var ipAddress = "ipAddress_example"; // String | IP address

var opts = { 
  'productAttributeId': 789, // Integer | ProductAttribute ID, required to add product to cart if product is not a subscription
  'switchSubscriptionId': 789, // Integer | When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel
  'isGift': false // Boolean | Allows bypass of access check (in case the current user already bought the product and it cannot be reordered)
};
apiInstance.addProductToCart(cartId, productId, ipAddress, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **productId** | **Integer**| Product ID to add to cart | 
 **ipAddress** | **String**| IP address | 
 **productAttributeId** | **Integer**| ProductAttribute ID, required to add product to cart if product is not a subscription | [optional] 
 **switchSubscriptionId** | **Integer**| When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel | [optional] 
 **isGift** | **Boolean**| Allows bypass of access check (in case the current user already bought the product and it cannot be reordered) | [optional] [default to false]

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachCartRuleToCart"></a>
# **attachCartRuleToCart**
> attachCartRuleToCart(cartId, code)



Attach cart rule to cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var code = "code_example"; // String | Code of the cart rule to attach

apiInstance.attachCartRuleToCart(cartId, code).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **code** | **String**| Code of the cart rule to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachCartToCustomer"></a>
# **attachCartToCustomer**
> Cart attachCartToCustomer(customerId, cartId)



Attach cart to customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var customerId = 789; // Integer | Customer ID to fetch

var cartId = 789; // Integer | Cart ID to attach

apiInstance.attachCartToCustomer(customerId, cartId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **cartId** | **Integer**| Cart ID to attach | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createCart"></a>
# **createCart**
> Cart createCart(body)



Create new cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var body = new KinowJavascriptSdk.Cart1(); // Cart1 | Cart settings

apiInstance.createCart(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Cart1**](Cart1.md)| Cart settings | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCart"></a>
# **deleteCart**
> deleteCart(cartId)



Delete cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

apiInstance.deleteCart(cartId).then(function() {
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

<a name="deleteProductFromCart"></a>
# **deleteProductFromCart**
> deleteProductFromCart(cartId, productId, opts)



Remove product from cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var productId = 789; // Integer | Product ID to delete from cart

var opts = { 
  'productAttributeId': 789 // Integer | Product attribute ID, required to add product to cart if product is not a subscription
};
apiInstance.deleteProductFromCart(cartId, productId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **productId** | **Integer**| Product ID to delete from cart | 
 **productAttributeId** | **Integer**| Product attribute ID, required to add product to cart if product is not a subscription | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCart"></a>
# **getCart**
> Cart getCart(cartId)



Get cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

apiInstance.getCart(cartId).then(function(data) {
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

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerCarts"></a>
# **getCustomerCarts**
> Carts getCustomerCarts(customerId, opts)



Get customer carts

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      date_add[value]=string&date_add[operator]=lt      _______________        {      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be strict, contains, gt or lt.
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCustomerCarts(customerId, opts).then(function(data) {
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Carts**](Carts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLastCart"></a>
# **getLastCart**
> Cart getLastCart(customerId)



Get customer last cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getLastCart(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentUrl"></a>
# **getPaymentUrl**
> PaymentUrl getPaymentUrl(cartId, paymentName)



Get payment gateway URL to use in iframe

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

apiInstance.getPaymentUrl(cartId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 

### Return type

[**PaymentUrl**](PaymentUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="preparePayment"></a>
# **preparePayment**
> PaymentDetails1 preparePayment(cartId, paymentName)



Prepare payment on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

apiInstance.preparePayment(cartId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 

### Return type

[**PaymentDetails1**](PaymentDetails1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCart"></a>
# **updateCart**
> Cart updateCart(cartId, body)



Update cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart id

var body = new KinowJavascriptSdk.Cart2(); // Cart2 | Cart settings

apiInstance.updateCart(cartId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart id | 
 **body** | [**Cart2**](Cart2.md)| Cart settings | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateFreeOrder"></a>
# **validateFreeOrder**
> validateFreeOrder(cartId)



Validate cart without payment method (only for carts with a total of 0)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to validate

apiInstance.validateFreeOrder(cartId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to validate | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validatePayment"></a>
# **validatePayment**
> validatePayment(cartId, paymentName, paymentArgument)



Validate payment on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Cart ID to fetch

var paymentName = "paymentName_example"; // String | Payment gateway name

var paymentArgument = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | Payment argument

apiInstance.validatePayment(cartId, paymentName, paymentArgument).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **paymentName** | **String**| Payment gateway name | 
 **paymentArgument** | [**PaymentArguments**](PaymentArguments.md)| Payment argument | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

