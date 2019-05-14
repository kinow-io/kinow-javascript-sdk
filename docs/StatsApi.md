# KinowJavascriptSdk.StatsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerGroupTotalWatched**](StatsApi.md#getCustomerGroupTotalWatched) | **GET** /video-stats/customer-group | 
[**getCustomerSessions**](StatsApi.md#getCustomerSessions) | **GET** /video-stats/sessions | 
[**getCustomerVideoStats**](StatsApi.md#getCustomerVideoStats) | **GET** /video-stats/customers | 
[**getVideoStats**](StatsApi.md#getVideoStats) | **GET** /video-stats/videos | 


<a name="getCustomerGroupTotalWatched"></a>
# **getCustomerGroupTotalWatched**
> CustomerGroupVideoStats1 getCustomerGroupTotalWatched(groupId, videoId, opts)



Get video statistics for a given customer group

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var groupId = 789; // Integer | Customer group ID to fecth

var videoId = 789; // Integer | Video ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerGroupTotalWatched(groupId, videoId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| Customer group ID to fecth | 
 **videoId** | **Integer**| Video ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**CustomerGroupVideoStats1**](CustomerGroupVideoStats1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerSessions"></a>
# **getCustomerSessions**
> SessionVideoStats getCustomerSessions(opts)



Get customer video sessions statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'customerId': 789, // Integer | Customer ID to fetch
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
 **videoId** | **Integer**| Video ID to fetch | [optional] 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**SessionVideoStats**](SessionVideoStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerVideoStats"></a>
# **getCustomerVideoStats**
> CustomerVideoStats1 getCustomerVideoStats(customerId, opts)



Get customer video statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

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

[**CustomerVideoStats1**](CustomerVideoStats1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoStats"></a>
# **getVideoStats**
> VideoStats getVideoStats(opts)



Get video statistics

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'videoId': 789, // Integer | Video ID to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789 // Integer | 
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

[**VideoStats**](VideoStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

