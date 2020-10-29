# KinowJavascriptSdk.CategoryVideosApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryVideoPlayer**](CategoryVideosApi.md#getCategoryVideoPlayer) | **GET** /categories/videos/{video_id}/player | 
[**getCategoryVideoSubtitles**](CategoryVideosApi.md#getCategoryVideoSubtitles) | **GET** /categories/videos/{video_id}/subtitles | 
[**getVideosFromCategories**](CategoryVideosApi.md#getVideosFromCategories) | **GET** /categories/videos | 
[**getVideosFromCategory**](CategoryVideosApi.md#getVideosFromCategory) | **GET** /categories/{category_id}/videos | 


<a name="getCategoryVideoPlayer"></a>
# **getCategoryVideoPlayer**
> Player getCategoryVideoPlayer(videoId, opts)



Get video player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoryVideosApi();

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'customerId': 789, // Integer | Customer ID to fetch
  'countryId': 789 // Integer | Country ID to use in video analytics
};
apiInstance.getCategoryVideoPlayer(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **customerId** | **Integer**| Customer ID to fetch | [optional] 
 **countryId** | **Integer**| Country ID to use in video analytics | [optional] 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryVideoSubtitles"></a>
# **getCategoryVideoSubtitles**
> VideoSubtitlesResponse getCategoryVideoSubtitles(videoId, opts)



Get subtitles of a video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoryVideosApi();

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCategoryVideoSubtitles(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**VideoSubtitlesResponse**](VideoSubtitlesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosFromCategories"></a>
# **getVideosFromCategories**
> Videos getVideosFromCategories(opts)



Get Videos attached to Categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoryVideosApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getVideosFromCategories(opts).then(function(data) {
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
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos**](Videos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosFromCategory"></a>
# **getVideosFromCategory**
> Videos getVideosFromCategory(categoryId, opts)



Get Videos attached to Category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoryVideosApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getVideosFromCategory(categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos**](Videos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

