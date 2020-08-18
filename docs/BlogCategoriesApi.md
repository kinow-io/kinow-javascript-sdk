# KinowJavascriptSdk.BlogCategoriesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlogCategories**](BlogCategoriesApi.md#getBlogCategories) | **GET** /blog-categories | 
[**getBlogCategory**](BlogCategoriesApi.md#getBlogCategory) | **GET** /blog-categories/{blog_category_id} | 


<a name="getBlogCategories"></a>
# **getBlogCategories**
> BlogCategoryLists getBlogCategories(opts)



Get blog categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.BlogCategoriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"contains\"      },      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getBlogCategories(opts).then(function(data) {
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**BlogCategoryLists**](BlogCategoryLists.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBlogCategory"></a>
# **getBlogCategory**
> BlogCategory getBlogCategory(blogCategoryId)



Get blog category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.BlogCategoriesApi();

var blogCategoryId = 789; // Integer | 

apiInstance.getBlogCategory(blogCategoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blogCategoryId** | **Integer**|  | 

### Return type

[**BlogCategory**](BlogCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

