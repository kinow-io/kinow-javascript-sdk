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

var idLang = 56; // Integer | Language ID used by user to write his message

var email = "email_example"; // String | User email in order to send him a response

var idContact = 56; // Integer | Contact ID to send the user message

var message = "message_example"; // String | User message

var opts = { 
  'idSupport': 56, // Integer | Link the message to a previous message
  'idProduct': 56, // Integer | Link the message to a product in catalog
  'idOrder': 56, // Integer | Link the message to an existing order
  'sendMail': true // Boolean | Send confirmation email to the providen email
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
 **idLang** | **Integer**| Language ID used by user to write his message | 
 **email** | **String**| User email in order to send him a response | 
 **idContact** | **Integer**| Contact ID to send the user message | 
 **message** | **String**| User message | 
 **idSupport** | **Integer**| Link the message to a previous message | [optional] 
 **idProduct** | **Integer**| Link the message to a product in catalog | [optional] 
 **idOrder** | **Integer**| Link the message to an existing order | [optional] 
 **sendMail** | **Boolean**| Send confirmation email to the providen email | [optional] 

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

