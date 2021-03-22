# KinowJavascriptSdk.PlayerApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExtractPlayer**](PlayerApi.md#getExtractPlayer) | **GET** /extracts/{extract_id}/player | 


<a name="getExtractPlayer"></a>
# **getExtractPlayer**
> PlayerConfiguration getExtractPlayer(extractId)



Get extract&#39;s player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlayerApi();

var extractId = 789; // Integer | ID of the extract to fetch

apiInstance.getExtractPlayer(extractId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| ID of the extract to fetch | 

### Return type

[**PlayerConfiguration**](PlayerConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

