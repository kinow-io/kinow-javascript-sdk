# KinowJavascriptSdk.CountriesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountries**](CountriesApi.md#getCountries) | **GET** /countries | 
[**getStates**](CountriesApi.md#getStates) | **GET** /countries/states | 


<a name="getCountries"></a>
# **getCountries**
> CountryListResponse getCountries(opts)



Get country list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.CountriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'bypassPagination': true // Boolean | Use or skip pagination
};
apiInstance.getCountries(opts).then(function(data) {
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
 **bypassPagination** | **Boolean**| Use or skip pagination | [optional] 

### Return type

[**CountryListResponse**](CountryListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getStates"></a>
# **getStates**
> StateListResponse getStates(opts)



Get states list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.CountriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'bypassPagination': true // Boolean | Use or skip pagination
};
apiInstance.getStates(opts).then(function(data) {
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
 **bypassPagination** | **Boolean**| Use or skip pagination | [optional] 

### Return type

[**StateListResponse**](StateListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

