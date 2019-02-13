# KinowJavascriptSdk.SuppliersApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSupplierCoverImage**](SuppliersApi.md#getSupplierCoverImage) | **GET** /suppliers/{supplier_id}/cover | 


<a name="getSupplierCoverImage"></a>
# **getSupplierCoverImage**
> Image getSupplierCoverImage(supplierId)



Please, use __/actors/{actor_id}/cover__

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SuppliersApi();

var supplierId = 789; // Integer | ID of the supplier to fetch

apiInstance.getSupplierCoverImage(supplierId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **Integer**| ID of the supplier to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

