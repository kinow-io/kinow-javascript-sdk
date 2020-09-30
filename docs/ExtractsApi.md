# KinowJavascriptSdk.ExtractsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToExtract**](ExtractsApi.md#attachCoverToExtract) | **POST** /extracts/{extract_id}/cover | 
[**attachFeaturesToExtract**](ExtractsApi.md#attachFeaturesToExtract) | **POST** /extracts/{extract_id}/features | 
[**createExtract**](ExtractsApi.md#createExtract) | **POST** /extracts | 
[**createSubtitle**](ExtractsApi.md#createSubtitle) | **POST** /extracts/{extract_id}/subtitle | 
[**deleteExtract**](ExtractsApi.md#deleteExtract) | **DELETE** /extracts/{extract_id} | 
[**getExtract**](ExtractsApi.md#getExtract) | **GET** /extracts/{extract_id} | 
[**getExtractFeatures**](ExtractsApi.md#getExtractFeatures) | **GET** /extracts/{extract_id}/features | 
[**getExtractPlayer**](ExtractsApi.md#getExtractPlayer) | **GET** /extracts/{extract_id}/player | 
[**getExtracts**](ExtractsApi.md#getExtracts) | **GET** /extracts | 
[**getProductExtracts**](ExtractsApi.md#getProductExtracts) | **GET** /products/{product_id}/extracts | 
[**updateExtract**](ExtractsApi.md#updateExtract) | **PUT** /extracts/{extract_id} | 


<a name="attachCoverToExtract"></a>
# **attachCoverToExtract**
> attachCoverToExtract(extractId, idImage)



Attach cover to extract (the image need to be attached to the product)

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var idImage = 789; // Integer | Image ID to attach

apiInstance.attachCoverToExtract(extractId, idImage).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **idImage** | **Integer**| Image ID to attach | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="attachFeaturesToExtract"></a>
# **attachFeaturesToExtract**
> attachFeaturesToExtract(extractId, features)



Attach feature to extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | 

var features = "features_example"; // String |       To attach existing FeatureValue to Product:      ```      [{      \"id_feature\":3,      \"id_feature_value\":5      }]      ```        To create a custom FeatureValue:      ```      [{      \"id_feature\":3,      \"custom_value\":[{      \"lang\": 1,      \"value\": \"string\"      }]      }]      ```

apiInstance.attachFeaturesToExtract(extractId, features).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**|  | 
 **features** | **String**|       To attach existing FeatureValue to Product:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;id_feature_value\&quot;:5      }]      &#x60;&#x60;&#x60;        To create a custom FeatureValue:      &#x60;&#x60;&#x60;      [{      \&quot;id_feature\&quot;:3,      \&quot;custom_value\&quot;:[{      \&quot;lang\&quot;: 1,      \&quot;value\&quot;: \&quot;string\&quot;      }]      }]      &#x60;&#x60;&#x60; | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createExtract"></a>
# **createExtract**
> Extract createExtract(body)



Create new extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var body = new KinowJavascriptSdk.Extract(); // Extract | 

apiInstance.createExtract(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Extract**](Extract.md)|  | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createSubtitle"></a>
# **createSubtitle**
> Subtitle createSubtitle(extractId, body)



Create new Extract Subtitle

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to attach the created Subtitle

var body = new KinowJavascriptSdk.CreateExtractSubtitleRequest(); // CreateExtractSubtitleRequest | Subtitle settings

apiInstance.createSubtitle(extractId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to attach the created Subtitle | 
 **body** | [**CreateExtractSubtitleRequest**](CreateExtractSubtitleRequest.md)| Subtitle settings | 

### Return type

[**Subtitle**](Subtitle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteExtract"></a>
# **deleteExtract**
> deleteExtract(extractId)



Delete extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to update

apiInstance.deleteExtract(extractId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtract"></a>
# **getExtract**
> Extract getExtract(extractId)



Get extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

apiInstance.getExtract(extractId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtractFeatures"></a>
# **getExtractFeatures**
> Features getExtractFeatures(extractId, opts)



Get extract features

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getExtractFeatures(extractId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Features**](Features.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtractPlayer"></a>
# **getExtractPlayer**
> Player getExtractPlayer(extractId)



Get extract&#39;s player

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

apiInstance.getExtractPlayer(extractId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 

### Return type

[**Player**](Player.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtracts"></a>
# **getExtracts**
> Videos1 getExtracts(opts)



Get extracts list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'features': "features_example", // String |       ```      features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict      _______________        {      \"*\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"1\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).      To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |       ```      name[value]=string&name[operator]=strict&duration[value]=string&duration[operator]=gt      _______________        {      \"name\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"duration\": {      \"value\": \"string\",      \"operator\": \"gt\"      }      } ```      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'ip': "ip_example" // String | Filter by user IP
};
apiInstance.getExtracts(opts).then(function(data) {
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
 **features** | **String**|       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).      To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;strict&amp;duration[value]&#x3D;string&amp;duration[operator]&#x3D;gt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;duration\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;gt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 

### Return type

[**Videos1**](Videos1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> Videos1 getProductExtracts(productId, opts)



Get extracts of a product

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'ip': "ip_example", // String | Filter by user IP
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getProductExtracts(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**| Product ID to fetch | 
 **ip** | **String**| Filter by user IP | [optional] 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**Videos1**](Videos1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateExtract"></a>
# **updateExtract**
> Extract updateExtract(extractId, body)



Update extract

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var body = new KinowJavascriptSdk.Extract(); // Extract | 

apiInstance.updateExtract(extractId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **body** | [**Extract**](Extract.md)|  | 

### Return type

[**Extract**](Extract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

