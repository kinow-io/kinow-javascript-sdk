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
[**updateCart**](CartsApi.md#updateCart) | **PUT** /carts/{cart_id} | 
[**validateCart**](CartsApi.md#validateCart) | **POST** /carts/{cart_id}/payments/{payment_name}/validate | 
[**validateFreeOrder**](CartsApi.md#validateFreeOrder) | **POST** /carts/{cart_id}/validate-free-order | 


<a name="addProductToCart"></a>
# **addProductToCart**
> Cart addProductToCart(cartId, productId, opts)



Add product to cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Id of the cart to fetch

var productId = 789; // Integer | Id of the product to attach to the cart

var opts = { 
  'productAttributeId': 789, // Integer | Id of the product attribute, required to add product to cart if product is not a subscription
  'switchSubscriptionId': 789 // Integer | When customer want to switch subscription, switch_subscription_id is the id of the product access that match with the subscription to cancel.
};
apiInstance.addProductToCart(cartId, productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to fetch | 
 **productId** | **Integer**| Id of the product to attach to the cart | 
 **productAttributeId** | **Integer**| Id of the product attribute, required to add product to cart if product is not a subscription | [optional] 
 **switchSubscriptionId** | **Integer**| When customer want to switch subscription, switch_subscription_id is the id of the product access that match with the subscription to cancel. | [optional] 

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

var cartId = 789; // Integer | Id of the cart to fetch

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
 **cartId** | **Integer**| Id of the cart to fetch | 
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

var customerId = 789; // Integer | ID of the customer to fetch

var cartId = 789; // Integer | ID of the cart to attach

apiInstance.attachCartToCustomer(customerId, cartId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **cartId** | **Integer**| ID of the cart to attach | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createCart"></a>
# **createCart**
> Cart createCart(opts)



Create new cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var opts = { 
  'body': new KinowJavascriptSdk.CartBody() // CartBody | Create cart object
};
apiInstance.createCart(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartBody**](CartBody.md)| Create cart object | [optional] 

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

var cartId = 789; // Integer | Id of the cart to fetch

apiInstance.deleteCart(cartId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to fetch | 

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

var cartId = 789; // Integer | Id of the cart to fetch

var productId = 789; // Integer | Id of the product to delete from cart

var opts = { 
  'productAttributeId': 789 // Integer | Id of the product attribute, required to add product to cart if product is not a subscription
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
 **cartId** | **Integer**| Id of the cart to fetch | 
 **productId** | **Integer**| Id of the product to delete from cart | 
 **productAttributeId** | **Integer**| Id of the product attribute, required to add product to cart if product is not a subscription | [optional] 

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

var cartId = 789; // Integer | Id of the cart to fetch

apiInstance.getCart(cartId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to fetch | 

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

var customerId = 789; // Integer | ID of the customer to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |      ```     date_add[value]=string&date_add[operator]=lt     _______________      {     \"date_add\": {     \"value\": \"string\",     \"operator\": \"lt\"     }     } ```     Operator can be strict, contains, gt or lt.
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
 **customerId** | **Integer**| ID of the customer to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt     _______________      {     \&quot;date_add\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;lt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
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

var customerId = 789; // Integer | ID of the customer to fetch

apiInstance.getLastCart(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 

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



Get payment url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Id of the cart to fetch

var paymentName = "paymentName_example"; // String | Payment module name

apiInstance.getPaymentUrl(cartId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to fetch | 
 **paymentName** | **String**| Payment module name | 

### Return type

[**PaymentUrl**](PaymentUrl.md)

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

var body = new KinowJavascriptSdk.Cart(); // Cart | Cart body

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
 **body** | [**Cart**](Cart.md)| Cart body | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateCart"></a>
# **validateCart**
> validateCart(cartId, paymentName, paymentArguments)



Validate order

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartsApi();

var cartId = 789; // Integer | Id of the cart to fetch

var paymentName = "paymentName_example"; // String | Payment module name

var paymentArguments = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | payment arguments, token and tokenType

apiInstance.validateCart(cartId, paymentName, paymentArguments).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to fetch | 
 **paymentName** | **String**| Payment module name | 
 **paymentArguments** | [**PaymentArguments**](PaymentArguments.md)| payment arguments, token and tokenType | 

### Return type

null (empty response body)

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

var cartId = 789; // Integer | Id of the cart to validate

apiInstance.validateFreeOrder(cartId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Id of the cart to validate | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

