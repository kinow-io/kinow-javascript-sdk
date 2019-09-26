# KinowJavascriptSdk.ConfigurationApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfiguration**](ConfigurationApi.md#getConfiguration) | **GET** /configuration | 
[**getConfigurationByName**](ConfigurationApi.md#getConfigurationByName) | **GET** /configuration/{configuration_name} | 


<a name="getConfiguration"></a>
# **getConfiguration**
> ConfigurationList getConfiguration(opts)



Get configuration

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getConfiguration(opts).then(function(data) {
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

[**ConfigurationList**](ConfigurationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getConfigurationByName"></a>
# **getConfigurationByName**
> Configuration getConfigurationByName(configurationName)



Get configuration by name

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();

var configurationName = "configurationName_example"; // String | 

apiInstance.getConfigurationByName(configurationName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationName** | **String**|  | 

### Return type

[**Configuration**](Configuration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

