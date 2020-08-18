# KinowJavascriptSdk.MediaFilesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMediaSourceFiles**](MediaFilesApi.md#getMediaSourceFiles) | **GET** /media-sources/{source_id}/files | 
[**postMediaSourceFiles**](MediaFilesApi.md#postMediaSourceFiles) | **POST** /media-sources/{source_id}/files | 


<a name="getMediaSourceFiles"></a>
# **getMediaSourceFiles**
> MediaFiles getMediaSourceFiles(sourceId, opts)



Get media source files

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.MediaFilesApi();

var sourceId = 789; // Integer | Media source ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example" // String |       ```      name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"contains\"      },      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
};
apiInstance.getMediaSourceFiles(sourceId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **Integer**| Media source ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 

### Return type

[**MediaFiles**](MediaFiles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postMediaSourceFiles"></a>
# **postMediaSourceFiles**
> MediaFile postMediaSourceFiles(sourceId, body)



Post media file

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.MediaFilesApi();

var sourceId = 789; // Integer | Media source ID to fetch

var body = new KinowJavascriptSdk.MediaFile(); // MediaFile | Create MediaFile object

apiInstance.postMediaSourceFiles(sourceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **Integer**| Media source ID to fetch | 
 **body** | [**MediaFile**](MediaFile.md)| Create MediaFile object | 

### Return type

[**MediaFile**](MediaFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

