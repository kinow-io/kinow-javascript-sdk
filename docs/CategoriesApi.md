# KinowJavascriptSdk.CategoriesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /categories | 
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /categories/{category_id} | 
[**getAvailableCategory**](CategoriesApi.md#getAvailableCategory) | **GET** /categories-accesses/{category_id} | 
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /categories | 
[**getCategoriesFromCategory**](CategoriesApi.md#getCategoriesFromCategory) | **GET** /categories/{category_id}/categories | 
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /categories/{category_id} | 
[**getCategoryBanner**](CategoriesApi.md#getCategoryBanner) | **GET** /categories/{category_id}/banner | 
[**getCategoryFeatures**](CategoriesApi.md#getCategoryFeatures) | **GET** /categories/{category_id}/features | 
[**getCategoryProducts**](CategoriesApi.md#getCategoryProducts) | **GET** /categories/{category_id}/products | 
[**getCategoryVideoPlayer**](CategoriesApi.md#getCategoryVideoPlayer) | **GET** /categories/videos/{video_id}/player | 
[**getCategoryVideoSubtitles**](CategoriesApi.md#getCategoryVideoSubtitles) | **GET** /categories/videos/{video_id}/subtitles | 
[**getProductCategories**](CategoriesApi.md#getProductCategories) | **GET** /products/{product_id}/categories | 
[**getSubscriptionCategories**](CategoriesApi.md#getSubscriptionCategories) | **GET** /subscriptions/{subscription_id}/categories | 
[**getVideosFromCategories**](CategoriesApi.md#getVideosFromCategories) | **GET** /categories/videos | 
[**getVideosFromCategory**](CategoriesApi.md#getVideosFromCategory) | **GET** /categories/{category_id}/videos | 
[**updateCategory**](CategoriesApi.md#updateCategory) | **PUT** /categories/{category_id} | 
[**uploadCategoryCover**](CategoriesApi.md#uploadCategoryCover) | **POST** /categories/{category_id}/cover | 


<a name="createCategory"></a>
# **createCategory**
> Category createCategory(body)



Create new category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var body = new KinowJavascriptSdk.Category(); // Category | 

apiInstance.createCategory(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(categoryId)



Delete Category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

apiInstance.deleteCategory(categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAvailableCategory"></a>
# **getAvailableCategory**
> Category getAvailableCategory(categoryId, opts)



Get available category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'customerId': 789 // Integer | 
};
apiInstance.getAvailableCategory(categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 
 **customerId** | **Integer**|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategories"></a>
# **getCategories**
> Categories getCategories(opts)



Get categories list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |   ```  features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict  _______________    {      \"*\": {          \"value\": \"string\",          \"operator\": \"strict\"      },      \"1\": {          \"value\": \"string\",          \"operator\": \"contains\"      }  } ```  Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).  To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |   ```  name[value]=string&name[operator]=strict&description[value]=string&description[operator]=contains  _______________    {      \"name\": {          \"value\": \"string\",          \"operator\": \"strict\"      },      \"description\": {          \"value\": \"string\",          \"operator\": \"contains\"      }  } ```  Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCategories(opts).then(function(data) {
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
 **features** | **String**|   &#x60;&#x60;&#x60;  features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict  _______________    {      \&quot;*\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;contains\&quot;      }  } &#x60;&#x60;&#x60;  Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).  To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|   &#x60;&#x60;&#x60;  name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;description[value]&#x3D;string&amp;description[operator]&#x3D;contains  _______________    {      \&quot;name\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;description\&quot;: {          \&quot;value\&quot;: \&quot;string\&quot;,          \&quot;operator\&quot;: \&quot;contains\&quot;      }  } &#x60;&#x60;&#x60;  Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoriesFromCategory"></a>
# **getCategoriesFromCategory**
> Categories getCategoriesFromCategory(categoryId, opts)



Get categories list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCategoriesFromCategory(categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategory"></a>
# **getCategory**
> Category getCategory(categoryId)



Get category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

apiInstance.getCategory(categoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryBanner"></a>
# **getCategoryBanner**
> Image getCategoryBanner(categoryId)



Get Category banner

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

apiInstance.getCategoryBanner(categoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to fetch | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryFeatures"></a>
# **getCategoryFeatures**
> Features getCategoryFeatures(categoryId, opts)



Get category features

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCategoryFeatures(categoryId, opts).then(function(data) {
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

### Return type

[**Features**](Features.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCategoryProducts"></a>
# **getCategoryProducts**
> Products getCategoryProducts(categoryId, opts)



Get category products

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example", // String | Sorting direction (asc by default)
  'ip': "ip_example", // String | Filter by user IP
  'features': "features_example", // String |       ```      features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict      _______________        {      \"*\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"1\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).      To search on all features, you can pass * as featureId.
  'filters': "filters_example" // String |       ```      name[value]=string&name][operator]=contains&date_add[value]=string&date_add[operator]=lt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"contains\"      },      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
};
apiInstance.getCategoryProducts(categoryId, opts).then(function(data) {
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
 **ip** | **String**| Filter by user IP | [optional] 
 **features** | **String**|       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).      To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 

### Return type

[**Products**](Products.md)

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

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

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

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

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

<a name="getProductCategories"></a>
# **getProductCategories**
> Categories getProductCategories(productId, opts)



Get product categories

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      name[value]=string&name[operator]=contains&date_add[value]=string&date_add[operator]=lt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"contains\"      },      \"date_add\": {      \"value\": \"string\",      \"operator\": \"lt\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getProductCategories(productId, opts).then(function(data) {
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSubscriptionCategories"></a>
# **getSubscriptionCategories**
> Categories getSubscriptionCategories(subscriptionId, opts)



Get categories list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var subscriptionId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getSubscriptionCategories(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Categories**](Categories.md)

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

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

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

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

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

<a name="updateCategory"></a>
# **updateCategory**
> Category updateCategory(categoryId, body)



Update category

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 789; // Integer | Category ID to update

var body = new KinowJavascriptSdk.Category(); // Category | 

apiInstance.updateCategory(categoryId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**| Category ID to update | 
 **body** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="uploadCategoryCover"></a>
# **uploadCategoryCover**
> Image uploadCategoryCover(categoryId, file, hash, opts)



Upload Category cover

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.CategoriesApi();

var categoryId = 3.4; // Number | Category ID to fetch

var file = "/path/to/file.txt"; // File | 

var hash = "hash_example"; // String | 

var opts = { 
  'hashAlgorithm': "hashAlgorithm_example" // String | Hash algorithm to check the hash file (default value is: sha256)
};
apiInstance.uploadCategoryCover(categoryId, file, hash, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**| Category ID to fetch | 
 **file** | **File**|  | 
 **hash** | **String**|  | 
 **hashAlgorithm** | **String**| Hash algorithm to check the hash file (default value is: sha256) | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

