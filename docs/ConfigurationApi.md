# KinowJavascriptSdk.ConfigurationApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfiguration**](ConfigurationApi.md#getConfiguration) | **GET** /configuration | 
[**getConfigurationByName**](ConfigurationApi.md#getConfigurationByName) | **GET** /configuration/{configuration_name} | 
[**getConfigurationLogo**](ConfigurationApi.md#getConfigurationLogo) | **GET** /configuration/logo | 
[**getConfigurationSocial**](ConfigurationApi.md#getConfigurationSocial) | **GET** /configuration/social | 


<a name="getConfiguration"></a>
# **getConfiguration**
> ConfigurationList getConfiguration(opts)



      Get configuration by name.      Available :         - PLATFORM_NAME         - LANG_DEFAULT         - CURRENCY_DEFAULT         - COUNTRY_DEFAULT         - TIMEZONE         - COPYRIGHT         - COOKIE_WARNING         - RECAPTCHA_KEY         - CUSTOMER_REGISTRATION         - CATALOG_RESTRICTED         - PRODUCTS_ORDER_BY         - PRODUCTS_ORDER_WAY         - PRODUCTS_RAIL_NB         - PRODUCTS_NEW_DAYS         - FORCE_TAX_ID         - CMS_CONDITIONS_ID      

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getConfiguration(opts).then(function(data) {
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

[**ConfigurationList**](ConfigurationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getConfigurationByName"></a>
# **getConfigurationByName**
> Configuration getConfigurationByName(configurationName)



     Get configuration by name.     Available :     - LANG_DEFAULT     - CURRENCY_DEFAULT     - COUNTRY_DEFAULT     - TIMEZONE     

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();

var configurationName = "configurationName_example"; // String | 

apiInstance.getConfigurationByName(configurationName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationName** | **String**|  | 

### Return type

[**Configuration**](Configuration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getConfigurationLogo"></a>
# **getConfigurationLogo**
> LogoSettings getConfigurationLogo()



Get logo settings

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();
apiInstance.getConfigurationLogo().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LogoSettings**](LogoSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getConfigurationSocial"></a>
# **getConfigurationSocial**
> SocialSettings getConfigurationSocial()



Get social networks settings

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ConfigurationApi();
apiInstance.getConfigurationSocial().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SocialSettings**](SocialSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

