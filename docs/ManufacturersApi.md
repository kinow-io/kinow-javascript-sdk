# KinowJavascriptSdk.ManufacturersApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManufacturerCoverImage**](ManufacturersApi.md#getManufacturerCoverImage) | **GET** /manufacturers/{manufacturer_id}/cover | 


<a name="getManufacturerCoverImage"></a>
# **getManufacturerCoverImage**
> Image getManufacturerCoverImage(manufacturerId)



Please, use __/directors/{actor_id}/cover__

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ManufacturersApi();

var manufacturerId = 789; // Integer | ID of the manufacturer to fetch

apiInstance.getManufacturerCoverImage(manufacturerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manufacturerId** | **Integer**| ID of the manufacturer to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

