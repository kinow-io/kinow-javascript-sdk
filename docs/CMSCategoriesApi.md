# KinowJavascriptSdk.CMSCategoriesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCMSCategory**](CMSCategoriesApi.md#createCMSCategory) | **POST** /cms-categories | 
[**getCMSCategories**](CMSCategoriesApi.md#getCMSCategories) | **GET** /cms-categories | 
[**updateCMSCategory**](CMSCategoriesApi.md#updateCMSCategory) | **PUT** /cms-categories/{cms_category_id} | 


<a name="createCMSCategory"></a>
# **createCMSCategory**
> CMSCategory createCMSCategory(body)



Create cms category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CMSCategoriesApi();

var body = new KinowJavascriptSdk.CMSCategory(); // CMSCategory | 

apiInstance.createCMSCategory(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CMSCategory**](CMSCategory.md)|  | 

### Return type

[**CMSCategory**](CMSCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCMSCategories"></a>
# **getCMSCategories**
> CMSCategoriesLists getCMSCategories(opts)



Get cms categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CMSCategoriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |  ``` filters[name][value]=string&filters[name][operator]=contains&filters[date_add][value]=string&filters[date_add][operator]=lt _______________  {     \"name\": {         \"value\": \"string\",         \"operator\": \"contains\"     },     \"date_add\": {         \"value\": \"string\",         \"operator\": \"lt\"     } } ``` Operator can be strict, contains, gt or lt.
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCMSCategories(opts).then(function(data) {
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
 **filters** | **String**|  &#x60;&#x60;&#x60; filters[name][value]&#x3D;string&amp;filters[name][operator]&#x3D;contains&amp;filters[date_add][value]&#x3D;string&amp;filters[date_add][operator]&#x3D;lt _______________  {     \&quot;name\&quot;: {         \&quot;value\&quot;: \&quot;string\&quot;,         \&quot;operator\&quot;: \&quot;contains\&quot;     },     \&quot;date_add\&quot;: {         \&quot;value\&quot;: \&quot;string\&quot;,         \&quot;operator\&quot;: \&quot;lt\&quot;     } } &#x60;&#x60;&#x60; Operator can be strict, contains, gt or lt. | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**CMSCategoriesLists**](CMSCategoriesLists.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCMSCategory"></a>
# **updateCMSCategory**
> CMSCategory updateCMSCategory(cmsCategoryId, body)



Update cms category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CMSCategoriesApi();

var cmsCategoryId = 789; // Integer | ID of the CMS category to update

var body = new KinowJavascriptSdk.CMSCategory(); // CMSCategory | 

apiInstance.updateCMSCategory(cmsCategoryId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cmsCategoryId** | **Integer**| ID of the CMS category to update | 
 **body** | [**CMSCategory**](CMSCategory.md)|  | 

### Return type

[**CMSCategory**](CMSCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

