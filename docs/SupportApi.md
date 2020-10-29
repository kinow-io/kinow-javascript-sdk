# KinowJavascriptSdk.SupportApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](SupportApi.md#createMessage) | **POST** /support | 
[**getContacts**](SupportApi.md#getContacts) | **GET** /support/contacts | 


<a name="createMessage"></a>
# **createMessage**
> Support createMessage(idLang, email, idContact, message, opts)



Create new message

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SupportApi();

var idLang = 56; // Integer | 

var email = "email_example"; // String | 

var idContact = 56; // Integer | 

var message = "message_example"; // String | 

var opts = { 
  'idProduct': 56, // Integer | 
  'idOrder': 56, // Integer | 
  'sendMail': true // Boolean | 
};
apiInstance.createMessage(idLang, email, idContact, message, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idLang** | **Integer**|  | 
 **email** | **String**|  | 
 **idContact** | **Integer**|  | 
 **message** | **String**|  | 
 **idProduct** | **Integer**|  | [optional] 
 **idOrder** | **Integer**|  | [optional] 
 **sendMail** | **Boolean**|  | [optional] 

### Return type

[**Support**](Support.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getContacts"></a>
# **getContacts**
> Contacts getContacts(opts)



Get contacts list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.SupportApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getContacts(opts).then(function(data) {
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

[**Contacts**](Contacts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

