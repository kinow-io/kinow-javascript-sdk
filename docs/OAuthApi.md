# KinowJavascriptSdk.OAuthApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](OAuthApi.md#getToken) | **POST** /get-token | 


<a name="getToken"></a>
# **getToken**
> OAuthToken getToken(clientId, clientSecret)



Get authentication token

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.OAuthApi();

var clientId = "clientId_example"; // String | Client Id given by your back office

var clientSecret = "clientSecret_example"; // String | Client secret given by your back office

apiInstance.getToken(clientId, clientSecret).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client Id given by your back office | 
 **clientSecret** | **String**| Client secret given by your back office | 

### Return type

[**OAuthToken**](OAuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

