# KinowJavascriptSdk.VideosApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToVideo**](VideosApi.md#attachCoverToVideo) | **POST** /videos/{video_id}/cover | 
[**attachFeaturesToVideo**](VideosApi.md#attachFeaturesToVideo) | **POST** /videos/{video_id}/features | 
[**attachVideoToProduct**](VideosApi.md#attachVideoToProduct) | **POST** /products/{product_id}/videos | 
[**createVideo**](VideosApi.md#createVideo) | **POST** /videos | 
[**deleteVideo**](VideosApi.md#deleteVideo) | **DELETE** /videos/{video_id} | 
[**getCategoryVideoPlayer**](VideosApi.md#getCategoryVideoPlayer) | **GET** /categories/videos/{video_id}/player | 
[**getCategoryVideoSubtitles**](VideosApi.md#getCategoryVideoSubtitles) | **GET** /categories/videos/{video_id}/subtitles | 
[**getCustomerHasAccessToVideo**](VideosApi.md#getCustomerHasAccessToVideo) | **GET** /customers/{customer_id}/videos/{video_id}/has-access | 
[**getCustomerHasAccessToVideos**](VideosApi.md#getCustomerHasAccessToVideos) | **POST** /customers/{customer_id}/videos/has-access | 
[**getDisabledSubscriptions**](VideosApi.md#getDisabledSubscriptions) | **GET** /videos/{video_id}/disabled-subscriptions | 
[**getVideo**](VideosApi.md#getVideo) | **GET** /videos/{video_id} | 
[**getVideoAccess**](VideosApi.md#getVideoAccess) | **GET** /videos/{video_id}/customers/{customer_id}/access | 
[**getVideoBonus**](VideosApi.md#getVideoBonus) | **GET** /videos/{video_id}/bonus | 
[**getVideoDownloadUrl**](VideosApi.md#getVideoDownloadUrl) | **GET** /videos/{video_id}/download-url | 
[**getVideoFeatures**](VideosApi.md#getVideoFeatures) | **GET** /videos/{video_id}/features | 
[**getVideoGeolocation**](VideosApi.md#getVideoGeolocation) | **GET** /videos/{video_id}/geolocation | 
[**getVideoGeolocationByIp**](VideosApi.md#getVideoGeolocationByIp) | **POST** /videos/{video_id}/geolocations/{ip_address} | 
[**getVideoPlayer**](VideosApi.md#getVideoPlayer) | **GET** /videos/{video_id}/player | 
[**getVideoSubtitles**](VideosApi.md#getVideoSubtitles) | **GET** /videos/{video_id}/subtitles | 
[**getVideoViews**](VideosApi.md#getVideoViews) | **GET** /videos/{video_id}/views | 
[**getVideos**](VideosApi.md#getVideos) | **GET** /videos | 
[**getVideosFromCategories**](VideosApi.md#getVideosFromCategories) | **GET** /categories/videos | 
[**getVideosFromCategory**](VideosApi.md#getVideosFromCategory) | **GET** /categories/{category_id}/videos | 
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

var videoId = 789; // Integer | Video ID to fetch

var idImage = 789; // Integer | Image ID to attach

apiInstance.attachCoverToVideo(videoId, idImage).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **idImage** | **Integer**| Image ID to attach | 

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

var features = "features_example"; // String |       To attach existing FeatureValue to Product:      ```      [{      \"id_feature\":3,      \"id_feature_value\":5      }]      ```        To create a custom FeatureValue:      ```      [{      \"id_feature\":3,      \"custom_value\":[{      \"lang\": 1,      \"value\": \"string\"      }]      }]      ```

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
 **features** | **String**|       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60; | 

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

var productId = 789; // Integer | Product ID to fetch

var videoId = 789; // Integer | Video ID to attach

apiInstance.attachVideoToProduct(productId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **videoId** | **Integer**| Video ID to attach | 

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

var videoId = 789; // Integer | Video ID to fetch

apiInstance.deleteVideo(videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryVideoPlayer"></a>
# **getCategoryVideoPlayer**
> Player getCategoryVideoPlayer(videoId, opts)



Get video player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

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

var apiInstance = new KinowJavascriptSdk.VideosApi();

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

<a name="getCustomerHasAccessToVideo"></a>
# **getCustomerHasAccessToVideo**
> getCustomerHasAccessToVideo(customerId, videoId)



Get customer access to video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | Customer ID to fetch

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getCustomerHasAccessToVideo(customerId, videoId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerHasAccessToVideos"></a>
# **getCustomerHasAccessToVideos**
> [VideoAccessInfo] getCustomerHasAccessToVideos(customerId, body, opts)



Get customer access to Videos

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.VideoIDList(); // VideoIDList | List of Video IDs separated by comma, eg. '42,21,84'

var opts = { 
  'ipAddress': "ipAddress_example" // String | IP address
};
apiInstance.getCustomerHasAccessToVideos(customerId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**VideoIDList**](VideoIDList.md)| List of Video IDs separated by comma, eg. &#39;42,21,84&#39; | 
 **ipAddress** | **String**| IP address | [optional] 

### Return type

[**[VideoAccessInfo]**](VideoAccessInfo.md)

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

var videoId = 789; // Integer | Video ID to fetch

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
 **videoId** | **Integer**| Video ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Subscriptions**](Subscriptions.md)

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

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getVideo(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 

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

var videoId = 789; // Integer | Video ID to fetch

var customerId = 789; // Integer | Customer ID to fetch

apiInstance.getVideoAccess(videoId, customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **customerId** | **Integer**| Customer ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoBonus"></a>
# **getVideoBonus**
> [Bonus] getVideoBonus(videoId)



Get bonus list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getVideoBonus(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

[**[Bonus]**](Bonus.md)

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

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'customerId': 789, // Integer | Customer ID to fetch
  'ipAddress': "ipAddress_example" // String | IP address
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
 **videoId** | **Integer**| Video ID to fetch | 
 **customerId** | **Integer**| Customer ID to fetch | [optional] 
 **ipAddress** | **String**| IP address | [optional] 

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

var videoId = 789; // Integer | Video ID to fetch

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
 **videoId** | **Integer**| Video ID to fetch | 
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

var videoId = 789; // Integer | Video ID to fetch

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
 **videoId** | **Integer**| Video ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Geolocs**](Geolocs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoGeolocationByIp"></a>
# **getVideoGeolocationByIp**
> getVideoGeolocationByIp(videoId, ipAddress, opts)



Check access to a video by geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Video ID to fetch

var ipAddress = "ipAddress_example"; // String | IP address

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoGeolocationByIp(videoId, ipAddress, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 
 **ipAddress** | **String**| IP address | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoPlayer"></a>
# **getVideoPlayer**
> Player getVideoPlayer(videoId, opts)



Get video player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'customerId': 789, // Integer | Customer ID to fetch
  'countryId': 789, // Integer | Country ID to use in video analytics
  'ipAddress': "ipAddress_example" // String | IP address
};
apiInstance.getVideoPlayer(videoId, opts).then(function(data) {
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
 **ipAddress** | **String**| IP address | [optional] 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoSubtitles"></a>
# **getVideoSubtitles**
> VideoSubtitlesResponse getVideoSubtitles(videoId, opts)



Get subtitles of a video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Video ID to fetch

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

<a name="getVideoViews"></a>
# **getVideoViews**
> VideoViews getVideoViews(videoId)



Get video views

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var videoId = 789; // Integer | Video ID to fetch

apiInstance.getVideoViews(videoId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | 

### Return type

[**VideoViews**](VideoViews.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideos"></a>
# **getVideos**
> Videos2 getVideos(opts)



Get video list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |       ```      features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict      _______________        {      \"*\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"1\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |       ```      name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"duration\": {      \"value\": \"string\",      \"operator\": \"gt\"      }      } ```      Operator can be strict, contains, gt or lt.
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
 **features** | **String**|       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;duration\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;gt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt. | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 

### Return type

[**Videos2**](Videos2.md)

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

var apiInstance = new KinowJavascriptSdk.VideosApi();

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

var apiInstance = new KinowJavascriptSdk.VideosApi();

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

<a name="getVideosFromProduct"></a>
# **getVideosFromProduct**
> Videos2 getVideosFromProduct(productId, opts)



Get videos attached to product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.VideosApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'filters': "filters_example", // String |       ```      name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"duration\": {      \"value\": \"string\",      \"operator\": \"gt\"      }      } ```      Operator can be strict, contains, gt or lt.
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
 **productId** | **Integer**| Product ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;duration\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;gt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt. | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| filter by customer ip | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Videos2**](Videos2.md)

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

var videoId = 789; // Integer | Video ID to fetch

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
 **videoId** | **Integer**| Video ID to fetch | 
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

var videoId = 789; // Integer | Video ID to update

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
 **videoId** | **Integer**| Video ID to update | 
 **body** | [**Video**](Video.md)|  | 

### Return type

[**Video**](Video.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

