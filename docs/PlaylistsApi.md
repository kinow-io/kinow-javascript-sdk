# KinowJavascriptSdk.PlaylistsApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlaylistBookmark**](PlaylistsApi.md#createPlaylistBookmark) | **POST** /playlists | 
[**deletePlaylistBookmark**](PlaylistsApi.md#deletePlaylistBookmark) | **DELETE** /playlists/{playlist_id} | 
[**getCustomerPlaylists**](PlaylistsApi.md#getCustomerPlaylists) | **GET** /customers/{customer_id}/playlists | 
[**getPlaylist**](PlaylistsApi.md#getPlaylist) | **GET** /playlists/{playlist_id} | 
[**updatePlaylistBookmark**](PlaylistsApi.md#updatePlaylistBookmark) | **PUT** /playlists/{playlist_id} | 


<a name="createPlaylistBookmark"></a>
# **createPlaylistBookmark**
> PlaylistBookmark createPlaylistBookmark(customerId, name)



Create playlist bookmark

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlaylistsApi();

var customerId = 789; // Integer | 

var name = "name_example"; // String | 

apiInstance.createPlaylistBookmark(customerId, name).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **name** | **String**|  | 

### Return type

[**PlaylistBookmark**](PlaylistBookmark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePlaylistBookmark"></a>
# **deletePlaylistBookmark**
> deletePlaylistBookmark(playlistId)



Delete playlist bookmark

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlaylistsApi();

var playlistId = 56; // Integer | 

apiInstance.deletePlaylistBookmark(playlistId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerPlaylists"></a>
# **getCustomerPlaylists**
> Playlists getCustomerPlaylists(customerId, opts)



Get customer playlists

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlaylistsApi();

var customerId = 789; // Integer | 

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789, // Integer | 
  'sortBy': "sortBy_example", // String | Sort by this attribute (id by default)
  'sortDirection': "sortDirection_example" // String | Sorting direction (asc by default)
};
apiInstance.getCustomerPlaylists(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 
 **sortBy** | **String**| Sort by this attribute (id by default) | [optional] 
 **sortDirection** | **String**| Sorting direction (asc by default) | [optional] 

### Return type

[**Playlists**](Playlists.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPlaylist"></a>
# **getPlaylist**
> PlaylistBookmark getPlaylist(playlistId)



Get playlist

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlaylistsApi();

var playlistId = 789; // Integer | Playlist ID to fetch

apiInstance.getPlaylist(playlistId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Integer**| Playlist ID to fetch | 

### Return type

[**PlaylistBookmark**](PlaylistBookmark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updatePlaylistBookmark"></a>
# **updatePlaylistBookmark**
> PlaylistBookmark updatePlaylistBookmark(playlistId, body)



Update playlist

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.PlaylistsApi();

var playlistId = 789; // Integer | Playlist ID to update

var body = new KinowJavascriptSdk.PlaylistBookmarkUpdate(); // PlaylistBookmarkUpdate | Playlist settings

apiInstance.updatePlaylistBookmark(playlistId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Integer**| Playlist ID to update | 
 **body** | [**PlaylistBookmarkUpdate**](PlaylistBookmarkUpdate.md)| Playlist settings | 

### Return type

[**PlaylistBookmark**](PlaylistBookmark.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

