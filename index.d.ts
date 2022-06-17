declare module 'kinow-javascript-sdk' {
  interface I18nField {
    lang: number
    value: string
    iso_code: string
  }
  interface I18nFieldInput {
    lang: number
    value: string
  }
  interface VideoFreeAccess {
    hasStreaming: boolean
    hasDownload: boolean
  }
  interface Actor {
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    roles: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface ActorProduct {
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
  }
  interface ActorProductRole {
    roles: Array<I18nField>
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    categories: Array<ProductCategories>
  }
  interface ActorRole {
    roles: Array<I18nField>
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface CreateActorRequest {
    name: string
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
  }
  interface UpdateActorRequest {
    name: string
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
  }
  interface ActorListResponse {
    data: Array<Actor>
    pagination: Pagination
  }
  interface ActorProductListResponse {
    data: Array<ActorProduct>
    pagination: Pagination
  }
  interface ActorProductRoleListResponse {
    data: Array<ActorProductRole>
    pagination: Pagination
  }
  interface ActorResponse {
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    roles: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface ActorRoleListResponse {
    data: Array<ActorRole>
    pagination: Pagination
  }
  interface Address {
    id: number
    id_customer: number
    company: string
    address1: string
    postcode: string
    city: string
    id_country: number
    id_state: number
    date_add: string
    date_upd: string
  }
  interface UpdateAddressRequest {
    company: string
    address1: string
    postcode: string
    city: string
    id_country: number
    id_state: number
  }
  interface AddressResponse {
    id: number
    id_customer: number
    company: string
    address1: string
    postcode: string
    city: string
    id_country: number
    id_state: number
    date_add: string
    date_upd: string
  }
  interface Analytic {
    tag: string
    type: string
  }
  interface AnalyticListResponse {
    data: Array<Analytic>
    pagination: Pagination
  }
  interface ProductAttribute {
    id: number
    video_group_id: number
    video_id: number
    name: string
    price: number
    price_mode: number
    price_without_reduction: number
    mode: string
    type: string
    quality: string
    duration: number
    watching_duration: number
    maximum_views: number
    active: number
  }
  interface CreateAttributeRequest {
    product_id: number
    video_group_id: number
    video_id: number
    type: string
    mode: string
    quality: string
    price: number
    price_mode: number
    duration: number
    watching_duration: number
    maximum_views: number
  }
  interface BlogCategory {
    position: number
    active: number
    date_add: string
    date_upd: string
    name: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    link_rewrite: Array<I18nField>
    id: number
    meta_keywords: Array<I18nField>
  }
  interface BlogCategoryListResponse {
    data: Array<BlogCategory>
    pagination: Pagination
  }
  interface BlogCategoryResponse {
    position: number
    active: number
    date_add: string
    date_upd: string
    name: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    link_rewrite: Array<I18nField>
    id: number
    meta_keywords: Array<I18nField>
  }
  interface BlogPage {
    id_lang: number
    title: string
    link_rewrite: string
    description_short: string
    description: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    date_add: string
    date_issue: string
    date_upd: string
    active: number
    id_blog_category: number
    cover: string
    id: number
  }
  interface BlogPageListResponse {
    data: Array<BlogPage>
    pagination: Pagination
  }
  interface BlogPageResponse {
    id_lang: number
    title: string
    link_rewrite: string
    description_short: string
    description: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    date_add: string
    date_issue: string
    date_upd: string
    active: number
    id_blog_category: number
    cover: string
    id: number
  }
  interface CMSCategory {
    id_parent: number
    position: number
    level_depth: number
    active: boolean
    date_add: string
    date_upd: string
    name: Array<I18nField>
    description: Array<I18nField>
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_description: Array<I18nField>
    id: number
  }
  interface CreateCMSCategoryRequest {
    id_parent: number
    position: number
    level_depth: number
    active: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_description: Array<I18nField>
  }
  interface UpdateCMSCategoryRequest {
    id_parent: number
    position: number
    level_depth: number
    active: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_description: Array<I18nField>
  }
  interface CMSCategoryListResponse {
    data: Array<CMSCategory>
    pagination: Pagination
  }
  interface CMSCategoryResponse {
    id_parent: number
    position: number
    level_depth: number
    active: boolean
    date_add: string
    date_upd: string
    name: Array<I18nField>
    description: Array<I18nField>
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_description: Array<I18nField>
    id: number
  }
  interface CMSPage {
    id: number
    id_cms_category: number
    active: boolean
    position: number
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    content: Array<I18nField>
  }
  interface CreateCMSPageRequest {
    id_cms_category: number
    active: boolean
    position: number
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    content: Array<I18nField>
  }
  interface UpdateCMSPageRequest {
    id_cms_category: number
    active: boolean
    position: number
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    content: Array<I18nField>
  }
  interface CMSPageListResponse {
    data: Array<CMSPage>
    pagination: Pagination
  }
  interface CMSPageResponse {
    id: number
    id_cms_category: number
    active: boolean
    position: number
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    content: Array<I18nField>
  }
  interface Cart {
    id: number
    date_add: string
    date_upd: string
    id_customer: number
    id_currency: number
    id_lang: number
    affiliate: string
    total: number
    total_without_tax: number
    total_trial: number
    available_checkout_processes: Array<string>
    cart_rules: Array<CartRule>
    products: Array<CartProduct>
  }
  interface CartPrice {
    cart_id: number
    total_without_tax: number
    total_tax: number
    total_discount: number
    total_trial: number
    total: number
    total_without_tax_formatted: string
    total_tax_formatted: string
    total_discount_formatted: string
    total_trial_formatted: string
    total_formatted: string
    taxes: Array<TaxPrice>
    cart_rules: Array<CartRulePrice>
  }
  interface CartProduct {
    id_gift: number
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
  }
  interface CartRulePrice {
    id: number
    name: Array<I18nField>
    amount: number
    amount_formatted: string
  }
  interface TaxPrice {
    name: string
    amount: number
    amount_formatted: string
  }
  interface AddProductToCartRequest {
    product_id: number
    product_attribute_id: number
    gift_id: number
    switch_subscription_id: number
    is_gift: boolean
    ip_address: string
  }
  interface CartPriceRequest {
    cart_ids: string
    currency_id: number
  }
  interface CreateCartRequest {
    id_customer: number
    id_currency: number
    id_lang: number
    affiliate: number
  }
  interface RemoveProductFromCartRequest {
    product_id: number
    product_attribute_id: number
    gift_id: number
  }
  interface UpdateCartRequest {
    id_customer: number
    id_currency: number
    id_lang: number
    affiliate: number
  }
  interface CartListResponse {
    data: Array<Cart>
    pagination: Pagination
  }
  interface CartResponse {
    id: number
    date_add: string
    date_upd: string
    id_customer: number
    id_currency: number
    id_lang: number
    affiliate: string
    total: number
    total_without_tax: number
    total_trial: number
    available_checkout_processes: Array<string>
    cart_rules: Array<CartRule>
    products: Array<CartProduct>
  }
  interface CartRule {
    id: number
    id_customer: number
    description: string
    priority: number
    partial_use: boolean
    code: string
    active: boolean
    date_add: string
    date_upd: string
    name: Array<I18nField>
    date_from: string
    date_to: string
    quantity: number
    quantity_per_user: number
    minimum_amount: number
    minimum_amount_tax: number
    minimum_amount_currency: number
    every_recurring_payments: boolean
    reduction_percent: number
    reduction_amount: number
    reduction_currency: number
    reduction_tax: number
    restriction_groups: Array<CartRuleRestrictionGroup>
  }
  interface CartRuleRestrictionGroup {
    quantity: number
    items: Array<CartRuleRestrictionGroupItem>
  }
  interface CartRuleRestrictionGroupItem {
    type: string
    id_item: number
  }
  interface CreateCartRuleRequest {
    id_customer: number
    description: string
    priority: number
    partial_use: boolean
    code: string
    active: boolean
    name: Array<I18nField>
    date_from: string
    date_to: string
    quantity: number
    quantity_per_user: number
    minimum_amount: number
    minimum_amount_tax: number
    minimum_amount_currency: number
    every_recurring_payments: boolean
    reduction_percent: number
    reduction_amount: number
    reduction_currency: number
    reduction_tax: number
    restriction_groups: Array<CartRuleRestrictionGroup>
  }
  interface UpdateCartRuleRequest {
    id_customer: number
    description: string
    priority: number
    partial_use: boolean
    code: string
    active: boolean
    name: Array<I18nField>
    date_from: string
    date_to: string
    quantity: number
    quantity_per_user: number
    minimum_amount: number
    minimum_amount_tax: number
    minimum_amount_currency: number
    every_recurring_payments: boolean
    reduction_percent: number
    reduction_amount: number
    reduction_currency: number
    reduction_tax: number
    restriction_groups: Array<CartRuleRestrictionGroup>
  }
  interface CartRuleListResponse {
    data: Array<CartRule>
    pagination: Pagination
  }
  interface CartRuleResponse {
    id: number
    id_customer: number
    description: string
    priority: number
    partial_use: boolean
    code: string
    active: boolean
    date_add: string
    date_upd: string
    name: Array<I18nField>
    date_from: string
    date_to: string
    quantity: number
    quantity_per_user: number
    minimum_amount: number
    minimum_amount_tax: number
    minimum_amount_currency: number
    every_recurring_payments: boolean
    reduction_percent: number
    reduction_amount: number
    reduction_currency: number
    reduction_tax: number
    restriction_groups: Array<CartRuleRestrictionGroup>
  }
  interface Category {
    id: number
    id_parent: number
    date_add: string
    date_upd: string
    active: boolean
    level_depth: number
    position: number
    images: Array<Image>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
  }
  interface VideoCategory {
    id: number
    id_category: number
    id_media_source: number
    filename: string
    cover: string
    thumbnail: string
    date_add: string
    date_upd: string
  }
  interface CreateCategoryRequest {
    id_parent: number
    name: Array<I18nFieldInput>
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
  }
  interface UpdateCategoryRequest {
    id_parent: number
    date_add: string
    date_upd: string
    active: boolean
    level_depth: number
    position: number
    images: Array<Image>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
  }
  interface CategoryListResponse {
    data: Array<Category>
    pagination: Pagination
  }
  interface CategoryResponse {
    id: number
    id_parent: number
    date_add: string
    date_upd: string
    active: boolean
    level_depth: number
    position: number
    images: Array<Image>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
  }
  interface VideoCategoryListResponse {
    data: Array<VideoCategory>
    pagination: Pagination
  }
  interface Configuration {
    name: string
    value: object
  }
  interface ConfigurationListResponse {
    data: Array<Configuration>
    pagination: Pagination
  }
  interface ConfigurationResponse {
    name: string
    value: object
  }
  interface Country {
    id: number
    iso_code: string
    id_zone: string
    name: Array<I18nField>
    states: Array<State>
  }
  interface CountryListResponse {
    data: Array<Country>
    pagination: Pagination
  }
  interface Currency {
    id: number
    name: string
    iso_code: string
    iso_code_num: string
    sign: string
    conversion_rate: number
    format: number
    blank: number
    decimals: number
  }
  interface CurrencyListResponse {
    data: Array<Currency>
    pagination: Pagination
  }
  interface Customer {
    id: number
    lastname: string
    firstname: string
    email: string
    id_gender: number
    birthday: string
    newsletter: boolean
    optin: boolean
    notification: boolean
    active: boolean
    id_lang: number
    date_add: string
    date_upd: string
    max_viewing: number
    custom: string
    password: string
    last_passwd_gen: string
  }
  interface ProductAccessInfo {
    id_product: number
    can_see: boolean
    can_buy: boolean
    can_watch: boolean
  }
  interface RegistrationField {
    name: string
    required: boolean
    displayed: boolean
  }
  interface VideoAccessInfo {
    id_video: number
    streaming: boolean
    download: boolean
    maximum_watched: boolean
    maximum_viewing: boolean
    quality_hd: boolean
    quality_sd: boolean
    expires: string
    play_duration: number
    error_code: number
  }
  interface CreateCustomerRequest {
    firstname: string
    lastname: string
    email: string
    password: string
    id_gender: number
    birthday: string
    newsletter: boolean
    optin: boolean
    active: boolean
    id_lang: number
    notification: boolean
    max_viewing: number
    custom: string
    id_country: number
    id_state: number
    city: string
    postcode: string
    address1: string
    company: string
    send_mail: boolean
  }
  interface UpdateCustomerRequest {
    firstname: string
    lastname: string
    email: string
    password: string
    id_gender: number
    birthday: string
    newsletter: boolean
    optin: boolean
    active: boolean
    id_lang: number
    notification: boolean
    max_viewing: number
    custom: string
  }
  interface CredentialsValidationResponse {
    valid: boolean
    customer_id: number
  }
  interface CustomerCurrentViewsResponse {
    count: number
  }
  interface CustomerListResponse {
    data: Array<Customer>
    pagination: Pagination
  }
  interface CustomerResponse {
    id: number
    lastname: string
    firstname: string
    email: string
    id_gender: number
    birthday: string
    newsletter: boolean
    optin: boolean
    notification: boolean
    active: boolean
    id_lang: number
    date_add: string
    date_upd: string
    max_viewing: number
    custom: string
    password: string
    last_passwd_gen: string
  }
  interface ProductAccessInfoResponse {
    id_product: number
    can_see: boolean
    can_buy: boolean
    can_watch: boolean
  }
  interface RegistrationFieldsResponse {
    data: Array<RegistrationField>
    pagination: Pagination
  }
  interface TokenResponse {
    token: string
  }
  interface VideoAccessInfoResponse {
    id_video: number
    streaming: boolean
    download: boolean
    maximum_watched: boolean
    maximum_viewing: boolean
    quality_hd: boolean
    quality_sd: boolean
    expires: string
    play_duration: number
    error_code: number
  }
  interface Device {
    id: number
    id_customer: number
    fingerprint: string
    type: string
    os: string
    application: string
    date_add: string
    date_upd: string
  }
  interface CreateDeviceRequest {
    id_customer: number
    fingerprint: string
    type: string
    os: string
    application: string
  }
  interface DeviceListResponse {
    data: Array<Device>
    pagination: Pagination
  }
  interface DeviceResponse {
    id: number
    id_customer: number
    fingerprint: string
    type: string
    os: string
    application: string
    date_add: string
    date_upd: string
  }
  interface Director {
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    roles: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface DirectorProduct {
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
  }
  interface DirectorProductRole {
    roles: Array<I18nField>
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    categories: Array<ProductCategories>
  }
  interface DirectorRole {
    roles: Array<I18nField>
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface CreateDirectorRequest {
    name: string
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
  }
  interface UpdateDirectorRequest {
    name: string
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
  }
  interface DirectorListResponse {
    data: Array<Director>
    pagination: Pagination
  }
  interface DirectorProductListResponse {
    data: Array<DirectorProduct>
    pagination: Pagination
  }
  interface DirectorProductRoleListResponse {
    data: Array<DirectorProductRole>
    pagination: Pagination
  }
  interface DirectorResponse {
    id: number
    name: string
    description_short: Array<I18nField>
    description: Array<I18nField>
    image: string
    images: Array<Image>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    roles: Array<I18nField>
    active: boolean
    date_add: string
    date_upd: string
  }
  interface DirectorRoleListResponse {
    data: Array<DirectorRole>
    pagination: Pagination
  }
  interface Employee {
    id: number
    email: string
    firstname: string
    lastname: string
    active: boolean
  }
  interface EmployeeListResponse {
    data: Array<Employee>
    pagination: Pagination
  }
  interface EmployeeResponse {
    id: number
    email: string
    firstname: string
    lastname: string
    active: boolean
  }
  interface Extract {
    id: number
    id_product: number
    id_product_image: number
    id_media_player: number
    id_media_source: number
    filename: string
    position: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    cover: string
    thumbnail: string
    advertising_url: string
  }
  interface ExtractAccessInfo {
    id_extract: number
    streaming: boolean
    error_code: number
  }
  interface CreateExtractRequest {
    id_product: number
    id_product_image: number
    id_media_player: number
    id_media_source: number
    filename: string
    position: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    cover: string
    thumbnail: string
    advertising_url: string
  }
  interface UpdateExtractRequest {
    id_product: number
    id_product_image: number
    id_media_player: number
    id_media_source: number
    filename: string
    position: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    cover: string
    thumbnail: string
    advertising_url: string
  }
  interface ExtractListResponse {
    data: Array<Extract>
    pagination: Pagination
  }
  interface ExtractResponse {
    id: number
    id_product: number
    id_product_image: number
    id_media_player: number
    id_media_source: number
    filename: string
    position: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    name: Array<I18nField>
    description: Array<I18nField>
    cover: string
    thumbnail: string
    advertising_url: string
  }
  interface Feature {
    id: number
    position: number
    name: string
    name_i18n: Array<I18nField>
  }
  interface FeatureValue {
    id: number
    id_feature: number
    custom: boolean
    value: Array<I18nField>
  }
  interface FeatureListResponse {
    data: Array<Feature>
    pagination: Pagination
  }
  interface FeatureValueListResponse {
    data: Array<FeatureValue>
    pagination: Pagination
  }
  interface FreeGift {
    id: number
    id_customer: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    email: string
    used: boolean
    date_send: string
  }
  interface CreateFreeGiftRequest {
    id_customer: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    email: string
  }
  interface UpdateFreeGiftRequest {
    firstname: string
    lastname: string
    email: string
    message: string
    custom: string
    date_send: string
  }
  interface FreeGiftListResponse {
    data: Array<FreeGift>
    pagination: Pagination
  }
  interface FreeGiftResponse {
    id: number
    id_customer: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    email: string
    used: boolean
    date_send: string
  }
  interface Gender {
    id: number
    type: number
    name: Array<I18nField>
  }
  interface GenderListResponse {
    data: Array<Gender>
    pagination: Pagination
  }
  interface Geoloc {
    id: number
    iso_code: string
    name: Array<I18nField>
  }
  interface GeolocSettings {
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    countries: Array<string>
  }
  interface IPCoordinates {
    latitude: number
    longitude: number
  }
  interface IPLocation {
    ip: string
    continent: string
    country: string
    time_zone: string
    isVpnOrProxy: boolean
  }
  interface PlatformAccess {
    can_access: boolean
    can_buy: boolean
  }
  interface GeolocSettingsResponse {
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    countries: Array<string>
  }
  interface GeolocationListResponse {
    data: Array<Geoloc>
    pagination: Pagination
  }
  interface IPLocationResponse {
    ip: string
    continent: string
    country: string
    time_zone: string
    isVpnOrProxy: boolean
  }
  interface PlatformAccessResponse {
    can_access: boolean
    can_buy: boolean
  }
  interface Gift {
    id: number
    id_cart: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    message: string
    custom: string
    email: string
    used: boolean
    date_send: string
  }
  interface GiftToken {
    token: string
  }
  interface CreateGiftRequest {
    id_cart: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    email: string
    message: string
    custom: string
    date_send: string
    auto_link: boolean
  }
  interface UpdateGiftRequest {
    firstname: string
    lastname: string
    email: string
    message: string
    custom: string
    date_send: string
  }
  interface GiftListResponse {
    data: Array<Gift>
    pagination: Pagination
  }
  interface GiftResponse {
    id: number
    id_cart: number
    id_product: number
    id_product_attribute: number
    firstname: string
    lastname: string
    message: string
    custom: string
    email: string
    used: boolean
    date_send: string
  }
  interface GiftTokenResponse {
    token: string
  }
  interface Group {
    id: number
    name: Array<I18nField>
    date_add: string
    date_upd: string
  }
  interface CreateGroupRequest {
    name: Array<I18nFieldInput>
  }
  interface GroupListResponse {
    data: Array<Group>
    pagination: Pagination
  }
  interface GroupResponse {
    id: number
    name: Array<I18nField>
    date_add: string
    date_upd: string
  }
  interface Image {
    id: number
    source: string
    position: number
    type: string
  }
  interface ImageType {
    name: string
    width: number
    height: number
  }
  interface ImageListResponse {
    data: Array<Image>
    pagination: Pagination
  }
  interface ImageResponse {
    id: number
    source: string
    position: number
    type: string
  }
  interface Language {
    id: number
    name: string
    iso_code: string
    active: boolean
  }
  interface LanguageListResponse {
    data: Array<Language>
    pagination: Pagination
  }
  interface MediaFile {
    id: number
    id_media_source: number
    type: string
    filename: string
    title: string
    cover: string
    thumbnail: string
    details: string
  }
  interface CreateMediaFileRequest {
    filename: string
    title: string
    cover: string
    thumbnail: string
    details: string
  }
  interface MediaFileListResponse {
    data: Array<MediaFile>
    pagination: Pagination
  }
  interface MediaFileResponse {
    id: number
    id_media_source: number
    type: string
    filename: string
    title: string
    cover: string
    thumbnail: string
    details: string
  }
  interface MediaSource {
    id: number
    name: string
    active: boolean
    external_player: number
  }
  interface MediaSourceListResponse {
    data: Array<MediaSource>
    pagination: Pagination
  }
  interface MediaSourceResponse {
    id: number
    name: string
    active: boolean
    external_player: number
  }
  interface Order {
    id: number
    id_order_renew: number
    id_cart: number
    id_currency: number
    id_customer: number
    current_state: number
    payment: string
    module: string
    total_discounts: number
    total_discounts_tax_incl: number
    total_discounts_tax_excl: number
    total_paid: number
    total_paid_tax_incl: number
    total_paid_tax_excl: number
    total_products: number
    total_products_wt: number
    conversion_rate: number
    invoice_number: number
    invoice_date: string
    valid: boolean
    reference: string
    date_add: string
    date_upd: string
    histories: Array<OrderHistory>
  }
  interface OrderHistory {
    id: number
    id_order: number
    id_order_state: number
    date_add: string
  }
  interface OrderHistoryListResponse {
    data: Array<OrderHistory>
    pagination: Pagination
  }
  interface OrderListResponse {
    data: Array<Order>
    pagination: Pagination
  }
  interface OrderResponse {
    id: number
    id_order_renew: number
    id_cart: number
    id_currency: number
    id_customer: number
    current_state: number
    payment: string
    module: string
    total_discounts: number
    total_discounts_tax_incl: number
    total_discounts_tax_excl: number
    total_paid: number
    total_paid_tax_incl: number
    total_paid_tax_excl: number
    total_products: number
    total_products_wt: number
    conversion_rate: number
    invoice_number: number
    invoice_date: string
    valid: boolean
    reference: string
    date_add: string
    date_upd: string
    histories: Array<OrderHistory>
  }
  interface OrderState {
    id: number
    paid: boolean
    deleted: boolean
    name: Array<I18nField>
  }
  interface OrderStateListResponse {
    data: Array<OrderState>
    pagination: Pagination
  }
  interface OrderStateResponse {
    id: number
    paid: boolean
    deleted: boolean
    name: Array<I18nField>
  }
  interface Page {
    id: number
    page: string
    enabled: boolean
    title: Array<I18nField>
    description: Array<I18nField>
    keywords: Array<I18nField>
    url_rewrite: Array<I18nField>
  }
  interface PageListResponse {
    data: Array<Page>
    pagination: Pagination
  }
  interface PageResponse {
    id: number
    page: string
    enabled: boolean
    title: Array<I18nField>
    description: Array<I18nField>
    keywords: Array<I18nField>
    url_rewrite: Array<I18nField>
  }
  interface PaymentArguments {
    token: string
    type: string
  }
  interface PaymentDetails {
    identifier: string
    metadata: string
    id_order: number
    id_customer: number
  }
  interface PaymentMethods {
    identifier: string
    metadata: string
  }
  interface PaymentModule {
    id: number
    name: string
    displayName: string
    description: string
  }
  interface PaymentToken {
    token: string
    id_cart: number
  }
  interface UpdatePaymentRequest {
    token: string
    type: string
  }
  interface PaymentArgumentsResponse {
    token: string
    type: string
  }
  interface PaymentModuleListResponse {
    data: Array<PaymentModule>
    pagination: Pagination
  }
  interface Playlist {
    id: number
    name: string
    id_customer: number
  }
  interface PlaylistListResponse {
    data: Array<Playlist>
    pagination: Pagination
  }
  interface PlaylistResponse {
    id: number
    name: string
    id_customer: number
  }
  interface PrepaymentBalance {
    amount: number
    amount_formatted: string
    type: string
  }
  interface PrepaymentBonus {
    id: number
    name: string
    id_product: number
    id_product_attribute: number
    amount: number
    type: string
    date_add: string
    date_upd: string
  }
  interface PrepaymentBonusAmount {
    prepayment_bonus_id: number
    amount: number
    amount_formatted: string
  }
  interface PrepaymentOperation {
    id: number
    id_customer: number
    id_order: number
    amount: number
    type: string
    date_add: string
    date_upd: string
  }
  interface PrepaymentOperationAmount {
    prepayment_operation_id: number
    amount: number
    amount_formatted: string
  }
  interface PrepaymentRecharge {
    id: number
    id_product: number
    amount: number
    type: string
    date_add: string
    date_upd: string
    active: boolean
  }
  interface PrepaymentBonusListResponse {
    data: Array<PrepaymentBonus>
    pagination: Pagination
  }
  interface PrepaymentBonusResponse {
    id: number
    name: string
    id_product: number
    id_product_attribute: number
    amount: number
    type: string
    date_add: string
    date_upd: string
  }
  interface PrepaymentOperationListResponse {
    data: Array<PrepaymentOperation>
    pagination: Pagination
  }
  interface PrepaymentOperationResponse {
    id: number
    id_customer: number
    id_order: number
    amount: number
    type: string
    date_add: string
    date_upd: string
  }
  interface PrepaymentRechargeListResponse {
    data: Array<PrepaymentRecharge>
    pagination: Pagination
  }
  interface PrepaymentRechargeResponse {
    id: number
    id_product: number
    amount: number
    type: string
    date_add: string
    date_upd: string
    active: boolean
  }
  interface Product {
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    active: boolean
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
  }
  interface ProductCategories {
    id: number
    position: number
  }
  interface ProductPrice {
    id_product: number
    attributes: Array<ProductPriceAttribute>
  }
  interface ProductPriceAttribute {
    attribute_id: number
    price: number
    reduction: number
    price_without_taxes: number
    price_without_reduction: number
    price_formatted: string
    reduction_formatted: string
    price_without_taxes_formatted: string
    price_without_reduction_formatted: string
    active: boolean
  }
  interface Tag {
    id: number
    id_lang: number
    name: string
  }
  interface CreateProductRequest {
    name: Array<I18nFieldInput>
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
    reference: string
    date_from: string
    date_to: string
    availability_before: number
    availability_after: number
    id_category_default: number
    tags: Array<I18nField>
  }
  interface UpdateProductRequest {
    name: Array<I18nFieldInput>
    description_short: Array<I18nFieldInput>
    description: Array<I18nFieldInput>
    meta_title: Array<I18nFieldInput>
    meta_description: Array<I18nFieldInput>
    meta_keywords: Array<I18nFieldInput>
    link_rewrite: Array<I18nFieldInput>
    active: boolean
    reference: string
    date_from: string
    date_to: string
    availability_before: number
    availability_after: number
    id_category_default: number
    tags: Array<I18nField>
  }
  interface ProductAttributeListResponse {
    data: Array<ProductAttribute>
    pagination: Pagination
  }
  interface ProductImageListResponse {
    data: Array<Image>
    pagination: Pagination
  }
  interface ProductListResponse {
    data: Array<Product>
    pagination: Pagination
  }
  interface ProductResponse {
    name: Array<I18nField>
    description_short: Array<I18nField>
    description: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    link_rewrite: Array<I18nField>
    active: boolean
    id: number
    reference: string
    date_from: string
    date_to: string
    visible_before_publication: boolean
    visible_after_publication: boolean
    price: number
    price_mode: number
    position: number
    available_for_order: boolean
    date_add: string
    date_upd: string
    id_category_default: number
    images: Array<Image>
    attributes: Array<ProductAttribute>
    tags: Array<Tag>
    can_buy: boolean
    available_in_subscriptions: boolean
    duration: number
    type: string
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
  }
  interface ProductVideoListResponse {
    data: Array<Video>
    pagination: Pagination
  }
  interface ProductAccess {
    id: number
    id_customer: number
    id_product: number
    id_product_attribute: number
    type: string
    date_add: string
    date_exp: string
    cancel: number
    recurring: number
    active: number
    message: string
    id_order: number
    date_renewal: string
    payment_method: string
    renewed: number
  }
  interface CreateProductAccessRequest {
    id_customer: number
    id_product: number
    id_product_attribute: number
    type: string
    active: number
    date_exp: string
  }
  interface UpdateProductAccessRequest {
    id_customer: number
    id_product: number
    id_product_attribute: number
    type: string
    active: number
    date_exp: string
  }
  interface ProductAccessListResponse {
    data: Array<ProductAccess>
    pagination: Pagination
  }
  interface ProductAccessResponse {
    id: number
    id_customer: number
    id_product: number
    id_product_attribute: number
    type: string
    date_add: string
    date_exp: string
    cancel: number
    recurring: number
    active: number
    message: string
    id_order: number
    date_renewal: string
    payment_method: string
    renewed: number
  }
  interface Promotion {
    id: number
    name: string
    id_country: number
    date_from: string
    date_to: string
    date_add: string
    date_upd: string
  }
  interface State {
    id: number
    id_country: number
    iso_code: string
    name: string
  }
  interface StateListResponse {
    data: Array<State>
    pagination: Pagination
  }
  interface Subscription {
    id: number
    id_product: number
    duration: number
    download: boolean
    trial_duration: number
    trial_percent: number
    trial_sub: number
    limit: boolean
    limit_duration: number
    alert_type: string
    alert_qty: number
    active: boolean
    recurring_payment: number
  }
  interface SubscriptionListResponse {
    data: Array<Subscription>
    pagination: Pagination
  }
  interface SubscriptionResponse {
    id: number
    id_product: number
    duration: number
    download: boolean
    trial_duration: number
    trial_percent: number
    trial_sub: number
    limit: boolean
    limit_duration: number
    alert_type: string
    alert_qty: number
    active: boolean
    recurring_payment: number
  }
  interface Subtitle {
    id: number
    src: string
    srclang: string
    name: string
    font: string
    size: number
    color: string
    text_shadow: string
    background: string
    opacity: number
    italic_color: boolean
  }
  interface SubtitleFile {
    filename: string
  }
  interface CreateExtractSubtitleRequest {
    filename: string
    name: string
    id_lang: number
    background: number
    font: number
    size: number
    color: string
    text_shadow: string
  }
  interface CreateVideoSubtitleRequest {
    filename: string
    name: string
    id_lang: number
    background: number
    font: number
    size: number
    color: string
    text_shadow: string
  }
  interface SubtitleFileListResponse {
    data: Array<SubtitleFile>
    pagination: Pagination
  }
  interface SubtitleListResponse {
    data: Array<Subtitle>
    pagination: Pagination
  }
  interface SubtitleResponse {
    id: number
    src: string
    srclang: string
    name: string
    font: string
    size: number
    color: string
    text_shadow: string
    background: string
    opacity: number
    italic_color: boolean
  }
  interface Contact {
    id: number
    email: string
    name: Array<I18nField>
    description: Array<I18nField>
  }
  interface Support {
    id: number
    id_lang: number
    id_contact: number
    id_customer: number
    id_order: number
    id_product: number
    status: string
    email: string
    date_add: string
    date_upd: string
  }
  interface SupportMessage {
    id: number
    id_support: number
    message: string
    private: boolean
    date_add: string
    date_upd: string
  }
  interface CreateMessageRequest {
    id_lang: number
    id_support: number
    email: string
    id_contact: number
    message: string
    id_product: number
    id_order: number
    send_mail: boolean
  }
  interface ContactListResponse {
    data: Array<Contact>
    pagination: Pagination
  }
  interface SupportResponse {
    id: number
    id_lang: number
    id_contact: number
    id_customer: number
    id_order: number
    id_product: number
    status: string
    email: string
    date_add: string
    date_upd: string
  }
  interface Task {
    id: number
    name: string
    data: string
    status: string
    date_add: string
  }
  interface CreateTaskRequest {
    name: string
    data: string
    id_employee: number
  }
  interface TaskResponse {
    id: number
    name: string
    data: string
    status: string
    date_add: string
  }
  interface TaxRule {
    id: number
    id_country: number
    id_state: number
    rate: number
    name: string
  }
  interface TaxRuleListResponse {
    data: Array<TaxRule>
    pagination: Pagination
  }
  interface Attachment {
    id: number
    file_name: string
    mime: string
    url: string
    name: Array<I18nField>
    description: Array<I18nField>
  }
  interface Bonus {
    id: number
    url: string
    mime: string
    file_name: string
    name: Array<I18nField>
    description: Array<I18nField>
  }
  interface Video {
    id: number
    id_product: number
    id_video_group: number
    id_product_image: number
    id_language: number
    language_filter: number
    id_media_source: number
    name: Array<I18nField>
    description: Array<I18nField>
    duration: number
    filename: string
    position: number
    subscription: number
    free: number
    download: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    cover: string
    thumbnail: string
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    has_free_access: VideoFreeAccess
    advertising_url: string
  }
  interface CreateVideoRequest {
    id_product: number
    id_video_group: number
    id_product_image: number
    id_language: number
    language_filter: number
    id_media_source: number
    name: Array<I18nField>
    description: Array<I18nField>
    duration: number
    filename: string
    position: number
    subscription: number
    free: number
    download: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    cover: string
    thumbnail: string
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    has_free_access: VideoFreeAccess
    advertising_url: string
  }
  interface UpdateVideoRequest {
    id_product: number
    id_video_group: number
    id_product_image: number
    id_language: number
    language_filter: number
    id_media_source: number
    name: Array<I18nField>
    description: Array<I18nField>
    duration: number
    filename: string
    position: number
    subscription: number
    free: number
    download: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    cover: string
    thumbnail: string
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    has_free_access: VideoFreeAccess
    advertising_url: string
  }
  interface VideoListResponse {
    data: Array<Video>
    pagination: Pagination
  }
  interface VideoResponse {
    id: number
    id_product: number
    id_video_group: number
    id_product_image: number
    id_language: number
    language_filter: number
    id_media_source: number
    name: Array<I18nField>
    description: Array<I18nField>
    duration: number
    filename: string
    position: number
    subscription: number
    free: number
    download: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    cover: string
    thumbnail: string
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    has_free_access: VideoFreeAccess
    advertising_url: string
  }
  interface VideoGroup {
    id: number
    id_product: number
    name: Array<I18nField>
    description: Array<I18nField>
    position: number
    date_add: string
    date_upd: string
  }
  interface VideoGroupListResponse {
    data: Array<VideoGroup>
    pagination: Pagination
  }
  interface VideoGroupResponse {
    id: number
    id_product: number
    name: Array<I18nField>
    description: Array<I18nField>
    position: number
    date_add: string
    date_upd: string
  }
  interface CustomerGroupVideoStats {
    group_id: number
    video_id: number
    played: number
    duration: number
    views: number
  }
  interface CustomerVideoStats {
    customer_id: number
    played: number
    duration: number
    views: number
  }
  interface SessionVideoStat {
    customer_id: number
    video_id: number
    date: string
    iso_code: string
    watched_time: number
    watched_number: number
    played_number: number
  }
  interface VideoStat {
    video_id: number
    played: number
    duration: number
    views: number
  }
  interface VideoViewInformations {
    id_product_video: number
    view: boolean
  }
  interface VideoWatching {
    watching_date: string
    watching_seek: number
    id: number
    id_product: number
    id_video_group: number
    id_product_image: number
    id_language: number
    language_filter: number
    id_media_source: number
    name: Array<I18nField>
    description: Array<I18nField>
    duration: number
    filename: string
    position: number
    subscription: number
    free: number
    download: number
    active: boolean
    date_add: string
    date_upd: string
    can_watch: boolean
    cover: string
    thumbnail: string
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    has_free_access: VideoFreeAccess
    advertising_url: string
  }
  interface CreateVideoStatSessionRequest {
    customer_id: number
    video_id: number
    date: string
    watched_time: number
    user_agent: string
    iso_code: string
    group_id: number
    access_id: number
    device_id: number
    seek: number
  }
  interface CreateVideoStatSessionResponse {
    customer_id: number
    video_id: number
    date: string
    watched_time: number
    user_agent: string
    iso_code: string
    group_id: number
    access_id: number
    device_id: number
    seek: number
  }
  interface CustomerGroupVideoStatsListResponse {
    data: Array<CustomerGroupVideoStats>
    pagination: Pagination
  }
  interface CustomerVideoStatsListResponse {
    data: Array<CustomerVideoStats>
    pagination: Pagination
  }
  interface SessionVideoStatListResponse {
    data: Array<SessionVideoStat>
    pagination: Pagination
  }
  interface VideoStatListResponse {
    data: Array<VideoStat>
    pagination: Pagination
  }
  interface WidgetFooterMenu {
    id: number
    label: Array<I18nField>
    url: Array<I18nField>
    column: string
    type: string
    type_id: number
    blank: number
    position: number
    visibility: string
  }
  interface WidgetHomeRail {
    id: number
    label: Array<I18nField>
    type: string
    type_id: number
    visibility: string
    position: number
  }
  interface WidgetHookPhrase {
    id: number
    label: Array<I18nField>
    url: Array<I18nField>
    type: string
    type_id: number
    blank: boolean
    color: boolean
    position: number
  }
  interface WidgetSlider {
    id: number
    label: Array<I18nField>
    description: Array<I18nField>
    url: Array<I18nField>
    type: string
    type_id: number
    blank: number
    over: number
    button: number
    opacity: number
    image: string
    position: number
  }
  interface WidgetSliderVideo {
    id: number
    id_media_source: number
    filename: string
  }
  interface WidgetTopMenu {
    id: number
    label: Array<I18nField>
    description: Array<I18nField>
    url: Array<I18nField>
    type: string
    type_id: number
    blank: number
    unfold: number
    visibility: string
    position: number
  }
  interface WidgetFooterMenuListResponse {
    data: Array<WidgetFooterMenu>
    pagination: Pagination
  }
  interface WidgetHomeRailListResponse {
    data: Array<WidgetHomeRail>
    pagination: Pagination
  }
  interface WidgetHookPhraseListResponse {
    data: Array<WidgetHookPhrase>
    pagination: Pagination
  }
  interface WidgetSliderListResponse {
    data: Array<WidgetSlider>
    pagination: Pagination
  }
  interface WidgetSliderResponse {
    id: number
    label: Array<I18nField>
    description: Array<I18nField>
    url: Array<I18nField>
    type: string
    type_id: number
    blank: number
    over: number
    button: number
    opacity: number
    image: string
    position: number
  }
  interface WidgetTopMenuListResponse {
    data: Array<WidgetTopMenu>
    pagination: Pagination
  }
  interface Pagination {
    total: number
    current_page: number
    per_page: number
    last_page: number
    next_page_url: string
    prev_page_url: string
    from: number
    to: number
  }
  export class ActorsApi {
    constructor(config?: ApiClient)
    getActors(opts?: any, callback?: Function): Promise<ActorListResponse>
    createActor(body: any, callback?: Function): Promise<ActorResponse>
    getActor(actorId: number, callback?: Function): Promise<ActorResponse>
    updateActor(actorId: number, body: any, callback?: Function): any
    deleteActor(actorId: number, callback?: Function): any
    getActorProducts(actorId: number, opts?: any, callback?: Function): Promise<ActorProductListResponse>
    getActorProductsRole(actorId: number, opts?: any, callback?: Function): Promise<ActorProductRoleListResponse>
    getCategoryActors(categoryId: number, opts?: any, callback?: Function): any
    attachActorToCategory(categoryId: number, actorId: number, callback?: Function): any
    detachActorFromCategory(categoryId: number, actorId: number, callback?: Function): any
    getActorCoverImage(actorId: number, callback?: Function): Promise<ImageResponse>
    uploadActorCover(actorId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductActors(productId: number, opts?: any, callback?: Function): Promise<ActorListResponse>
    attachActorToProduct(productId: number, actorId: number, callback?: Function): any
    getProductActorsRole(productId: number, opts?: any, callback?: Function): Promise<ActorRoleListResponse>
    detachActorFromProduct(productId: number, actorId: number, callback?: Function): any
  }
  export class AddressApi {
    constructor(config?: ApiClient)
    updateAddress(addressId: number, body: any, callback?: Function): Promise<AddressResponse>
    getCustomerAddress(customerId: number, callback?: Function): Promise<AddressResponse>
  }
  export class AttributesApi {
    constructor(config?: ApiClient)
    createProductAttribute(body: any, callback?: Function): Promise<ProductAttribute>
    getAttribute(attributeId: number, callback?: Function): Promise<ProductAttribute>
    deleteAttribute(attributeId: number, callback?: Function): any
    getProductAttributes(productId: number, opts?: any, callback?: Function): Promise<ProductAttributeListResponse>
  }
  export class BlogCategoriesApi {
    constructor(config?: ApiClient)
    getBlogCategories(opts?: any, callback?: Function): Promise<BlogCategoryListResponse>
    getBlogCategory(blogCategoryId: number, callback?: Function): Promise<BlogCategoryResponse>
  }
  export class BlogPagesApi {
    constructor(config?: ApiClient)
    getBlogPages(opts?: any, callback?: Function): Promise<BlogPageListResponse>
    getBlogPage(blogPageId: number, callback?: Function): Promise<BlogPageResponse>
    getBlogPageProducts(blogPageId: number, opts?: any, callback?: Function): any
    attachProductToBlogPage(blogPageId: number, productId: number, callback?: Function): any
    detachProductFromBlogPage(blogPageId: number, productId: number, callback?: Function): any
  }
  export class BookmarksApi {
    constructor(config?: ApiClient)
    getCustomerBookmarks(customerId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    attachBookmarkToCustomer(customerId: number, productId: number, callback?: Function): any
    detachBookmarkFromCustomer(customerId: number, productId: number, callback?: Function): any
  }
  export class CustomersApi {
    constructor(config?: ApiClient)
    getCustomerBookmarks(customerId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    attachBookmarkToCustomer(customerId: number, productId: number, callback?: Function): any
    detachBookmarkFromCustomer(customerId: number, productId: number, callback?: Function): any
    getCustomerCarts(customerId: number, opts?: any, callback?: Function): Promise<CartListResponse>
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<CartResponse>
    getCustomers(opts?: any, callback?: Function): Promise<CustomerListResponse>
    createCustomer(body: any, callback?: Function): Promise<CustomerResponse>
    getCustomer(customerId: number, callback?: Function): Promise<CustomerResponse>
    updateCustomer(customerId: number, body: any, callback?: Function): Promise<CustomerResponse>
    deleteCustomer(customerId: number, callback?: Function): any
    getCustomerOrders(customerId: number, opts?: any, callback?: Function): Promise<OrderListResponse>
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToVideos(customerId: number, body: any, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerHasAccessToProducts(customerId: number, body: any, callback?: Function): any
    getCustomerCanSeeProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerAddress(customerId: number, callback?: Function): Promise<AddressResponse>
    checkCustomerCredentials(email: string, password: string, callback?: Function): Promise<CustomerResponse>
    validateCustomerCredentials(email: string, password: string, callback?: Function): Promise<CredentialsValidationResponse>
    generateAuthenticationToken(customerId: number, callback?: Function): any
    checkAuthenticationToken(token: string, callback?: Function): Promise<CustomerResponse>
    getCustomerCurrentViews(customerId: number, callback?: Function): Promise<CustomerCurrentViewsResponse>
    getCustomerGroups(customerId: number, opts?: any, callback?: Function): Promise<GroupListResponse>
    passwordToken(email: string, opts?: any, callback?: Function): Promise<TokenResponse>
    passwordTokenConsume(token: string, password: string, callback?: Function): any
    getRegistrationFields(opts?: any, callback?: Function): Promise<RegistrationFieldsResponse>
    getFacebookCustomer(facebookId: number, callback?: Function): any
    createFacebookId(customerId: number, facebookId: string, callback?: Function): any
    loginWithFacebook(tokenType: string, token: string, opts?: any, callback?: Function): Promise<Customer>
    getGoogleCustomer(googleId: number, callback?: Function): any
    createGoogleId(customerId: number, googleId: string, callback?: Function): any
    loginWithGoogle(token: string, callback?: Function): Promise<Customer>
    getPaymentMethods(customerId: number, paymentName: string, callback?: Function): any
    getPaymentMethodsWithIp(customerId: number, paymentName: string, ipAddress: string, callback?: Function): any
    updatePaymentMethod(customerId: number, paymentName: string, paymentArguments: any, opts?: any, callback?: Function): any
    getPendingPayments(paymentName: string, customerId: number, callback?: Function): any
    getPendingPaymentsWithIp(paymentName: string, customerId: number, ipAddress: string, callback?: Function): any
    getCustomerPlaylists(customerId: number, opts?: any, callback?: Function): Promise<PlaylistListResponse>
    getCustomerPrepaymentBalances(customerId: number, opts?: any, callback?: Function): any
    getCustomerPrepaymentOperations(customerId: number, opts?: any, callback?: Function): Promise<PrepaymentOperationListResponse>
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): Promise<ProductAccessListResponse>
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): Promise<ProductAccessListResponse>
    stopSubscription(customerId: number, productAccessId: string, callback?: Function): any
  }
  export class CMSCategoriesApi {
    constructor(config?: ApiClient)
    getCMSCategories(opts?: any, callback?: Function): any
    createCMSCategory(body: any, callback?: Function): Promise<CMSCategoryResponse>
    updateCMSCategory(cmsCategoryId: number, body: any, callback?: Function): Promise<CMSCategoryResponse>
  }
  export class CMSPagesApi {
    constructor(config?: ApiClient)
    getCMSPages(opts?: any, callback?: Function): Promise<CMSPageListResponse>
    createCMSPage(body: any, callback?: Function): Promise<CMSPageResponse>
    updateCMSPage(cmsPageId: number, body: any, callback?: Function): Promise<CMSPageResponse>
  }
  export class CartsApi {
    constructor(config?: ApiClient)
    getCarts(opts?: any, callback?: Function): any
    createCart(body: any, callback?: Function): Promise<CartResponse>
    getCart(cartId: number, callback?: Function): Promise<CartResponse>
    updateCart(cartId: number, body: any, callback?: Function): Promise<CartResponse>
    deleteCart(cartId: number, callback?: Function): any
    attachCartRuleToCart(cartId: number, code: string, opts?: any, callback?: Function): any
    detachCartRuleFromCart(cartId: number, cartRuleId: number, callback?: Function): any
    addProductToCart(cartId: number, body: any, callback?: Function): Promise<CartResponse>
    removeProductFromCart(cartId: number, productId: number, opts?: any, callback?: Function): any
    validateFreeOrder(cartId: number, callback?: Function): any
    getCustomerCarts(customerId: number, opts?: any, callback?: Function): Promise<CartListResponse>
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<CartResponse>
    getLastCart(customerId: number, callback?: Function): Promise<CartResponse>
    emptyCart(cartId: number, callback?: Function): any
    getLostsCarts(opts?: any, callback?: Function): Promise<CartListResponse>
    getPrice(body: any, callback?: Function): any
    getCartPaymentModules(cartId: number, opts?: any, callback?: Function): any
    getPaymentUrl(cartId: number, paymentName: string, callback?: Function): any
    preparePayment(cartId: number, paymentName: string, opts?: any, callback?: Function): any
    validatePayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
    recurringPayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
  }
  export class CartRulesApi {
    constructor(config?: ApiClient)
    attachCartRuleToCart(cartId: number, code: string, opts?: any, callback?: Function): any
    detachCartRuleFromCart(cartId: number, cartRuleId: number, callback?: Function): any
    getCartRules(opts?: any, callback?: Function): Promise<CartRuleListResponse>
    createCartRule(body: any, callback?: Function): any
    getCartRule(cartRuleId: number, callback?: Function): Promise<CartRuleResponse>
    updateCartRule(cartRuleId: number, body: any, callback?: Function): any
    deleteCartRule(cartRuleId: number, callback?: Function): any
  }
  export class PaymentModulesApi {
    constructor(config?: ApiClient)
    validateFreeOrder(cartId: number, callback?: Function): any
    getPaymentModules(opts?: any, callback?: Function): Promise<PaymentModuleListResponse>
    getPaymentToken(token: number, callback?: Function): any
    getCartPaymentModules(cartId: number, opts?: any, callback?: Function): any
    getPaymentUrl(cartId: number, paymentName: string, callback?: Function): any
    preparePayment(cartId: number, paymentName: string, opts?: any, callback?: Function): any
    validatePayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
    recurringPayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
    getPaymentMethods(customerId: number, paymentName: string, callback?: Function): any
    getPaymentMethodsWithIp(customerId: number, paymentName: string, ipAddress: string, callback?: Function): any
    updatePaymentMethod(customerId: number, paymentName: string, paymentArguments: any, opts?: any, callback?: Function): any
    getPendingPayments(paymentName: string, customerId: number, callback?: Function): any
    getPendingPaymentsWithIp(paymentName: string, customerId: number, ipAddress: string, callback?: Function): any
  }
  export class CategoriesApi {
    constructor(config?: ApiClient)
    getCategories(opts?: any, callback?: Function): Promise<CategoryListResponse>
    createCategory(body: any, callback?: Function): Promise<CategoryResponse>
    getCategory(categoryId: number, callback?: Function): Promise<CategoryResponse>
    updateCategory(categoryId: number, body: any, callback?: Function): Promise<CategoryResponse>
    deleteCategory(categoryId: number, callback?: Function): any
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): Promise<FeatureListResponse>
    attachFeaturesToCategory(categoryId: number, features: string, callback?: Function): any
    getAvailableCategory(categoryId: number, opts?: any, callback?: Function): Promise<CategoryResponse>
    getCategoriesFromCategory(categoryId: number, opts?: any, callback?: Function): Promise<CategoryListResponse>
    getVideosFromCategory(categoryId: number, opts?: any, callback?: Function): Promise<VideoCategoryListResponse>
    getVideosFromCategories(opts?: any, callback?: Function): Promise<VideoCategoryListResponse>
    getCategoryPlayer(videoId: number, opts?: any, callback?: Function): any
    getCategoryVideoSubtitles(videoId: number, opts?: any, callback?: Function): Promise<SubtitleListResponse>
    getCategoryImages(categoryId: number, opts?: any, callback?: Function): any
    getCategoryActors(categoryId: number, opts?: any, callback?: Function): any
    attachActorToCategory(categoryId: number, actorId: number, callback?: Function): any
    detachActorFromCategory(categoryId: number, actorId: number, callback?: Function): any
    getCategoryDirectors(categoryId: number, opts?: any, callback?: Function): any
    attachDirectorToCategory(categoryId: number, directorId: number, callback?: Function): any
    detachDirectorFromCategory(categoryId: number, directorId: number, callback?: Function): any
    getCategoryBanner(categoryId: number, callback?: Function): Promise<ImageResponse>
    getProductCategories(productId: number, opts?: any, callback?: Function): Promise<CategoryListResponse>
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): Promise<CategoryListResponse>
    uploadCategoryCover(categoryId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    uploadCategoryImage(categoryId: number, imageTypeName: string, opts?: any, callback?: Function): Promise<ImageResponse>
  }
  export class ProductsApi {
    constructor(config?: ApiClient)
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerHasAccessToProducts(customerId: number, body: any, callback?: Function): any
    getProductCoverImage(productId: number, callback?: Function): Promise<ImageResponse>
    uploadProductCover(productId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductScreenshots(productId: number, callback?: Function): any
    getProducts(opts?: any, callback?: Function): Promise<ProductListResponse>
    createProduct(body: any, callback?: Function): Promise<ProductResponse>
    getProduct(productId: number, callback?: Function): Promise<ProductResponse>
    updateProduct(productId: number, body: any, callback?: Function): Promise<ProductResponse>
    deleteProduct(productId: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): Promise<ProductVideoListResponse>
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
    getVideoGroupsFromProduct(productId: number, opts?: any, callback?: Function): Promise<VideoGroupListResponse>
    getProductFeatures(productId: number, opts?: any, callback?: Function): Promise<FeatureListResponse>
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    getProductGeolocations(productId: number, opts?: any, callback?: Function): Promise<GeolocationListResponse>
    setProductGeolocation(productId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getProductGeolocationsByIp(productId: number, ipAddress: string, opts?: any, callback?: Function): any
    getProductAttributes(productId: number, opts?: any, callback?: Function): Promise<ProductAttributeListResponse>
    getProductImages(productId: number, opts?: any, callback?: Function): Promise<ImageListResponse>
    getProductAvailability(productId: number, callback?: Function): any
    getProductDirectors(productId: number, opts?: any, callback?: Function): Promise<DirectorListResponse>
    attachDirectorToProduct(productId: number, directorId: number, callback?: Function): any
    getProductDirectorsRole(productId: number, opts?: any, callback?: Function): Promise<DirectorRoleListResponse>
    detachDirectorFromProduct(productId: number, directorId: number, callback?: Function): any
    getProductActors(productId: number, opts?: any, callback?: Function): Promise<ActorListResponse>
    attachActorToProduct(productId: number, actorId: number, callback?: Function): any
    getProductActorsRole(productId: number, opts?: any, callback?: Function): Promise<ActorRoleListResponse>
    detachActorFromProduct(productId: number, actorId: number, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): Promise<ExtractListResponse>
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    searchProducts(searchQuery: string, opts?: any, callback?: Function): Promise<ProductListResponse>
    getProductCategories(productId: number, opts?: any, callback?: Function): Promise<CategoryListResponse>
    attachProductToCategory(productId: number, categoryId: number, callback?: Function): any
    detachProductFromCategory(productId: number, categoryId: number, callback?: Function): any
    getProductsFromProduct(productId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    associateProducts(productId: number, associatedProductIds: string, callback?: Function): any
    getProductGroups(productId: number, opts?: any, callback?: Function): Promise<GroupListResponse>
    attachProductToGroup(productId: number, groupId: number, callback?: Function): any
    detachProductFromGroup(productId: number, groupId: number, callback?: Function): any
    updateProductGroupRestrictionBehavior(productId: number, behavior: number, callback?: Function): any
    getProductSubscription(productId: number, callback?: Function): Promise<SubscriptionResponse>
    getBestSales(opts?: any, callback?: Function): Promise<ProductListResponse>
    getPrice(body: any, callback?: Function): any
    getNewProducts(opts?: any, callback?: Function): Promise<ProductListResponse>
    getMostWatched(opts?: any, callback?: Function): any
    uploadProductImage(productId: number, imageTypeName: string, opts?: any, callback?: Function): Promise<ImageResponse>
  }
  export class FeaturesApi {
    constructor(config?: ApiClient)
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): Promise<FeatureListResponse>
    attachFeaturesToCategory(categoryId: number, features: string, callback?: Function): any
    getExtractFeatures(extractId: number, opts?: any, callback?: Function): any
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    getFeatures(opts?: any, callback?: Function): Promise<FeatureListResponse>
    getFeatureValues(opts?: any, callback?: Function): any
    getProductFeatures(productId: number, opts?: any, callback?: Function): Promise<FeatureListResponse>
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    getVideoFeatures(videoId: number, opts?: any, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class FeatureValuesApi {
    constructor(config?: ApiClient)
    attachFeaturesToCategory(categoryId: number, features: string, callback?: Function): any
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    getFeatureValues(opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class CategoryVideosApi {
    constructor(config?: ApiClient)
    getVideosFromCategory(categoryId: number, opts?: any, callback?: Function): Promise<VideoCategoryListResponse>
    getVideosFromCategories(opts?: any, callback?: Function): Promise<VideoCategoryListResponse>
    getCategoryPlayer(videoId: number, opts?: any, callback?: Function): any
    getCategoryVideoSubtitles(videoId: number, opts?: any, callback?: Function): Promise<SubtitleListResponse>
  }
  export class SubtitlesApi {
    constructor(config?: ApiClient)
    getCategoryVideoSubtitles(videoId: number, opts?: any, callback?: Function): Promise<SubtitleListResponse>
    getExtractSubtitles(extractId: number, opts?: any, callback?: Function): any
    getSubtitles(opts?: any, callback?: Function): Promise<SubtitleFileListResponse>
    createVideoSubtitle(videoId: number, body: any, callback?: Function): Promise<SubtitleResponse>
    createExtractSubtitle(extractId: number, body: any, callback?: Function): Promise<SubtitleResponse>
    getVideoSubtitles(videoId: number, opts?: any, callback?: Function): any
  }
  export class ImagesApi {
    constructor(config?: ApiClient)
    getCategoryImages(categoryId: number, opts?: any, callback?: Function): any
    getSubscriptionCoverImage(subscriptionId: number, callback?: Function): Promise<ImageResponse>
    uploadSubscriptionCover(subscriptionId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductImageTypes(): any
    getProductCoverImage(productId: number, callback?: Function): Promise<ImageResponse>
    uploadProductCover(productId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductScreenshots(productId: number, callback?: Function): any
    getDirectorCoverImage(directorId: number, callback?: Function): Promise<ImageResponse>
    uploadDirectorCover(directorId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getActorCoverImage(actorId: number, callback?: Function): Promise<ImageResponse>
    uploadActorCover(actorId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getCategoryImageTypes(): any
    getCategoryBanner(categoryId: number, callback?: Function): Promise<ImageResponse>
    getSliderImage(): Promise<ImageListResponse>
    getVideoCover(videoId: number, callback?: Function): Promise<ImageResponse>
    deleteImage(imageId: number, callback?: Function): any
    getProductImages(productId: number, opts?: any, callback?: Function): Promise<ImageListResponse>
    uploadProductImage(productId: number, imageTypeName: string, opts?: any, callback?: Function): Promise<ImageResponse>
    uploadCategoryCover(categoryId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    uploadCategoryImage(categoryId: number, imageTypeName: string, opts?: any, callback?: Function): Promise<ImageResponse>
  }
  export class DirectorsApi {
    constructor(config?: ApiClient)
    getCategoryDirectors(categoryId: number, opts?: any, callback?: Function): any
    attachDirectorToCategory(categoryId: number, directorId: number, callback?: Function): any
    detachDirectorFromCategory(categoryId: number, directorId: number, callback?: Function): any
    getDirectors(opts?: any, callback?: Function): Promise<DirectorListResponse>
    createDirector(body: any, callback?: Function): Promise<Director>
    getDirector(directorId: number, callback?: Function): Promise<DirectorResponse>
    updateDirector(directorId: number, body: any, callback?: Function): any
    deleteDirector(directorId: number, callback?: Function): any
    getDirectorProducts(directorId: number, opts?: any, callback?: Function): Promise<DirectorProductListResponse>
    getDirectorProductsRole(directorId: number, opts?: any, callback?: Function): Promise<DirectorProductRoleListResponse>
    getDirectorCoverImage(directorId: number, callback?: Function): Promise<ImageResponse>
    uploadDirectorCover(directorId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductDirectors(productId: number, opts?: any, callback?: Function): Promise<DirectorListResponse>
    attachDirectorToProduct(productId: number, directorId: number, callback?: Function): any
    getProductDirectorsRole(productId: number, opts?: any, callback?: Function): Promise<DirectorRoleListResponse>
    detachDirectorFromProduct(productId: number, directorId: number, callback?: Function): any
  }
  export class ConfigurationApi {
    constructor(config?: ApiClient)
    getConfiguration(opts?: any, callback?: Function): Promise<ConfigurationListResponse>
    getConfigurationByName(configurationName: string, callback?: Function): Promise<ConfigurationResponse>
    getConfigurationSocial(): any
    getConfigurationLogo(): any
    getConfigurationAnalytics(opts?: any, callback?: Function): Promise<AnalyticListResponse>
  }
  export class CountriesApi {
    constructor(config?: ApiClient)
    getCountries(opts?: any, callback?: Function): Promise<CountryListResponse>
    getStates(opts?: any, callback?: Function): Promise<StateListResponse>
  }
  export class CurrenciesApi {
    constructor(config?: ApiClient)
    getCurrencies(opts?: any, callback?: Function): any
  }
  export class OrdersApi {
    constructor(config?: ApiClient)
    getCustomerOrders(customerId: number, opts?: any, callback?: Function): Promise<OrderListResponse>
    getOrders(opts?: any, callback?: Function): Promise<OrderListResponse>
    getOrder(orderId: number, callback?: Function): Promise<OrderResponse>
    getOrderInvoice(orderId: number, opts?: any, callback?: Function): any
    getOrderHistories(orderId: number, opts?: any, callback?: Function): Promise<OrderHistoryListResponse>
  }
  export class VideosApi {
    constructor(config?: ApiClient)
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToVideos(customerId: number, body: any, callback?: Function): any
    getVideoCover(videoId: number, callback?: Function): Promise<ImageResponse>
    attachCoverToVideo(videoId: number, idImage: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): Promise<ProductVideoListResponse>
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
    createVideoSubtitle(videoId: number, body: any, callback?: Function): Promise<SubtitleResponse>
    getVideos(opts?: any, callback?: Function): Promise<VideoListResponse>
    createVideo(body: any, callback?: Function): Promise<VideoResponse>
    getVideo(videoId: number, callback?: Function): Promise<VideoResponse>
    updateVideo(videoId: number, body: any, callback?: Function): Promise<VideoResponse>
    deleteVideo(videoId: number, callback?: Function): any
    getDisabledSubscriptions(videoId: number, opts?: any, callback?: Function): Promise<SubscriptionListResponse>
    getVideoViews(videoId: number, callback?: Function): any
    getVideoAccess(videoId: number, customerId: number, callback?: Function): any
    getVideoPlayer(videoId: number, opts?: any, callback?: Function): any
    getVideoDownloadUrl(videoId: number, opts?: any, callback?: Function): any
    getVideoGeolocation(videoId: number, opts?: any, callback?: Function): Promise<GeolocationListResponse>
    getVideoGeolocationByIp(videoId: number, ipAddress: string, opts?: any, callback?: Function): any
    setVideoGeolocation(videoId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getVideoSubtitles(videoId: number, opts?: any, callback?: Function): any
    getVideoFeatures(videoId: number, opts?: any, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
    getVideoBonus(videoId: number, callback?: Function): any
  }
  export class DevicesApi {
    constructor(config?: ApiClient)
    getCustomerDevices(customerId: number, opts?: any, callback?: Function): Promise<DeviceListResponse>
    createDevices(body: any, callback?: Function): Promise<DeviceResponse>
    deleteDevice(deviceId: number, callback?: Function): any
  }
  export class EmployeesApi {
    constructor(config?: ApiClient)
    getEmployees(opts?: any, callback?: Function): Promise<EmployeeListResponse>
    getEmployee(employeeId: number, callback?: Function): Promise<EmployeeResponse>
  }
  export class ExtractsApi {
    constructor(config?: ApiClient)
    getExtracts(opts?: any, callback?: Function): Promise<ExtractListResponse>
    createExtract(body: any, callback?: Function): Promise<ExtractResponse>
    getExtract(extractId: number, callback?: Function): Promise<ExtractResponse>
    updateExtract(extractId: number, body: any, callback?: Function): Promise<ExtractResponse>
    deleteExtract(extractId: number, callback?: Function): any
    hasAccessToExtracts(body: any, callback?: Function): any
    getExtractPlayer(extractId: number, opts?: any, callback?: Function): any
    getExtractSubtitles(extractId: number, opts?: any, callback?: Function): any
    getExtractFeatures(extractId: number, opts?: any, callback?: Function): any
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    attachCoverToExtract(extractId: number, idImage: number, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): Promise<ExtractListResponse>
    createExtractSubtitle(extractId: number, body: any, callback?: Function): Promise<SubtitleResponse>
  }
  export class FreeGiftsApi {
    constructor(config?: ApiClient)
    getFreeGifts(opts?: any, callback?: Function): Promise<FreeGiftListResponse>
    createFreeGift(body: any, callback?: Function): Promise<FreeGift>
    getFreeGift(freeGiftId: number, callback?: Function): Promise<FreeGiftResponse>
    deleteFreeGift(freeGiftId: number, callback?: Function): any
    consumeFreeGift(freeGiftId: number, customerId: number, opts?: any, callback?: Function): any
    getFreeGiftToken(freeGiftId: number, callback?: Function): Promise<GiftToken>
    sendFreeGift(freeGiftId: number, callback?: Function): any
  }
  export class GendersApi {
    constructor(config?: ApiClient)
    getGenders(opts?: any, callback?: Function): Promise<GenderListResponse>
  }
  export class GeolocationsApi {
    constructor(config?: ApiClient)
    getPlatformAccessInfo(ipAddress: string, callback?: Function): Promise<PlatformAccessResponse>
    getIPLocation(ipAddress: string, callback?: Function): Promise<IPLocationResponse>
    getGeolocSettings(type: string, typeId: number, callback?: Function): Promise<GeolocSettingsResponse>
    getProductGeolocations(productId: number, opts?: any, callback?: Function): Promise<GeolocationListResponse>
    setProductGeolocation(productId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getProductGeolocationsByIp(productId: number, ipAddress: string, opts?: any, callback?: Function): any
    getVideoGeolocationByIp(videoId: number, ipAddress: string, opts?: any, callback?: Function): any
    setVideoGeolocation(videoId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
  }
  export class GiftsApi {
    constructor(config?: ApiClient)
    getGifts(opts?: any, callback?: Function): Promise<GiftListResponse>
    createGift(body: any, callback?: Function): Promise<GiftResponse>
    getGift(giftId: number, callback?: Function): Promise<GiftResponse>
    updateGift(giftId: number, body: any, callback?: Function): Promise<GiftResponse>
    deleteGift(giftId: number, callback?: Function): any
    getGiftToken(giftId: number, callback?: Function): Promise<GiftTokenResponse>
    sendGift(giftId: number, callback?: Function): any
    consumeGift(giftId: number, customerId: number, opts?: any, callback?: Function): any
    getGiftInCart(cartId: number, callback?: Function): Promise<GiftResponse>
    getGiftsInCart(cartId: number, callback?: Function): Promise<GiftListResponse>
    deleteGiftsInCart(cartId: number, callback?: Function): any
  }
  export class GroupsApi {
    constructor(config?: ApiClient)
    getGroups(opts?: any, callback?: Function): Promise<GroupListResponse>
    createGroup(body: any, callback?: Function): Promise<GroupResponse>
    getGroup(groupId: number, callback?: Function): Promise<GroupResponse>
    getGroupCustomers(groupId: number, opts?: any, callback?: Function): Promise<CustomerListResponse>
    attachCustomerToGroup(groupId: number, customerId: number, callback?: Function): any
    detachCustomerFromGroup(groupId: number, customerId: number, callback?: Function): any
    getProductGroups(productId: number, opts?: any, callback?: Function): Promise<GroupListResponse>
  }
  export class SubscriptionsApi {
    constructor(config?: ApiClient)
    getSubscriptionCoverImage(subscriptionId: number, callback?: Function): Promise<ImageResponse>
    uploadSubscriptionCover(subscriptionId: number, opts?: any, callback?: Function): Promise<ImageResponse>
    getProductSubscription(productId: number, callback?: Function): Promise<SubscriptionResponse>
    getSubscriptions(opts?: any, callback?: Function): Promise<SubscriptionListResponse>
    getSubscription(subscriptionId: number, callback?: Function): Promise<SubscriptionResponse>
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): Promise<CategoryListResponse>
    attachCategoriesToSubscription(subscriptionId: number, categoryIds: string, callback?: Function): any
    detachCategoryFromSubscription(subscriptionId: number, categoryId: number, callback?: Function): any
    getDisabledSubscriptions(videoId: number, opts?: any, callback?: Function): Promise<SubscriptionListResponse>
  }
  export class WidgetsApi {
    constructor(config?: ApiClient)
    getSliderImage(): Promise<ImageListResponse>
    getWidgetTopMenu(opts?: any, callback?: Function): Promise<WidgetTopMenuListResponse>
    getWidgetFooterMenu(opts?: any, callback?: Function): Promise<WidgetFooterMenuListResponse>
    getWidgetSlider(opts?: any, callback?: Function): Promise<WidgetSliderListResponse>
    getWidgetSliderItem(sliderId: number, callback?: Function): Promise<WidgetSliderResponse>
    getWidgetAnalytics(): any
    getWidgetHookPhrase(opts?: any, callback?: Function): Promise<WidgetHookPhraseListResponse>
    getWidgetHomeRail(opts?: any, callback?: Function): Promise<WidgetHomeRailListResponse>
    getWidgetSliderVideoPlayer(sliderId: number, opts?: any, callback?: Function): any
  }
  export class LanguagesApi {
    constructor(config?: ApiClient)
    getLanguages(opts?: any, callback?: Function): Promise<LanguageListResponse>
  }
  export class MediaFilesApi {
    constructor(config?: ApiClient)
    getMediaFile(mediaFileId: number, callback?: Function): Promise<MediaFileResponse>
    getMediaSourceFiles(sourceId: number, opts?: any, callback?: Function): Promise<MediaFileListResponse>
    postMediaSourceFiles(sourceId: number, body: any, callback?: Function): Promise<MediaFileResponse>
  }
  export class MediaSourcesApi {
    constructor(config?: ApiClient)
    getMediaSources(opts?: any, callback?: Function): Promise<MediaSourceListResponse>
    getMediaSource(sourceId: number, callback?: Function): Promise<MediaSourceResponse>
    getMediaSourceFiles(sourceId: number, opts?: any, callback?: Function): Promise<MediaFileListResponse>
    postMediaSourceFiles(sourceId: number, body: any, callback?: Function): Promise<MediaFileResponse>
  }
  export class OrderHistoriesApi {
    constructor(config?: ApiClient)
    getOrderHistories(orderId: number, opts?: any, callback?: Function): Promise<OrderHistoryListResponse>
  }
  export class OrderStatesApi {
    constructor(config?: ApiClient)
    getOrderStates(opts?: any, callback?: Function): Promise<OrderStateListResponse>
    getOrderState(orderStateId: number, callback?: Function): Promise<OrderStateResponse>
  }
  export class PagesApi {
    constructor(config?: ApiClient)
    getPages(opts?: any, callback?: Function): Promise<PageListResponse>
    getPage(pageId: number, callback?: Function): Promise<PageResponse>
  }
  export class PlaylistsApi {
    constructor(config?: ApiClient)
    getPlaylists(opts?: any, callback?: Function): Promise<PlaylistListResponse>
    createPlaylist(customerId: number, name: string, callback?: Function): Promise<PlaylistResponse>
    getCustomerPlaylists(customerId: number, opts?: any, callback?: Function): Promise<PlaylistListResponse>
    getPlaylist(playlistId: number, callback?: Function): Promise<PlaylistResponse>
    updatePlaylist(playlistId: number, body: any, callback?: Function): Promise<PlaylistResponse>
    deletePlaylist(playlistId: number, callback?: Function): any
    getPlaylistBookmarks(playlistId: number, opts?: any, callback?: Function): Promise<ProductListResponse>
    attachBookmarkToPlaylist(playlistId: number, productId: number, callback?: Function): any
    detachBookmarkFromPlaylist(playlistId: number, productId: number, callback?: Function): any
  }
  export class PrepaymentsApi {
    constructor(config?: ApiClient)
    getCustomerPrepaymentBalances(customerId: number, opts?: any, callback?: Function): any
    getCustomerPrepaymentOperations(customerId: number, opts?: any, callback?: Function): Promise<PrepaymentOperationListResponse>
    getPrepaymentOperations(opts?: any, callback?: Function): Promise<PrepaymentOperationListResponse>
    getPrepaymentOperationsAmount(body: any, callback?: Function): any
    getPrepaymentOperation(prepaymentOperationId: number, callback?: Function): Promise<PrepaymentOperationResponse>
    getPrepaymentBonusList(opts?: any, callback?: Function): Promise<PrepaymentBonusListResponse>
    getPrepaymentBonusAmount(body: any, callback?: Function): any
    getPrepaymentBonus(prepaymentBonusId: number, callback?: Function): Promise<PrepaymentBonusResponse>
    getPrepaymentRecharges(opts?: any, callback?: Function): Promise<PrepaymentRechargeListResponse>
    getPrepaymentRecharge(prepaymentRechargeId: number, callback?: Function): Promise<PrepaymentRechargeResponse>
  }
  export class VideoGroupsApi {
    constructor(config?: ApiClient)
    getVideoGroupsFromProduct(productId: number, opts?: any, callback?: Function): Promise<VideoGroupListResponse>
    getVideoGroups(opts?: any, callback?: Function): Promise<VideoGroupListResponse>
    getVideoGroup(videoGroupId: number, callback?: Function): Promise<VideoGroupResponse>
  }
  export class BundlesApi {
    constructor(config?: ApiClient)
    addProductToBundle(bundleId: number, productId: number, position: number, callback?: Function): any
    removeProductFromBundle(bundleId: number, productId: number, callback?: Function): any
    getBundleProducts(bundleId: number, opts?: any, callback?: Function): any
  }
  export class ProductAccessesApi {
    constructor(config?: ApiClient)
    getProductAccesses(opts?: any, callback?: Function): Promise<ProductAccessListResponse>
    createProductAccess(body: any, callback?: Function): Promise<ProductAccessResponse>
    getProductAccess(productAccessId: number, callback?: Function): Promise<ProductAccessResponse>
    updateProductAccess(productAccessId: number, body: any, callback?: Function): Promise<ProductAccessResponse>
    deleteProductAccess(productAccessId: number, callback?: Function): any
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): Promise<ProductAccessListResponse>
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): Promise<ProductAccessListResponse>
    unsubscribe(productAccessId: number, opts?: any, callback?: Function): any
    subscribe(productAccessId: number, callback?: Function): any
    switchSubscriptionPending(productAccessId: string, callback?: Function): Promise<SubscriptionResponse>
    switchSubscription(productAccessId: string, subscriptionId: number, callback?: Function): any
    switchSubscriptionDelete(productAccessId: number, callback?: Function): any
  }
  export class RecommendationsApi {
    constructor(config?: ApiClient)
    getCustomerRecommendations(customerId: number, opts?: any, callback?: Function): any
  }
  export class SupportApi {
    constructor(config?: ApiClient)
    createMessage(body: any, callback?: Function): Promise<SupportResponse>
    getContacts(opts?: any, callback?: Function): Promise<ContactListResponse>
  }
  export class TasksApi {
    constructor(config?: ApiClient)
    createTask(body: any, callback?: Function): Promise<TaskResponse>
  }
  export class TaxRulesApi {
    constructor(config?: ApiClient)
    getTaxRules(opts?: any, callback?: Function): Promise<TaxRuleListResponse>
  }
  export class StatsApi {
    constructor(config?: ApiClient)
    getCustomerSessions(opts?: any, callback?: Function): Promise<SessionVideoStatListResponse>
    createVideoStatSession(body: any, callback?: Function): Promise<CreateVideoStatSessionResponse>
    getCustomerSessionsMultiple(customerId: number, body: any, callback?: Function): any
    getCustomerVideoStats(customerId: number, opts?: any, callback?: Function): Promise<CustomerVideoStatsListResponse>
    getCustomerGroupTotalWatched(groupId: number, opts?: any, callback?: Function): Promise<CustomerGroupVideoStatsListResponse>
    getVideoStats(opts?: any, callback?: Function): Promise<VideoStatListResponse>
    getCustomerVideosViewInformations(customerId: number, body: any, callback?: Function): any
    setCustomerVideoViewInformations(customerId: number, videoId: number, body: any, callback?: Function): any
    getProductsWatched(customerId: number, opts?: any, callback?: Function): any
    getVideosWatching(customerId: number, opts?: any, callback?: Function): any
  }
  export class ApiClient {
    defaultHeaders: any
    basePath: string
    constructor()
  }
}