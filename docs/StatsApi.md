# KinowJavascriptSdk.StatsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVideoStatsByCustomers**](StatsApi.md#getVideoStatsByCustomers) | **GET** /video-stats/customers | 
[**getVideoStatsByVideo**](StatsApi.md#getVideoStatsByVideo) | **GET** /video-stats/videos | 
[**getVideoStatsSessions**](StatsApi.md#getVideoStatsSessions) | **GET** /video-stats/sessions | 


<a name="getVideoStatsByCustomers"></a>
# **getVideoStatsByCustomers**
> CustomerVideoStats getVideoStatsByCustomers(opts)



Get video stats by customer

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'customerId': 789, // Integer | ID of the customer to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoStatsByCustomers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | [optional] 
 **dateFrom** | **String**| Search entries from this date | [optional] 
 **dateTo** | **String**| Search entries to this date | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**CustomerVideoStats**](CustomerVideoStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getVideoStatsByVideo"></a>
# **getVideoStatsByVideo**
> VideoStats getVideoStatsByVideo(opts)



Get video stats by video

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'videoId': 789, // Integer | ID of the customer to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789 // Integer | 
};
apiInstance.getVideoStatsByVideo(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **Integer**| ID of the customer to fetch | [optional] 
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

<a name="getVideoStatsSessions"></a>
# **getVideoStatsSessions**
> SessionVideoStats getVideoStatsSessions(opts)



Get video stats sessions

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.StatsApi();

var opts = { 
  'customerId': 789, // Integer | ID of the customer to fetch
  'videoId': 789, // Integer | ID of the video to fetch
  'dateFrom': "dateFrom_example", // String | Search entries from this date
  'dateTo': "dateTo_example", // String | Search entries to this date
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getVideoStatsSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| ID of the customer to fetch | [optional] 
 **videoId** | **Integer**| ID of the video to fetch | [optional] 
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

