# KinowJavascriptSdk.StatsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVideoStatSession**](StatsApi.md#createVideoStatSession) | **POST** /video-stats/sessions | 
[**getCustomerGroupTotalWatched**](StatsApi.md#getCustomerGroupTotalWatched) | **GET** /video-stats/customer-group | 
[**getCustomerSessions**](StatsApi.md#getCustomerSessions) | **GET** /video-stats/sessions | 
[**getCustomerSessionsMultiple**](StatsApi.md#getCustomerSessionsMultiple) | **POST** /video-stats/{customer_id}/sessions | 
[**getCustomerVideoStats**](StatsApi.md#getCustomerVideoStats) | **GET** /video-stats/customers | 
[**getCustomerVideosViewInformations**](StatsApi.md#getCustomerVideosViewInformations) | **POST** /video-stats/views/{customer_id} | 
[**getProductsWatched**](StatsApi.md#getProductsWatched) | **GET** /video-stats/products-watched | 
[**getVideoStats**](StatsApi.md#getVideoStats) | **GET** /video-stats/videos | 
[**getVideosWatching**](StatsApi.md#getVideosWatching) | **GET** /video-stats/videos-watching | 
[**setCustomerVideoViewInformations**](StatsApi.md#setCustomerVideoViewInformations) | **PUT** /video-stats/views/{customer_id}/{video_id} | 


<a name="createVideoStatSession"></a>
# **createVideoStatSession**
> CreateVideoStatSessionResponse createVideoStatSession(body)



Create a video stat session for a customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var body = new KinowJavascriptSdk.CreateVideoStatSessionRequest(); // CreateVideoStatSessionRequest | Video stat session parameters

apiInstance.createVideoStatSession(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateVideoStatSessionRequest**](CreateVideoStatSessionRequest.md)| Video stat session parameters | 

### Return type

[**CreateVideoStatSessionResponse**](CreateVideoStatSessionResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerGroupTotalWatched"></a>
# **getCustomerGroupTotalWatched**
> CustomerGroupVideoStatsListResponse getCustomerGroupTotalWatched(groupId, opts)



Get video statistics for a given customer group

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var groupId = 789; // Integer | Customer group ID to fecth

var opts = { 
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerGroupTotalWatched(groupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Customer group ID to fecth | 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**CustomerGroupVideoStatsListResponse**](CustomerGroupVideoStatsListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerSessions"></a>
# **getCustomerSessions**
> SessionVideoStatListResponse getCustomerSessions(opts)



Get Customer video sessions statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'customerId': 789, // Integer | Customer ID to fetch
  'groupId': 789, // Integer | Group ID to fetch
  'videoId': 789, // Integer | Video ID to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | [optional] 
 **groupId** | **Integer**| Group ID to fetch | [optional] 
 **videoId** | **Integer**| Video ID to fetch | [optional] 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**SessionVideoStatListResponse**](SessionVideoStatListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerSessionsMultiple"></a>
# **getCustomerSessionsMultiple**
> [SessionVideoStat] getCustomerSessionsMultiple(customerId, body)



Get Customer sessions statistics for multiple videos

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.VideoIDList2(); // VideoIDList2 | List of Video IDs separated by comma, eg. '42,21,84'

apiInstance.getCustomerSessionsMultiple(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**VideoIDList2**](VideoIDList2.md)| List of Video IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[SessionVideoStat]**](SessionVideoStat.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerVideoStats"></a>
# **getCustomerVideoStats**
> CustomerVideoStatsListResponse getCustomerVideoStats(customerId, opts)



Get customer video statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerVideoStats(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**CustomerVideoStatsListResponse**](CustomerVideoStatsListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerVideosViewInformations"></a>
# **getCustomerVideosViewInformations**
> [VideoViewInformations] getCustomerVideosViewInformations(customerId, body)



Get a list of videos view informations for a customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var body = new KinowJavascriptSdk.VideoIDList1(); // VideoIDList1 | List of Video IDs separated by comma, eg. '42,21,84'

apiInstance.getCustomerVideosViewInformations(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **body** | [**VideoIDList1**](VideoIDList1.md)| List of Video IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[VideoViewInformations]**](VideoViewInformations.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductsWatched"></a>
# **getProductsWatched**
> BlogPageProductsResponse getProductsWatched(customerId, opts)



Get products watched

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'ip': "ip_example" // String | Filter by user IP
  'isoCode': "isoCode_example" // String | Filter by ISO Code
};
apiInstance.getProductsWatched(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **isoCode** | **String**| Filter by ISO Code | [optional] 

### Return type

[**BlogPageProductsResponse**](BlogPageProductsResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoStats"></a>
# **getVideoStats**
> VideoStatListResponse getVideoStats(opts)



Get video statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'videoId': 789, // Integer | Video ID to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
};
apiInstance.getVideoStats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| Video ID to fetch | [optional] 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 

### Return type

[**VideoStatListResponse**](VideoStatListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideosWatching"></a>
# **getVideosWatching**
> VideoStatsVideosWatchingResponse getVideosWatching(customerId, opts)



Get videos watching

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'ip': "ip_example" // String | Filter by user IP
  'isoCode': "isoCode_example" // String | Filter by ISO Code
};
apiInstance.getVideosWatching(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 
 **isoCode** | **String**| Filter by ISO Code | [optional] 

### Return type

[**VideoStatsVideosWatchingResponse**](VideoStatsVideosWatchingResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setCustomerVideoViewInformations"></a>
# **setCustomerVideoViewInformations**
> setCustomerVideoViewInformations(customerId, videoId, body)



Set a video view informations for a customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');
var defaultClient = KinowJavascriptSdk.ApiClient.instance;

// Configure API key authorization: ApiClientId
var ApiClientId = defaultClient.authentications['ApiClientId'];
ApiClientId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientId.apiKeyPrefix = 'Token';

// Configure API key authorization: ApiClientSecret
var ApiClientSecret = defaultClient.authentications['ApiClientSecret'];
ApiClientSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiClientSecret.apiKeyPrefix = 'Token';

var apiInstance = new KinowJavascriptSdk.StatsApi();

var customerId = 789; // Integer | Customer ID to fetch

var videoId = 789; // Integer | Video ID to fetch

var body = new KinowJavascriptSdk.View(); // View | Boolean view

apiInstance.setCustomerVideoViewInformations(customerId, videoId, body).then(function() {
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
 **body** | [**View**](View.md)| Boolean view | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

