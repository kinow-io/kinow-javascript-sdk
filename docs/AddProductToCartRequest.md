# KinowJavascriptSdk.AddProductToCartRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **Integer** | Product ID to add to cart | 
**productAttributeId** | **Integer** | ProductAttribute ID, required to add product to cart if product is not a subscription | [optional] 
**giftId** | **Integer** | Gift ID linked to the item in cart | [optional] 
**switchSubscriptionId** | **Integer** | When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel | [optional] 
**isGift** | **Boolean** | Allows bypass of access check (in case the current user already bought the product and it cannot be reordered) | [optional] 
**ipAddress** | **String** | IP address | [optional] 


