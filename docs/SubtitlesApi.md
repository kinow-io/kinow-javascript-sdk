# KinowJavascriptSdk.SubtitlesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubtitle**](SubtitlesApi.md#getSubtitle) | **GET** /subtitles/{subtitle_id} | 
[**getSubtitles**](SubtitlesApi.md#getSubtitles) | **GET** /subtitles | 
[**getVideoSubtitles**](SubtitlesApi.md#getVideoSubtitles) | **GET** /videos/{video_id}/subtitles | 


<a name="getSubtitle"></a>
# **getSubtitle**
> Subtitle getSubtitle(subtitleId)



Get Subtitle

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SubtitlesApi();

var subtitleId = 789; // Integer | ID of the product to fetch

apiInstance.getSubtitle(subtitleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subtitleId** | **Integer**| ID of the product to fetch | 

### Return type

[**Subtitle**](Subtitle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubtitles"></a>
# **getSubtitles**
> Subtitles getSubtitles(opts)



Get Subtitles list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SubtitlesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getSubtitles(opts).then(function(data) {
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

[**Subtitles**](Subtitles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoSubtitles"></a>
# **getVideoSubtitles**
> Subtitles getVideoSubtitles(videoId, opts)



Get video subtitles

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SubtitlesApi();

var videoId = 789; // Integer | ID of the video to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoSubtitles(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Subtitles**](Subtitles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

