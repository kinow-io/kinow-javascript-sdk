# KinowJavascriptSdk.CartRulesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCartRuleToCart**](CartRulesApi.md#attachCartRuleToCart) | **POST** /carts/{cart_id}/cart-rules | 
[**createCartRule**](CartRulesApi.md#createCartRule) | **POST** /cart-rules | 
[**deleteCartRule**](CartRulesApi.md#deleteCartRule) | **DELETE** /cart-rules/{cart_rule_id} | 
[**getCartRule**](CartRulesApi.md#getCartRule) | **GET** /cart-rules/{cart_rule_id} | 
[**getCartRules**](CartRulesApi.md#getCartRules) | **GET** /cart-rules | 
[**updateCartRule**](CartRulesApi.md#updateCartRule) | **PUT** /cart-rules/{cart_rule_id} | 


<a name="attachCartRuleToCart"></a>
# **attachCartRuleToCart**
> attachCartRuleToCart(cartId, code)



Attach cart rule to cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

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

<a name="createCartRule"></a>
# **createCartRule**
> createCartRule(body)



Create new cart rule

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var body = new KinowJavascriptSdk.CartRule(); // CartRule | 

apiInstance.createCartRule(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartRule**](CartRule.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCartRule"></a>
# **deleteCartRule**
> deleteCartRule(cartRuleId)



Delete cart rule

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var cartRuleId = 56; // Integer | 

apiInstance.deleteCartRule(cartRuleId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartRuleId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCartRule"></a>
# **getCartRule**
> CartRule getCartRule(cartRuleId)



Get cart rule by id

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var cartRuleId = 789; // Integer | ID of the cart rule to fetch

apiInstance.getCartRule(cartRuleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartRuleId** | **Integer**| ID of the cart rule to fetch | 

### Return type

[**CartRule**](CartRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCartRules"></a>
# **getCartRules**
> CartRules getCartRules(opts)



Get cart rules list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCartRules(opts).then(function(data) {
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

### Return type

[**CartRules**](CartRules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCartRule"></a>
# **updateCartRule**
> updateCartRule(cartRuleId, body)



Update cart rule

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var cartRuleId = 56; // Integer | 

var body = new KinowJavascriptSdk.CartRule(); // CartRule | 

apiInstance.updateCartRule(cartRuleId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartRuleId** | **Integer**|  | 
 **body** | [**CartRule**](CartRule.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

