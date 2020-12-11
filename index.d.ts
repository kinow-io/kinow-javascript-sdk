declare module 'kinow-javascript-sdk' {
  interface I18nField {
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
  interface Bonus {
    id: number
    file_name: string
    mime: string
    url: string
    name: Array<I18nField>
    description: Array<I18nField>
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
  interface Cart {
    id: number
    date_add: string
    date_upd: string
    id_customer: number
    id_currency: number
    id_lang: number
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
    sub: boolean
    has_group_restriction: boolean
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
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
  interface Configuration {
    id: number
    name: string
    value: object
  }
  interface Contact {
    id: number
    email: string
    name: Array<I18nField>
    description: Array<I18nField>
  }
  interface Country {
    id: number
    iso_code: string
    id_zone: string
    name: Array<I18nField>
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
    id_country: number
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
  interface Employee {
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
  interface Gender {
    id: number
    type: number
    name: Array<I18nField>
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
  interface Group {
    id: number
    name: Array<I18nField>
    date_add: string
    date_upd: string
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
  interface Image {
    id: number
    source: string
    type: string
  }
  interface Language {
    id: number
    name: string
    iso_code: string
    active: boolean
  }
  interface MediaFile {
    id: number
    id_media_source: number
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
  }
  interface OrderHistory {
    id: number
    id_order: number
    id_order_state: number
    date_add: string
  }
  interface OrderState {
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
  interface PaymentArguments {
    token: string
    type: string
  }
  interface PaymentDetails {
    identifier: string
    metadata: string
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
  interface PlatformAccessInfo {
    can_access: boolean
    can_buy: boolean
  }
  interface Playlist {
    id: number
    name: string
    id_customer: number
  }
  interface PrepaymentBalance {
    amount: number
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
  interface PrepaymentOperation {
    id: number
    id_customer: number
    id_order: number
    amount: number
    type: string
    date_add: string
    date_upd: string
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
    sub: boolean
    has_group_restriction: boolean
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
    roles: string
    categories: Array<ProductCategories>
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
  interface ProductAccessInfo {
    id_product: number
    can_see: boolean
    can_buy: boolean
    can_watch: boolean
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
  interface ProductCategories {
    id: number
    position: number
  }
  interface ProductPrice {
    id_product: number
    attributes: Array<any>
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
  interface RegistrationField {
    name: string
    required: boolean
    displayed: boolean
  }
  interface Screenshot {
    id: number
    source: string
    position: number
    type: string
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
  interface Tag {
    id: number
    id_lang: number
    name: string
  }
  interface Task {
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
    has_free_access: object
    advertising_url: string
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
  interface VideoGroup {
    id: number
    id_product: number
    name: Array<I18nField>
    description: Array<I18nField>
    position: number
    date_add: string
    date_upd: string
  }
  interface VideoStat {
    video_id: number
    played: number
    duration: number
    views: number
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
  interface WidgetTopMenu {
    id: number
    label: Array<I18nField>
    description: Array<I18nField>
    url: Array<I18nField>
    type: string
    type_id: number
    blank: number
    unfold: number
    position: number
  }
  export class OAuthApi {
    constructor(config?: ApiClient)
    getToken(clientId: string, clientSecret: string, callback?: Function): any
  }
  export class ActorsApi {
    constructor(config?: ApiClient)
    getActors(opts?: any, callback?: Function): any
    createActor(body: any, callback?: Function): Promise<Actor>
    getActor(actorId: number, callback?: Function): Promise<Actor>
    updateActor(actorId: number, body: any, callback?: Function): any
    deleteActor(actorId: number, callback?: Function): any
    getActorProducts(actorId: number, opts?: any, callback?: Function): any
    getActorProductsRole(actorId: number, opts?: any, callback?: Function): any
    getActorCoverImage(actorId: number, callback?: Function): Promise<Image>
    uploadActorCover(actorId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getProductActors(productId: number, opts?: any, callback?: Function): any
    attachProductToActor(productId: number, actorId: number, callback?: Function): any
    getProductActorsRole(productId: number, opts?: any, callback?: Function): any
  }
  export class AddressApi {
    constructor(config?: ApiClient)
    updateAddress(addressId: number, body: any, callback?: Function): Promise<Address>
    getCustomerAddress(customerId: number, callback?: Function): Promise<Address>
  }
  export class AttributesApi {
    constructor(config?: ApiClient)
    createProductAttribute(body: any, callback?: Function): Promise<ProductAttribute>
    deleteAttribute(attributeId: number, callback?: Function): any
    getProductAttributes(productId: number, opts?: any, callback?: Function): any
  }
  export class BlogCategoriesApi {
    constructor(config?: ApiClient)
    getBlogCategories(opts?: any, callback?: Function): any
    getBlogCategory(blogCategoryId: number, callback?: Function): Promise<BlogCategory>
  }
  export class BlogPagesApi {
    constructor(config?: ApiClient)
    getBlogPages(opts?: any, callback?: Function): any
    getBlogPage(blogPageId: number, callback?: Function): Promise<BlogPage>
  }
  export class BookmarksApi {
    constructor(config?: ApiClient)
    getCustomerBookmarks(customerId: number, opts?: any, callback?: Function): any
    attachBookmarkToCustomer(customerId: number, productId: number, callback?: Function): any
    detachBookmarkFromCustomer(customerId: number, productId: number, callback?: Function): any
  }
  export class CMSCategoriesApi {
    constructor(config?: ApiClient)
    getCMSCategories(opts?: any, callback?: Function): any
    createCMSCategory(body: any, callback?: Function): Promise<CMSCategory>
    updateCMSCategory(cmsCategoryId: number, body: any, callback?: Function): Promise<CMSCategory>
  }
  export class CMSPagesApi {
    constructor(config?: ApiClient)
    getCMSPages(opts?: any, callback?: Function): any
    createCMSPage(body: any, callback?: Function): Promise<CMSPage>
    updateCMSPage(cmsPageId: number, body: any, callback?: Function): Promise<CMSPage>
  }
  export class CartsApi {
    constructor(config?: ApiClient)
    getCarts(opts?: any, callback?: Function): any
    createCart(body: any, callback?: Function): Promise<Cart>
    getCart(cartId: number, callback?: Function): Promise<Cart>
    updateCart(cartId: number, body: any, callback?: Function): Promise<Cart>
    deleteCart(cartId: number, callback?: Function): any
    attachCartRuleToCart(cartId: number, code: string, callback?: Function): any
    detachCartRuleFromCart(cartId: number, cartRuleId: number, callback?: Function): any
    addProductToCart(cartId: number, productId: number, opts?: any, callback?: Function): Promise<Cart>
    deleteProductFromCart(cartId: number, productId: number, opts?: any, callback?: Function): any
    validateFreeOrder(cartId: number, callback?: Function): any
    getCustomerCarts(customerId: number, opts?: any, callback?: Function): any
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<Cart>
    getLastCart(customerId: number, callback?: Function): Promise<Cart>
    emptyCart(cartId: number, callback?: Function): any
    getLostsCarts(opts?: any, callback?: Function): any
    getPrice(body: any, callback?: Function): any
    getPaymentUrl(cartId: number, paymentName: string, callback?: Function): any
    preparePayment(cartId: number, paymentName: string, opts?: any, callback?: Function): any
    validatePayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
  }
  export class CartRulesApi {
    constructor(config?: ApiClient)
    attachCartRuleToCart(cartId: number, code: string, callback?: Function): any
    detachCartRuleFromCart(cartId: number, cartRuleId: number, callback?: Function): any
    getCartRules(opts?: any, callback?: Function): any
    createCartRule(body: any, callback?: Function): any
    getCartRule(cartRuleId: number, callback?: Function): Promise<CartRule>
    updateCartRule(cartRuleId: number, body: any, callback?: Function): any
    deleteCartRule(cartRuleId: number, callback?: Function): any
  }
  export class PaymentModulesApi {
    constructor(config?: ApiClient)
    validateFreeOrder(cartId: number, callback?: Function): any
    getPaymentModules(opts?: any, callback?: Function): any
    getPaymentUrl(cartId: number, paymentName: string, callback?: Function): any
    preparePayment(cartId: number, paymentName: string, opts?: any, callback?: Function): any
    validatePayment(cartId: number, paymentName: string, paymentArgument: any, callback?: Function): any
    getPaymentMethods(customerId: number, paymentName: string, callback?: Function): any
    getPaymentMethodsWithIp(customerId: number, paymentName: string, ipAddress: string, callback?: Function): any
    updatePaymentMethod(customerId: number, paymentName: string, paymentArguments: any, opts?: any, callback?: Function): any
    getPendingPayments(paymentName: string, customerId: number, callback?: Function): any
    getPendingPaymentsWithIp(paymentName: string, customerId: number, ipAddress: string, callback?: Function): any
  }
  export class CustomersApi {
    constructor(config?: ApiClient)
    getCustomerCarts(customerId: number, opts?: any, callback?: Function): any
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<Cart>
    getCustomers(opts?: any, callback?: Function): any
    createCustomer(body: any, callback?: Function): Promise<Customer>
    getCustomer(customerId: number, callback?: Function): Promise<Customer>
    updateCustomer(customerId: number, body: any, callback?: Function): Promise<Customer>
    deleteCustomer(customerId: number, callback?: Function): any
    getCustomerOrders(customerId: number, opts?: any, callback?: Function): any
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToVideos(customerId: number, body: any, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerHasAccessToProducts(customerId: number, body: any, callback?: Function): any
    getCustomerCanSeeProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerAddress(customerId: number, callback?: Function): Promise<Address>
    checkCustomerCredentials(email: string, password: string, callback?: Function): Promise<Customer>
    validateCustomerCredentials(email: string, password: string, callback?: Function): any
    generateAuthenticationToken(customerId: number, callback?: Function): any
    checkAuthenticationToken(token: string, callback?: Function): Promise<Customer>
    getCustomerCurrentViews(customerId: number, callback?: Function): any
    getCustomerGroups(customerId: number, opts?: any, callback?: Function): any
    passwordToken(email: string, opts?: any, callback?: Function): any
    passwordTokenConsume(token: string, password: string, callback?: Function): any
    getRegistrationFields(opts?: any, callback?: Function): any
    getFacebookCustomer(facebookId: number, callback?: Function): any
    createFacebookId(customerId: number, facebookId: string, callback?: Function): any
    loginWithFacebook(tokenType: string, token: string, opts?: any, callback?: Function): Promise<Customer>
    getPaymentMethods(customerId: number, paymentName: string, callback?: Function): any
    getPaymentMethodsWithIp(customerId: number, paymentName: string, ipAddress: string, callback?: Function): any
    updatePaymentMethod(customerId: number, paymentName: string, paymentArguments: any, opts?: any, callback?: Function): any
    getPendingPayments(paymentName: string, customerId: number, callback?: Function): any
    getPendingPaymentsWithIp(paymentName: string, customerId: number, ipAddress: string, callback?: Function): any
    getCustomerPlaylists(customerId: number, opts?: any, callback?: Function): any
    getCustomerPrepaymentBalances(customerId: number, callback?: Function): any
    getCustomerPrepaymentOperations(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): any
    stopSubscription(customerId: number, productAccessId: string, callback?: Function): any
  }
  export class CategoriesApi {
    constructor(config?: ApiClient)
    getCategories(opts?: any, callback?: Function): any
    createCategory(body: any, callback?: Function): Promise<Category>
    getCategory(categoryId: number, callback?: Function): Promise<Category>
    updateCategory(categoryId: number, body: any, callback?: Function): Promise<Category>
    deleteCategory(categoryId: number, callback?: Function): any
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): any
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): any
    getAvailableCategory(categoryId: number, opts?: any, callback?: Function): Promise<Category>
    getCategoriesFromCategory(categoryId: number, opts?: any, callback?: Function): any
    getVideosFromCategory(categoryId: number, opts?: any, callback?: Function): any
    getVideosFromCategories(opts?: any, callback?: Function): any
    getCategoryVideoPlayer(videoId: number, opts?: any, callback?: Function): any
    getCategoryVideoSubtitles(videoId: number, opts?: any, callback?: Function): any
    getCategoryBanner(categoryId: number, callback?: Function): Promise<Image>
    getProductCategories(productId: number, opts?: any, callback?: Function): any
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): any
    uploadCategoryCover(categoryId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
  }
  export class ProductsApi {
    constructor(config?: ApiClient)
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerHasAccessToProducts(customerId: number, body: any, callback?: Function): any
    getProductCoverImage(productId: number, callback?: Function): Promise<Image>
    uploadProductCover(productId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getProductScreenshots(productId: number, callback?: Function): any
    getProducts(opts?: any, callback?: Function): any
    createProduct(body: any, callback?: Function): Promise<Product>
    getProduct(productId: number, callback?: Function): Promise<Product>
    updateProduct(productId: number, body: any, callback?: Function): Promise<Product>
    deleteProduct(productId: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): any
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
    getVideoGroupsFromProduct(productId: number, opts?: any, callback?: Function): any
    getProductFeatures(productId: number, opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    getProductGeolocations(productId: number, opts?: any, callback?: Function): any
    setProductGeolocation(productId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getProductGeolocationsByIp(productId: number, ipAddress: string, opts?: any, callback?: Function): any
    getProductAttributes(productId: number, opts?: any, callback?: Function): any
    getProductImages(productId: number, opts?: any, callback?: Function): any
    getProductAvailability(productId: number, callback?: Function): any
    getProductDirectors(productId: number, opts?: any, callback?: Function): any
    attachProductToDirector(productId: number, directorId: number, callback?: Function): any
    getProductDirectorsRole(productId: number, opts?: any, callback?: Function): any
    getProductActors(productId: number, opts?: any, callback?: Function): any
    attachProductToActor(productId: number, actorId: number, callback?: Function): any
    getProductActorsRole(productId: number, opts?: any, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    searchProducts(searchQuery: string, opts?: any, callback?: Function): any
    getProductCategories(productId: number, opts?: any, callback?: Function): any
    attachProductToCategory(productId: number, categoryId: number, callback?: Function): any
    detachProductFromCategory(productId: number, categoryId: number, callback?: Function): any
    getProductsFromProduct(productId: number, opts?: any, callback?: Function): any
    associateProducts(productId: number, associatedProductIds: string, callback?: Function): any
    getProductGroups(productId: number, opts?: any, callback?: Function): any
    attachProductToGroup(productId: number, groupId: number, callback?: Function): any
    detachProductFromGroup(productId: number, groupId: number, callback?: Function): any
    updateProductGroupRestrictionBehavior(productId: number, behavior: number, callback?: Function): any
    getProductSubscription(productId: number, callback?: Function): Promise<Subscription>
    getBestSales(opts?: any, callback?: Function): any
    getPrice(body: any, callback?: Function): any
    getNewProducts(opts?: any, callback?: Function): any
  }
  export class FeaturesApi {
    constructor(config?: ApiClient)
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): any
    getExtractFeatures(extractId: number, opts?: any, callback?: Function): any
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    getFeatures(opts?: any, callback?: Function): any
    getFeatureValues(opts?: any, callback?: Function): any
    getProductFeatures(productId: number, opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    getVideoFeatures(videoId: number, opts?: any, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class CategoryVideosApi {
    constructor(config?: ApiClient)
    getVideosFromCategory(categoryId: number, opts?: any, callback?: Function): any
    getVideosFromCategories(opts?: any, callback?: Function): any
    getCategoryVideoPlayer(videoId: number, opts?: any, callback?: Function): any
    getCategoryVideoSubtitles(videoId: number, opts?: any, callback?: Function): any
  }
  export class ConfigurationApi {
    constructor(config?: ApiClient)
    getConfiguration(opts?: any, callback?: Function): any
    getConfigurationByName(configurationName: string, callback?: Function): Promise<Configuration>
    getConfigurationSocial(): any
    getConfigurationLogo(): any
  }
  export class CountriesApi {
    constructor(config?: ApiClient)
    getCountries(opts?: any, callback?: Function): any
  }
  export class CurrenciesApi {
    constructor(config?: ApiClient)
    getCurrencies(opts?: any, callback?: Function): any
  }
  export class OrdersApi {
    constructor(config?: ApiClient)
    getCustomerOrders(customerId: number, opts?: any, callback?: Function): any
    getOrders(opts?: any, callback?: Function): any
    getOrder(orderId: number, callback?: Function): Promise<Order>
    getOrderInvoice(orderId: number, opts?: any, callback?: Function): any
    getOrderHistories(orderId: number, opts?: any, callback?: Function): any
  }
  export class VideosApi {
    constructor(config?: ApiClient)
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToVideos(customerId: number, body: any, callback?: Function): any
    getVideoCover(videoId: number, callback?: Function): Promise<Image>
    attachCoverToVideo(videoId: number, idImage: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): any
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
    createSubtitle(videoId: number, body: any, callback?: Function): Promise<Subtitle>
    getVideos(opts?: any, callback?: Function): any
    createVideo(body: any, callback?: Function): Promise<Video>
    getVideo(videoId: number, callback?: Function): Promise<Video>
    updateVideo(videoId: number, body: any, callback?: Function): Promise<Video>
    deleteVideo(videoId: number, callback?: Function): any
    getDisabledSubscriptions(videoId: number, opts?: any, callback?: Function): any
    getVideoViews(videoId: number, callback?: Function): any
    getVideoAccess(videoId: number, customerId: number, callback?: Function): any
    getVideoPlayer(videoId: number, opts?: any, callback?: Function): any
    getVideoDownloadUrl(videoId: number, opts?: any, callback?: Function): any
    getVideoGeolocation(videoId: number, opts?: any, callback?: Function): any
    getVideoGeolocationByIp(videoId: number, ipAddress: string, opts?: any, callback?: Function): any
    setVideoGeolocation(videoId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getVideoSubtitles(videoId: number, opts?: any, callback?: Function): any
    getVideoFeatures(videoId: number, opts?: any, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
    getVideoBonus(videoId: number, callback?: Function): any
  }
  export class DevicesApi {
    constructor(config?: ApiClient)
    getCustomerDevices(customerId: number, opts?: any, callback?: Function): any
    createDevices(body: any, callback?: Function): Promise<Device>
    deleteDevice(deviceId: number, callback?: Function): any
  }
  export class DirectorsApi {
    constructor(config?: ApiClient)
    getDirectors(opts?: any, callback?: Function): any
    createDirector(body: any, callback?: Function): Promise<Director>
    getDirector(directorId: number, callback?: Function): Promise<Director>
    updateDirector(directorId: number, body: any, callback?: Function): any
    deleteDirector(directorId: number, callback?: Function): any
    getDirectorProducts(directorId: number, opts?: any, callback?: Function): any
    getDirectorProductsRole(directorId: number, opts?: any, callback?: Function): any
    getDirectorCoverImage(directorId: number, callback?: Function): Promise<Image>
    uploadDirectorCover(directorId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getProductDirectors(productId: number, opts?: any, callback?: Function): any
    attachProductToDirector(productId: number, directorId: number, callback?: Function): any
    getProductDirectorsRole(productId: number, opts?: any, callback?: Function): any
  }
  export class EmployeesApi {
    constructor(config?: ApiClient)
    getEmployees(opts?: any, callback?: Function): any
    getEmployee(employeeId: number, callback?: Function): Promise<Employee>
  }
  export class ExtractsApi {
    constructor(config?: ApiClient)
    getExtracts(opts?: any, callback?: Function): any
    createExtract(body: any, callback?: Function): Promise<Extract>
    getExtract(extractId: number, callback?: Function): Promise<Extract>
    updateExtract(extractId: number, body: any, callback?: Function): Promise<Extract>
    deleteExtract(extractId: number, callback?: Function): any
    getExtractPlayer(extractId: number, callback?: Function): any
    getExtractFeatures(extractId: number, opts?: any, callback?: Function): any
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    attachCoverToExtract(extractId: number, idImage: number, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): any
    createSubtitle(extractId: number, body: any, callback?: Function): Promise<Subtitle>
  }
  export class FeatureValuesApi {
    constructor(config?: ApiClient)
    attachFeaturesToExtract(extractId: number, features: string, callback?: Function): any
    getFeatureValues(opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class FreeGiftsApi {
    constructor(config?: ApiClient)
    getFreeGifts(opts?: any, callback?: Function): any
    createFreeGift(body: any, callback?: Function): Promise<FreeGift>
    getFreeGift(freeGiftId: number, callback?: Function): Promise<FreeGift>
    updateFreeGift(freeGiftId: number, body: any, callback?: Function): Promise<FreeGift>
    deleteFreeGift(freeGiftId: number, callback?: Function): any
    consumeFreeGift(freeGiftId: number, customerId: number, opts?: any, callback?: Function): any
    getFreeGiftToken(freeGiftId: number, callback?: Function): Promise<GiftToken>
    sendFreeGift(freeGiftId: number, callback?: Function): any
  }
  export class GendersApi {
    constructor(config?: ApiClient)
    getGenders(opts?: any, callback?: Function): any
  }
  export class GeolocationsApi {
    constructor(config?: ApiClient)
    getPlatformAccessInfo(ipAddress: string, callback?: Function): Promise<PlatformAccessInfo>
    getIPLocation(ipAddress: string, callback?: Function): Promise<IPLocation>
    getGeolocSettings(type: string, typeId: number, callback?: Function): Promise<GeolocSettings>
    getProductGeolocations(productId: number, opts?: any, callback?: Function): any
    setProductGeolocation(productId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getProductGeolocationsByIp(productId: number, ipAddress: string, opts?: any, callback?: Function): any
    getVideoGeolocationByIp(videoId: number, ipAddress: string, opts?: any, callback?: Function): any
    setVideoGeolocation(videoId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
  }
  export class GiftsApi {
    constructor(config?: ApiClient)
    getGifts(opts?: any, callback?: Function): any
    createGift(body: any, callback?: Function): Promise<Gift>
    getGift(giftId: number, callback?: Function): Promise<Gift>
    updateGift(giftId: number, body: any, callback?: Function): Promise<Gift>
    deleteGift(giftId: number, callback?: Function): any
    getGiftToken(giftId: number, callback?: Function): Promise<GiftToken>
    sendGift(giftId: number, callback?: Function): any
    consumeGift(giftId: number, customerId: number, opts?: any, callback?: Function): any
    getGiftInCart(cartId: number, callback?: Function): Promise<Gift>
    getGiftsInCart(cartId: number, callback?: Function): any
    deleteGiftsInCart(cartId: number, callback?: Function): any
  }
  export class GroupsApi {
    constructor(config?: ApiClient)
    getGroups(opts?: any, callback?: Function): any
    createGroup(body: any, callback?: Function): Promise<Group>
    getGroup(groupId: number, callback?: Function): Promise<Group>
    attachCustomerToGroup(groupId: number, customerId: number, callback?: Function): any
    detachCustomerFromGroup(groupId: number, customerId: number, callback?: Function): any
    getProductGroups(productId: number, opts?: any, callback?: Function): any
  }
  export class ImagesApi {
    constructor(config?: ApiClient)
    getSubscriptionCoverImage(subscriptionId: number, callback?: Function): Promise<Image>
    uploadSubscriptionCover(subscriptionId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getProductCoverImage(productId: number, callback?: Function): Promise<Image>
    uploadProductCover(productId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getDirectorCoverImage(directorId: number, callback?: Function): Promise<Image>
    uploadDirectorCover(directorId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getActorCoverImage(actorId: number, callback?: Function): Promise<Image>
    uploadActorCover(actorId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getCategoryBanner(categoryId: number, callback?: Function): Promise<Image>
    getSliderImage(): any
    getVideoCover(videoId: number, callback?: Function): Promise<Image>
    getProductScreenshots(productId: number, callback?: Function): any
    getProductImages(productId: number, opts?: any, callback?: Function): any
    uploadCategoryCover(categoryId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
  }
  export class SubscriptionsApi {
    constructor(config?: ApiClient)
    getSubscriptionCoverImage(subscriptionId: number, callback?: Function): Promise<Image>
    uploadSubscriptionCover(subscriptionId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    getProductSubscription(productId: number, callback?: Function): Promise<Subscription>
    getSubscriptions(opts?: any, callback?: Function): any
    getSubscription(subscriptionId: number, callback?: Function): Promise<Subscription>
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): any
    attachCategoriesToSubscription(subscriptionId: number, categoryIds: string, callback?: Function): any
    detachCategoryFromSubscription(subscriptionId: number, categoryId: number, callback?: Function): any
    getDisabledSubscriptions(videoId: number, opts?: any, callback?: Function): any
  }
  export class WidgetsApi {
    constructor(config?: ApiClient)
    getSliderImage(): any
    getWidgetTopMenu(opts?: any, callback?: Function): any
    getWidgetFooterMenu(opts?: any, callback?: Function): any
    getWidgetSlider(opts?: any, callback?: Function): any
    getWidgetSliderItem(sliderId: number, callback?: Function): Promise<WidgetSlider>
    getWidgetAnalytics(): any
    getWidgetHookPhrase(opts?: any, callback?: Function): any
  }
  export class LanguagesApi {
    constructor(config?: ApiClient)
    getLanguages(opts?: any, callback?: Function): any
  }
  export class MediaFilesApi {
    constructor(config?: ApiClient)
    getMediaFile(mediaFileId: number, callback?: Function): Promise<MediaFile>
    getMediaSourceFiles(sourceId: number, opts?: any, callback?: Function): any
    postMediaSourceFiles(sourceId: number, body: any, callback?: Function): Promise<MediaFile>
  }
  export class MediaSourcesApi {
    constructor(config?: ApiClient)
    getMediaSources(opts?: any, callback?: Function): any
    getMediaSource(sourceId: number, callback?: Function): Promise<MediaSource>
    getMediaSourceFiles(sourceId: number, opts?: any, callback?: Function): any
    postMediaSourceFiles(sourceId: number, body: any, callback?: Function): Promise<MediaFile>
  }
  export class OrderHistoriesApi {
    constructor(config?: ApiClient)
    getOrderHistories(orderId: number, opts?: any, callback?: Function): any
  }
  export class OrderStatesApi {
    constructor(config?: ApiClient)
    getOrderStates(opts?: any, callback?: Function): any
    getOrderState(orderStateId: number, callback?: Function): Promise<OrderState>
  }
  export class PagesApi {
    constructor(config?: ApiClient)
    getPages(opts?: any, callback?: Function): any
    getPage(pageId: number, callback?: Function): Promise<Page>
  }
  export class PlaylistsApi {
    constructor(config?: ApiClient)
    getPlaylists(opts?: any, callback?: Function): any
    createPlaylist(customerId: number, name: string, callback?: Function): Promise<Playlist>
    getCustomerPlaylists(customerId: number, opts?: any, callback?: Function): any
    getPlaylist(playlistId: number, callback?: Function): Promise<Playlist>
    updatePlaylist(playlistId: number, body: any, callback?: Function): Promise<Playlist>
    deletePlaylist(playlistId: number, callback?: Function): any
    getPlaylistBookmarks(playlistId: number, opts?: any, callback?: Function): any
    attachBookmarkToPlaylist(playlistId: number, productId: number, callback?: Function): any
    detachBookmarkFromPlaylist(playlistId: number, productId: number, callback?: Function): any
  }
  export class PrepaymentsApi {
    constructor(config?: ApiClient)
    getCustomerPrepaymentBalances(customerId: number, callback?: Function): any
    getCustomerPrepaymentOperations(customerId: number, opts?: any, callback?: Function): any
    getPrepaymentOperations(opts?: any, callback?: Function): any
    getPrepaymentOperation(prepaymentOperationId: number, callback?: Function): Promise<PrepaymentOperation>
    getPrepaymentBonusList(opts?: any, callback?: Function): any
    getPrepaymentBonus(prepaymentBonusId: number, callback?: Function): Promise<PrepaymentBonus>
    getPrepaymentRecharges(opts?: any, callback?: Function): any
    getPrepaymentRecharge(prepaymentRechargeId: number, callback?: Function): Promise<PrepaymentRecharge>
  }
  export class ProductAccessesApi {
    constructor(config?: ApiClient)
    getProductAccesses(opts?: any, callback?: Function): any
    createProductAccess(body: any, callback?: Function): Promise<ProductAccess>
    getProductAccess(productAccessId: number, callback?: Function): Promise<ProductAccess>
    updateProductAccess(productAccessId: number, body: any, callback?: Function): Promise<ProductAccess>
    deleteProductAccess(productAccessId: number, callback?: Function): any
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): any
    unsubscribe(productAccessId: number, opts?: any, callback?: Function): any
    subscribe(productAccessId: number, callback?: Function): any
    switchSubscriptionPending(productAccessId: string, callback?: Function): Promise<Subscription>
    switchSubscription(productAccessId: string, subscriptionId: number, callback?: Function): any
    switchSubscriptionDelete(productAccessId: number, callback?: Function): any
  }
  export class VideoGroupsApi {
    constructor(config?: ApiClient)
    getVideoGroupsFromProduct(productId: number, opts?: any, callback?: Function): any
    getVideoGroups(opts?: any, callback?: Function): any
    getVideoGroup(videoGroupId: number, callback?: Function): Promise<VideoGroup>
  }
  export class SubtitlesApi {
    constructor(config?: ApiClient)
    getSubtitles(opts?: any, callback?: Function): any
  }
  export class SupportApi {
    constructor(config?: ApiClient)
    createMessage(idLang: number, email: string, idContact: number, message: string, opts?: any, callback?: Function): Promise<Support>
    getContacts(opts?: any, callback?: Function): any
  }
  export class TasksApi {
    constructor(config?: ApiClient)
    createTask(body: any, callback?: Function): Promise<Task>
  }
  export class TaxRulesApi {
    constructor(config?: ApiClient)
    getTaxRules(opts?: any, callback?: Function): any
  }
  export class StatsApi {
    constructor(config?: ApiClient)
    getCustomerSessions(opts?: any, callback?: Function): any
    getCustomerSessionsMultiple(customerId: number, body: any, callback?: Function): any
    getCustomerVideoStats(customerId: number, opts?: any, callback?: Function): any
    getCustomerGroupTotalWatched(groupId: number, opts?: any, callback?: Function): any
    getVideoStats(opts?: any, callback?: Function): any
  }
  export class ApiClient {
    defaultHeaders: any
    basePath: string
    constructor()
  }
}