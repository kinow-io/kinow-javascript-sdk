# KinowJavascriptSdk.WidgetsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSliderImage**](WidgetsApi.md#getSliderImage) | **GET** /widgets/slider/images | 
[**getWidgetAnalytics**](WidgetsApi.md#getWidgetAnalytics) | **GET** /widgets/analytics | 
[**getWidgetFooterMenu**](WidgetsApi.md#getWidgetFooterMenu) | **GET** /widgets/footer-menu | 
[**getWidgetHookPhrase**](WidgetsApi.md#getWidgetHookPhrase) | **GET** /widgets/hook-phrase | 
[**getWidgetSlider**](WidgetsApi.md#getWidgetSlider) | **GET** /widgets/slider | 
[**getWidgetSliderItem**](WidgetsApi.md#getWidgetSliderItem) | **GET** /widgets/slider/{slider_id} | 
[**getWidgetTopMenu**](WidgetsApi.md#getWidgetTopMenu) | **GET** /widgets/top-menu | 


<a name="getSliderImage"></a>
# **getSliderImage**
> [Image] getSliderImage()



Get slider images

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();
apiInstance.getSliderImage().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetAnalytics"></a>
# **getWidgetAnalytics**
> GoogleAnalytics getWidgetAnalytics()



Get Google Analytics configuration

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();
apiInstance.getWidgetAnalytics().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GoogleAnalytics**](GoogleAnalytics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetFooterMenu"></a>
# **getWidgetFooterMenu**
> WidgetFooterMenus getWidgetFooterMenu(opts)



Get footer menu list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getWidgetFooterMenu(opts).then(function(data) {
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

[**WidgetFooterMenus**](WidgetFooterMenus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetHookPhrase"></a>
# **getWidgetHookPhrase**
> WidgetHookPhrases getWidgetHookPhrase(opts)



Get hook phrase list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getWidgetHookPhrase(opts).then(function(data) {
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

[**WidgetHookPhrases**](WidgetHookPhrases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetSlider"></a>
# **getWidgetSlider**
> WidgetSliders getWidgetSlider(opts)



Get slider list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getWidgetSlider(opts).then(function(data) {
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

[**WidgetSliders**](WidgetSliders.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetSliderItem"></a>
# **getWidgetSliderItem**
> WidgetSlider getWidgetSliderItem(sliderId)



Get slider item

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();

var sliderId = 789; // Integer | Slider ID to fetch

apiInstance.getWidgetSliderItem(sliderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sliderId** | **Integer**| Slider ID to fetch | 

### Return type

[**WidgetSlider**](WidgetSlider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getWidgetTopMenu"></a>
# **getWidgetTopMenu**
> WidgetTopMenus getWidgetTopMenu(opts)



Get top menu list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.WidgetsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getWidgetTopMenu(opts).then(function(data) {
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

[**WidgetTopMenus**](WidgetTopMenus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

