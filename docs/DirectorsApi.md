# KinowJavascriptSdk.DirectorsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachProductToDirector**](DirectorsApi.md#attachProductToDirector) | **POST** /products/{product_id}/directors | 
[**createDirector**](DirectorsApi.md#createDirector) | **POST** /directors | 
[**deleteDirector**](DirectorsApi.md#deleteDirector) | **DELETE** /directors/{director_id} | 
[**getDirector**](DirectorsApi.md#getDirector) | **GET** /directors/{director_id} | 
[**getDirectorProducts**](DirectorsApi.md#getDirectorProducts) | **GET** /directors/{director_id}/products | 
[**getDirectorProductsRole**](DirectorsApi.md#getDirectorProductsRole) | **GET** /directors/{director_id}/products-role | 
[**getDirectors**](DirectorsApi.md#getDirectors) | **GET** /directors | 
[**getProductDirectors**](DirectorsApi.md#getProductDirectors) | **GET** /products/{product_id}/directors | 
[**getProductDirectorsRole**](DirectorsApi.md#getProductDirectorsRole) | **GET** /products/{product_id}/directors-role | 
[**updateDirector**](DirectorsApi.md#updateDirector) | **PUT** /directors/{director_id} | 


<a name="attachProductToDirector"></a>
# **attachProductToDirector**
> attachProductToDirector(productId, directorId)



Attach product to director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var productId = 789; // Integer | Product ID to fetch

var directorId = 789; // Integer | Director ID to attach

apiInstance.attachProductToDirector(productId, directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **directorId** | **Integer**| Director ID to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createDirector"></a>
# **createDirector**
> Director createDirector(body)



Create new director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var body = new KinowJavascriptSdk.Director1(); // Director1 | Directory settings

apiInstance.createDirector(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Director1**](Director1.md)| Directory settings | 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDirector"></a>
# **deleteDirector**
> deleteDirector(directorId)



Delete director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 56; // Integer | 

apiInstance.deleteDirector(directorId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirector"></a>
# **getDirector**
> Director getDirector(directorId, opts)



Get Director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 789; // Integer | Director ID to fetch

var opts = { 
  'imageType': "imageType_example" // String | 
};
apiInstance.getDirector(directorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**| Director ID to fetch | 
 **imageType** | **String**|  | [optional] 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectorProducts"></a>
# **getDirectorProducts**
> Products getDirectorProducts(directorId, opts)



Get director products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 789; // Integer | Director ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | filter by customer ip
  'features': "features_example", // String |       ```      features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict      _______________        {      \"*\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"1\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
  'filters': "filters_example" // String |       ```      name[value]=string&name][operator]=contains&date_add[value]=string&date_add[operator]=lt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"contains\"      },      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be strict, contains, gt or lt.
};
apiInstance.getDirectorProducts(directorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**| Director ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **features** | **String**|       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt. | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectorProductsRole"></a>
# **getDirectorProductsRole**
> Products getDirectorProductsRole(directorId, opts)



Get Products linked to Product with their role

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 789; // Integer | Director ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getDirectorProductsRole(directorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**| Director ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Products**](Products.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectors"></a>
# **getDirectors**
> Directors getDirectors(opts)



Get directors list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getDirectors(opts).then(function(data) {
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
 **imageType** | **String**|  | [optional] 

### Return type

[**Directors**](Directors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectors"></a>
# **getProductDirectors**
> Directors getProductDirectors(productId, opts)



Get directors of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'imageType': "imageType_example" // String | 
};
apiInstance.getProductDirectors(productId, opts).then(function(data) {
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
 **imageType** | **String**|  | [optional] 

### Return type

[**Directors**](Directors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductDirectorsRole"></a>
# **getProductDirectorsRole**
> Directors getProductDirectorsRole(productId, opts)



Get Directors attached to Product with their role

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductDirectorsRole(productId, opts).then(function(data) {
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

[**Directors**](Directors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateDirector"></a>
# **updateDirector**
> updateDirector(directorId, body)



Update director

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DirectorsApi();

var directorId = 56; // Integer | 

var body = new KinowJavascriptSdk.Director2(); // Director2 | Directory settings

apiInstance.updateDirector(directorId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorId** | **Integer**|  | 
 **body** | [**Director2**](Director2.md)| Directory settings | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

