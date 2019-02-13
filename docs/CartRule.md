# KinowJavascriptSdk.CartRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** |  | [optional] 
**idCustomer** | **Integer** | Limit to a single user | [optional] 
**description** | **String** | For your eyes only. This will never be displayed to the customer | [optional] 
**priority** | **Integer** | Rules are applied by priority. A rule with a priority of \&quot;1\&quot; will be processed before one with a priority of \&quot;2\&quot; | [optional] 
**partialUse** | **Boolean** | Allow to partial use this cart rule. If cart rule amount is greater than total customer order, a new cart rule will be created with the remainder amount. | [optional] 
**code** | **String** | Code used by customer to add it on his cart summary. Caution: rule will automatically be applied to everyone if you leave it blank | [optional] 
**active** | **Boolean** | Status of the cart rule | [optional] 
**dateAdd** | **String** |  | [optional] 
**dateUpd** | **String** |  | [optional] 
**name** | [**[I18nField]**](I18nField.md) | This will be displayed in the cart summary, as well as on the invoice | [optional] 
**dateFrom** | **String** | Rule starts when this date is reached | [optional] 
**dateTo** | **String** | Rule ends when this date is reached | [optional] 
**quantity** | **Integer** | The cart rule will be applied to the first \&quot;X\&quot; orders only | [optional] 
**quantityPerUser** | **Integer** | A customer will only be able to use the cart rule \&quot;X\&quot; time(s) | [optional] 
**minimumAmount** | **Integer** | You can choose a minimum amount for the cart, either with taxes or not | [optional] 
**minimumAmountTax** | **Integer** |  | [optional] 
**minimumAmountCurrency** | **Integer** | Id of the currency | [optional] 
**everyRecurringPayments** | **Boolean** | If customer cart contains a subscription, select if cart rule will apply on recurring payments | [optional] 
**reductionPercent** | **Number** | Discount applied to cart when rule is added (in %). | [optional] 
**reductionAmount** | **Number** | Discount applied to cart when rule is added (in currency). | [optional] 
**restrictionGroups** | [**[CartRuleRestrictionGroup]**](CartRuleRestrictionGroup.md) |  | [optional] 


