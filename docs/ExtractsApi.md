# KinowJavascriptSdk.ExtractsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCoverToExtract**](ExtractsApi.md#attachCoverToExtract) | **POST** /extracts/{extract_id}/cover | 
[**attachFeaturesToExtract**](ExtractsApi.md#attachFeaturesToExtract) | **POST** /extracts/{extract_id}/features | 
[**createExtract**](ExtractsApi.md#createExtract) | **POST** /extracts | 
[**createExtractSubtitle**](ExtractsApi.md#createExtractSubtitle) | **POST** /extracts/{extract_id}/subtitle | 
[**deleteExtract**](ExtractsApi.md#deleteExtract) | **DELETE** /extracts/{extract_id} | 
[**getExtract**](ExtractsApi.md#getExtract) | **GET** /extracts/{extract_id} | 
[**getExtractFeatures**](ExtractsApi.md#getExtractFeatures) | **GET** /extracts/{extract_id}/features | 
[**getExtractPlayer**](ExtractsApi.md#getExtractPlayer) | **GET** /extracts/{extract_id}/player | 
[**getExtractSubtitles**](ExtractsApi.md#getExtractSubtitles) | **GET** /extracts/{extract_id}/subtitles | 
[**getExtracts**](ExtractsApi.md#getExtracts) | **GET** /extracts | 
[**getProductExtracts**](ExtractsApi.md#getProductExtracts) | **GET** /products/{product_id}/extracts | 
[**hasAccessToExtracts**](ExtractsApi.md#hasAccessToExtracts) | **POST** /extracts/has-access | 
[**updateExtract**](ExtractsApi.md#updateExtract) | **PUT** /extracts/{extract_id} | 


<a name="attachCoverToExtract"></a>
# **attachCoverToExtract**
> attachCoverToExtract(extractId, idImage)



Attach cover to extract (the image need to be attached to the product)

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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | 

var features = "features_example"; // String |      To attach existing FeatureValue to Product:     ```     [{     \"id_feature\":3,     \"id_feature_value\":5     }]     ```      To create a custom FeatureValue:     ```     [{     \"id_feature\":3,     \"custom_value\":[{     \"lang\": 1,     \"value\": \"string\"     }]     }]     ```

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
 **features** | **String**|      To attach existing FeatureValue to Product:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;id_feature_value\&quot;:5     }]     &#x60;&#x60;&#x60;      To create a custom FeatureValue:     &#x60;&#x60;&#x60;     [{     \&quot;id_feature\&quot;:3,     \&quot;custom_value\&quot;:[{     \&quot;lang\&quot;: 1,     \&quot;value\&quot;: \&quot;string\&quot;     }]     }]     &#x60;&#x60;&#x60; | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createExtract"></a>
# **createExtract**
> ExtractResponse createExtract(body)



Create new extract

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var body = new KinowJavascriptSdk.CreateExtractRequest(); // CreateExtractRequest | 

apiInstance.createExtract(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateExtractRequest**](CreateExtractRequest.md)|  | 

### Return type

[**ExtractResponse**](ExtractResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createExtractSubtitle"></a>
# **createExtractSubtitle**
> SubtitleResponse createExtractSubtitle(extractId, body)



Create new Extract Subtitle

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to attach the created Subtitle

var body = new KinowJavascriptSdk.CreateExtractSubtitleRequest(); // CreateExtractSubtitleRequest | Subtitle settings

apiInstance.createExtractSubtitle(extractId, body).then(function(data) {
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

[**SubtitleResponse**](SubtitleResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to delete

apiInstance.deleteExtract(extractId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to delete | 

### Return type

null (empty response body)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtract"></a>
# **getExtract**
> ExtractResponse getExtract(extractId)



Get extract

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

[**ExtractResponse**](ExtractResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

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

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtractPlayer"></a>
# **getExtractPlayer**
> PlayerConfiguration getExtractPlayer(extractId, opts)



Get extract&#39;s player

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var opts = { 
  'ipAddress': "ipAddress_example", // String | IP address
  'isoCode': "isoCode_example" // String | Define the player UI language. If not providen, fallback on platform default language.
};
apiInstance.getExtractPlayer(extractId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractId** | **Integer**| Extract ID to fetch | 
 **ipAddress** | **String**| IP address | [optional] 
 **isoCode** | **String**| Define the player UI language. If not providen, fallback on platform default language. | [optional] 

### Return type

[**PlayerConfiguration**](PlayerConfiguration.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtractSubtitles"></a>
# **getExtractSubtitles**
> ExtractSubtitlesResponse getExtractSubtitles(extractId, opts)



Get subtitles of an extract

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getExtractSubtitles(extractId, opts).then(function(data) {
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

[**ExtractSubtitlesResponse**](ExtractSubtitlesResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExtracts"></a>
# **getExtracts**
> ExtractListResponse getExtracts(opts)



Get extracts list

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'features': "features_example", // String |  ``` features[*][value]=string&features[*][operator]=strict&features[1][value]=string&features[1][operator]=strict _______________  { \"*\": { \"value\": \"string\", \"operator\": \"strict\" }, \"1\": { \"value\": \"string\", \"operator\": \"contains\" } } ``` Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId.
  'filters': "filters_example", // String |  ``` name[value]=string&name][operator]=contains&date_add[value]=string&date_add[operator]=lt _______________  { \"name\": { \"value\": \"string\", \"operator\": \"contains\" }, \"date_add\": { \"value\": \"string\", \"operator\": \"lt\" } } ``` Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
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
 **features** | **String**|  &#x60;&#x60;&#x60; features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict _______________  { \&quot;*\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;strict\&quot; }, \&quot;1\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). To search on all features, you can pass * as featureId. | [optional] 
 **filters** | **String**|  &#x60;&#x60;&#x60; name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt _______________  { \&quot;name\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;contains\&quot; }, \&quot;date_add\&quot;: { \&quot;value\&quot;: \&quot;string\&quot;, \&quot;operator\&quot;: \&quot;lt\&quot; } } &#x60;&#x60;&#x60; Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 

### Return type

[**ExtractListResponse**](ExtractListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductExtracts"></a>
# **getProductExtracts**
> ExtractListResponse getProductExtracts(productId, opts)



Get extracts of a product

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var productId = 789; // Integer | Product ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
  'ip': "ip_example" // String | Filter by user IP
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
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **ip** | **String**| Filter by user IP | [optional] 

### Return type

[**ExtractListResponse**](ExtractListResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hasAccessToExtracts"></a>
# **hasAccessToExtracts**
> [ExtractAccessInfo] hasAccessToExtracts(body)



Check access to Extracts

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var body = new KinowJavascriptSdk.ExtractIDList(); // ExtractIDList | List of Extract IDs separated by comma, eg. '42,21,84'

apiInstance.hasAccessToExtracts(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExtractIDList**](ExtractIDList.md)| List of Extract IDs separated by comma, eg. &#39;42,21,84&#39; | 

### Return type

[**[ExtractAccessInfo]**](ExtractAccessInfo.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateExtract"></a>
# **updateExtract**
> ExtractResponse updateExtract(extractId, body)



Update extract

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

var apiInstance = new KinowJavascriptSdk.ExtractsApi();

var extractId = 789; // Integer | Extract ID to fetch

var body = new KinowJavascriptSdk.UpdateExtractRequest(); // UpdateExtractRequest | 

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
 **body** | [**UpdateExtractRequest**](UpdateExtractRequest.md)|  | 

### Return type

[**ExtractResponse**](ExtractResponse.md)

### Authorization

[ApiClientId](../README.md#ApiClientId), [ApiClientSecret](../README.md#ApiClientSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

