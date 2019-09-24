# KinowJavascriptSdk.CountriesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountries**](CountriesApi.md#getCountries) | **GET** /countries | 


<a name="getCountries"></a>
# **getCountries**
> Countries getCountries(opts)



Get country list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CountriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'bypassPagination': true // Boolean | 
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
 **bypassPagination** | **Boolean**|  | [optional] 

### Return type

[**Countries**](Countries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

