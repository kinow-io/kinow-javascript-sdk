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
    date_add: string
    date_upd: string
    active: boolean
    link_rewrite: Array<I18nField>
    description: Array<I18nField>
    image: string
    description_short: Array<I18nField>
  }
  interface Address {
    id: number
    id_customer: number
    id_country: number
    id_state: number
    company: string
    vat_number: string
    address1: string
    postcode: string
    city: string
    date_add: string
    date_upd: string
    firstname: string
    lastname: string
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
    link_rewrite: Array<I18nField>
    meta_title: Array<I18nField>
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    content: Array<I18nField>
    position: number
    id_cms_category: number
    id: number
  }
  interface Cart {
    id: number
    id_currency: number
    id_customer: number
    id_lang: number
    date_add: string
    date_upd: string
    total: number
    products: Array<Product>
    cart_rules: Array<CartRule>
    total_without_tax: number
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
    position: number
    images: object
    meta_description: Array<I18nField>
    meta_keywords: Array<I18nField>
    meta_title: Array<I18nField>
    link_rewrite: Array<I18nField>
    name: Array<I18nField>
    description: Array<I18nField>
    description_short: Array<I18nField>
  }
  interface Country {
    id: number
    iso_code: string
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
    active: boolean
    id_lang: number
    date_add: string
    date_upd: string
    max_viewing: number
    custom: string
    password: string
    id_country: number
  }
  interface CustomerGroupVideoStats {
    group_id: number
    video_id: number
    played: number
    duration: number
    views: number
  }
  interface CustomerThread {
    id: number
    id_land: number
    id_contact: number
    id_customer: number
    id_order: number
    id_product: number
    status: string
    email: string
    token: string
    date_add: string
    date_upd: string
  }
  interface CustomerVideoStats {
    customer_id: number
    played: number
    duration: number
    views: number
  }
  interface Director {
    id: number
    name: string
    date_add: string
    date_upd: string
    active: boolean
    link_rewrite: Array<I18nField>
    description: Array<I18nField>
    image: string
    description_short: Array<I18nField>
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
    name: Array<I18nField>
    description: Array<I18nField>
    cover: string
    thumbnail: string
  }
  interface Feature {
    id: number
    position: number
    name: string
  }
  interface FeatureValue {
    id: number
    id_feature: number
    custom: boolean
    value: Array<I18nField>
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
  interface Group {
    id: number
    name: Array<I18nField>
    date_add: string
    date_upd: string
  }
  interface Image {
    id: number
    source: string
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
    tokenType: string
  }
  interface PaymentModule {
    id: number
    name: string
    displayName: string
    description: string
  }
  interface Product {
    id: number
    reference: string
    date_from: string
    date_to: string
    price: number
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
    sub: boolean
    has_group_restriction: boolean
    group_restriction_behavior: number
    geoloc_enabled: boolean
    behavior_detected_countries: string
    behavior_non_detected_countries: string
    id_product_attribute: number
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
  }
  interface ProductAttribute {
    id: number
    price: number
    active: number
    type: number
  }
  interface Screenshot {
    id: number
    source: string
    position: number
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
    src: string
    srclang: string
    label: string
    name: string
    font: string
    size: number
    color: string
    text_shadow: string
    italic_color: boolean
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
  interface Video {
    id: number
    id_product: number
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
  export class ActorsApi {
    constructor(config?: ApiClient)
    getActors(opts?: any, callback?: Function): any
    createActor(body: any, callback?: Function): Promise<Actor>
    getActor(actorId: number, opts?: any, callback?: Function): Promise<Actor>
    updateActor(actorId: number, body: any, callback?: Function): any
    deleteActor(actorId: number, callback?: Function): any
    getProductActors(productId: number, opts?: any, callback?: Function): any
  }
  export class AddressApi {
    constructor(config?: ApiClient)
    updateAddress(addressId: number, body: any, callback?: Function): Promise<Address>
    getCustomerAddress(customerId: number, callback?: Function): Promise<Address>
  }
  export class AttributesApi {
    constructor(config?: ApiClient)
    createProductAttribute(body: any, callback?: Function): Promise<ProductAttribute>
    updateProductAttribute(attributeId: number, body: any, callback?: Function): Promise<ProductAttribute>
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
    getCart(cartId: number, callback?: Function): Promise<Cart>
    updateCart(cartId: number, body: any, callback?: Function): Promise<Cart>
    deleteCart(cartId: number, callback?: Function): any
    createCart(opts?: any, callback?: Function): Promise<Cart>
    attachCartRuleToCart(cartId: number, code: string, callback?: Function): any
    addProductToCart(cartId: number, productId: number, opts?: any, callback?: Function): Promise<Cart>
    deleteProductFromCart(cartId: number, productId: number, opts?: any, callback?: Function): any
    validateFreeOrder(cartId: number, callback?: Function): any
    getCustomerCarts(customerId: number, opts?: any, callback?: Function): any
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<Cart>
    getLastCart(customerId: number, callback?: Function): Promise<Cart>
    getPaymentUrl(cartId: number, paymentName: string, callback?: Function): any
    validateCart(cartId: number, paymentName: string, paymentArguments: any, callback?: Function): any
  }
  export class CartRulesApi {
    constructor(config?: ApiClient)
    attachCartRuleToCart(cartId: number, code: string, callback?: Function): any
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
    validateCart(cartId: number, paymentName: string, paymentArguments: any, callback?: Function): any
  }
  export class CustomersApi {
    constructor(config?: ApiClient)
    attachCartToCustomer(customerId: number, cartId: number, callback?: Function): Promise<Cart>
    getCustomers(opts?: any, callback?: Function): any
    createCustomer(body: any, callback?: Function): Promise<Customer>
    getCustomer(customerId: number, callback?: Function): Promise<Customer>
    updateCustomer(customerId: number, body: any, callback?: Function): Promise<Customer>
    deleteCustomer(customerId: number, callback?: Function): any
    getCustomerOrders(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): any
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerCanSeeProduct(customerId: number, productId: number, callback?: Function): any
    getCustomerAddress(customerId: number, callback?: Function): Promise<Address>
    checkCustomerCredentials(email: string, password: string, callback?: Function): Promise<Customer>
    generateAuthenticationToken(customerId: number, callback?: Function): any
    getCustomerCurrentViews(customerId: number, callback?: Function): any
    getCustomerGroups(customerId: number, opts?: any, callback?: Function): any
    getFacebookCustomer(facebookId: number, callback?: Function): any
    createFacebookId(customerId: number, facebookId: string, callback?: Function): any
    getPaymentCustomerId(customerId: number, paymentName: string, callback?: Function): any
  }
  export class CategoriesApi {
    constructor(config?: ApiClient)
    getCategories(opts?: any, callback?: Function): any
    createCategory(body: any, callback?: Function): Promise<Category>
    getCategory(categoryId: number, callback?: Function): Promise<Category>
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): any
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): any
    getAvailableCategory(categoryId: number, opts?: any, callback?: Function): Promise<Category>
    getCategoriesFromCategory(categoryId: number, opts?: any, callback?: Function): any
    getCategoryBanner(categoryId: number, callback?: Function): Promise<Image>
    getProductCategories(productId: number, opts?: any, callback?: Function): any
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): any
  }
  export class ProductsApi {
    constructor(config?: ApiClient)
    getCategoryProducts(categoryId: number, opts?: any, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getProductCoverImage(productId: number, callback?: Function): Promise<Image>
    getProducts(opts?: any, callback?: Function): any
    createProduct(body: any, callback?: Function): Promise<Product>
    getProduct(productId: number, callback?: Function): Promise<Product>
    updateProduct(productId: number, body: any, callback?: Function): Promise<Product>
    deleteProduct(productId: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): any
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
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
    detachProductFromDirector(productId: number, directorId: number, callback?: Function): any
    getProductActors(productId: number, opts?: any, callback?: Function): any
    attachProductToActor(productId: number, actorId: number, callback?: Function): any
    detachProductFromActor(productId: number, actorId: number, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    searchProducts(searchQuery: string, opts?: any, callback?: Function): any
    getProductCategories(productId: number, opts?: any, callback?: Function): any
    attachProductToCategory(productId: number, categoryId: number, callback?: Function): any
    detachProductFromCategory(productId: number, categoryId: number, callback?: Function): any
    getProductsFromProduct(productId: number, opts?: any, callback?: Function): any
    getProductGroups(productId: number, opts?: any, callback?: Function): any
    attachProductToGroup(productId: number, groupId: number, callback?: Function): any
    detachProductFromGroup(productId: number, groupId: number, callback?: Function): any
    updateProductGroupRestrictionBehavior(productId: number, behavior: number, callback?: Function): any
  }
  export class FeaturesApi {
    constructor(config?: ApiClient)
    getCategoryFeatures(categoryId: number, opts?: any, callback?: Function): any
    getFeatures(opts?: any, callback?: Function): any
    getFeatureValues(opts?: any, callback?: Function): any
    getProductFeatures(productId: number, opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    getVideoFeatures(videoId: number, opts?: any, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class AccessesApi {
    constructor(config?: ApiClient)
    getAvailableCategory(categoryId: number, opts?: any, callback?: Function): Promise<Category>
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    getCustomerHasAccessToProduct(customerId: number, productId: number, callback?: Function): any
    getProductAvailability(productId: number, callback?: Function): any
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
    getOrderInvoice(orderId: number, callback?: Function): any
    getOrderHistories(orderId: number, opts?: any, callback?: Function): any
  }
  export class ProductAccessesApi {
    constructor(config?: ApiClient)
    getCustomerAccessesVideos(customerId: number, opts?: any, callback?: Function): any
    getCustomerAccessesSubscriptions(customerId: number, opts?: any, callback?: Function): any
    getProductAccesses(opts?: any, callback?: Function): any
    createProductAccess(body: any, callback?: Function): Promise<ProductAccess>
    getProductAccess(productAccessId: number, callback?: Function): Promise<ProductAccess>
    updateProductAccess(productAccessId: number, body: any, callback?: Function): Promise<ProductAccess>
    deleteProductAccess(productAccessId: number, callback?: Function): any
    stopSubscription(customerId: number, productAccessId: string, callback?: Function): any
  }
  export class VideosApi {
    constructor(config?: ApiClient)
    getCustomerHasAccessToVideo(customerId: number, videoId: number, callback?: Function): any
    attachCoverToVideo(videoId: number, idImage: number, callback?: Function): any
    getVideosFromProduct(productId: number, opts?: any, callback?: Function): any
    attachVideoToProduct(productId: number, videoId: number, callback?: Function): any
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
  export class CustomerThreadsApi {
    constructor(config?: ApiClient)
    getCustomerThreads(opts?: any, callback?: Function): any
    getCustomerThread(customerThreadId: number, callback?: Function): Promise<CustomerThread>
  }
  export class DirectorsApi {
    constructor(config?: ApiClient)
    getDirectors(opts?: any, callback?: Function): any
    createDirector(body: any, callback?: Function): Promise<Director>
    getDirector(directorId: number, opts?: any, callback?: Function): Promise<Director>
    updateDirector(directorId: number, body: any, callback?: Function): any
    deleteDirector(directorId: number, callback?: Function): any
    getProductDirectors(productId: number, opts?: any, callback?: Function): any
  }
  export class ExtractsApi {
    constructor(config?: ApiClient)
    createExtract(body: any, callback?: Function): Promise<Extract>
    updateExtract(extractId: number, body: any, callback?: Function): Promise<Extract>
    deleteExtract(extractId: number, callback?: Function): any
    getExtractPlayer(extractId: number, callback?: Function): any
    attachCoverToExtract(extractId: number, idImage: number, callback?: Function): any
    getProductExtracts(productId: number, opts?: any, callback?: Function): any
  }
  export class FeatureValuesApi {
    constructor(config?: ApiClient)
    getFeatureValues(opts?: any, callback?: Function): any
    attachFeaturesToProduct(productId: number, features: string, callback?: Function): any
    detachFeatureToProduct(productId: number, featureId: number, callback?: Function): any
    attachFeaturesToVideo(videoId: number, features: string, callback?: Function): any
  }
  export class GendersApi {
    constructor(config?: ApiClient)
    getGenders(opts?: any, callback?: Function): any
  }
  export class GeolocationsApi {
    constructor(config?: ApiClient)
    geolocations(ipAddress: string, callback?: Function): any
    getProductGeolocations(productId: number, opts?: any, callback?: Function): any
    setProductGeolocation(productId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
    getProductGeolocationsByIp(productId: number, ipAddress: string, opts?: any, callback?: Function): any
    getVideoGeolocationByIp(videoId: number, ipAddress: string, opts?: any, callback?: Function): any
    setVideoGeolocation(videoId: number, enabled: number, behaviorDetectedCountries: string, behaviorNonDetectedCountries: string, opts?: any, callback?: Function): any
  }
  export class GroupsApi {
    constructor(config?: ApiClient)
    getGroups(opts?: any, callback?: Function): any
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
    getIntroImage(): any
    getVideoCover(videoId: number, callback?: Function): Promise<Image>
    getProductScreenshots(productId: number, callback?: Function): any
    uploadProductScreenshots(productId: number, file: File, hash: string, opts?: any, callback?: Function): any
    getProductImages(productId: number, opts?: any, callback?: Function): any
    uploadCategoryBanner(categoryId: number, file: File, hash: string, opts?: any, callback?: Function): Promise<Image>
    uploadProductScreenshot(productId: number, imageId: number, opts?: any, callback?: Function): Promise<Screenshot>
    deleteProductScreenshot(productId: number, imageId: number, callback?: Function): any
  }
  export class SubscriptionsApi {
    constructor(config?: ApiClient)
    getSubscriptionCoverImage(subscriptionId: number, callback?: Function): Promise<Image>
    getSubscriptions(opts?: any, callback?: Function): any
    getSubscription(subscriptionId: number, callback?: Function): Promise<Subscription>
    getSubscriptionCategories(subscriptionId: number, opts?: any, callback?: Function): any
    getDisabledSubscriptions(videoId: number, opts?: any, callback?: Function): any
  }
  export class WidgetsApi {
    constructor(config?: ApiClient)
    getIntroImage(): any
    getWidgetTopMenu(opts?: any, callback?: Function): any
    getWidgetFooterMenu(opts?: any, callback?: Function): any
    getWidgetSlider(opts?: any, callback?: Function): any
    getWidgetSliderItem(sliderId: number, callback?: Function): Promise<WidgetSlider>
  }
  export class LanguagesApi {
    constructor(config?: ApiClient)
    getLanguages(opts?: any, callback?: Function): any
  }
  export class MediaSourcesApi {
    constructor(config?: ApiClient)
    getMediaSources(opts?: any, callback?: Function): any
    getMediaSource(sourceId: number, callback?: Function): Promise<MediaSource>
    getMediaSourceFiles(sourceId: number, opts?: any, callback?: Function): any
    postMediaSourceFiles(sourceId: number, body: any, callback?: Function): Promise<MediaFile>
  }
  export class MediaFilesApi {
    constructor(config?: ApiClient)
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
  export class TasksApi {
    constructor(config?: ApiClient)
    createTask(body: any, callback?: Function): Promise<Task>
  }
  export class StatsApi {
    constructor(config?: ApiClient)
    getCustomerSessions(opts?: any, callback?: Function): any
    getCustomerVideoStats(customerId: number, opts?: any, callback?: Function): any
    getCustomerGroupTotalWatched(groupId: number, videoId: number, opts?: any, callback?: Function): any
    getVideoStats(opts?: any, callback?: Function): any
  }
  export class OAuthApi {
    constructor(config?: ApiClient)
    getToken(clientId: string, clientSecret: string, callback?: Function): any
  }
  export class ApiClient {
    defaultHeaders: any
    basePath: string
    constructor()
  }
}