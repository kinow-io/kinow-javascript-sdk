# KinowJavascriptSdk.CartRulesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCartRuleToCart**](CartRulesApi.md#attachCartRuleToCart) | **POST** /carts/{cart_id}/cart-rules | 
[**createCartRule**](CartRulesApi.md#createCartRule) | **POST** /cart-rules | 
[**deleteCartRule**](CartRulesApi.md#deleteCartRule) | **DELETE** /cart-rules/{cart_rule_id} | 
[**detachCartRuleFromCart**](CartRulesApi.md#detachCartRuleFromCart) | **DELETE** /carts/{cart_id}/cart-rules/{cart_rule_id} | 
[**getCartRule**](CartRulesApi.md#getCartRule) | **GET** /cart-rules/{cart_rule_id} | 
[**getCartRules**](CartRulesApi.md#getCartRules) | **GET** /cart-rules | 
[**updateCartRule**](CartRulesApi.md#updateCartRule) | **PUT** /cart-rules/{cart_rule_id} | 


<a name="attachCartRuleToCart"></a>
# **attachCartRuleToCart**
> attachCartRuleToCart(cartId, code, opts)



Attach cart rule to cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var code = "code_example"; // String | Code of the cart rule to attach

var opts = { 
  'ip': "ip_example" // String | Filter by user IP
};
apiInstance.attachCartRuleToCart(cartId, code, opts).then(function() {
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
 **ip** | **String**| Filter by user IP | [optional] 

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

<a name="detachCartRuleFromCart"></a>
# **detachCartRuleFromCart**
> detachCartRuleFromCart(cartId, cartRuleId)



Detach Cart rule from Cart

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CartRulesApi();

var cartId = 789; // Integer | Cart ID to fetch

var cartRuleId = 789; // Integer | Cart rule ID to detach

apiInstance.detachCartRuleFromCart(cartId, cartRuleId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Integer**| Cart ID to fetch | 
 **cartRuleId** | **Integer**| Cart rule ID to detach | 

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

var cartRuleId = 789; // Integer | Cart rule ID to fetch

apiInstance.getCartRule(cartRuleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartRuleId** | **Integer**| Cart rule ID to fetch | 

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
  'perPage': 789, // Integer | 
  'filters': "filters_example" // String |      ```     type[value]=string&type[operator]=strict&cancel[value]=string&cancel[operator]=contains     _______________      {     \"type\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"cancel\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
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
 **filters** | **String**|      &#x60;&#x60;&#x60;     type[value]&#x3D;string&amp;type[operator]&#x3D;strict&amp;cancel[value]&#x3D;string&amp;cancel[operator]&#x3D;contains     _______________      {     \&quot;type\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;cancel\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 

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

