# KinowJavascriptSdk.CustomersApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCartToCustomer**](CustomersApi.md#attachCartToCustomer) | **POST** /customers/{customer_id}/carts | 
[**checkAuthenticationToken**](CustomersApi.md#checkAuthenticationToken) | **POST** /customers/check-authentication-token | 
[**checkCustomerCredentials**](CustomersApi.md#checkCustomerCredentials) | **POST** /customers/check-credentials | 
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customers | 
[**createFacebookId**](CustomersApi.md#createFacebookId) | **POST** /customers/facebook | 
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /customers/{customer_id} | 
[**generateAuthenticationToken**](CustomersApi.md#generateAuthenticationToken) | **GET** /customers/{customer_id}/authentication-token | 
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{customer_id} | 
[**getCustomerAccessesSubscriptions**](CustomersApi.md#getCustomerAccessesSubscriptions) | **GET** /customers/{customer_id}/accesses/subscriptions | 
[**getCustomerAccessesVideos**](CustomersApi.md#getCustomerAccessesVideos) | **GET** /customers/{customer_id}/accesses/videos | 
[**getCustomerAddress**](CustomersApi.md#getCustomerAddress) | **GET** /customers/{customer_id}/address | 
[**getCustomerCanSeeProduct**](CustomersApi.md#getCustomerCanSeeProduct) | **GET** /customers/{customer_id}/products/{product_id}/can-see | 
[**getCustomerCarts**](CustomersApi.md#getCustomerCarts) | **GET** /customers/{customer_id}/carts | 
[**getCustomerCurrentViews**](CustomersApi.md#getCustomerCurrentViews) | **GET** /customers/{customer_id}/current-views | 
[**getCustomerGroups**](CustomersApi.md#getCustomerGroups) | **GET** /customers/{customer_id}/groups | 
[**getCustomerHasAccessToProduct**](CustomersApi.md#getCustomerHasAccessToProduct) | **GET** /customers/{customer_id}/products/{product_id}/has-access | 
[**getCustomerHasAccessToProducts**](CustomersApi.md#getCustomerHasAccessToProducts) | **POST** /customers/{customer_id}/products/has-access | 
[**getCustomerHasAccessToVideo**](CustomersApi.md#getCustomerHasAccessToVideo) | **GET** /customers/{customer_id}/videos/{video_id}/has-access | 
[**getCustomerHasAccessToVideos**](CustomersApi.md#getCustomerHasAccessToVideos) | **POST** /customers/{customer_id}/videos/has-access | 
[**getCustomerOrders**](CustomersApi.md#getCustomerOrders) | **GET** /customers/{customer_id}/orders | 
[**getCustomerPrepaymentBalances**](CustomersApi.md#getCustomerPrepaymentBalances) | **GET** /customers/{customer_id}/prepayment-balance | 
[**getCustomerPrepaymentOperations**](CustomersApi.md#getCustomerPrepaymentOperations) | **GET** /customers/{customer_id}/prepayment-operations | 
[**getCustomers**](CustomersApi.md#getCustomers) | **GET** /customers | 
[**getFacebookCustomer**](CustomersApi.md#getFacebookCustomer) | **GET** /customers/facebook/{facebook_id} | 
[**getPaymentMethods**](CustomersApi.md#getPaymentMethods) | **GET** /customers/{customer_id}/payments/{payment_name}/payment-methods | 
[**getPendingPayments**](CustomersApi.md#getPendingPayments) | **GET** /customers/{customer_id}/payments/{payment_name}/pending | 
[**getRegistrationFields**](CustomersApi.md#getRegistrationFields) | **GET** /customer/registration-fields | 
[**loginWithFacebook**](CustomersApi.md#loginWithFacebook) | **POST** /customers/facebook-login | 
[**passwordToken**](CustomersApi.md#passwordToken) | **POST** /customers/password-token | 
[**passwordTokenConsume**](CustomersApi.md#passwordTokenConsume) | **POST** /customers/password-token-consume | 
[**stopSubscription**](CustomersApi.md#stopSubscription) | **PUT** /customers/{customer_id}/unsubscribe | 
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /customers/{customer_id} | 
[**updatePaymentMethod**](CustomersApi.md#updatePaymentMethod) | **PUT** /customers/{customer_id}/payments/{payment_name}/payment-method | 
[**validateCustomerCredentials**](CustomersApi.md#validateCustomerCredentials) | **POST** /customers/validate-credentials | 


<a name="attachCartToCustomer"></a>
# **attachCartToCustomer**
> Cart attachCartToCustomer(customerId, cartId)



Attach cart to customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

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

<a name="checkAuthenticationToken"></a>
# **checkAuthenticationToken**
> Customer checkAuthenticationToken(token)



Check authentication token

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var token = "token_example"; // String | Authentication token

apiInstance.checkAuthenticationToken(token).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Authentication token | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkCustomerCredentials"></a>
# **checkCustomerCredentials**
> Customer checkCustomerCredentials(email, password)



Check customer credentials

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var email = "email_example"; // String | Email of the customer to check

var password = "password_example"; // String | Password of the customer to check

apiInstance.checkCustomerCredentials(email, password).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email of the customer to check | 
 **password** | **String**| Password of the customer to check | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createCustomer"></a>
# **createCustomer**
> Customer createCustomer(body)



Create new customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var body = new KinowJavascriptSdk.CustomerCreateRequest(); // CustomerCreateRequest | Created user object

apiInstance.createCustomer(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerCreateRequest**](CustomerCreateRequest.md)| Created user object | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createFacebookId"></a>
# **createFacebookId**
> createFacebookId(customerId, facebookId)



Link a Facebook account ID to a Customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID

var facebookId = "facebookId_example"; // String | Facebook ID

apiInstance.createFacebookId(customerId, facebookId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID | 
 **facebookId** | **String**| Facebook ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(customerId)



Delete customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to delete

apiInstance.deleteCustomer(customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="generateAuthenticationToken"></a>
# **generateAuthenticationToken**
> generateAuthenticationToken(customerId)



Create authentication token for customer.        You can use it to auto login customer using an iframe or a redirection to the user        Example url: &#x60;https://YOUR_PLATFORM.kinow.tv/?authentication_token&#x3D;AUTHENTICATION_TOKEN&#x60;

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to authenticate

apiInstance.generateAuthenticationToken(customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to authenticate | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomer"></a>
# **getCustomer**
> Customer getCustomer(customerId)



Get Customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getCustomer(customerId).then(function(data) {
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

[**Customer**](Customer.md)

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

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example" // String |       ```      type[value]=string&type[operator]=strict&cancel[value]=string&cancel[operator]=contains      _______________        {      \"type\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"cancel\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
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
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      type[value]&#x3D;string&amp;type[operator]&#x3D;strict&amp;cancel[value]&#x3D;string&amp;cancel[operator]&#x3D;contains      _______________        {      \&quot;type\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;cancel\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 

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

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

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
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**SubscriptionAccesses**](SubscriptionAccesses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerAddress"></a>
# **getCustomerAddress**
> Address getCustomerAddress(customerId)



Get customer address

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getCustomerAddress(customerId).then(function(data) {
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

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerCanSeeProduct"></a>
# **getCustomerCanSeeProduct**
> getCustomerCanSeeProduct(customerId, productId)



Check if the customer can see this product (restriction by group)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var productId = 789; // Integer | Product ID to fetch

apiInstance.getCustomerCanSeeProduct(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **productId** | **Integer**| Product ID to fetch | 

### Return type

null (empty response body)

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

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      date_add[value]=string&date_add[operator]=lt      _______________        {      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Carts**](Carts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerCurrentViews"></a>
# **getCustomerCurrentViews**
> CustomerCurrentViews getCustomerCurrentViews(customerId)



Get customer current number of views

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getCustomerCurrentViews(customerId).then(function(data) {
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

[**CustomerCurrentViews**](CustomerCurrentViews.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerGroups"></a>
# **getCustomerGroups**
> Groups getCustomerGroups(customerId, opts)



Get groups attached to this customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerGroups(customerId, opts).then(function(data) {
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

[**Groups**](Groups.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToProduct"></a>
# **getCustomerHasAccessToProduct**
> getCustomerHasAccessToProduct(customerId, productId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var productId = 789; // Integer | Product ID to fetch

apiInstance.getCustomerHasAccessToProduct(customerId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **productId** | **Integer**| Product ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToProducts"></a>
# **getCustomerHasAccessToProducts**
> [ProductAccessInfo] getCustomerHasAccessToProducts(customerId, body)



Get customer access to Products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.ProductIDList(); // ProductIDList | List of Product IDs separated by comma, eg. '42,21,84'

apiInstance.getCustomerHasAccessToProducts(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**ProductIDList**](ProductIDList.md)| List of Product IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[ProductAccessInfo]**](ProductAccessInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToVideo"></a>
# **getCustomerHasAccessToVideo**
> getCustomerHasAccessToVideo(customerId, videoId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getCustomerHasAccessToVideo(customerId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToVideos"></a>
# **getCustomerHasAccessToVideos**
> [VideoAccessInfo] getCustomerHasAccessToVideos(customerId, body)



Get customer access to Videos

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.VideoIDList(); // VideoIDList | List of Video IDs separated by comma, eg. '42,21,84'

apiInstance.getCustomerHasAccessToVideos(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**VideoIDList**](VideoIDList.md)| List of Video IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[VideoAccessInfo]**](VideoAccessInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerOrders"></a>
# **getCustomerOrders**
> Orders getCustomerOrders(customerId, opts)



Get customer orders

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

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

<a name="getCustomerPrepaymentBalances"></a>
# **getCustomerPrepaymentBalances**
> [PrepaymentBalance] getCustomerPrepaymentBalances(customerId)



Get PrepaymentBalances list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getCustomerPrepaymentBalances(customerId).then(function(data) {
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

[**[PrepaymentBalance]**](PrepaymentBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerPrepaymentOperations"></a>
# **getCustomerPrepaymentOperations**
> PrepaymentOperations getCustomerPrepaymentOperations(customerId, opts)



Get PrepaymentOperations list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'type': "type_example", // String | 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerPrepaymentOperations(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **type** | **String**|  | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**PrepaymentOperations**](PrepaymentOperations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomers"></a>
# **getCustomers**
> Customers getCustomers(opts)



Get customer list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      email[value]=string&email[operator]=strict&firstname[value]=string&firstname[operator]=contains      _______________        {      \"email\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"firstname\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCustomers(opts).then(function(data) {
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      email[value]&#x3D;string&amp;email[operator]&#x3D;strict&amp;firstname[value]&#x3D;string&amp;firstname[operator]&#x3D;contains      _______________        {      \&quot;email\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;firstname\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Customers**](Customers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getFacebookCustomer"></a>
# **getFacebookCustomer**
> CustomerId getFacebookCustomer(facebookId)



Get Customer ID linked to a Facebook ID

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var facebookId = 789; // Integer | Facebook ID to fetch

apiInstance.getFacebookCustomer(facebookId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facebookId** | **Integer**| Facebook ID to fetch | 

### Return type

[**CustomerId**](CustomerId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> [PaymentMethods] getPaymentMethods(customerId, paymentName)



Get payment methods saved for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

apiInstance.getPaymentMethods(customerId, paymentName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **paymentName** | **String**|  | 

### Return type

[**[PaymentMethods]**](PaymentMethods.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPendingPayments"></a>
# **getPendingPayments**
> [PaymentDetails] getPendingPayments(paymentName, customerId)



Get pending payments for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var paymentName = "paymentName_example"; // String | 

var customerId = 789; // Integer | 

apiInstance.getPendingPayments(paymentName, customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentName** | **String**|  | 
 **customerId** | **Integer**|  | 

### Return type

[**[PaymentDetails]**](PaymentDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRegistrationFields"></a>
# **getRegistrationFields**
> RegistrationFields getRegistrationFields(opts)



Get registration fields

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getRegistrationFields(opts).then(function(data) {
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

[**RegistrationFields**](RegistrationFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="loginWithFacebook"></a>
# **loginWithFacebook**
> Customer loginWithFacebook(tokenType, token, opts)



Create or retrieve existing Customer account using Facebook authorization token

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var tokenType = "tokenType_example"; // String | Can be 'oauth2' or 'authorization'

var token = "token_example"; // String | oAuth2 token or authorization code given by Facebook

var opts = { 
  'redirectUri': "redirectUri_example" // String | Redirect URI is required if you're using authorization code method
};
apiInstance.loginWithFacebook(tokenType, token, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | **String**| Can be &#39;oauth2&#39; or &#39;authorization&#39; | 
 **token** | **String**| oAuth2 token or authorization code given by Facebook | 
 **redirectUri** | **String**| Redirect URI is required if you&#39;re using authorization code method | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="passwordToken"></a>
# **passwordToken**
> Token passwordToken(email)



Create temporary token to update password

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var email = "email_example"; // String | Email of the Customer

apiInstance.passwordToken(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email of the Customer | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="passwordTokenConsume"></a>
# **passwordTokenConsume**
> passwordTokenConsume(token, password)



Consume password token and update password

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var token = "token_example"; // String | Temporary token to consume

var password = "password_example"; // String | Password to set on Customer account

apiInstance.passwordTokenConsume(token, password).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Temporary token to consume | 
 **password** | **String**| Password to set on Customer account | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stopSubscription"></a>
# **stopSubscription**
> stopSubscription(customerId, productAccessId)



Unsubcribe an Access recurring payment

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to unsubscribe

var productAccessId = "productAccessId_example"; // String | Product access ID to unsubscribe from

apiInstance.stopSubscription(customerId, productAccessId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to unsubscribe | 
 **productAccessId** | **String**| Product access ID to unsubscribe from | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCustomer"></a>
# **updateCustomer**
> Customer updateCustomer(customerId, body)



Update customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.Customer(); // Customer | Body of the customer

apiInstance.updateCustomer(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**Customer**](Customer.md)| Body of the customer | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePaymentMethod"></a>
# **updatePaymentMethod**
> updatePaymentMethod(customerId, paymentName, paymentArguments)



Update payment method for a Customer on a payment gateway

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var customerId = 789; // Integer | 

var paymentName = "paymentName_example"; // String | 

var paymentArguments = new KinowJavascriptSdk.PaymentArguments(); // PaymentArguments | Payment arguments

apiInstance.updatePaymentMethod(customerId, paymentName, paymentArguments).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **paymentName** | **String**|  | 
 **paymentArguments** | [**PaymentArguments**](PaymentArguments.md)| Payment arguments | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="validateCustomerCredentials"></a>
# **validateCustomerCredentials**
> CredentialsValidation validateCustomerCredentials(email, password)



Validate Customer credentials

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CustomersApi();

var email = "email_example"; // String | Customer email to validate

var password = "password_example"; // String | Customer password to check

apiInstance.validateCustomerCredentials(email, password).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Customer email to validate | 
 **password** | **String**| Customer password to check | 

### Return type

[**CredentialsValidation**](CredentialsValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

