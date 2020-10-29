# KinowJavascriptSdk.GendersApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGenders**](GendersApi.md#getGenders) | **GET** /genders | 


<a name="getGenders"></a>
# **getGenders**
> Genders getGenders(opts)



Get gender list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GendersApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getGenders(opts).then(function(data) {
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

[**Genders**](Genders.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

