# KinowJavascriptSdk.VideosApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToVideo**](VideosApi.md#attachCoverToVideo) | **POST** /videos/{video_id}/cover | 
[**attachFeaturesToVideo**](VideosApi.md#attachFeaturesToVideo) | **POST** /videos/{video_id}/features | 
[**attachVideoToProduct**](VideosApi.md#attachVideoToProduct) | **POST** /products/{product_id}/videos | 
[**createVideo**](VideosApi.md#createVideo) | **POST** /videos | 
[**deleteVideo**](VideosApi.md#deleteVideo) | **DELETE** /videos/{video_id} | 
[**getCustomerHasAccessToVideo**](VideosApi.md#getCustomerHasAccessToVideo) | **GET** /customers/{customer_id}/videos/{video_id}/has-access | 
[**getDisabledSubscriptions**](VideosApi.md#getDisabledSubscriptions) | **GET** /videos/{video_id}/disabled-subscriptions | 
[**getDownloadUrl**](VideosApi.md#getDownloadUrl) | **GET** /customers/{customer_id}/videos/{video_id}/download | 
[**getMarlinToken**](VideosApi.md#getMarlinToken) | **GET** /customers/{customer_id}/videos/{video_id}/marlin | 
[**getPlayerIframe**](VideosApi.md#getPlayerIframe) | **GET** /videos/{video_id}/player-iframe | 
[**getPlayerUrl**](VideosApi.md#getPlayerUrl) | **GET** /customers/{customer_id}/videos/{video_id}/player | 
[**getVideo**](VideosApi.md#getVideo) | **GET** /videos/{video_id} | 
[**getVideoAccess**](VideosApi.md#getVideoAccess) | **GET** /videos/{video_id}/customers/{customer_id}/access | 
[**getVideoDownloadUrl**](VideosApi.md#getVideoDownloadUrl) | **GET** /videos/{video_id}/download-url | 
[**getVideoFeatures**](VideosApi.md#getVideoFeatures) | **GET** /videos/{video_id}/features | 
[**getVideoGeolocation**](VideosApi.md#getVideoGeolocation) | **GET** /videos/{video_id}/geolocation | 
[**getVideoGeolocation_0**](VideosApi.md#getVideoGeolocation_0) | **POST** /videos/{video_id}/geolocations/{ip_address} | 
[**getVideoPlayerUrl**](VideosApi.md#getVideoPlayerUrl) | **GET** /videos/{video_id}/player | 
[**getVideoSubtitles**](VideosApi.md#getVideoSubtitles) | **GET** /videos/{video_id}/subtitles | 
[**getVideoViews**](VideosApi.md#getVideoViews) | **GET** /videos/{video_id}/views | 
[**getVideos**](VideosApi.md#getVideos) | **GET** /videos | 
[**getVideosFromProduct**](VideosApi.md#getVideosFromProduct) | **GET** /products/{product_id}/videos | 
[**setVideoGeolocation**](VideosApi.md#setVideoGeolocation) | **PUT** /videos/{video_id}/geolocations | 
[**updateVideo**](VideosApi.md#updateVideo) | **PUT** /videos/{video_id} | 


<a name="attachCoverToVideo"></a>
# **attachCoverToVideo**
> attachCoverToVideo(videoId, idImage)



Attach cover to video (the image need to be attached to the product)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var idImage = 789; // Integer | ID of the image to attach

apiInstance.attachCoverToVideo(videoId, idImage).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 
 **idImage** | **Integer**| ID of the image to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachFeaturesToVideo"></a>
# **attachFeaturesToVideo**
> attachFeaturesToVideo(videoId, features)



Attach feature to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | 

var features = "features_example"; // String |      To attach existing FeatureValue to Product:     ```     [{     \"id_feature\":3,     \"id_feature_value\":5     }]     ```      To create a custom FeatureValue:     ```     [{     \"id_feature\":3,     \"custom_value\":[{     \"lang\": 1,     \"value\": \"string\"     }]     }]     ```

apiInstance.attachFeaturesToVideo(videoId, features).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**|  | 
 **features** | **String**|      To attach existing FeatureValue to Product:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;id_feature_value\&quot;:5     }]     &#x60;&#x60;&#x60;      To create a custom FeatureValue:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;custom_value\&quot;:[{     \&quot;lang\&quot;: 1,     \&quot;value\&quot;: \&quot;string\&quot;     }]     }]     &#x60;&#x60;&#x60; | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachVideoToProduct"></a>
# **attachVideoToProduct**
> attachVideoToProduct(productId, videoId)



Attach video to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var productId = 789; // Integer | ID of the product to fetch

var videoId = 789; // Integer | ID of the video to attach

apiInstance.attachVideoToProduct(productId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 
 **videoId** | **Integer**| ID of the video to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createVideo"></a>
# **createVideo**
> Video createVideo(body)



Create new video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var body = new KinowJavascriptSdk.Video(); // Video | 

apiInstance.createVideo(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Video**](Video.md)|  | 

### Return type

[**Video**](Video.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteVideo"></a>
# **deleteVideo**
> deleteVideo(videoId)



Delete video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to delete

apiInstance.deleteVideo(videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToVideo"></a>
# **getCustomerHasAccessToVideo**
> getCustomerHasAccessToVideo(customerId, videoId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | ID of the customer to fetch

var videoId = 789; // Integer | ID of the video to fetch

apiInstance.getCustomerHasAccessToVideo(customerId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | 
 **videoId** | **Integer**| ID of the video to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDisabledSubscriptions"></a>
# **getDisabledSubscriptions**
> Subscriptions getDisabledSubscriptions(videoId, opts)



Get disabled subscriptions list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getDisabledSubscriptions(videoId, opts).then(function(data) {
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

[**Subscriptions**](Subscriptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDownloadUrl"></a>
# **getDownloadUrl**
> DownloadUrl getDownloadUrl(customerId, videoId)



Get video download url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | Id of the customer to fetch

var videoId = 789; // Integer | Id of the video to fetch

apiInstance.getDownloadUrl(customerId, videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Id of the customer to fetch | 
 **videoId** | **Integer**| Id of the video to fetch | 

### Return type

[**DownloadUrl**](DownloadUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMarlinToken"></a>
# **getMarlinToken**
> MarlinToken getMarlinToken(customerId, videoId)



Get Marlin access token for a video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | Id of the customer to fetch

var videoId = 789; // Integer | Id of the video to fetch

apiInstance.getMarlinToken(customerId, videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Id of the customer to fetch | 
 **videoId** | **Integer**| Id of the video to fetch | 

### Return type

[**MarlinToken**](MarlinToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPlayerIframe"></a>
# **getPlayerIframe**
> VideoUrl getPlayerIframe(videoId, opts)



Get video player url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Id of the video to fetch

var opts = { 
  'customerId': 789 // Integer | Id of the customer to fetch
};
apiInstance.getPlayerIframe(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Id of the video to fetch | 
 **customerId** | **Integer**| Id of the customer to fetch | [optional] 

### Return type

[**VideoUrl**](VideoUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPlayerUrl"></a>
# **getPlayerUrl**
> VideoUrl getPlayerUrl(customerId, videoId)



Get video player url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | Id of the customer to fetch

var videoId = 789; // Integer | Id of the video to fetch

apiInstance.getPlayerUrl(customerId, videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Id of the customer to fetch | 
 **videoId** | **Integer**| Id of the video to fetch | 

### Return type

[**VideoUrl**](VideoUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideo"></a>
# **getVideo**
> Video getVideo(videoId)



Get video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

apiInstance.getVideo(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 

### Return type

[**Video**](Video.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoAccess"></a>
# **getVideoAccess**
> getVideoAccess(videoId, customerId)



Get video access

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var customerId = 789; // Integer | ID of the customer to fetch

apiInstance.getVideoAccess(videoId, customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 
 **customerId** | **Integer**| ID of the customer to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoDownloadUrl"></a>
# **getVideoDownloadUrl**
> DownloadUrl getVideoDownloadUrl(videoId, opts)



Get video download url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Id of the video to fetch

var opts = { 
  'customerId': 789 // Integer | Id of the customer to fetch
};
apiInstance.getVideoDownloadUrl(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Id of the video to fetch | 
 **customerId** | **Integer**| Id of the customer to fetch | [optional] 

### Return type

[**DownloadUrl**](DownloadUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoFeatures"></a>
# **getVideoFeatures**
> Features getVideoFeatures(videoId, opts)



Get video features

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoFeatures(videoId, opts).then(function(data) {
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

[**Features**](Features.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoGeolocation"></a>
# **getVideoGeolocation**
> Geolocs getVideoGeolocation(videoId, opts)



Get geoloc list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoGeolocation(videoId, opts).then(function(data) {
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

[**Geolocs**](Geolocs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoGeolocation_0"></a>
# **getVideoGeolocation_0**
> getVideoGeolocation_0(videoId, ipAddress, opts)



Check access to a product by geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var ipAddress = "ipAddress_example"; // String | address ip

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoGeolocation_0(videoId, ipAddress, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 
 **ipAddress** | **String**| address ip | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoPlayerUrl"></a>
# **getVideoPlayerUrl**
> PlayerConfiguration getVideoPlayerUrl(videoId, opts)



Get video player url

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Id of the video to fetch

var opts = { 
  'customerId': 789 // Integer | 
};
apiInstance.getVideoPlayerUrl(videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Id of the video to fetch | 
 **customerId** | **Integer**|  | [optional] 

### Return type

[**PlayerConfiguration**](PlayerConfiguration.md)

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

var apiInstance = new KinowJavascriptSdk.VideosApi();

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

<a name="getVideoViews"></a>
# **getVideoViews**
> VideoViews getVideoViews(videoId)



Get video views

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

apiInstance.getVideoViews(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 

### Return type

[**VideoViews**](VideoViews.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideos"></a>
# **getVideos**
> Videos getVideos(opts)



Get customer list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |      ```     features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict     _______________      {     \"*\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"1\": {     \"value\": \"string\",     \"operator\": \"contains\"     }     } ```     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |      ```     filters[name][value]=string&filters[name][operator]=strict&filters[duration][value]=string&filters[duration][operator]=gt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"duration\": {     \"value\": \"string\",     \"operator\": \"gt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'ip': "ip_example" // String | filter by customer ip
};
apiInstance.getVideos(opts).then(function(data) {
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
 **features** | **String**|      &#x60;&#x60;&#x60;     features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict     _______________      {     \&quot;*\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;1\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;contains\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt.     To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     filters[name][value]&#x3D;string&amp;filters[name][operator]&#x3D;strict&amp;filters[duration][value]&#x3D;string&amp;filters[duration][operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 

### Return type

[**Videos**](Videos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosFromProduct"></a>
# **getVideosFromProduct**
> Videos getVideosFromProduct(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var productId = 789; // Integer | ID of the product to fetch

var opts = { 
  'page': 789, // Integer | 
  'filters': "filters_example", // String |      ```     filters[name][value]=string&filters[name][operator]=strict&filters[duration][value]=string&filters[duration][operator]=gt     _______________      {     \"name\": {     \"value\": \"string\",     \"operator\": \"strict\"     },     \"duration\": {     \"value\": \"string\",     \"operator\": \"gt\"     }     } ```     Operator can be strict, contains, gt or lt.
  'perPage': 789, // Integer | 
  'ip': "ip_example", // String | filter by customer ip
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getVideosFromProduct(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| ID of the product to fetch | 
 **page** | **Integer**|  | [optional] 
 **filters** | **String**|      &#x60;&#x60;&#x60;     filters[name][value]&#x3D;string&amp;filters[name][operator]&#x3D;strict&amp;filters[duration][value]&#x3D;string&amp;filters[duration][operator]&#x3D;gt     _______________      {     \&quot;name\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;strict\&quot;     },     \&quot;duration\&quot;: {     \&quot;value\&quot;: \&quot;string\&quot;,     \&quot;operator\&quot;: \&quot;gt\&quot;     }     } &#x60;&#x60;&#x60;     Operator can be strict, contains, gt or lt. | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos**](Videos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setVideoGeolocation"></a>
# **setVideoGeolocation**
> setVideoGeolocation(videoId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts)



Handle geolocation for videos by countries

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to fetch

var enabled = 56; // Integer | Enabled

var behaviorDetectedCountries = "behaviorDetectedCountries_example"; // String | Behavior for detected countries

var behaviorNonDetectedCountries = "behaviorNonDetectedCountries_example"; // String | Behavior for non-detected countries

var opts = { 
  'countries': "countries_example" // String | IDs of the non-detected countries separated by comma
};
apiInstance.setVideoGeolocation(videoId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to fetch | 
 **enabled** | **Integer**| Enabled | 
 **behaviorDetectedCountries** | **String**| Behavior for detected countries | 
 **behaviorNonDetectedCountries** | **String**| Behavior for non-detected countries | 
 **countries** | **String**| IDs of the non-detected countries separated by comma | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateVideo"></a>
# **updateVideo**
> Video updateVideo(videoId, body)



Update video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | ID of the video to update

var body = new KinowJavascriptSdk.Video(); // Video | 

apiInstance.updateVideo(videoId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the video to update | 
 **body** | [**Video**](Video.md)|  | 

### Return type

[**Video**](Video.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

