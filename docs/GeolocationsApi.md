# KinowJavascriptSdk.GeolocationsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIPLocation**](GeolocationsApi.md#getIPLocation) | **GET** /geolocations/ip | 
[**getPlatformAccessInfo**](GeolocationsApi.md#getPlatformAccessInfo) | **GET** /geolocations/platform-access | 
[**getProductGeolocations**](GeolocationsApi.md#getProductGeolocations) | **GET** /products/{product_id}/geolocations | 
[**getProductGeolocationsByIp**](GeolocationsApi.md#getProductGeolocationsByIp) | **POST** /products/{product_id}/geolocations | 
[**getVideoGeolocationByIp**](GeolocationsApi.md#getVideoGeolocationByIp) | **POST** /videos/{video_id}/geolocations/{ip_address} | 
[**setProductGeolocation**](GeolocationsApi.md#setProductGeolocation) | **PUT** /products/{product_id}/geolocations | 
[**setVideoGeolocation**](GeolocationsApi.md#setVideoGeolocation) | **PUT** /videos/{video_id}/geolocations | 


<a name="getIPLocation"></a>
# **getIPLocation**
> IPLocation getIPLocation(ipAddress)



Get IP location

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

var ipAddress = "ipAddress_example"; // String | address ip

apiInstance.getIPLocation(ipAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | **String**| address ip | 

### Return type

[**IPLocation**](IPLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPlatformAccessInfo"></a>
# **getPlatformAccessInfo**
> PlatformAccessInfo getPlatformAccessInfo(ipAddress)



Get PlatformAccessInfo by ip

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

var ipAddress = "ipAddress_example"; // String | IP address

apiInstance.getPlatformAccessInfo(ipAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipAddress** | **String**| IP address | 

### Return type

[**PlatformAccessInfo**](PlatformAccessInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocations"></a>
# **getProductGeolocations**
> Geolocs getProductGeolocations(productId, opts)



Get product geolocation restrictions

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductGeolocations(productId, opts).then(function(data) {
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
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Geolocs**](Geolocs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductGeolocationsByIp"></a>
# **getProductGeolocationsByIp**
> getProductGeolocationsByIp(productId, ipAddress, opts)



Check product access using geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

var productId = 789; // Integer | Product ID to fetch

var ipAddress = "ipAddress_example"; // String | address ip

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductGeolocationsByIp(productId, ipAddress, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
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

<a name="getVideoGeolocationByIp"></a>
# **getVideoGeolocationByIp**
> getVideoGeolocationByIp(videoId, ipAddress, opts)



Check access to a product by geolocation

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

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

<a name="setProductGeolocation"></a>
# **setProductGeolocation**
> setProductGeolocation(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts)



Handle geolocation for products by countries

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

var productId = 789; // Integer | Product ID to fetch

var enabled = 56; // Integer | Enabled

var behaviorDetectedCountries = "behaviorDetectedCountries_example"; // String | Behavior for detected countries

var behaviorNonDetectedCountries = "behaviorNonDetectedCountries_example"; // String | Behavior for non-detected countries

var opts = { 
  'countries': "countries_example", // String | IDs of the non-detected countries separated by comma
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.setProductGeolocation(productId, enabled, behaviorDetectedCountries, behaviorNonDetectedCountries, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **enabled** | **Integer**| Enabled | 
 **behaviorDetectedCountries** | **String**| Behavior for detected countries | 
 **behaviorNonDetectedCountries** | **String**| Behavior for non-detected countries | 
 **countries** | **String**| IDs of the non-detected countries separated by comma | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

null (empty response body)

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

var apiInstance = new KinowJavascriptSdk.GeolocationsApi();

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

