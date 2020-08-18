# KinowJavascriptSdk.EmployeesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmployee**](EmployeesApi.md#getEmployee) | **GET** /employees/{employee_id} | 
[**getEmployees**](EmployeesApi.md#getEmployees) | **GET** /employees | 


<a name="getEmployee"></a>
# **getEmployee**
> Employee getEmployee(employeeId)



Get employee

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.EmployeesApi();

var employeeId = 789; // Integer | Employee ID to fetch

apiInstance.getEmployee(employeeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Integer**| Employee ID to fetch | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEmployees"></a>
# **getEmployees**
> Employees getEmployees(opts)



Get employees list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.EmployeesApi();

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'filters': "filters_example", // String |       ```      email[value]=string&email[operator]=strict&firstname[value]=string&firstname[operator]=contains      _______________        {      \"email\": {      \"value\": \"string\",      \"operator\": \"strict\"      },      \"firstname\": {      \"value\": \"string\",      \"operator\": \"contains\"      }      } ```Operator can be: strict, contains, between, in, gt (greater than), lt (lower than).
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getEmployees(opts).then(function(data) {
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
 **filters** | **String**|       &#x60;&#x60;&#x60;      email[value]&#x3D;string&amp;email[operator]&#x3D;strict&amp;firstname[value]&#x3D;string&amp;firstname[operator]&#x3D;contains      _______________        {      \&quot;email\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;firstname\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;Operator can be: strict, contains, between, in, gt (greater than), lt (lower than). | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Employees**](Employees.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

