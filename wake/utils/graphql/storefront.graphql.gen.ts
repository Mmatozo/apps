export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  CEP: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Uuid: { input: any; output: any; }
};

/** Price alert input parameters. */
export type AddPriceAlertInput = {
  /** The alerted's email. */
  email: Scalars['String']['input'];
  /** The alerted's name. */
  name: Scalars['String']['input'];
  /** The product variant id to create the price alert. */
  productVariantId: Scalars['Long']['input'];
  /** [Deprecated: use the root field] The google recaptcha token. */
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  /** The target price to alert. */
  targetPrice: Scalars['Decimal']['input'];
};

export type AddressNode = {
  /** Zip code. */
  cep?: Maybe<Scalars['String']['output']>;
  /** Address city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Address country. */
  country?: Maybe<Scalars['String']['output']>;
  /** Address neighborhood. */
  neighborhood?: Maybe<Scalars['String']['output']>;
  /** Address state. */
  state?: Maybe<Scalars['String']['output']>;
  /** Address street. */
  street?: Maybe<Scalars['String']['output']>;
};

export type Answer = {
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ApplyPolicy =
  | 'AFTER_RESOLVER'
  | 'BEFORE_RESOLVER';

/** Attributes available for the variant products from the given productId. */
export type Attribute = Node & {
  /** The id of the attribute. */
  attributeId: Scalars['Long']['output'];
  /** The display type of the attribute. */
  displayType?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the attribute. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the attribute. */
  type?: Maybe<Scalars['String']['output']>;
  /** The values of the attribute. */
  values?: Maybe<Array<Maybe<AttributeValue>>>;
};

export type AttributeFilterInput = {
  attributeId: Scalars['Long']['input'];
  value: Scalars['String']['input'];
};

/** Input to specify which attributes to match. */
export type AttributeInput = {
  /** The attribute Ids to match. */
  id?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The attribute name to match. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The attribute type to match. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The attribute value to match */
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AttributeMatrix = {
  /** Information about the column attribute. */
  column?: Maybe<AttributeMatrixInfo>;
  /** The matrix products data. List of rows. */
  data?: Maybe<Array<Maybe<Array<Maybe<AttributeMatrixProduct>>>>>;
  /** Information about the row attribute. */
  row?: Maybe<AttributeMatrixInfo>;
};

export type AttributeMatrixInfo = {
  displayType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<AttributeMatrixRowColumnInfoValue>>>;
};

export type AttributeMatrixProduct = {
  available: Scalars['Boolean']['output'];
  productVariantId: Scalars['Long']['output'];
  stock: Scalars['Long']['output'];
};

export type AttributeMatrixRowColumnInfoValue = {
  printUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


export type AttributeMatrixRowColumnInfoValuePrintUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Attributes available for the variant products from the given productId. */
export type AttributeSelection = {
  /** Check if the current product attributes can be rendered as a matrix. */
  canBeMatrix: Scalars['Boolean']['output'];
  /** The candidate variant given the current input filters. Variant may be from brother product Id. */
  candidateVariant?: Maybe<ProductVariant>;
  /** Informations about the attribute matrix. */
  matrix?: Maybe<AttributeMatrix>;
  /** The selected variant given the current input filters. Variant may be from brother product Id. */
  selectedVariant?: Maybe<ProductVariant>;
  /** Attributes available for the variant products from the given productId. */
  selections?: Maybe<Array<Maybe<AttributeSelectionOption>>>;
};

/** Attributes available for the variant products from the given productId. */
export type AttributeSelectionOption = {
  /** The id of the attribute. */
  attributeId: Scalars['Long']['output'];
  /** The display type of the attribute. */
  displayType?: Maybe<Scalars['String']['output']>;
  /** The name of the attribute. */
  name?: Maybe<Scalars['String']['output']>;
  /** The values of the attribute. */
  values?: Maybe<Array<Maybe<AttributeSelectionOptionValue>>>;
  /** If the attributes varies by parent. */
  varyByParent: Scalars['Boolean']['output'];
};

export type AttributeSelectionOptionValue = {
  alias?: Maybe<Scalars['String']['output']>;
  available: Scalars['Boolean']['output'];
  printUrl?: Maybe<Scalars['String']['output']>;
  selected: Scalars['Boolean']['output'];
  /** The value of the attribute. */
  value?: Maybe<Scalars['String']['output']>;
};


export type AttributeSelectionOptionValuePrintUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Attributes values with variants */
export type AttributeValue = {
  /** Product variants that have the attribute. */
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  /** The value of the attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Get query completion suggestion. */
export type Autocomplete = {
  /** Suggested products based on the current query. */
  products?: Maybe<Array<Maybe<Product>>>;
  /** List of possible query completions. */
  suggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A banner is usually an image used to show sales, highlight products, announcements or to redirect to another page or hotsite on click. */
export type Banner = Node & {
  /** Banner's alternative text. */
  altText?: Maybe<Scalars['String']['output']>;
  /** Banner unique identifier. */
  bannerId: Scalars['Long']['output'];
  /** Banner's name. */
  bannerName?: Maybe<Scalars['String']['output']>;
  /** URL where the banner is stored. */
  bannerUrl?: Maybe<Scalars['String']['output']>;
  /** The date the banner was created. */
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Field to check if the banner should be displayed on all pages. */
  displayOnAllPages: Scalars['Boolean']['output'];
  /** Field to check if the banner should be displayed on category pages. */
  displayOnCategories: Scalars['Boolean']['output'];
  /** Field to check if the banner should be displayed on search pages. */
  displayOnSearches: Scalars['Boolean']['output'];
  /** Field to check if the banner should be displayed on the website. */
  displayOnWebsite: Scalars['Boolean']['output'];
  /** Field to check if the banner should be displayed to partners. */
  displayToPartners: Scalars['Boolean']['output'];
  /** The banner's height in px. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Field to check if the banner URL should open in another tab on click. */
  openNewTab: Scalars['Boolean']['output'];
  /** The displaying order of the banner. */
  order: Scalars['Int']['output'];
  /** The displaying position of the banner. */
  position?: Maybe<Scalars['String']['output']>;
  /** A list of terms to display the banner on search. */
  searchTerms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The banner's title. */
  title?: Maybe<Scalars['String']['output']>;
  /** URL to be redirected on click. */
  urlOnClick?: Maybe<Scalars['String']['output']>;
  /** The banner's width in px. */
  width?: Maybe<Scalars['Int']['output']>;
};

/** Define the banner attribute which the result set will be sorted on. */
export type BannerSortKeys =
  /** The banner's creation date. */
  | 'CREATION_DATE'
  /** The banner's unique identifier. */
  | 'ID';

/** A connection to a list of items. */
export type BannersConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<BannersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Banner>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BannersEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Banner>;
};

export type BestInstallment = {
  /** Wether the installment has discount. */
  discount: Scalars['Boolean']['output'];
  /** The custom display name of the best installment plan option. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Wether the installment has fees. */
  fees: Scalars['Boolean']['output'];
  /** The name of the best installment plan option. */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of installments. */
  number: Scalars['Int']['output'];
  /** The value of the installment. */
  value: Scalars['Decimal']['output'];
};

/** Informations about brands and its products. */
export type Brand = Node & {
  /** If the brand is active at the platform. */
  active: Scalars['Boolean']['output'];
  /** The alias for the brand's hotsite. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Brand unique identifier. */
  brandId: Scalars['Long']['output'];
  /** The date the brand was created in the database. */
  createdAt: Scalars['DateTime']['output'];
  /** The full brand logo URL. */
  fullUrlLogo?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The brand's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of products from the brand. */
  products?: Maybe<ProductsConnection>;
  /** The last update date. */
  updatedAt: Scalars['DateTime']['output'];
  /** A web address to be redirected. */
  urlCarrossel?: Maybe<Scalars['String']['output']>;
  /** A web address linked to the brand. */
  urlLink?: Maybe<Scalars['String']['output']>;
  /** The url of the brand's logo. */
  urlLogo?: Maybe<Scalars['String']['output']>;
};


/** Informations about brands and its products. */
export type BrandFullUrlLogoArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Informations about brands and its products. */
export type BrandProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ProductSortKeys;
};

/** Filter brand results based on giving attributes. */
export type BrandFilterInput = {
  /** Its unique identifier (you may provide a list of IDs if needed). */
  brandIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** Its brand group unique identifier (you may provide a list of IDs if needed). */
  groupIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The set of group brand names which the result item name must be included in. */
  groupNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The set of brand names which the result item name must be included in. */
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Define the brand attribute which the result set will be sorted on. */
export type BrandSortKeys =
  /** The brand unique identifier. */
  | 'ID'
  /** The brand name. */
  | 'NAME';

/** A connection to a list of items. */
export type BrandsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<BrandsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Brand>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type BrandsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Brand>;
};

/** Informations about breadcrumb. */
export type Breadcrumb = {
  /** Breadcrumb link. */
  link?: Maybe<Scalars['String']['output']>;
  /** Breadcrumb text. */
  text?: Maybe<Scalars['String']['output']>;
};

/** BuyBox informations. */
export type BuyBox = {
  /** List of the possibles installment plans. */
  installmentPlans?: Maybe<Array<Maybe<InstallmentPlan>>>;
  /** Maximum price among sellers. */
  maximumPrice?: Maybe<Scalars['Decimal']['output']>;
  /** Minimum price among sellers. */
  minimumPrice?: Maybe<Scalars['Decimal']['output']>;
  /** Quantity of offers. */
  quantityOffers?: Maybe<Scalars['Int']['output']>;
  /** List of sellers. */
  sellers?: Maybe<Array<Maybe<Seller>>>;
};

/** A buy list represents a list of items for sale in the store. */
export type BuyList = Node & {
  /** Check if the product can be added to cart directly from spot. */
  addToCartFromSpot?: Maybe<Scalars['Boolean']['output']>;
  /** The product url alias. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Information about the possible selection attributes. */
  attributeSelections?: Maybe<AttributeSelection>;
  /** List of the product attributes. */
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /** The product author. */
  author?: Maybe<Scalars['String']['output']>;
  /** Field to check if the product is available in stock. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** The product average rating. From 0 to 5. */
  averageRating?: Maybe<Scalars['Int']['output']>;
  /** List of product breadcrumbs. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** BuyBox informations. */
  buyBox?: Maybe<BuyBox>;
  buyListId: Scalars['Int']['output'];
  buyListProducts?: Maybe<Array<Maybe<BuyListProduct>>>;
  /** Buy together products. */
  buyTogether?: Maybe<Array<Maybe<SingleProduct>>>;
  /** Buy together groups products. */
  buyTogetherGroups?: Maybe<Array<Maybe<BuyTogetherGroup>>>;
  /** The product collection. */
  collection?: Maybe<Scalars['String']['output']>;
  /** The product condition. */
  condition?: Maybe<Scalars['String']['output']>;
  /** The product creation date. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of customizations available for the given products. */
  customizations?: Maybe<Array<Maybe<Customization>>>;
  /** The product delivery deadline. */
  deadline?: Maybe<Scalars['Int']['output']>;
  /** Product deadline alert informations. */
  deadlineAlert?: Maybe<DeadlineAlert>;
  /** Check if the product should be displayed. */
  display?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed only for partners. */
  displayOnlyPartner?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed on search. */
  displaySearch?: Maybe<Scalars['Boolean']['output']>;
  /** The product's unique EAN. */
  ean?: Maybe<Scalars['String']['output']>;
  /** Check if the product offers free shipping. */
  freeShipping?: Maybe<Scalars['Boolean']['output']>;
  /** The product gender. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** List of the product images. */
  images?: Maybe<Array<Maybe<Image>>>;
  /** List of the product insformations. */
  informations?: Maybe<Array<Maybe<Information>>>;
  kit: Scalars['Boolean']['output'];
  /** Check if its the main variant. */
  mainVariant?: Maybe<Scalars['Boolean']['output']>;
  /** The product maximum quantity for an order. */
  maximumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** The product minimum quantity for an order. */
  minimumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** Check if the product is a new release. */
  newRelease?: Maybe<Scalars['Boolean']['output']>;
  /** The number of votes that the average rating consists of. */
  numberOfVotes?: Maybe<Scalars['Int']['output']>;
  /** Product parallel options information. */
  parallelOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Parent product unique identifier. */
  parentId?: Maybe<Scalars['Long']['output']>;
  /** The product prices. */
  prices?: Maybe<Prices>;
  /** Summarized informations about the brand of the product. */
  productBrand?: Maybe<ProductBrand>;
  /** Summarized informations about the categories of the product. */
  productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Product unique identifier. */
  productId?: Maybe<Scalars['Long']['output']>;
  /** The product name. */
  productName?: Maybe<Scalars['String']['output']>;
  /**
   * Summarized informations about the subscription of the product.
   * @deprecated Use subscriptionGroups to get subscription information.
   */
  productSubscription?: Maybe<ProductSubscription>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
  /** List of promotions this product belongs to. */
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  /** The product publisher */
  publisher?: Maybe<Scalars['String']['output']>;
  /** List of customer reviews for this product. */
  reviews?: Maybe<Array<Maybe<Review>>>;
  /** The product seller. */
  seller?: Maybe<Seller>;
  /** Product SEO informations. */
  seo?: Maybe<Array<Maybe<Seo>>>;
  /** List of similar products.  */
  similarProducts?: Maybe<Array<Maybe<SimilarProduct>>>;
  /** The product's unique SKU. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The values of the spot attribute. */
  spotAttributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The product spot information. */
  spotInformation?: Maybe<Scalars['String']['output']>;
  /** Check if the product is on spotlight. */
  spotlight?: Maybe<Scalars['Boolean']['output']>;
  /** The available aggregated product stock (all variants) at the default distribution center. */
  stock?: Maybe<Scalars['Long']['output']>;
  /** List of the product stocks on different distribution centers. */
  stocks?: Maybe<Array<Maybe<Stock>>>;
  /** List of subscription groups this product belongs to. */
  subscriptionGroups?: Maybe<Array<Maybe<SubscriptionGroup>>>;
  /** Check if the product is a telesale. */
  telesales?: Maybe<Scalars['Boolean']['output']>;
  /** The product last update date. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The product video url. */
  urlVideo?: Maybe<Scalars['String']['output']>;
  /** The variant name. */
  variantName?: Maybe<Scalars['String']['output']>;
  /** The available aggregated variant stock at the default distribution center. */
  variantStock?: Maybe<Scalars['Long']['output']>;
};


/** A buy list represents a list of items for sale in the store. */
export type BuyListImagesArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains the id and quantity of a product in the buy list. */
export type BuyListProduct = {
  price?: Maybe<Scalars['Decimal']['output']>;
  productId: Scalars['Long']['output'];
  quantity: Scalars['Int']['output'];
};

/** BuyTogetherGroups informations. */
export type BuyTogetherGroup = {
  /** BuyTogether name */
  name?: Maybe<Scalars['String']['output']>;
  /** BuyTogether products */
  products?: Maybe<Array<Maybe<SingleProduct>>>;
  /** BuyTogether type */
  type: BuyTogetherType;
};

export type BuyTogetherType =
  | 'CAROUSEL'
  | 'PRODUCT';

/** The products to calculate prices. */
export type CalculatePricesProductsInput = {
  productVariantId: Scalars['Long']['input'];
  quantity: Scalars['Int']['input'];
};

/** A connection to a list of items. */
export type CategoriesConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<CategoriesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoriesEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Category>;
};

/** Categories are used to arrange your products into different sections by similarity. */
export type Category = Node & {
  /** Category unique identifier. */
  categoryId: Scalars['Long']['output'];
  /** A list of child categories, if it exists. */
  children?: Maybe<Array<Maybe<Category>>>;
  /** A description to the category. */
  description?: Maybe<Scalars['String']['output']>;
  /** Field to check if the category is displayed in the store's menu. */
  displayMenu: Scalars['Boolean']['output'];
  /** The hotsite alias. */
  hotsiteAlias?: Maybe<Scalars['String']['output']>;
  /** The URL path for the category. */
  hotsiteUrl?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The url to access the image linked to the category. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The web address to access the image linked to the category. */
  imageUrlLink?: Maybe<Scalars['String']['output']>;
  /** The category's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The parent category, if it exists. */
  parent?: Maybe<Category>;
  /** The parent category unique identifier. */
  parentCategoryId: Scalars['Long']['output'];
  /** The position the category will be displayed. */
  position: Scalars['Int']['output'];
  /** A list of products associated with the category. */
  products?: Maybe<ProductsConnection>;
  /** A web address linked to the category. */
  urlLink?: Maybe<Scalars['String']['output']>;
};


/** Categories are used to arrange your products into different sections by similarity. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ProductSortKeys;
};

/** Define the category attribute which the result set will be sorted on. */
export type CategorySortKeys =
  /** The category unique identifier. */
  | 'ID'
  /** The category name. */
  | 'NAME';

export type Checkout = Node & {
  /** The CEP. */
  cep?: Maybe<Scalars['Int']['output']>;
  /** Indicates if the checking account is being used. */
  checkingAccountActive: Scalars['Boolean']['output'];
  /** Total used from checking account. */
  checkingAccountValue?: Maybe<Scalars['Decimal']['output']>;
  /** The checkout unique identifier. */
  checkoutId: Scalars['Uuid']['output'];
  /** Indicates if the checkout is completed. */
  completed: Scalars['Boolean']['output'];
  /** The coupon for discounts. */
  coupon?: Maybe<Scalars['String']['output']>;
  /** The total coupon discount applied at checkout. */
  couponDiscount: Scalars['Decimal']['output'];
  /** The customer associated with the checkout. */
  customer?: Maybe<CheckoutCustomer>;
  /** The total value of customizations added to the products. */
  customizationValue: Scalars['Decimal']['output'];
  /** The discount applied at checkout excluding any coupons. */
  discount: Scalars['Decimal']['output'];
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  /** The metadata related to this checkout. */
  metadata?: Maybe<Array<Maybe<Metadata>>>;
  /** The checkout orders informations. */
  orders?: Maybe<Array<Maybe<CheckoutOrder>>>;
  /** The additional fees applied based on the payment method. */
  paymentFees: Scalars['Decimal']['output'];
  /** A list of products associated with the checkout. */
  products?: Maybe<Array<Maybe<CheckoutProductNode>>>;
  /** The selected delivery address for the checkout. */
  selectedAddress?: Maybe<CheckoutAddress>;
  /** The selected payment method */
  selectedPaymentMethod?: Maybe<SelectedPaymentMethod>;
  /** Selected Shipping. */
  selectedShipping?: Maybe<ShippingNode>;
  /** Selected shipping quote groups. */
  selectedShippingGroups?: Maybe<Array<Maybe<CheckoutShippingQuoteGroupNode>>>;
  /** The shipping fee. */
  shippingFee: Scalars['Decimal']['output'];
  /** The subtotal value. */
  subtotal: Scalars['Decimal']['output'];
  /** The total value. */
  total: Scalars['Decimal']['output'];
  /** The total discount applied at checkout. */
  totalDiscount: Scalars['Decimal']['output'];
  /** The last update date. */
  updateDate: Scalars['DateTime']['output'];
  /** Url for the current checkout id. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Represents an address node in the checkout. */
export type CheckoutAddress = {
  /** The street number of the address. */
  addressNumber?: Maybe<Scalars['String']['output']>;
  /** The ZIP code of the address. */
  cep: Scalars['Int']['output'];
  /** The city of the address. */
  city?: Maybe<Scalars['String']['output']>;
  /** The additional address information. */
  complement?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The neighborhood of the address. */
  neighborhood?: Maybe<Scalars['String']['output']>;
  /** The reference point for the address. */
  referencePoint?: Maybe<Scalars['String']['output']>;
  /** The state of the address. */
  state?: Maybe<Scalars['String']['output']>;
  /** The street name of the address. */
  street?: Maybe<Scalars['String']['output']>;
};

/** Represents a customer node in the checkout. */
export type CheckoutCustomer = {
  /** Customer's checking account balance. */
  checkingAccountBalance?: Maybe<Scalars['Decimal']['output']>;
  /** Taxpayer identification number for businesses. */
  cnpj?: Maybe<Scalars['String']['output']>;
  /** Brazilian individual taxpayer registry identification. */
  cpf?: Maybe<Scalars['String']['output']>;
  /** Customer's unique identifier. */
  customerId: Scalars['Long']['output'];
  /** Customer's name. */
  customerName?: Maybe<Scalars['String']['output']>;
  /** The email address of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** Customer's phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type CheckoutCustomizationInput = {
  customizationId: Scalars['Long']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CheckoutLite = {
  /** Indicates if the checkout is completed. */
  completed: Scalars['Boolean']['output'];
  /** The customer ID associated with the checkout. */
  customerId?: Maybe<Scalars['Long']['output']>;
};

export type CheckoutMetadataInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a node in the checkout order. */
export type CheckoutOrder = {
  /** The list of adjustments applied to the order. */
  adjustments?: Maybe<Array<Maybe<CheckoutOrderAdjustment>>>;
  /** The date of the order. */
  date: Scalars['DateTime']['output'];
  /** Details of the delivery or store pickup. */
  delivery?: Maybe<CheckoutOrderDelivery>;
  /** The discount value of the order. */
  discountValue: Scalars['Decimal']['output'];
  /** The dispatch time text from the shop settings. */
  dispatchTimeText?: Maybe<Scalars['String']['output']>;
  /** The interest value of the order. */
  interestValue: Scalars['Decimal']['output'];
  /** The ID of the order. */
  orderId: Scalars['Long']['output'];
  /** The order status. */
  orderStatus: OrderStatus;
  /** The payment information. */
  payment?: Maybe<CheckoutOrderPayment>;
  /** The list of products in the order. */
  products?: Maybe<Array<Maybe<CheckoutOrderProduct>>>;
  /** The shipping value of the order. */
  shippingValue: Scalars['Decimal']['output'];
  /** The total value of the order. */
  totalValue: Scalars['Decimal']['output'];
};

/** The delivery or store Pickup Address. */
export type CheckoutOrderAddress = {
  /** The street address. */
  address?: Maybe<Scalars['String']['output']>;
  /** The ZIP code. */
  cep?: Maybe<Scalars['String']['output']>;
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Additional information or details about the address. */
  complement?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the order is for store pickup. */
  isPickupStore: Scalars['Boolean']['output'];
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The neighborhood. */
  neighborhood?: Maybe<Scalars['String']['output']>;
  /** . */
  pickupStoreText?: Maybe<Scalars['String']['output']>;
};

/** Represents an adjustment applied to checkout. */
export type CheckoutOrderAdjustment = {
  /** The name of the adjustment. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the adjustment. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value of the adjustment. */
  value: Scalars['Decimal']['output'];
};

/** This represents a Card payment node in the checkout order. */
export type CheckoutOrderCardPayment = {
  /** The brand card. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The interest generated by the card. */
  cardInterest: Scalars['Decimal']['output'];
  /** The installments generated for the card. */
  installments: Scalars['Int']['output'];
  /** The cardholder name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The final four numbers on the card. */
  number?: Maybe<Scalars['String']['output']>;
};

/** The delivery or store pickup details. */
export type CheckoutOrderDelivery = {
  /** The delivery or store pickup address. */
  address?: Maybe<CheckoutOrderAddress>;
  /** The cost of delivery or pickup. */
  cost: Scalars['Decimal']['output'];
  /** The estimated delivery or pickup time, in days. */
  deliveryTime: Scalars['Int']['output'];
  /** The estimated delivery or pickup time, in hours. */
  deliveryTimeInHours?: Maybe<Scalars['Int']['output']>;
  /** The name of the recipient. */
  name?: Maybe<Scalars['String']['output']>;
};

/** The invoice payment information. */
export type CheckoutOrderInvoicePayment = {
  /** The digitable line. */
  digitableLine?: Maybe<Scalars['String']['output']>;
  /** The payment link. */
  paymentLink?: Maybe<Scalars['String']['output']>;
};

/** The checkout order payment. */
export type CheckoutOrderPayment = {
  /** The card payment information. */
  card?: Maybe<CheckoutOrderCardPayment>;
  /** The bank invoice payment information. */
  invoice?: Maybe<CheckoutOrderInvoicePayment>;
  /** The name of the payment method. */
  name?: Maybe<Scalars['String']['output']>;
  /** The Pix payment information. */
  pix?: Maybe<CheckoutOrderPixPayment>;
};

/** This represents a Pix payment node in the checkout order. */
export type CheckoutOrderPixPayment = {
  /** The QR code. */
  qrCode?: Maybe<Scalars['String']['output']>;
  /** The expiration date of the QR code. */
  qrCodeExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The image URL of the QR code. */
  qrCodeUrl?: Maybe<Scalars['String']['output']>;
};

/** Represents a node in the checkout order products. */
export type CheckoutOrderProduct = {
  /** The list of adjustments applied to the product. */
  adjustments?: Maybe<Array<Maybe<CheckoutOrderProductAdjustment>>>;
  /** The list of attributes of the product. */
  attributes?: Maybe<Array<Maybe<CheckoutOrderProductAttribute>>>;
  /** The image URL of the product. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the product variant. */
  productVariantId: Scalars['Long']['output'];
  /** The quantity of the product. */
  quantity: Scalars['Int']['output'];
  /** The unit value of the product. */
  unitValue: Scalars['Decimal']['output'];
  /** The value of the product. */
  value: Scalars['Decimal']['output'];
};

/** Represents an adjustment applied to a product in the checkout order. */
export type CheckoutOrderProductAdjustment = {
  /** Additional information about the adjustment. */
  additionalInformation?: Maybe<Scalars['String']['output']>;
  /** The name of the adjustment. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the adjustment. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value of the adjustment. */
  value: Scalars['Decimal']['output'];
};

/** Represents an attribute of a product. */
export type CheckoutOrderProductAttribute = {
  /** The name of the attribute. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value of the attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CheckoutProductAdjustmentNode = {
  /** The observation referent adjustment in Product */
  observation?: Maybe<Scalars['String']['output']>;
  /** The type that was applied in product adjustment */
  type?: Maybe<Scalars['String']['output']>;
  /** The value that was applied to the product adjustment */
  value: Scalars['Decimal']['output'];
};

export type CheckoutProductAttributeNode = {
  /** The attribute name */
  name?: Maybe<Scalars['String']['output']>;
  /** The attribute type */
  type: Scalars['Int']['output'];
  /** The attribute value */
  value?: Maybe<Scalars['String']['output']>;
};

export type CheckoutProductCustomizationNode = {
  /** The available product customizations. */
  availableCustomizations?: Maybe<Array<Maybe<Customization>>>;
  /** The product customization unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The product customization values. */
  values?: Maybe<Array<Maybe<CheckoutProductCustomizationValueNode>>>;
};

export type CheckoutProductCustomizationValueNode = {
  /** The product customization cost. */
  cost: Scalars['Decimal']['output'];
  /** The product customization name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The product customization value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CheckoutProductInput = {
  id: Scalars['Uuid']['input'];
  products: Array<InputMaybe<CheckoutProductItemInput>>;
};

export type CheckoutProductItemInput = {
  customization?: InputMaybe<Array<InputMaybe<CheckoutCustomizationInput>>>;
  customizationId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<CheckoutMetadataInput>>>;
  productVariantId: Scalars['Long']['input'];
  quantity: Scalars['Int']['input'];
  subscription?: InputMaybe<CheckoutSubscriptionInput>;
};

export type CheckoutProductItemUpdateInput = {
  customization?: InputMaybe<Array<InputMaybe<CheckoutCustomizationInput>>>;
  customizationId?: InputMaybe<Scalars['String']['input']>;
  productVariantId: Scalars['Long']['input'];
  subscription?: InputMaybe<CheckoutSubscriptionInput>;
};

export type CheckoutProductNode = {
  /** The product adjustment information */
  adjustments?: Maybe<Array<Maybe<CheckoutProductAdjustmentNode>>>;
  /** The price adjusted with promotions and other price changes */
  ajustedPrice: Scalars['Decimal']['output'];
  /** Information about the possible selection attributes. */
  attributeSelections?: Maybe<AttributeSelection>;
  /** The product brand */
  brand?: Maybe<Scalars['String']['output']>;
  /** The product category */
  category?: Maybe<Scalars['String']['output']>;
  /** The product customization. */
  customization?: Maybe<CheckoutProductCustomizationNode>;
  /** If the product is a gift */
  gift: Scalars['Boolean']['output'];
  /** The product Google category */
  googleCategory?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The product URL image */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The product informations */
  informations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The product installment fee */
  installmentFee: Scalars['Boolean']['output'];
  /** The product installment value */
  installmentValue: Scalars['Decimal']['output'];
  /** The product list price */
  listPrice: Scalars['Decimal']['output'];
  /** The metadata related to this checkout. */
  metadata?: Maybe<Array<Maybe<Metadata>>>;
  /** The product name */
  name?: Maybe<Scalars['String']['output']>;
  /** The product number of installments */
  numberOfInstallments: Scalars['Int']['output'];
  /** The product price */
  price: Scalars['Decimal']['output'];
  /** The product attributes */
  productAttributes?: Maybe<Array<Maybe<CheckoutProductAttributeNode>>>;
  /** The product unique identifier */
  productId: Scalars['Long']['output'];
  /** The product variant unique identifier */
  productVariantId: Scalars['Long']['output'];
  /** The product quantity */
  quantity: Scalars['Int']['output'];
  /** The product seller. */
  seller?: Maybe<CheckoutProductSellerNode>;
  /** The product shipping deadline */
  shippingDeadline?: Maybe<CheckoutShippingDeadlineNode>;
  /** The product SKU */
  sku?: Maybe<Scalars['String']['output']>;
  /** The product subscription information */
  subscription?: Maybe<CheckoutProductSubscription>;
  /** The total price adjusted with promotions and other price changes */
  totalAdjustedPrice: Scalars['Decimal']['output'];
  /** The total list price */
  totalListPrice: Scalars['Decimal']['output'];
  /** The product URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type CheckoutProductNodeAttributeSelectionsArgs = {
  selected?: InputMaybe<Array<InputMaybe<AttributeFilterInput>>>;
};

export type CheckoutProductSellerNode = {
  /** The distribution center ID. */
  distributionCenterId?: Maybe<Scalars['String']['output']>;
  /** The seller name. */
  sellerName?: Maybe<Scalars['String']['output']>;
};

/** Information for the subscription of a product in checkout. */
export type CheckoutProductSubscription = {
  /** The available subscriptions. */
  availableSubscriptions?: Maybe<Array<Maybe<CheckoutProductSubscriptionItemNode>>>;
  /** The selected subscription. */
  selected?: Maybe<CheckoutProductSubscriptionItemNode>;
};

export type CheckoutProductSubscriptionItemNode = {
  /** Display text. */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of days of the recurring type. */
  recurringDays: Scalars['Int']['output'];
  /** The recurring type id. */
  recurringTypeId: Scalars['Long']['output'];
  /** If selected. */
  selected: Scalars['Boolean']['output'];
  /** Subscription group discount value. */
  subscriptionGroupDiscount: Scalars['Decimal']['output'];
  /** The subscription group id. */
  subscriptionGroupId: Scalars['Long']['output'];
};

export type CheckoutProductUpdateInput = {
  id: Scalars['Uuid']['input'];
  product: CheckoutProductItemUpdateInput;
};

/** The checkout areas available to reset */
export type CheckoutResetType =
  | 'PAYMENT';

export type CheckoutShippingDeadlineNode = {
  /** The shipping deadline */
  deadline: Scalars['Int']['output'];
  /** The shipping description */
  description?: Maybe<Scalars['String']['output']>;
  /** The shipping second description */
  secondDescription?: Maybe<Scalars['String']['output']>;
  /** The shipping second title */
  secondTitle?: Maybe<Scalars['String']['output']>;
  /** The shipping title */
  title?: Maybe<Scalars['String']['output']>;
};

export type CheckoutShippingQuoteGroupNode = {
  /** The distribution center. */
  distributionCenter?: Maybe<DistributionCenter>;
  /** The products related to the shipping quote group. */
  products?: Maybe<Array<Maybe<ShippingQuoteGroupProduct>>>;
  /** Selected Shipping. */
  selectedShipping?: Maybe<ShippingNode>;
};

export type CheckoutSubscriptionInput = {
  recurringTypeId: Scalars['Int']['input'];
  subscriptionGroupId: Scalars['Long']['input'];
};

/** Contents are used to show things to the user. */
export type Content = Node & {
  /** The content in html to be displayed. */
  content?: Maybe<Scalars['String']['output']>;
  /** Content unique identifier. */
  contentId: Scalars['Long']['output'];
  /** The date the content was created. */
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The content's height in px. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The content's position. */
  position?: Maybe<Scalars['String']['output']>;
  /** A list of terms to display the content on search. */
  searchTerms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The content's title. */
  title?: Maybe<Scalars['String']['output']>;
  /** The content's width in px. */
  width?: Maybe<Scalars['Int']['output']>;
};

/** Define the content attribute which the result set will be sorted on. */
export type ContentSortKeys =
  /** The content's creation date. */
  | 'CreationDate'
  /** The content's unique identifier. */
  | 'ID';

/** A connection to a list of items. */
export type ContentsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<ContentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Content>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContentsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Content>;
};

/** Input data for submitting a counter offer for a product. */
export type CounterOfferInput = {
  /** Any additional information or comments provided by the user regarding the counter offer. */
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the user submitting the counter offer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The proposed price by the user for the product. */
  price: Scalars['Decimal']['input'];
  /** The unique identifier of the product variant for which the counter offer is made. */
  productVariantId: Scalars['Long']['input'];
  /** URL linking to the page or the location where the product is listed. */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressDetails?: InputMaybe<Scalars['String']['input']>;
  addressNumber?: InputMaybe<Scalars['String']['input']>;
  cep: Scalars['CEP']['input'];
  city: Scalars['String']['input'];
  country: Scalars['CountryCode']['input'];
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  name: Scalars['String']['input'];
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  referencePoint?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  street?: InputMaybe<Scalars['String']['input']>;
};

/** A customer from the store. */
export type Customer = Node & {
  /** A specific customer's address. */
  address?: Maybe<CustomerAddressNode>;
  /** Customer's addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddressNode>>>;
  /** Customer's birth date. */
  birthDate: Scalars['DateTime']['output'];
  /** Customer's business phone number. */
  businessPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** Customer's checking account balance. */
  checkingAccountBalance?: Maybe<Scalars['Decimal']['output']>;
  /** Customer's checking account History. */
  checkingAccountHistory?: Maybe<Array<Maybe<CustomerCheckingAccountHistoryNode>>>;
  /** Taxpayer identification number for businesses. */
  cnpj?: Maybe<Scalars['String']['output']>;
  /** Entities legal name. */
  companyName?: Maybe<Scalars['String']['output']>;
  /** Brazilian individual taxpayer registry identification. */
  cpf?: Maybe<Scalars['String']['output']>;
  /** Creation Date. */
  creationDate: Scalars['DateTime']['output'];
  /** Customer's unique identifier. */
  customerId: Scalars['Long']['output'];
  /** Customer's name. */
  customerName?: Maybe<Scalars['String']['output']>;
  /** Indicates if it is a natural person or company profile. */
  customerType?: Maybe<Scalars['String']['output']>;
  /** Customer's delivery address. */
  deliveryAddress?: Maybe<CustomerAddressNode>;
  /** Customer's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** Customer's gender. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Customer information groups. */
  informationGroups?: Maybe<Array<Maybe<CustomerInformationGroupNode>>>;
  /** Customer's mobile phone number. */
  mobilePhoneNumber?: Maybe<Scalars['String']['output']>;
  /** A specific order placed by the customer. */
  order?: Maybe<Order>;
  /** List of orders placed by the customer. */
  orders?: Maybe<CustomerOrderCollectionSegment>;
  /** Statistics about the orders the customer made in a specific timeframe. */
  ordersStatistics?: Maybe<CustomerOrdersStatistics>;
  /** Get info about the associated partners. */
  partners?: Maybe<Array<Maybe<Partner>>>;
  /** Customer's phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Customer's residential address. */
  residentialAddress?: Maybe<CustomerAddressNode>;
  /** Responsible's name. */
  responsibleName?: Maybe<Scalars['String']['output']>;
  /** Registration number Id. */
  rg?: Maybe<Scalars['String']['output']>;
  /** State registration number. */
  stateRegistration?: Maybe<Scalars['String']['output']>;
  /** Customer's subscriptions. */
  subscriptions?: Maybe<Array<Maybe<CustomerSubscription>>>;
  /** Date of the last update. */
  updateDate: Scalars['DateTime']['output'];
  /** Customer wishlist. */
  wishlist?: Maybe<Wishlist>;
};


/** A customer from the store. */
export type CustomerAddressArgs = {
  addressId: Scalars['ID']['input'];
};


/** A customer from the store. */
export type CustomerOrderArgs = {
  orderId?: Scalars['Long']['input'];
};


/** A customer from the store. */
export type CustomerOrdersArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: InputMaybe<OrderSortDirection>;
  sortKey?: InputMaybe<CustomerOrderSortKeys>;
};


/** A customer from the store. */
export type CustomerOrdersStatisticsArgs = {
  dateGte?: InputMaybe<Scalars['DateTime']['input']>;
  dateLt?: InputMaybe<Scalars['DateTime']['input']>;
  onlyPaidOrders?: Scalars['Boolean']['input'];
  partnerId?: InputMaybe<Scalars['Long']['input']>;
};


/** A customer from the store. */
export type CustomerWishlistArgs = {
  productsIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type CustomerAccessToken = {
  isMaster: Scalars['Boolean']['output'];
  legacyToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  /** The user login type */
  type?: Maybe<LoginType>;
  validUntil: Scalars['DateTime']['output'];
};

export type CustomerAccessTokenDetails = {
  /** The customer id */
  customerId: Scalars['Long']['output'];
  /** The identifier linked to the access token */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Specifies whether the user is a master user */
  isMaster: Scalars['Boolean']['output'];
  /** The user login origin */
  origin?: Maybe<LoginOrigin>;
  /** The user login type */
  type?: Maybe<LoginType>;
  validUntil: Scalars['DateTime']['output'];
};

/** The input to authenticate a user. */
export type CustomerAccessTokenInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CustomerAddressNode = Node & {
  /** Address street. */
  address?: Maybe<Scalars['String']['output']>;
  /** Address street 2. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Address details. */
  addressDetails?: Maybe<Scalars['String']['output']>;
  /** Address number. */
  addressNumber?: Maybe<Scalars['String']['output']>;
  /** zip code. */
  cep?: Maybe<Scalars['String']['output']>;
  /** address city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Country. */
  country?: Maybe<Scalars['String']['output']>;
  /** The email of the customer address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the customer address. */
  name?: Maybe<Scalars['String']['output']>;
  /** Address neighborhood. */
  neighborhood?: Maybe<Scalars['String']['output']>;
  /** The phone of the customer address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Address reference point. */
  referencePoint?: Maybe<Scalars['String']['output']>;
  /** State. */
  state?: Maybe<Scalars['String']['output']>;
  /**
   * Address street.
   * @deprecated Use the 'address' field to get the address.
   */
  street?: Maybe<Scalars['String']['output']>;
};

/** The input to authenticate a user. */
export type CustomerAuthenticateInput = {
  input: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CustomerCheckingAccountHistoryNode = {
  /** Customer's checking account history date. */
  date: Scalars['DateTime']['output'];
  /** Description of the customer's checking account history. */
  historic?: Maybe<Scalars['String']['output']>;
  /** Type of customer's checking account history. */
  type: TypeCheckingAccount;
  /** Value of customer's checking account history. */
  value: Scalars['Decimal']['output'];
};

export type CustomerCreateInput = {
  /** The street address for the registered address. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The street address for the registered address. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Any additional information related to the registered address. */
  addressComplement?: InputMaybe<Scalars['String']['input']>;
  /** The building number for the registered address. */
  addressNumber?: InputMaybe<Scalars['String']['input']>;
  /** The date of birth of the customer. */
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The CEP for the registered address. */
  cep?: InputMaybe<Scalars['String']['input']>;
  /** The city for the registered address. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The Brazilian tax identification number for corporations. */
  cnpj?: InputMaybe<Scalars['String']['input']>;
  /** The legal name of the corporate customer. */
  corporateName?: InputMaybe<Scalars['String']['input']>;
  /** The country for the registered address. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The Brazilian tax identification number for individuals. */
  cpf?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if it is a natural person or company profile. */
  customerType: EntityType;
  /** The email of the customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the customer. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** The gender of the customer. */
  gender?: InputMaybe<Gender>;
  /** The customer information group values. */
  informationGroupValues?: InputMaybe<Array<InputMaybe<InformationGroupValueInput>>>;
  /** Indicates if the customer is state registration exempt. */
  isStateRegistrationExempt?: InputMaybe<Scalars['Boolean']['input']>;
  /** The neighborhood for the registered address. */
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the customer has subscribed to the newsletter. */
  newsletter?: InputMaybe<Scalars['Boolean']['input']>;
  /** The password for the customer's account. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The password confirmation for the customer's account. */
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  /** The area code for the customer's primary phone number. */
  primaryPhoneAreaCode?: InputMaybe<Scalars['String']['input']>;
  /** The customer's primary phone number. */
  primaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The name of the receiver for the registered address. */
  receiverName?: InputMaybe<Scalars['String']['input']>;
  /** A reference point or description to help locate the registered address. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the customer is a reseller. */
  reseller?: InputMaybe<Scalars['Boolean']['input']>;
  /** The area code for the customer's secondary phone number. */
  secondaryPhoneAreaCode?: InputMaybe<Scalars['String']['input']>;
  /** The customer's secondary phone number. */
  secondaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The state for the registered address. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The state registration number for businesses. */
  stateRegistration?: InputMaybe<Scalars['String']['input']>;
};

/** The input to change the user email. */
export type CustomerEmailChangeInput = {
  /** The new email. */
  newEmail: Scalars['String']['input'];
};

export type CustomerInformationGroupFieldNode = {
  /** The field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field order. */
  order: Scalars['Int']['output'];
  /** If the field is required. */
  required: Scalars['Boolean']['output'];
  /** The field value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type CustomerInformationGroupNode = {
  /** The group exibition name. */
  exibitionName?: Maybe<Scalars['String']['output']>;
  /** The group fields. */
  fields?: Maybe<Array<Maybe<CustomerInformationGroupFieldNode>>>;
  /** The group name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomerOrderCollectionSegment = {
  items?: Maybe<Array<Maybe<Order>>>;
  page: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

/** Define the order attribute which the result set will be sorted on. */
export type CustomerOrderSortKeys =
  /** The total order value. */
  | 'AMOUNT'
  /** The date the order was placed. */
  | 'DATE'
  /** The order ID. */
  | 'ID'
  /** The order current status. */
  | 'STATUS';

export type CustomerOrdersStatistics = {
  /** The number of products the customer made from the number of orders. */
  productsQuantity: Scalars['Int']['output'];
  /** The number of orders the customer made. */
  quantity: Scalars['Int']['output'];
};

/** The input to change the user password by recovery. */
export type CustomerPasswordChangeByRecoveryInput = {
  /** Key generated for password recovery. */
  key: Scalars['String']['input'];
  /** The new password. */
  newPassword: Scalars['String']['input'];
  /** New password confirmation. */
  newPasswordConfirmation: Scalars['String']['input'];
};

/** The input to change the user password. */
export type CustomerPasswordChangeInput = {
  /** The current password. */
  currentPassword: Scalars['String']['input'];
  /** The new password. */
  newPassword: Scalars['String']['input'];
  /** New password confirmation. */
  newPasswordConfirmation: Scalars['String']['input'];
};

export type CustomerSimpleCreateInputGraphInput = {
  /** The date of birth of the customer. */
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The Brazilian tax identification number for corporations. */
  cnpj?: InputMaybe<Scalars['String']['input']>;
  /** The legal name of the corporate customer. */
  corporateName?: InputMaybe<Scalars['String']['input']>;
  /** The Brazilian tax identification number for individuals. */
  cpf?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if it is a natural person or company profile. */
  customerType: EntityType;
  /** The email of the customer. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the customer. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the customer is state registration exempt. */
  isStateRegistrationExempt?: InputMaybe<Scalars['Boolean']['input']>;
  /** The area code for the customer's primary phone number. */
  primaryPhoneAreaCode?: InputMaybe<Scalars['String']['input']>;
  /** The customer's primary phone number. */
  primaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The state registration number for businesses. */
  stateRegistration?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerSubscription = {
  /** Subscription billing address. */
  billingAddress?: Maybe<CustomerAddressNode>;
  /** The date when the subscription was cancelled. */
  cancellationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The coupon code applied to the subscription. */
  coupon?: Maybe<Scalars['String']['output']>;
  /** The date of the subscription. */
  date: Scalars['DateTime']['output'];
  /** Subscription delivery address. */
  deliveryAddress?: Maybe<CustomerAddressNode>;
  /** The date of intercalated recurring payments. */
  intercalatedRecurrenceDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date of the next recurring payment. */
  nextRecurrenceDate?: Maybe<Scalars['DateTime']['output']>;
  /** Subscription orders. */
  orders?: Maybe<Array<Maybe<Order>>>;
  /** The date when the subscription was paused. */
  pauseDate?: Maybe<Scalars['DateTime']['output']>;
  /** The payment details for the subscription. */
  payment?: Maybe<CustomerSubscriptionPayment>;
  /** The list of products associated with the subscription. */
  products?: Maybe<Array<Maybe<CustomerSubscriptionProduct>>>;
  /** The details of the recurring subscription. */
  recurring?: Maybe<CustomerSubscriptionRecurring>;
  /** The subscription status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The subscription group id. */
  subscriptionGroupId: Scalars['Long']['output'];
  /** Subscription unique identifier. */
  subscriptionId: Scalars['Long']['output'];
};

export type CustomerSubscriptionPayment = {
  /** The details of the payment card associated with the subscription. */
  card?: Maybe<CustomerSubscriptionPaymentCard>;
  /** The type of payment for the subscription. */
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomerSubscriptionPaymentCard = {
  /** The brand of the payment card (e.g., Visa, MasterCard). */
  brand?: Maybe<Scalars['String']['output']>;
  /** The expiration date of the payment card. */
  expiration?: Maybe<Scalars['String']['output']>;
  /** The masked or truncated number of the payment card. */
  number?: Maybe<Scalars['String']['output']>;
};

export type CustomerSubscriptionProduct = {
  /** The id of the product variant associated with the subscription. */
  productVariantId: Scalars['Long']['output'];
  /** The quantity of the product variant in the subscription. */
  quantity: Scalars['Int']['output'];
  /** Indicates whether the product variant is removed from the subscription. */
  removed: Scalars['Boolean']['output'];
  /** The id of the subscription product. */
  subscriptionProductId: Scalars['Long']['output'];
  /** The monetary value of the product variant in the subscription. */
  value: Scalars['Decimal']['output'];
};

export type CustomerSubscriptionRecurring = {
  /** The number of days between recurring payments. */
  days: Scalars['Int']['output'];
  /** The description of the recurring subscription. */
  description?: Maybe<Scalars['String']['output']>;
  /** The name of the recurring subscription. */
  name?: Maybe<Scalars['String']['output']>;
  /** The recurring subscription id. */
  recurringId: Scalars['Long']['output'];
  /** Indicates whether the recurring subscription is removed. */
  removed: Scalars['Boolean']['output'];
};

export type CustomerUpdateInput = {
  /** The date of birth of the customer. */
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The legal name of the corporate customer. */
  corporateName?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the customer. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** The gender of the customer. */
  gender?: InputMaybe<Gender>;
  /** The customer information group values. */
  informationGroupValues?: InputMaybe<Array<InputMaybe<InformationGroupValueInput>>>;
  /** The customer's primary phone number. */
  primaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The customer's primary phone number. */
  primaryPhoneNumberInternational?: InputMaybe<Scalars['String']['input']>;
  /** The Brazilian register identification number for individuals. */
  rg?: InputMaybe<Scalars['String']['input']>;
  /** The customer's secondary phone number. */
  secondaryPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The customer's secondary phone number. */
  secondaryPhoneNumberInternational?: InputMaybe<Scalars['String']['input']>;
  /** The state registration number for businesses. */
  stateRegistration?: InputMaybe<Scalars['String']['input']>;
};

/** Some products can have customizations, such as writing your name on it or other predefined options. */
export type Customization = Node & {
  /** Cost of customization. */
  cost: Scalars['Decimal']['output'];
  /** Customization unique identifier. */
  customizationId: Scalars['Long']['output'];
  /** Customization group's name. */
  groupName?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Maximum allowed size of the field. */
  maxLength: Scalars['Int']['output'];
  /** The customization's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Priority order of customization. */
  order: Scalars['Int']['output'];
  /** Type of customization. */
  type?: Maybe<Scalars['String']['output']>;
  /** Value of customization. */
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Deadline alert informations. */
export type DeadlineAlert = {
  /** Deadline alert time */
  deadline?: Maybe<Scalars['Int']['output']>;
  /** Deadline alert description */
  description?: Maybe<Scalars['String']['output']>;
  /** Second deadline alert time */
  secondDeadline?: Maybe<Scalars['Int']['output']>;
  /** Second deadline alert description */
  secondDescription?: Maybe<Scalars['String']['output']>;
  /** Second deadline alert title */
  secondTitle?: Maybe<Scalars['String']['output']>;
  /** Deadline alert title */
  title?: Maybe<Scalars['String']['output']>;
};

/** The delivery schedule detail. */
export type DeliveryScheduleDetail = {
  /** The date of the delivery schedule. */
  date?: Maybe<Scalars['String']['output']>;
  /** The end date and time of the delivery schedule. */
  endDateTime: Scalars['DateTime']['output'];
  /** The end time of the delivery schedule. */
  endTime?: Maybe<Scalars['String']['output']>;
  /** The start date and time of the delivery schedule. */
  startDateTime: Scalars['DateTime']['output'];
  /** The start time of the delivery schedule. */
  startTime?: Maybe<Scalars['String']['output']>;
};

/** Input for delivery scheduling. */
export type DeliveryScheduleInput = {
  /** The date. */
  date: Scalars['DateTime']['input'];
  /** The period ID. */
  periodId: Scalars['Long']['input'];
};

/** A distribution center. */
export type DistributionCenter = {
  /** The distribution center unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The distribution center seller name. */
  sellerName?: Maybe<Scalars['String']['output']>;
};

/** Define the entity type of the customer registration. */
export type EntityType =
  /** Legal entity, a company, business, organization. */
  | 'COMPANY'
  /** An international person, a legal international entity. */
  | 'INTERNATIONAL'
  /** An individual person, a physical person. */
  | 'PERSON';

export type EnumInformationGroup =
  | 'NEWSLETTER'
  | 'PESSOA_FISICA'
  | 'PESSOA_JURIDICA';

/** Represents a list of events with their details. */
export type EventList = {
  /** URL of the event's cover image */
  coverUrl?: Maybe<Scalars['String']['output']>;
  /** Date of the event */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Type of the event */
  eventType?: Maybe<Scalars['String']['output']>;
  /** Indicates if the token is from the owner of this event list */
  isOwner: Scalars['Boolean']['output'];
  /** URL of the event's logo */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the event owner */
  ownerName?: Maybe<Scalars['String']['output']>;
  /** Event title */
  title?: Maybe<Scalars['String']['output']>;
  /** URL of the event */
  url?: Maybe<Scalars['String']['output']>;
};

export type EventListAddProductInput = {
  /** The unique identifier of the product variant. */
  productVariantId: Scalars['Long']['input'];
  /** The quantity of the product to be added. */
  quantity: Scalars['Int']['input'];
};

/** Represents a list of store events. */
export type EventListStore = {
  /** Date of the event */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Event type name of the event */
  eventType?: Maybe<Scalars['String']['output']>;
  /** URL of the event's logo */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the event. */
  name?: Maybe<Scalars['String']['output']>;
  /** The URL of the event. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Represents a list of events types. */
export type EventListType = {
  /** The URL of the event's logo. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the event. */
  name?: Maybe<Scalars['String']['output']>;
  /** The URL path of the event. */
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type FilterPosition =
  /** Both filter position. */
  | 'BOTH'
  /** Horizontal filter position. */
  | 'HORIZONTAL'
  /** Vertical filter position. */
  | 'VERTICAL';

export type FriendRecommendInput = {
  /** The buy list id */
  buyListId?: InputMaybe<Scalars['Long']['input']>;
  /** Email of who is recommending a product */
  fromEmail: Scalars['String']['input'];
  /** Who is recommending */
  fromName: Scalars['String']['input'];
  /** The message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** The Product Id */
  productId?: InputMaybe<Scalars['Long']['input']>;
  /** Email of the person who will receive a product recommendation */
  toEmail: Scalars['String']['input'];
  /** Name of the person who will receive a product recommendation */
  toName: Scalars['String']['input'];
};

/** The customer's gender. */
export type Gender =
  | 'FEMALE'
  | 'MALE';

/** The shipping quotes for group. */
export type GroupShippingQuote = {
  /** The shipping deadline. */
  deadline: Scalars['Int']['output'];
  /** The shipping deadline, in hours. */
  deadlineInHours?: Maybe<Scalars['Int']['output']>;
  /** The shipping name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The shipping quote unique identifier. */
  shippingQuoteId: Scalars['Uuid']['output'];
  /** The shipping type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The shipping value. */
  value: Scalars['Float']['output'];
};

/** A hotsite is a group of products used to organize them or to make them easier to browse. */
export type Hotsite = Node & {
  /** A list of banners associated with the hotsite. */
  banners?: Maybe<Array<Maybe<Banner>>>;
  /** A list of contents associated with the hotsite. */
  contents?: Maybe<Array<Maybe<Content>>>;
  /** The hotsite will be displayed until this date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Expression used to associate products to the hotsite. */
  expression?: Maybe<Scalars['String']['output']>;
  /** Hotsite unique identifier. */
  hotsiteId: Scalars['Long']['output'];
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The hotsite's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Set the quantity of products displayed per page. */
  pageSize: Scalars['Int']['output'];
  /** A list of products associated with the hotsite. */
  products?: Maybe<ProductsConnection>;
  /** Sorting information to be used by default on the hotsite. */
  sorting?: Maybe<HotsiteSorting>;
  /** The hotsite will be displayed from this date. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** The subtype of the hotsite. */
  subtype?: Maybe<HotsiteSubtype>;
  /** The template used for the hotsite. */
  template?: Maybe<Scalars['String']['output']>;
  /** The hotsite's URL. */
  url?: Maybe<Scalars['String']['output']>;
};


/** A hotsite is a group of products used to organize them or to make them easier to browse. */
export type HotsiteProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSortKeys>;
};

/** Define the hotsite attribute which the result set will be sorted on. */
export type HotsiteSortKeys =
  /** The hotsite id. */
  | 'ID'
  /** The hotsite name. */
  | 'NAME'
  /** The hotsite url. */
  | 'URL';

export type HotsiteSorting = {
  direction?: Maybe<SortDirection>;
  field?: Maybe<ProductSortKeys>;
};

export type HotsiteSubtype =
  /** Hotsite created from a brand. */
  | 'BRAND'
  /** Hotsite created from a buy list (lista de compra). */
  | 'BUY_LIST'
  /** Hotsite created from a category. */
  | 'CATEGORY'
  /** Hotsite created from a portfolio. */
  | 'PORTFOLIO';

/** A connection to a list of items. */
export type HotsitesConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<HotsitesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Hotsite>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HotsitesEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Hotsite>;
};

/** Informations about an image of a product. */
export type Image = {
  /** The name of the image file. */
  fileName?: Maybe<Scalars['String']['output']>;
  /** Check if the image is used for the product main image. */
  mini: Scalars['Boolean']['output'];
  /** Numeric order the image should be displayed. */
  order: Scalars['Int']['output'];
  /** Check if the image is used for the product prints only. */
  print: Scalars['Boolean']['output'];
  /** The url to retrieve the image */
  url?: Maybe<Scalars['String']['output']>;
};

/** The additional information about in-store pickup */
export type InStorePickupAdditionalInformationInput = {
  /** The document */
  document?: InputMaybe<Scalars['String']['input']>;
  /** The name */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Information registred to the product. */
export type Information = {
  /** The information id. */
  id: Scalars['Long']['output'];
  /** The information title. */
  title?: Maybe<Scalars['String']['output']>;
  /** The information type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The information value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type InformationGroupFieldNode = Node & {
  /** The information group field display type. */
  displayType?: Maybe<Scalars['String']['output']>;
  /** The information group field name. */
  fieldName?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The information group field order. */
  order: Scalars['Int']['output'];
  /** If the information group field is required. */
  required: Scalars['Boolean']['output'];
  /** The information group field preset values. */
  values?: Maybe<Array<Maybe<InformationGroupFieldValueNode>>>;
};

export type InformationGroupFieldValueNode = {
  /** The information group field value order. */
  order: Scalars['Int']['output'];
  /** The information group field value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type InformationGroupValueInput = {
  /** The information group field unique identifier. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The information group field value. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Installment = {
  /** Wether the installment has discount. */
  discount: Scalars['Boolean']['output'];
  /** Wether the installment has fees. */
  fees: Scalars['Boolean']['output'];
  /** The number of installments. */
  number: Scalars['Int']['output'];
  /** The value of the installment. */
  value: Scalars['Decimal']['output'];
};

export type InstallmentPlan = {
  /** The custom display name of this installment plan. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** List of the installments. */
  installments?: Maybe<Array<Maybe<Installment>>>;
  /** The name of this installment plan. */
  name?: Maybe<Scalars['String']['output']>;
};

/** The user login origin. */
export type LoginOrigin =
  | 'SIMPLE'
  | 'SOCIAL';

/** The user login type. */
export type LoginType =
  | 'AUTHENTICATED'
  | 'NEW'
  | 'SIMPLE';

/** Informations about menu items. */
export type Menu = Node & {
  /** Menu css class to apply. */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** The full image URL. */
  fullImageUrl?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Menu image url address. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Menu hierarchy level. */
  level: Scalars['Int']['output'];
  /** Menu link address. */
  link?: Maybe<Scalars['String']['output']>;
  /** Menu group identifier. */
  menuGroupId: Scalars['Int']['output'];
  /** Menu identifier. */
  menuId: Scalars['Int']['output'];
  /** Menu name. */
  name: Scalars['String']['output'];
  /** Menu hierarchy level. */
  openNewTab: Scalars['Boolean']['output'];
  /** Menu position order. */
  order: Scalars['Int']['output'];
  /** Parent menu identifier. */
  parentMenuId?: Maybe<Scalars['Int']['output']>;
  /** Menu extra text. */
  text?: Maybe<Scalars['String']['output']>;
};


/** Informations about menu items. */
export type MenuFullImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Informations about menu groups. */
export type MenuGroup = Node & {
  /** The full image URL. */
  fullImageUrl?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Menu group image url. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Menu group identifier. */
  menuGroupId: Scalars['Int']['output'];
  /** List of menus associated with the current group */
  menus?: Maybe<Array<Maybe<Menu>>>;
  /** Menu group name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Menu group partner id. */
  partnerId?: Maybe<Scalars['Int']['output']>;
  /** Menu group position. */
  position?: Maybe<Scalars['String']['output']>;
};


/** Informations about menu groups. */
export type MenuGroupFullImageUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Some products can have metadata, like diferent types of custom information. A basic key value pair. */
export type Metadata = {
  /** Metadata key. */
  key?: Maybe<Scalars['String']['output']>;
  /** Metadata value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /** Add coupon to checkout */
  checkoutAddCoupon?: Maybe<Checkout>;
  /** Add metadata to checkout */
  checkoutAddMetadata?: Maybe<Checkout>;
  /** Add metadata to a checkout product */
  checkoutAddMetadataForProductVariant?: Maybe<Checkout>;
  /** Add products to an existing checkout */
  checkoutAddProduct?: Maybe<Checkout>;
  /** Associate the address with a checkout. */
  checkoutAddressAssociate?: Maybe<Checkout>;
  /** Clones a cart by the given checkout ID, returns the newly created checkout ID */
  checkoutClone?: Maybe<Checkout>;
  /** Completes a checkout */
  checkoutComplete?: Maybe<Checkout>;
  /** Associate the customer with a checkout. */
  checkoutCustomerAssociate?: Maybe<Checkout>;
  /** Delete a suggested card */
  checkoutDeleteSuggestedCard?: Maybe<OperationResult>;
  /** Selects the variant of a gift product */
  checkoutGiftVariantSelection?: Maybe<Checkout>;
  /** Associate the partner with a checkout. */
  checkoutPartnerAssociate?: Maybe<Checkout>;
  /** Disassociates the checkout from the partner and returns a new checkout. */
  checkoutPartnerDisassociate?: Maybe<Checkout>;
  /** Remove coupon to checkout */
  checkoutRemoveCoupon?: Maybe<Checkout>;
  /** Removes metadata keys from a checkout */
  checkoutRemoveMetadata?: Maybe<Checkout>;
  /** Remove products from an existing checkout */
  checkoutRemoveProduct?: Maybe<Checkout>;
  /** Remove Customization to Checkout */
  checkoutRemoveProductCustomization?: Maybe<Checkout>;
  /** Remove Subscription to Checkout */
  checkoutRemoveProductSubscription?: Maybe<Checkout>;
  /** Resets a specific area of a checkout */
  checkoutReset?: Maybe<OperationResult>;
  /** Select installment. */
  checkoutSelectInstallment?: Maybe<Checkout>;
  /** Select payment method. */
  checkoutSelectPaymentMethod?: Maybe<Checkout>;
  /** Select shipping quote */
  checkoutSelectShippingQuote?: Maybe<Checkout>;
  /** Update a product of an existing checkout */
  checkoutUpdateProduct?: Maybe<Checkout>;
  /** Use balance checking account checkout */
  checkoutUseCheckingAccount?: Maybe<Checkout>;
  /** Create a new checkout */
  createCheckout?: Maybe<Checkout>;
  /** Register an email in the newsletter. */
  createNewsletterRegister?: Maybe<NewsletterNode>;
  /** Adds a review to a product variant. */
  createProductReview?: Maybe<Review>;
  /** Record a searched term for admin reports */
  createSearchTermRecord?: Maybe<SearchRecord>;
  /**
   * Creates a new customer access token with an expiration time.
   * @deprecated Use the CustomerAuthenticatedLogin mutation.
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessToken>;
  /** Renews the expiration time of a customer access token. The token must not be expired. */
  customerAccessTokenRenew?: Maybe<CustomerAccessToken>;
  /** Create an address. */
  customerAddressCreate?: Maybe<CustomerAddressNode>;
  /** Delete an existing address, if it is not the only registered address */
  customerAddressRemove?: Maybe<OperationResult>;
  /** Change an existing address */
  customerAddressUpdate?: Maybe<CustomerAddressNode>;
  /** Creates a new customer access token with an expiration time. */
  customerAuthenticatedLogin?: Maybe<CustomerAccessToken>;
  /** Allows the user to complete the required information for a partial registration. */
  customerCompletePartialRegistration?: Maybe<CustomerAccessToken>;
  /** Creates a new customer register. */
  customerCreate?: Maybe<Customer>;
  /** Changes user email. */
  customerEmailChange?: Maybe<OperationResult>;
  /** Impersonates a customer, generating an access token with expiration time. */
  customerImpersonate?: Maybe<CustomerAccessToken>;
  /** Changes user password. */
  customerPasswordChange?: Maybe<OperationResult>;
  /** Change user password by recovery. */
  customerPasswordChangeByRecovery?: Maybe<OperationResult>;
  /** Sends a password recovery email to the user. */
  customerPasswordRecovery?: Maybe<OperationResult>;
  /** Returns the user associated with a simple login (CPF or Email) if exists, else return a New user. */
  customerSimpleLoginStart?: Maybe<SimpleLogin>;
  /** Verify if the answer to a simple login question is correct, returns a new question if the answer is incorrect */
  customerSimpleLoginVerifyAnwser?: Maybe<SimpleLogin>;
  /** Returns the user associated with a Facebook account if exists, else return a New user. */
  customerSocialLoginFacebook?: Maybe<CustomerAccessToken>;
  /** Returns the user associated with a Google account if exists, else return a New user. */
  customerSocialLoginGoogle?: Maybe<CustomerAccessToken>;
  /** Allows a customer to change the delivery address for an existing subscription. */
  customerSubscriptionAddressChange?: Maybe<Customer>;
  /** Add products to an existing subscription */
  customerSubscriptionProductAdd?: Maybe<Customer>;
  /** Remove products to an existing subscription */
  customerSubscriptionProductRemove?: Maybe<Customer>;
  /** Allows a customer to change an existing subscription status. */
  customerSubscriptionUpdateStatus?: Maybe<Customer>;
  /** Updates a customer register. */
  customerUpdate?: Maybe<Customer>;
  /** Adds products to the event list. */
  eventListAddProduct?: Maybe<OperationResult>;
  /** Creates a new closed scope partner access token with an expiration time. */
  partnerAccessTokenCreate?: Maybe<PartnerAccessToken>;
  /** Submits a counteroffer for a product. */
  productCounterOfferSubmit?: Maybe<OperationResult>;
  /** Mutation for recommend a product to a friend */
  productFriendRecommend?: Maybe<OperationResult>;
  /** Add a price alert. */
  productPriceAlert?: Maybe<ProductPriceAlert>;
  /** Creates an alert to notify when the product is back in stock. */
  productRestockAlert?: Maybe<RestockAlertNode>;
  /** Send a generic form. */
  sendGenericForm?: Maybe<OperationResult>;
  /**
   * Change an existing address
   * @deprecated Use the CustomerAddressUpdate mutation.
   */
  updateAddress?: Maybe<CustomerAddressNode>;
  /** Adds a product to the customer's wishlist. */
  wishlistAddProduct?: Maybe<Array<Maybe<Product>>>;
  /** Removes a product from the customer's wishlist. */
  wishlistRemoveProduct?: Maybe<Array<Maybe<Product>>>;
};


export type MutationCheckoutAddCouponArgs = {
  checkoutId: Scalars['Uuid']['input'];
  coupon: Scalars['String']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutAddMetadataArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  metadata: Array<InputMaybe<CheckoutMetadataInput>>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutAddMetadataForProductVariantArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  metadata: Array<InputMaybe<CheckoutMetadataInput>>;
  productVariantId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutAddProductArgs = {
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  input: CheckoutProductInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutAddressAssociateArgs = {
  addressId: Scalars['ID']['input'];
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutCloneArgs = {
  checkoutId: Scalars['Uuid']['input'];
  copyUser?: Scalars['Boolean']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId: Scalars['Uuid']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  paymentData: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutDeleteSuggestedCardArgs = {
  cardKey: Scalars['String']['input'];
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken: Scalars['String']['input'];
  paymentMethodId: Scalars['ID']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutGiftVariantSelectionArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  productVariantId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutPartnerAssociateArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  partnerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutPartnerDisassociateArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutRemoveCouponArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutRemoveMetadataArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  keys: Array<InputMaybe<Scalars['String']['input']>>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutRemoveProductArgs = {
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  input: CheckoutProductInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutRemoveProductCustomizationArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  customizationId: Scalars['ID']['input'];
  productVariantId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutRemoveProductSubscriptionArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  productVariantId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutResetArgs = {
  checkoutId: Scalars['Uuid']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  types: Array<CheckoutResetType>;
};


export type MutationCheckoutSelectInstallmentArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  installmentNumber: Scalars['Int']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  selectedPaymentMethodId: Scalars['Uuid']['input'];
};


export type MutationCheckoutSelectPaymentMethodArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['ID']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutSelectShippingQuoteArgs = {
  additionalInformation?: InputMaybe<InStorePickupAdditionalInformationInput>;
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  deliveryScheduleInput?: InputMaybe<DeliveryScheduleInput>;
  distributionCenterId?: InputMaybe<Scalars['ID']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  shippingQuoteId: Scalars['Uuid']['input'];
};


export type MutationCheckoutUpdateProductArgs = {
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
  input: CheckoutProductUpdateInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutUseCheckingAccountArgs = {
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  useBalance: Scalars['Boolean']['input'];
};


export type MutationCreateCheckoutArgs = {
  products?: InputMaybe<Array<InputMaybe<CheckoutProductItemInput>>>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateNewsletterRegisterArgs = {
  input: NewsletterInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductReviewArgs = {
  input: ReviewCreateInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateSearchTermRecordArgs = {
  input: SearchRecordInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAccessTokenCreateArgs = {
  input: CustomerAccessTokenInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAddressCreateArgs = {
  address: CreateCustomerAddressInput;
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAddressRemoveArgs = {
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAddressUpdateArgs = {
  address: UpdateCustomerAddressInput;
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerAuthenticatedLoginArgs = {
  input: CustomerAuthenticateInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerCompletePartialRegistrationArgs = {
  customerAccessToken: Scalars['String']['input'];
  input?: InputMaybe<CustomerSimpleCreateInputGraphInput>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerCreateArgs = {
  input?: InputMaybe<CustomerCreateInput>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerEmailChangeArgs = {
  customerAccessToken: Scalars['String']['input'];
  input?: InputMaybe<CustomerEmailChangeInput>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerImpersonateArgs = {
  customerAccessToken: Scalars['String']['input'];
  input: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerPasswordChangeArgs = {
  customerAccessToken: Scalars['String']['input'];
  input?: InputMaybe<CustomerPasswordChangeInput>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerPasswordChangeByRecoveryArgs = {
  input?: InputMaybe<CustomerPasswordChangeByRecoveryInput>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerPasswordRecoveryArgs = {
  input: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerSimpleLoginStartArgs = {
  input?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerSimpleLoginVerifyAnwserArgs = {
  answerId: Scalars['Uuid']['input'];
  input?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['Uuid']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerSocialLoginFacebookArgs = {
  facebookAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerSocialLoginGoogleArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  userCredential?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerSubscriptionAddressChangeArgs = {
  addressId: Scalars['ID']['input'];
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  subscriptionId: Scalars['Long']['input'];
};


export type MutationCustomerSubscriptionProductAddArgs = {
  customerAccessToken: Scalars['String']['input'];
  products: Array<InputMaybe<SubscriptionProductsInput>>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  subscriptionId: Scalars['Long']['input'];
};


export type MutationCustomerSubscriptionProductRemoveArgs = {
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  subscriptionId: Scalars['Long']['input'];
  subscriptionProducts: Array<InputMaybe<RemoveSubscriptionProductInput>>;
};


export type MutationCustomerSubscriptionUpdateStatusArgs = {
  customerAccessToken: Scalars['String']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  subscriptionId: Scalars['Long']['input'];
};


export type MutationCustomerUpdateArgs = {
  customerAccessToken: Scalars['String']['input'];
  input: CustomerUpdateInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEventListAddProductArgs = {
  eventListToken: Scalars['String']['input'];
  products: Array<InputMaybe<EventListAddProductInput>>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPartnerAccessTokenCreateArgs = {
  input: PartnerAccessTokenInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductCounterOfferSubmitArgs = {
  input: CounterOfferInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductFriendRecommendArgs = {
  input: FriendRecommendInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductPriceAlertArgs = {
  input: AddPriceAlertInput;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductRestockAlertArgs = {
  input: RestockAlertInput;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendGenericFormArgs = {
  body?: InputMaybe<Scalars['Any']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAddressArgs = {
  address: UpdateCustomerAddressInput;
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWishlistAddProductArgs = {
  customerAccessToken: Scalars['String']['input'];
  productId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWishlistRemoveProductArgs = {
  customerAccessToken: Scalars['String']['input'];
  productId: Scalars['Long']['input'];
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterInput = {
  email: Scalars['String']['input'];
  informationGroupValues?: InputMaybe<Array<InputMaybe<InformationGroupValueInput>>>;
  name: Scalars['String']['input'];
  /** [Deprecated: use the root field] The google recaptcha token. */
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterNode = {
  /** Newsletter creation date. */
  createDate: Scalars['DateTime']['output'];
  /** The newsletter receiver email. */
  email?: Maybe<Scalars['String']['output']>;
  /** The newsletter receiver name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Newsletter update date. */
  updateDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Node = {
  id?: Maybe<Scalars['ID']['output']>;
};

/** Types of operations to perform between query terms. */
export type Operation =
  /** Performs AND operation between query terms. */
  | 'AND'
  /** Performs OR operation between query terms. */
  | 'OR';

/** Result of the operation. */
export type OperationResult = {
  /** If the operation is a success. */
  isSuccess: Scalars['Boolean']['output'];
};

export type OrderAdjustNode = {
  /** The adjust name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Note about the adjust. */
  note?: Maybe<Scalars['String']['output']>;
  /** Type of adjust. */
  type?: Maybe<Scalars['Long']['output']>;
  /** Amount to be adjusted. */
  value: Scalars['Decimal']['output'];
};

export type OrderAttributeNode = {
  /** The attribute name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The attribute value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type OrderCustomizationNode = {
  /** The customization cost. */
  cost?: Maybe<Scalars['Float']['output']>;
  /** The customization name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The customization value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type OrderDeliveryAddressNode = {
  /** The street number of the address. */
  addressNumber?: Maybe<Scalars['String']['output']>;
  /** The ZIP code of the address. */
  cep?: Maybe<Scalars['String']['output']>;
  /** The city of the address. */
  city?: Maybe<Scalars['String']['output']>;
  /** The additional address information. */
  complement?: Maybe<Scalars['String']['output']>;
  /** The country of the address. */
  country?: Maybe<Scalars['String']['output']>;
  /** The neighborhood of the address. */
  neighboorhood?: Maybe<Scalars['String']['output']>;
  /** The receiver's name. */
  receiverName?: Maybe<Scalars['String']['output']>;
  /** The reference point for the address. */
  referencePoint?: Maybe<Scalars['String']['output']>;
  /** The state of the address, abbreviated. */
  state?: Maybe<Scalars['String']['output']>;
  /** The street name of the address. */
  street?: Maybe<Scalars['String']['output']>;
};

export type OrderInvoiceNode = {
  /** The invoice access key. */
  accessKey?: Maybe<Scalars['String']['output']>;
  /** The invoice identifier code. */
  invoiceCode?: Maybe<Scalars['String']['output']>;
  /** The invoice serial digit. */
  serialDigit?: Maybe<Scalars['String']['output']>;
  /** The invoice URL. */
  url?: Maybe<Scalars['String']['output']>;
};

export type OrderNoteNode = {
  /** Date the note was added to the order. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** The note added to the order. */
  note?: Maybe<Scalars['String']['output']>;
  /** The user who added the note to the order. */
  user?: Maybe<Scalars['String']['output']>;
};

export type OrderPackagingNode = {
  /** The packaging cost. */
  cost: Scalars['Decimal']['output'];
  /** The packaging description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The message added to the packaging. */
  message?: Maybe<Scalars['String']['output']>;
  /** The packaging name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderPaymentAdditionalInfoNode = {
  /** Additional information key. */
  key?: Maybe<Scalars['String']['output']>;
  /** Additional information value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type OrderPaymentBoletoNode = {
  /** The digitable line. */
  digitableLine?: Maybe<Scalars['String']['output']>;
  /** The payment link. */
  paymentLink?: Maybe<Scalars['String']['output']>;
};

export type OrderPaymentCardNode = {
  /** The brand of the card. */
  brand?: Maybe<Scalars['String']['output']>;
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']['output']>;
};

export type OrderPaymentNode = {
  /** Additional information for the payment. */
  additionalInfo?: Maybe<Array<Maybe<OrderPaymentAdditionalInfoNode>>>;
  /** The boleto information. */
  boleto?: Maybe<OrderPaymentBoletoNode>;
  /** The card information. */
  card?: Maybe<OrderPaymentCardNode>;
  /** Order discounted value. */
  discount?: Maybe<Scalars['Decimal']['output']>;
  /** Order additional fees value. */
  fees?: Maybe<Scalars['Decimal']['output']>;
  /** Value per installment. */
  installmentValue?: Maybe<Scalars['Decimal']['output']>;
  /** Number of installments. */
  installments?: Maybe<Scalars['Long']['output']>;
  /** Message about payment transaction. */
  message?: Maybe<Scalars['String']['output']>;
  /** The chosen payment option for the order. */
  paymentOption?: Maybe<Scalars['String']['output']>;
  /** The pix information. */
  pix?: Maybe<OrderPaymentPixNode>;
  /** Current payment status. */
  status?: Maybe<Scalars['String']['output']>;
  /** Order total value. */
  total?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderPaymentPixNode = {
  /** The QR code. */
  qrCode?: Maybe<Scalars['String']['output']>;
  /** The expiration date of the QR code. */
  qrCodeExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The image URL of the QR code. */
  qrCodeUrl?: Maybe<Scalars['String']['output']>;
};

export type OrderProductNode = {
  /** List of adjusts on the product price, if any. */
  adjusts?: Maybe<Array<Maybe<OrderAdjustNode>>>;
  /** The product attributes. */
  attributes?: Maybe<Array<Maybe<OrderAttributeNode>>>;
  /** The cost of the customizations, if any. */
  customizationPrice: Scalars['Decimal']['output'];
  /** List of customizations for the product. */
  customizations?: Maybe<Array<Maybe<OrderCustomizationNode>>>;
  /** Amount of discount in the product price, if any. */
  discount: Scalars['Decimal']['output'];
  /** If the product is a gift. */
  gift?: Maybe<Scalars['Boolean']['output']>;
  /** The product image. */
  image?: Maybe<Scalars['String']['output']>;
  /** The product list price. */
  listPrice: Scalars['Decimal']['output'];
  /** The product name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The cost of the packagings, if any. */
  packagingPrice: Scalars['Decimal']['output'];
  /** List of packagings for the product. */
  packagings?: Maybe<Array<Maybe<OrderPackagingNode>>>;
  /** The product price. */
  price: Scalars['Decimal']['output'];
  /** Information about the product seller. */
  productSeller?: Maybe<OrderSellerNode>;
  /** Variant unique identifier. */
  productVariantId: Scalars['Long']['output'];
  /** Quantity of the given product in the order. */
  quantity: Scalars['Long']['output'];
  /** The product sale price. */
  salePrice: Scalars['Decimal']['output'];
  /** The product SKU. */
  sku?: Maybe<Scalars['String']['output']>;
  /** List of trackings for the order. */
  trackings?: Maybe<Array<Maybe<OrderTrackingNode>>>;
  /** Value of an unit of the product. */
  unitaryValue: Scalars['Decimal']['output'];
};

export type OrderSellerNode = {
  /** The seller's name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderShippingNode = {
  /** Limit date of delivery, in days. */
  deadline?: Maybe<Scalars['Int']['output']>;
  /** Limit date of delivery, in hours. */
  deadlineInHours?: Maybe<Scalars['Int']['output']>;
  /** Deadline text message. */
  deadlineText?: Maybe<Scalars['String']['output']>;
  /** Distribution center unique identifier. */
  distributionCenterId?: Maybe<Scalars['Int']['output']>;
  /** The order pick up unique identifier. */
  pickUpId?: Maybe<Scalars['Int']['output']>;
  /** The products belonging to the order. */
  products?: Maybe<Array<Maybe<OrderShippingProductNode>>>;
  /** Amount discounted from shipping costs, if any. */
  promotion?: Maybe<Scalars['Decimal']['output']>;
  /** Shipping company connector identifier code. */
  refConnector?: Maybe<Scalars['String']['output']>;
  /** Start date of shipping schedule. */
  scheduleFrom?: Maybe<Scalars['DateTime']['output']>;
  /** Limit date of shipping schedule. */
  scheduleUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Shipping fee value. */
  shippingFee?: Maybe<Scalars['Decimal']['output']>;
  /** The shipping name. */
  shippingName?: Maybe<Scalars['String']['output']>;
  /** Shipping rate table unique identifier. */
  shippingTableId?: Maybe<Scalars['Int']['output']>;
  /** The total value. */
  total?: Maybe<Scalars['Decimal']['output']>;
  /** Order package size. */
  volume?: Maybe<Scalars['Decimal']['output']>;
  /** The order weight, in grams. */
  weight?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderShippingProductNode = {
  /** Distribution center unique identifier. */
  distributionCenterId?: Maybe<Scalars['Long']['output']>;
  /** The product price. */
  price?: Maybe<Scalars['Decimal']['output']>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
  /** Quantity of the given product. */
  quantity: Scalars['Int']['output'];
};

/** Define the sort orientation of the result set. */
export type OrderSortDirection =
  /** The results will be sorted in an ascending order. */
  | 'ASC'
  /** The results will be sorted in an descending order. */
  | 'DESC';

/** Represents the status of an order. */
export type OrderStatus =
  /** Order has been approved in analysis. */
  | 'APPROVED_ANALYSIS'
  /** Order has been authorized. */
  | 'AUTHORIZED'
  /** Order is awaiting payment. */
  | 'AWAITING_PAYMENT'
  /** Order is awaiting change of payment method. */
  | 'AWAITING_PAYMENT_CHANGE'
  /** Order has been cancelled. */
  | 'CANCELLED'
  /** Order has been cancelled - Card Denied. */
  | 'CANCELLED_DENIED_CARD'
  /** Order has been cancelled - Fraud. */
  | 'CANCELLED_FRAUD'
  /** Order has been cancelled. */
  | 'CANCELLED_ORDER_CANCELLED'
  /** Order has been cancelled - Suspected Fraud. */
  | 'CANCELLED_SUSPECT_FRAUD'
  /** Order has been cancelled - Card Temporarily Denied. */
  | 'CANCELLED_TEMPORARILY_DENIED_CARD'
  /** Order has been checked. */
  | 'CHECKED_ORDER'
  /** Order has been credited. */
  | 'CREDITED'
  /** Order has been delivered. */
  | 'DELIVERED'
  /** Payment denied, but the order has not been cancelled. */
  | 'DENIED_PAYMENT'
  /** Documents needed for purchase. */
  | 'DOCUMENTS_FOR_PURCHASE'
  /** Order has been placed. */
  | 'ORDERED'
  /** Order has been paid. */
  | 'PAID'
  /** Available for pick-up in store. */
  | 'PICK_UP_IN_STORE'
  /** Order has been received - Gift Card. */
  | 'RECEIVED_GIFT_CARD'
  /** Order has been returned. */
  | 'RETURNED'
  /** Order has been sent. */
  | 'SENT'
  /** Order has been sent - Invoiced. */
  | 'SENT_INVOICED'
  /** Order has been separated. */
  | 'SEPARATED';

export type OrderStatusNode = {
  /** The date when status has changed. */
  changeDate?: Maybe<Scalars['DateTime']['output']>;
  /** Order status. */
  status?: Maybe<Scalars['String']['output']>;
  /** Status unique identifier. */
  statusId: Scalars['Long']['output'];
};

export type OrderSubscriptionNode = {
  /** The length of the order signature period. */
  recurringDays?: Maybe<Scalars['Int']['output']>;
  /** The order subscription period type. */
  recurringName?: Maybe<Scalars['String']['output']>;
  /** The order signing group identifier. */
  subscriptionGroupId?: Maybe<Scalars['Long']['output']>;
  /** subscription unique identifier. */
  subscriptionId?: Maybe<Scalars['Long']['output']>;
  /** The subscription's order identifier. */
  subscriptionOrderId?: Maybe<Scalars['Long']['output']>;
  /** The subscription fee for the order. */
  value?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderTrackingNode = {
  /** The tracking code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The URL for tracking. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Partners are used to assign specific products or price tables depending on its scope. */
export type Partner = Node & {
  /** The partner alias. */
  alias?: Maybe<Scalars['String']['output']>;
  /** The partner is valid until this date. */
  endDate: Scalars['DateTime']['output'];
  /** The full partner logo URL. */
  fullUrlLogo?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The partner logo's URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The partner's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The partner's origin. */
  origin?: Maybe<Scalars['String']['output']>;
  /** The partner's access token. */
  partnerAccessToken?: Maybe<Scalars['String']['output']>;
  /** Partner unique identifier. */
  partnerId: Scalars['Long']['output'];
  /** Portfolio identifier assigned to this partner. */
  portfolioId: Scalars['Int']['output'];
  /** Price table identifier assigned to this partner. */
  priceTableId: Scalars['Int']['output'];
  /** The partner is valid from this date. */
  startDate: Scalars['DateTime']['output'];
  /** The type of scoped the partner is used. */
  type?: Maybe<Scalars['String']['output']>;
};


/** Partners are used to assign specific products or price tables depending on its scope. */
export type PartnerFullUrlLogoArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerAccessToken = {
  token?: Maybe<Scalars['String']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

/** The input to authenticate closed scope partners. */
export type PartnerAccessTokenInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Input for partners. */
export type PartnerByRegionInput = {
  /** CEP to get the regional partners. */
  cep?: InputMaybe<Scalars['CEP']['input']>;
  /** Region ID to get the regional partners. */
  regionId?: InputMaybe<Scalars['Long']['input']>;
};

/** Define the partner attribute which the result set will be sorted on. */
export type PartnerSortKeys =
  /** The partner unique identifier. */
  | 'ID'
  /** The partner name. */
  | 'NAME';

export type PartnerSubtype =
  /** Partner 'client' subtype. */
  | 'CLIENT'
  /** Partner 'closed' subtype. */
  | 'CLOSED'
  /** Partner 'open' subtype. */
  | 'OPEN';

/** A connection to a list of items. */
export type PartnersConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<PartnersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Partner>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PartnersEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Partner>;
};

/** Informations about the physical store. */
export type PhysicalStore = {
  /** Additional text. */
  additionalText?: Maybe<Scalars['String']['output']>;
  /** Physical store address. */
  address?: Maybe<Scalars['String']['output']>;
  /** Physical store address details. */
  addressDetails?: Maybe<Scalars['String']['output']>;
  /** Physical store address number. */
  addressNumber?: Maybe<Scalars['String']['output']>;
  /** Physical store address city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Physical store country. */
  country?: Maybe<Scalars['String']['output']>;
  /** Physical store DDD. */
  ddd: Scalars['Int']['output'];
  /** Delivery deadline. */
  deliveryDeadline: Scalars['Int']['output'];
  /** Physical store email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Physical store latitude. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Physical store longitude. */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** Physical store name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Physical store address neighborhood. */
  neighborhood?: Maybe<Scalars['String']['output']>;
  /** Physical store phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Physical store ID. */
  physicalStoreId: Scalars['Int']['output'];
  /** If the physical store allows pickup. */
  pickup: Scalars['Boolean']['output'];
  /** Pickup deadline. */
  pickupDeadline: Scalars['Int']['output'];
  /** Physical store state. */
  state?: Maybe<Scalars['String']['output']>;
  /** Physical store zip code. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Range of prices for this product. */
export type PriceRange = {
  /** The quantity of products in this range. */
  quantity: Scalars['Int']['output'];
  /** The price range. */
  range?: Maybe<Scalars['String']['output']>;
};

export type PriceTable = {
  /** The amount of discount in percentage. */
  discountPercentage: Scalars['Decimal']['output'];
  /** The id of this price table. */
  id: Scalars['Long']['output'];
  /** The listed regular price of this table. */
  listPrice?: Maybe<Scalars['Decimal']['output']>;
  /** The current working price of this table. */
  price: Scalars['Decimal']['output'];
};

/** The prices of the product. */
export type Prices = {
  /** The best installment option available. */
  bestInstallment?: Maybe<BestInstallment>;
  /** The amount of discount in percentage. */
  discountPercentage: Scalars['Decimal']['output'];
  /** Wether the current price is discounted. */
  discounted: Scalars['Boolean']['output'];
  /** List of the possibles installment plans. */
  installmentPlans?: Maybe<Array<Maybe<InstallmentPlan>>>;
  /** The listed regular price of the product. */
  listPrice?: Maybe<Scalars['Decimal']['output']>;
  /** The multiplication factor used for items that are sold by quantity. */
  multiplicationFactor: Scalars['Float']['output'];
  /** The current working price. */
  price: Scalars['Decimal']['output'];
  /**
   * List of the product different price tables.
   *
   *  Only returned when using the partnerAccessToken or public price tables.
   */
  priceTables?: Maybe<Array<Maybe<PriceTable>>>;
  /** Lists the different price options when buying the item over the given quantity. */
  wholesalePrices?: Maybe<Array<Maybe<WholesalePrices>>>;
};

/** Input to specify the range of prices to return. */
export type PricesInput = {
  /** The product discount must be greater than or equal to. */
  discount_gte?: InputMaybe<Scalars['Decimal']['input']>;
  /** The product discount must be lesser than or equal to. */
  discount_lte?: InputMaybe<Scalars['Decimal']['input']>;
  /** Return only products where the listed price is more than the price. */
  discounted?: InputMaybe<Scalars['Boolean']['input']>;
  /** The product price must be greater than or equal to. */
  price_gte?: InputMaybe<Scalars['Decimal']['input']>;
  /** The product price must be lesser than or equal to. */
  price_lte?: InputMaybe<Scalars['Decimal']['input']>;
};

/** A product represents an item for sale in the store. */
export type Product = Node & {
  /** Check if the product can be added to cart directly from spot. */
  addToCartFromSpot?: Maybe<Scalars['Boolean']['output']>;
  /** The product url alias. */
  alias?: Maybe<Scalars['String']['output']>;
  /** List of the product attributes. */
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /** The product author. */
  author?: Maybe<Scalars['String']['output']>;
  /** Field to check if the product is available in stock. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** The product average rating. From 0 to 5. */
  averageRating?: Maybe<Scalars['Int']['output']>;
  /** BuyBox informations. */
  buyBox?: Maybe<BuyBox>;
  /** The product collection. */
  collection?: Maybe<Scalars['String']['output']>;
  /** The product condition. */
  condition?: Maybe<Scalars['String']['output']>;
  /** The product creation date. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The product delivery deadline. */
  deadline?: Maybe<Scalars['Int']['output']>;
  /** Check if the product should be displayed. */
  display?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed only for partners. */
  displayOnlyPartner?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed on search. */
  displaySearch?: Maybe<Scalars['Boolean']['output']>;
  /** The product's unique EAN. */
  ean?: Maybe<Scalars['String']['output']>;
  /** Check if the product offers free shipping. */
  freeShipping?: Maybe<Scalars['Boolean']['output']>;
  /** The product gender. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** List of the product images. */
  images?: Maybe<Array<Maybe<Image>>>;
  /** List of the product insformations. */
  informations?: Maybe<Array<Maybe<Information>>>;
  /** Check if its the main variant. */
  mainVariant?: Maybe<Scalars['Boolean']['output']>;
  /** The product maximum quantity for an order. */
  maximumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** The product minimum quantity for an order. */
  minimumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** Check if the product is a new release. */
  newRelease?: Maybe<Scalars['Boolean']['output']>;
  /** The number of votes that the average rating consists of. */
  numberOfVotes?: Maybe<Scalars['Int']['output']>;
  /** Parent product unique identifier. */
  parentId?: Maybe<Scalars['Long']['output']>;
  /** The product prices. */
  prices?: Maybe<Prices>;
  /** Summarized informations about the brand of the product. */
  productBrand?: Maybe<ProductBrand>;
  /** Summarized informations about the categories of the product. */
  productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Product unique identifier. */
  productId?: Maybe<Scalars['Long']['output']>;
  /** The product name. */
  productName?: Maybe<Scalars['String']['output']>;
  /**
   * Summarized informations about the subscription of the product.
   * @deprecated Use subscriptionGroups to get subscription information.
   */
  productSubscription?: Maybe<ProductSubscription>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
  /** List of promotions this product belongs to. */
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  /** The product publisher */
  publisher?: Maybe<Scalars['String']['output']>;
  /** The product seller. */
  seller?: Maybe<Seller>;
  /** List of similar products.  */
  similarProducts?: Maybe<Array<Maybe<SimilarProduct>>>;
  /** The product's unique SKU. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The values of the spot attribute. */
  spotAttributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The product spot information. */
  spotInformation?: Maybe<Scalars['String']['output']>;
  /** Check if the product is on spotlight. */
  spotlight?: Maybe<Scalars['Boolean']['output']>;
  /** The available aggregated product stock (all variants) at the default distribution center. */
  stock?: Maybe<Scalars['Long']['output']>;
  /** List of the product stocks on different distribution centers. */
  stocks?: Maybe<Array<Maybe<Stock>>>;
  /** List of subscription groups this product belongs to. */
  subscriptionGroups?: Maybe<Array<Maybe<SubscriptionGroup>>>;
  /** Check if the product is a telesale. */
  telesales?: Maybe<Scalars['Boolean']['output']>;
  /** The product last update date. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The product video url. */
  urlVideo?: Maybe<Scalars['String']['output']>;
  /** The variant name. */
  variantName?: Maybe<Scalars['String']['output']>;
  /** The available aggregated variant stock at the default distribution center. */
  variantStock?: Maybe<Scalars['Long']['output']>;
};


/** A product represents an item for sale in the store. */
export type ProductImagesArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductAggregations = {
  /** List of product filters which can be used to filter subsequent queries. */
  filters?: Maybe<Array<Maybe<SearchFilter>>>;
  /** Minimum price of the products. */
  maximumPrice: Scalars['Decimal']['output'];
  /** Maximum price of the products. */
  minimumPrice: Scalars['Decimal']['output'];
  /** List of price ranges for the selected products. */
  priceRanges?: Maybe<Array<Maybe<PriceRange>>>;
};


export type ProductAggregationsFiltersArgs = {
  position?: InputMaybe<FilterPosition>;
};

/** The attributes of the product. */
export type ProductAttribute = Node & {
  /** The id of the attribute. */
  attributeId: Scalars['Long']['output'];
  /** The display type of the attribute. */
  displayType?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the attribute. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the attribute. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value of the attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductBrand = {
  /** The hotsite url alias fot this brand. */
  alias?: Maybe<Scalars['String']['output']>;
  /** The full brand logo URL. */
  fullUrlLogo?: Maybe<Scalars['String']['output']>;
  /** The brand id. */
  id: Scalars['Long']['output'];
  /** The url that contains the brand logo image. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the brand. */
  name?: Maybe<Scalars['String']['output']>;
};


export type ProductBrandFullUrlLogoArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Information about the category of a product. */
export type ProductCategory = {
  /** Wether the category is currently active. */
  active: Scalars['Boolean']['output'];
  /** The categories in google format. */
  googleCategories?: Maybe<Scalars['String']['output']>;
  /** The category hierarchy. */
  hierarchy?: Maybe<Scalars['String']['output']>;
  /** The id of the category. */
  id: Scalars['Int']['output'];
  /** Wether this category is the main category for this product. */
  main: Scalars['Boolean']['output'];
  /** The category name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The category hotsite url alias. */
  url?: Maybe<Scalars['String']['output']>;
};

export type ProductCollectionSegment = {
  items?: Maybe<Array<Maybe<Product>>>;
  page: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

/** Filter product results based on giving attributes. */
export type ProductExplicitFiltersInput = {
  /** The set of attributes do filter. */
  attributes?: InputMaybe<AttributeInput>;
  /** Choose if you want to retrieve only the available products in stock. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** The set of brand IDs which the result item brand ID must be included in. */
  brandId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The set of category IDs which the result item category ID must be included in. */
  categoryId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The set of EANs which the result item EAN must be included. */
  ean?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An external parent ID or a list of IDs to search for products with the external parent ID. */
  externalParentId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve the product variant only if it contains images. */
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ignores the display rules when searching for products. */
  ignoreDisplayRules?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve the product variant only if it is the main product variant. */
  mainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  /** A parent ID or a list of IDs to search for products with the parent ID. */
  parentId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The set of prices to filter. */
  prices?: InputMaybe<PricesInput>;
  /** The product unique identifier (you may provide a list of IDs if needed). */
  productId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The product variant unique identifier (you may provide a list of IDs if needed). */
  productVariantId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** A product ID or a list of IDs to search for other products with the same parent ID. */
  sameParentAs?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The set of SKUs which the result item SKU must be included. */
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Show products with a quantity of available products in stock greater than or equal to the given number. */
  stock_gte?: InputMaybe<Scalars['Long']['input']>;
  /** Show products with a quantity of available products in stock less than or equal to the given number. */
  stock_lte?: InputMaybe<Scalars['Long']['input']>;
  /** The set of stocks to filter. */
  stocks?: InputMaybe<StocksInput>;
  /** Retrieve products which the last update date is greater than or equal to the given date. */
  updatedAt_gte?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve products which the last update date is less than or equal to the given date. */
  updatedAt_lte?: InputMaybe<Scalars['String']['input']>;
};

/** Custom attribute defined on store's admin may also be used as a filter. */
export type ProductFilterInput = {
  /** The attribute name. */
  field: Scalars['String']['input'];
  /** The set of values which the result filter item value must be included in. */
  values: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Options available for the given product. */
export type ProductOption = Node & {
  /** A list of attributes available for the given product and its variants. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /** A list of customizations available for the given products. */
  customizations?: Maybe<Array<Maybe<Customization>>>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
};


/** Options available for the given product. */
export type ProductOptionAttributesArgs = {
  filter?: InputMaybe<Array<InputMaybe<AttributeFilterInput>>>;
};

/** A product price alert. */
export type ProductPriceAlert = {
  /** The alerted's email. */
  email?: Maybe<Scalars['String']['output']>;
  /** The alerted's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The price alert ID. */
  priceAlertId: Scalars['Long']['output'];
  /** The product variant ID. */
  productVariantId: Scalars['Long']['output'];
  /** The request date. */
  requestDate: Scalars['DateTime']['output'];
  /** The target price. */
  targetPrice: Scalars['Decimal']['output'];
};

export type ProductRecommendationAlgorithm =
  | 'DEFAULT';

/** Define the product attribute which the result set will be sorted on. */
export type ProductSearchSortKeys =
  /** The applied discount to the product variant price. */
  | 'DISCOUNT'
  /** The product name. */
  | 'NAME'
  /** The product variant price. */
  | 'PRICE'
  /** Sort in a random way. */
  | 'RANDOM'
  /** The date the product was released. */
  | 'RELEASE_DATE'
  /** The relevance that the search engine gave to the possible result item based on own criteria. */
  | 'RELEVANCE'
  /** The sales number on a period of time. */
  | 'SALES'
  /** The quantity in stock of the product variant. */
  | 'STOCK';

/** Define the product attribute which the result set will be sorted on. */
export type ProductSortKeys =
  /** The applied discount to the product variant price. */
  | 'DISCOUNT'
  /** The product name. */
  | 'NAME'
  /** The product variant price. */
  | 'PRICE'
  /** Sort in a random way. */
  | 'RANDOM'
  /** The date the product was released. */
  | 'RELEASE_DATE'
  /** The sales number on a period of time. */
  | 'SALES'
  /** The quantity in stock of the product variant. */
  | 'STOCK';

export type ProductSubscription = {
  /** The amount of discount if this product is sold as a subscription. */
  discount: Scalars['Decimal']['output'];
  /** The price of the product when sold as a subscription. */
  price?: Maybe<Scalars['Decimal']['output']>;
  /** Wether this product is sold only as a subscrition. */
  subscriptionOnly: Scalars['Boolean']['output'];
};

/** Product variants that have the attribute. */
export type ProductVariant = Node & {
  /** The available stock at the default distribution center. */
  aggregatedStock?: Maybe<Scalars['Long']['output']>;
  /** The product alias. */
  alias?: Maybe<Scalars['String']['output']>;
  /** List of the selected variant attributes. */
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /** Field to check if the product is available in stock. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** The product's EAN. */
  ean?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The product's images. */
  images?: Maybe<Array<Maybe<Image>>>;
  /** The seller's product offers. */
  offers?: Maybe<Array<Maybe<SellerOffer>>>;
  /** The product prices. */
  prices?: Maybe<Prices>;
  /** Product unique identifier. */
  productId?: Maybe<Scalars['Long']['output']>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
  /** Product variant name. */
  productVariantName?: Maybe<Scalars['String']['output']>;
  /** List of promotions this product variant belongs to. */
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  /** The product's unique SKU. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The available stock at the default distribution center. */
  stock?: Maybe<Scalars['Long']['output']>;
};


/** Product variants that have the attribute. */
export type ProductVariantImagesArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type ProductsConnection = {
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductsEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Product>;
};

/** Information about promotions of a product. */
export type Promotion = {
  /** The promotion html content. */
  content?: Maybe<Scalars['String']['output']>;
  /** Where the promotion is shown (spot, product page, etc..). */
  disclosureType?: Maybe<Scalars['String']['output']>;
  /** The end date for the promotion. */
  endDate: Scalars['DateTime']['output'];
  /** The stamp URL of the promotion. */
  fullStampUrl?: Maybe<Scalars['String']['output']>;
  /** The promotion id. */
  id: Scalars['Long']['output'];
  /** The stamp of the promotion. */
  stamp?: Maybe<Scalars['String']['output']>;
  /** The promotion title. */
  title?: Maybe<Scalars['String']['output']>;
};


/** Information about promotions of a product. */
export type PromotionFullStampUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRoot = {
  /** Get informations about an address. */
  address?: Maybe<AddressNode>;
  /** Get query completion suggestion. */
  autocomplete?: Maybe<Autocomplete>;
  /** List of banners. */
  banners?: Maybe<BannersConnection>;
  /** List of brands */
  brands?: Maybe<BrandsConnection>;
  /** Retrieve a buylist by the given id. */
  buyList?: Maybe<BuyList>;
  /** Prices informations */
  calculatePrices?: Maybe<Prices>;
  /** List of categories. */
  categories?: Maybe<CategoriesConnection>;
  /** Get info from the checkout cart corresponding to the given ID. */
  checkout?: Maybe<Checkout>;
  /** Retrieve essential checkout details for a specific cart. */
  checkoutLite?: Maybe<CheckoutLite>;
  /** List of contents. */
  contents?: Maybe<ContentsConnection>;
  /** Get informations about a customer from the store. */
  customer?: Maybe<Customer>;
  /** Get informations about a customer access token. */
  customerAccessTokenDetails?: Maybe<CustomerAccessTokenDetails>;
  /** Retrieve an event list by the token. */
  eventList?: Maybe<EventList>;
  /** Retrieves event types */
  eventListType?: Maybe<Array<Maybe<EventListType>>>;
  /** Retrieves a list of store events. */
  eventLists?: Maybe<Array<Maybe<EventListStore>>>;
  /** Retrieve a single hotsite. A hotsite consists of products, banners and contents. */
  hotsite?: Maybe<SingleHotsite>;
  /** List of the shop's hotsites. A hotsite consists of products, banners and contents. */
  hotsites?: Maybe<HotsitesConnection>;
  /** Get information group fields. */
  informationGroupFields?: Maybe<Array<Maybe<InformationGroupFieldNode>>>;
  /** List of menu groups. */
  menuGroups?: Maybe<Array<Maybe<MenuGroup>>>;
  /**
   * Get newsletter information group fields.
   * @deprecated Use the informationGroupFields
   */
  newsletterInformationGroupFields?: Maybe<Array<Maybe<InformationGroupFieldNode>>>;
  node?: Maybe<Node>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  /** Get single partner. */
  partner?: Maybe<Partner>;
  /** Get partner by region. */
  partnerByRegion?: Maybe<Partner>;
  /** List of partners. */
  partners?: Maybe<PartnersConnection>;
  /** Returns the available payment methods for a given cart ID */
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  /** Retrieve a product by the given id. */
  product?: Maybe<SingleProduct>;
  /**
   * Options available for the given product.
   * @deprecated Use the product query.
   */
  productOptions?: Maybe<ProductOption>;
  /** Retrieve a list of recommended products by product id. */
  productRecommendations?: Maybe<Array<Maybe<Product>>>;
  /** Retrieve a list of products by specific filters. */
  products?: Maybe<ProductsConnection>;
  /** Retrieve a list of scripts. */
  scripts?: Maybe<Array<Maybe<Script>>>;
  /** Search products with cursor pagination. */
  search?: Maybe<Search>;
  /** Get the shipping quote groups by providing CEP and checkout or products. */
  shippingQuoteGroups?: Maybe<Array<Maybe<ShippingQuoteGroup>>>;
  /** Get the shipping quotes by providing CEP and checkout or product identifier. */
  shippingQuotes?: Maybe<Array<Maybe<ShippingQuote>>>;
  /** Store informations */
  shop?: Maybe<Shop>;
  /** Returns a single store setting */
  shopSetting?: Maybe<ShopSetting>;
  /** Store settings */
  shopSettings?: Maybe<Array<Maybe<ShopSetting>>>;
  /** Get the URI kind. */
  uri?: Maybe<Uri>;
};


export type QueryRootAddressArgs = {
  cep?: InputMaybe<Scalars['CEP']['input']>;
};


export type QueryRootAutocompleteArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootBannersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  bannerIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: BannerSortKeys;
};


export type QueryRootBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brandInput?: InputMaybe<BrandFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: SortDirection;
  sortKey?: BrandSortKeys;
};


export type QueryRootBuyListArgs = {
  id: Scalars['Long']['input'];
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootCalculatePricesArgs = {
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  products: Array<InputMaybe<CalculatePricesProductsInput>>;
};


export type QueryRootCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: SortDirection;
  sortKey?: CategorySortKeys;
  urls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRootCheckoutArgs = {
  checkoutId: Scalars['String']['input'];
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootCheckoutLiteArgs = {
  checkoutId: Scalars['Uuid']['input'];
};


export type QueryRootContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  contentIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ContentSortKeys;
};


export type QueryRootCustomerArgs = {
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootCustomerAccessTokenDetailsArgs = {
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootEventListArgs = {
  eventListToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootEventListsArgs = {
  eventDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootHotsiteArgs = {
  hotsiteId?: InputMaybe<Scalars['Long']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootHotsitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hotsiteIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: HotsiteSortKeys;
};


export type QueryRootInformationGroupFieldsArgs = {
  type: EnumInformationGroup;
};


export type QueryRootMenuGroupsArgs = {
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type QueryRootNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRootNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryRootPartnerArgs = {
  partnerAccessToken: Scalars['String']['input'];
};


export type QueryRootPartnerByRegionArgs = {
  input: PartnerByRegionInput;
};


export type QueryRootPartnersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priceTableIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  sortDirection?: SortDirection;
  sortKey?: PartnerSortKeys;
};


export type QueryRootPaymentMethodsArgs = {
  checkoutId: Scalars['Uuid']['input'];
};


export type QueryRootProductArgs = {
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['Long']['input'];
};


export type QueryRootProductOptionsArgs = {
  productId: Scalars['Long']['input'];
};


export type QueryRootProductRecommendationsArgs = {
  algorithm?: ProductRecommendationAlgorithm;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['Long']['input'];
  quantity?: Scalars['Int']['input'];
};


export type QueryRootProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters: ProductExplicitFiltersInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ProductSortKeys;
};


export type QueryRootScriptsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<ScriptPageType>>;
  position?: InputMaybe<ScriptPosition>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootSearchArgs = {
  autoSecondSearch?: Scalars['Boolean']['input'];
  operation?: Operation;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootShippingQuoteGroupsArgs = {
  cep?: InputMaybe<Scalars['CEP']['input']>;
  checkoutId: Scalars['Uuid']['input'];
  useSelectedAddress?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRootShippingQuotesArgs = {
  cep?: InputMaybe<Scalars['CEP']['input']>;
  checkoutId?: InputMaybe<Scalars['Uuid']['input']>;
  productVariantId?: InputMaybe<Scalars['Long']['input']>;
  products?: InputMaybe<Array<InputMaybe<ProductsInput>>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  useSelectedAddress?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRootShopSettingArgs = {
  settingName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRootShopSettingsArgs = {
  settingNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRootUriArgs = {
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type Question = {
  answers?: Maybe<Array<Maybe<Answer>>>;
  question?: Maybe<Scalars['String']['output']>;
  questionId?: Maybe<Scalars['String']['output']>;
};

/** Represents the product to be removed from the subscription. */
export type RemoveSubscriptionProductInput = {
  /** The Id of the product within the subscription to be removed. */
  subscriptionProductId: Scalars['Long']['input'];
};

/** Back in stock registration input parameters. */
export type RestockAlertInput = {
  /** Email to be notified. */
  email: Scalars['String']['input'];
  /** Name of the person to be notified. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The product variant id of the product to be notified. */
  productVariantId: Scalars['Long']['input'];
};

export type RestockAlertNode = {
  /** Email to be notified. */
  email?: Maybe<Scalars['String']['output']>;
  /** Name of the person to be notified. */
  name?: Maybe<Scalars['String']['output']>;
  /** The product variant id. */
  productVariantId: Scalars['Long']['output'];
  /** Date the alert was requested. */
  requestDate: Scalars['DateTime']['output'];
};

/** A product review written by a customer. */
export type Review = {
  /** The reviewer name. */
  customer?: Maybe<Scalars['String']['output']>;
  /** The reviewer e-mail. */
  email?: Maybe<Scalars['String']['output']>;
  /** The review rating. */
  rating: Scalars['Int']['output'];
  /** The review content. */
  review?: Maybe<Scalars['String']['output']>;
  /** The review date. */
  reviewDate: Scalars['DateTime']['output'];
};

/** Review input parameters. */
export type ReviewCreateInput = {
  /** The reviewer's email. */
  email: Scalars['String']['input'];
  /** The reviewer's name. */
  name: Scalars['String']['input'];
  /** The product variant id to add the review to. */
  productVariantId: Scalars['Long']['input'];
  /** The review rating. */
  rating: Scalars['Int']['input'];
  /** [Deprecated: use the root field] The google recaptcha token. */
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
  /** The review content. */
  review: Scalars['String']['input'];
};

/** Entity SEO information. */
export type Seo = {
  /** Content of SEO. */
  content?: Maybe<Scalars['String']['output']>;
  /** Equivalent SEO type for HTTP. */
  httpEquiv?: Maybe<Scalars['String']['output']>;
  /** Name of SEO. */
  name?: Maybe<Scalars['String']['output']>;
  /** Scheme for SEO. */
  scheme?: Maybe<Scalars['String']['output']>;
  /** Type of SEO. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Returns the scripts registered in the script manager. */
export type Script = {
  /** The script content. */
  content?: Maybe<Scalars['String']['output']>;
  /** The script name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The script page type. */
  pageType: ScriptPageType;
  /** The script position. */
  position: ScriptPosition;
  /** The script priority. */
  priority: Scalars['Int']['output'];
};

export type ScriptPageType =
  | 'ALL'
  | 'BRAND'
  | 'CATEGORY'
  | 'HOME'
  | 'PRODUCT'
  | 'SEARCH';

export type ScriptPosition =
  | 'BODY_END'
  | 'BODY_START'
  | 'FOOTER_END'
  | 'FOOTER_START'
  | 'HEADER_END'
  | 'HEADER_START';

/** Search for relevant products to the searched term. */
export type Search = {
  /** Aggregations from the products. */
  aggregations?: Maybe<ProductAggregations>;
  /** A list of banners displayed in search pages. */
  banners?: Maybe<Array<Maybe<Banner>>>;
  /** List of search breadcrumbs. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** A list of contents displayed in search pages. */
  contents?: Maybe<Array<Maybe<Content>>>;
  /** Information about forbidden term. */
  forbiddenTerm?: Maybe<ForbiddenTerm>;
  /** The quantity of products displayed per page. */
  pageSize: Scalars['Int']['output'];
  /** A cursor based paginated list of products from the search. */
  products?: Maybe<ProductsConnection>;
  /** An offset based paginated list of products from the search. */
  productsByOffset?: Maybe<ProductCollectionSegment>;
  /** Redirection url in case a term in the search triggers a redirect. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Time taken to perform the search. */
  searchTime?: Maybe<Scalars['String']['output']>;
};


/** Search for relevant products to the searched term. */
export type SearchProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSearchSortKeys>;
};


/** Search for relevant products to the searched term. */
export type SearchProductsByOffsetArgs = {
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSearchSortKeys>;
};

/** Aggregated filters of a list of products. */
export type SearchFilter = {
  /** The name of the field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The origin of the field. */
  origin?: Maybe<Scalars['String']['output']>;
  /** List of the values of the field. */
  values?: Maybe<Array<Maybe<SearchFilterItem>>>;
};

/** Details of a filter value. */
export type SearchFilterItem = {
  /** The name of the value. */
  name?: Maybe<Scalars['String']['output']>;
  /** The quantity of product with this value. */
  quantity: Scalars['Int']['output'];
};

/** The response data */
export type SearchRecord = {
  /** The date time of the processed request */
  date: Scalars['DateTime']['output'];
  /** If the record was successful */
  isSuccess: Scalars['Boolean']['output'];
  /** The searched query */
  query?: Maybe<Scalars['String']['output']>;
};

/** The information to be saved for reports. */
export type SearchRecordInput = {
  /** The search operation (And, Or) */
  operation?: InputMaybe<Scalars['String']['input']>;
  /** The current page */
  page: Scalars['Int']['input'];
  /** How many products show in page */
  pageSize: Scalars['Int']['input'];
  /** The client search page url */
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  /** The user search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** How many products the search returned */
  totalResults: Scalars['Int']['input'];
};

/** The selected payment method details. */
export type SelectedPaymentMethod = {
  /** The payment html. */
  html?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the selected payment method. */
  id: Scalars['Uuid']['output'];
  /** The list of installments associated with the selected payment method. */
  installments?: Maybe<Array<Maybe<SelectedPaymentMethodInstallment>>>;
  /** The payment Method Id. */
  paymentMethodId?: Maybe<Scalars['ID']['output']>;
  /** Payment related scripts. */
  scripts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The selected installment. */
  selectedInstallment?: Maybe<SelectedPaymentMethodInstallment>;
  /** The suggested cards. */
  suggestedCards?: Maybe<Array<Maybe<SuggestedCard>>>;
};

/** Details of an installment of the selected payment method. */
export type SelectedPaymentMethodInstallment = {
  /** The adjustment value applied to the installment. */
  adjustment: Scalars['Float']['output'];
  /** The installment number. */
  number: Scalars['Int']['output'];
  /** The total value of the installment. */
  total: Scalars['Float']['output'];
  /** The individual value of each installment. */
  value: Scalars['Float']['output'];
};

/** Seller informations. */
export type Seller = {
  /** Seller name */
  name?: Maybe<Scalars['String']['output']>;
};

export type SellerInstallment = {
  /** Wether the installment has discount. */
  discount: Scalars['Boolean']['output'];
  /** Wether the installment has fees. */
  fees: Scalars['Boolean']['output'];
  /** The number of installments. */
  number: Scalars['Int']['output'];
  /** The value of the installment. */
  value: Scalars['Decimal']['output'];
};

export type SellerInstallmentPlan = {
  /** The custom display name of this installment plan. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** List of the installments. */
  installments?: Maybe<Array<Maybe<SellerInstallment>>>;
};

/** The seller's product offer */
export type SellerOffer = {
  name?: Maybe<Scalars['String']['output']>;
  /** The product prices. */
  prices?: Maybe<SellerPrices>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
};

/** The prices of the product. */
export type SellerPrices = {
  /** List of the possibles installment plans. */
  installmentPlans?: Maybe<Array<Maybe<SellerInstallmentPlan>>>;
  /** The listed regular price of the product. */
  listPrice?: Maybe<Scalars['Decimal']['output']>;
  /** The current working price. */
  price?: Maybe<Scalars['Decimal']['output']>;
};

export type ShippingNode = {
  /** The shipping deadline. */
  deadline: Scalars['Int']['output'];
  /** The shipping deadline in hours. */
  deadlineInHours?: Maybe<Scalars['Int']['output']>;
  /** The delivery schedule detail. */
  deliverySchedule?: Maybe<DeliveryScheduleDetail>;
  /** The shipping name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The shipping quote unique identifier. */
  shippingQuoteId: Scalars['Uuid']['output'];
  /** The shipping type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The shipping value. */
  value: Scalars['Float']['output'];
};

/** The product informations related to the shipping. */
export type ShippingProduct = {
  /** The product unique identifier. */
  productVariantId: Scalars['Int']['output'];
  /** The shipping value related to the product. */
  value: Scalars['Float']['output'];
};

/** A shipping quote. */
export type ShippingQuote = Node & {
  /** The shipping deadline. */
  deadline: Scalars['Int']['output'];
  /** The shipping deadline in hours. */
  deadlineInHours?: Maybe<Scalars['Int']['output']>;
  /** The available time slots for scheduling the delivery of the shipping quote. */
  deliverySchedules?: Maybe<Array<Maybe<DeliverySchedule>>>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The shipping name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The products related to the shipping. */
  products?: Maybe<Array<Maybe<ShippingProduct>>>;
  /** The shipping quote unique identifier. */
  shippingQuoteId: Scalars['Uuid']['output'];
  /** The shipping type. */
  type?: Maybe<Scalars['String']['output']>;
  /** The shipping value. */
  value: Scalars['Float']['output'];
};

/** A shipping quote group. */
export type ShippingQuoteGroup = {
  /** The distribution center. */
  distributionCenter?: Maybe<DistributionCenter>;
  /** The products related to the shipping quote group. */
  products?: Maybe<Array<Maybe<ShippingQuoteGroupProduct>>>;
  /** Shipping quotes to group. */
  shippingQuotes?: Maybe<Array<Maybe<GroupShippingQuote>>>;
};

/** The product informations related to the shipping. */
export type ShippingQuoteGroupProduct = {
  /** The product unique identifier. */
  productVariantId: Scalars['Int']['output'];
};

/** Informations about the store. */
export type Shop = {
  /** Checkout URL */
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  /** Store main URL */
  mainUrl?: Maybe<Scalars['String']['output']>;
  /** Mobile checkout URL */
  mobileCheckoutUrl?: Maybe<Scalars['String']['output']>;
  /** Mobile URL */
  mobileUrl?: Maybe<Scalars['String']['output']>;
  /** Store modified name */
  modifiedName?: Maybe<Scalars['String']['output']>;
  /** Store name */
  name?: Maybe<Scalars['String']['output']>;
  /** Physical stores */
  physicalStores?: Maybe<Array<Maybe<PhysicalStore>>>;
  /** The URL to obtain the SitemapImagens.xml file */
  sitemapImagesUrl?: Maybe<Scalars['String']['output']>;
  /** The URL to obtain the Sitemap.xml file */
  sitemapUrl?: Maybe<Scalars['String']['output']>;
};

/** Store setting. */
export type ShopSetting = {
  /** Setting name */
  name?: Maybe<Scalars['String']['output']>;
  /** Setting value */
  value?: Maybe<Scalars['String']['output']>;
};

/** Information about a similar product. */
export type SimilarProduct = {
  /** The url alias of this similar product. */
  alias?: Maybe<Scalars['String']['output']>;
  /** The file name of the similar product image. */
  image?: Maybe<Scalars['String']['output']>;
  /** The URL of the similar product image. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the similar product. */
  name?: Maybe<Scalars['String']['output']>;
};


/** Information about a similar product. */
export type SimilarProductImageUrlArgs = {
  h?: InputMaybe<Scalars['Int']['input']>;
  w?: InputMaybe<Scalars['Int']['input']>;
};

export type SimpleLogin = {
  /** The customer access token */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The simple login question to answer */
  question?: Maybe<Question>;
  /** The simple login type */
  type: SimpleLoginType;
};

/** The simple login type. */
export type SimpleLoginType =
  | 'NEW'
  | 'SIMPLE';

/** A hotsite is a group of products used to organize them or to make them easier to browse. */
export type SingleHotsite = Node & {
  /** Aggregations from the products. */
  aggregations?: Maybe<ProductAggregations>;
  /** A list of banners associated with the hotsite. */
  banners?: Maybe<Array<Maybe<Banner>>>;
  /** A list of breadcrumbs for the hotsite. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** A list of contents associated with the hotsite. */
  contents?: Maybe<Array<Maybe<Content>>>;
  /** The hotsite will be displayed until this date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Expression used to associate products to the hotsite. */
  expression?: Maybe<Scalars['String']['output']>;
  /** Hotsite unique identifier. */
  hotsiteId: Scalars['Long']['output'];
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The hotsite's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Set the quantity of products displayed per page. */
  pageSize: Scalars['Int']['output'];
  /** A list of products associated with the hotsite. Cursor pagination. */
  products?: Maybe<ProductsConnection>;
  /** A list of products associated with the hotsite. Offset pagination. */
  productsByOffset?: Maybe<ProductCollectionSegment>;
  /** A list of SEO contents associated with the hotsite. */
  seo?: Maybe<Array<Maybe<Seo>>>;
  /** Sorting information to be used by default on the hotsite. */
  sorting?: Maybe<HotsiteSorting>;
  /** The hotsite will be displayed from this date. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** The subtype of the hotsite. */
  subtype?: Maybe<HotsiteSubtype>;
  /** The template used for the hotsite. */
  template?: Maybe<Scalars['String']['output']>;
  /** The hotsite's URL. */
  url?: Maybe<Scalars['String']['output']>;
};


/** A hotsite is a group of products used to organize them or to make them easier to browse. */
export type SingleHotsiteProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSortKeys>;
};


/** A hotsite is a group of products used to organize them or to make them easier to browse. */
export type SingleHotsiteProductsByOffsetArgs = {
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSortKeys>;
};

/** A product represents an item for sale in the store. */
export type SingleProduct = Node & {
  /** Check if the product can be added to cart directly from spot. */
  addToCartFromSpot?: Maybe<Scalars['Boolean']['output']>;
  /** The product url alias. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Information about the possible selection attributes. */
  attributeSelections?: Maybe<AttributeSelection>;
  /** List of the product attributes. */
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /** The product author. */
  author?: Maybe<Scalars['String']['output']>;
  /** Field to check if the product is available in stock. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** The product average rating. From 0 to 5. */
  averageRating?: Maybe<Scalars['Int']['output']>;
  /** List of product breadcrumbs. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** BuyBox informations. */
  buyBox?: Maybe<BuyBox>;
  /** Buy together products. */
  buyTogether?: Maybe<Array<Maybe<SingleProduct>>>;
  /** Buy together groups products. */
  buyTogetherGroups?: Maybe<Array<Maybe<BuyTogetherGroup>>>;
  /** The product collection. */
  collection?: Maybe<Scalars['String']['output']>;
  /** The product condition. */
  condition?: Maybe<Scalars['String']['output']>;
  /** The product creation date. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of customizations available for the given products. */
  customizations?: Maybe<Array<Maybe<Customization>>>;
  /** The product delivery deadline. */
  deadline?: Maybe<Scalars['Int']['output']>;
  /** Product deadline alert informations. */
  deadlineAlert?: Maybe<DeadlineAlert>;
  /** Check if the product should be displayed. */
  display?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed only for partners. */
  displayOnlyPartner?: Maybe<Scalars['Boolean']['output']>;
  /** Check if the product should be displayed on search. */
  displaySearch?: Maybe<Scalars['Boolean']['output']>;
  /** The product's unique EAN. */
  ean?: Maybe<Scalars['String']['output']>;
  /** Check if the product offers free shipping. */
  freeShipping?: Maybe<Scalars['Boolean']['output']>;
  /** The product gender. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** List of the product images. */
  images?: Maybe<Array<Maybe<Image>>>;
  /** List of the product insformations. */
  informations?: Maybe<Array<Maybe<Information>>>;
  /** Check if its the main variant. */
  mainVariant?: Maybe<Scalars['Boolean']['output']>;
  /** The product maximum quantity for an order. */
  maximumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** The product minimum quantity for an order. */
  minimumOrderQuantity?: Maybe<Scalars['Int']['output']>;
  /** Check if the product is a new release. */
  newRelease?: Maybe<Scalars['Boolean']['output']>;
  /** The number of votes that the average rating consists of. */
  numberOfVotes?: Maybe<Scalars['Int']['output']>;
  /** Product parallel options information. */
  parallelOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Parent product unique identifier. */
  parentId?: Maybe<Scalars['Long']['output']>;
  /** The product prices. */
  prices?: Maybe<Prices>;
  /** Summarized informations about the brand of the product. */
  productBrand?: Maybe<ProductBrand>;
  /** Summarized informations about the categories of the product. */
  productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Product unique identifier. */
  productId?: Maybe<Scalars['Long']['output']>;
  /** The product name. */
  productName?: Maybe<Scalars['String']['output']>;
  /**
   * Summarized informations about the subscription of the product.
   * @deprecated Use subscriptionGroups to get subscription information.
   */
  productSubscription?: Maybe<ProductSubscription>;
  /** Variant unique identifier. */
  productVariantId?: Maybe<Scalars['Long']['output']>;
  /** List of promotions this product belongs to. */
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  /** The product publisher */
  publisher?: Maybe<Scalars['String']['output']>;
  /** List of customer reviews for this product. */
  reviews?: Maybe<Array<Maybe<Review>>>;
  /** The product seller. */
  seller?: Maybe<Seller>;
  /** Product SEO informations. */
  seo?: Maybe<Array<Maybe<Seo>>>;
  /** List of similar products.  */
  similarProducts?: Maybe<Array<Maybe<SimilarProduct>>>;
  /** The product's unique SKU. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The values of the spot attribute. */
  spotAttributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The product spot information. */
  spotInformation?: Maybe<Scalars['String']['output']>;
  /** Check if the product is on spotlight. */
  spotlight?: Maybe<Scalars['Boolean']['output']>;
  /** The available aggregated product stock (all variants) at the default distribution center. */
  stock?: Maybe<Scalars['Long']['output']>;
  /** List of the product stocks on different distribution centers. */
  stocks?: Maybe<Array<Maybe<Stock>>>;
  /** List of subscription groups this product belongs to. */
  subscriptionGroups?: Maybe<Array<Maybe<SubscriptionGroup>>>;
  /** Check if the product is a telesale. */
  telesales?: Maybe<Scalars['Boolean']['output']>;
  /** The product last update date. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The product video url. */
  urlVideo?: Maybe<Scalars['String']['output']>;
  /** The variant name. */
  variantName?: Maybe<Scalars['String']['output']>;
  /** The available aggregated variant stock at the default distribution center. */
  variantStock?: Maybe<Scalars['Long']['output']>;
};


/** A product represents an item for sale in the store. */
export type SingleProductAttributeSelectionsArgs = {
  selected?: InputMaybe<Array<InputMaybe<AttributeFilterInput>>>;
};


/** A product represents an item for sale in the store. */
export type SingleProductImagesArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Define the sort orientation of the result set. */
export type SortDirection =
  /** The results will be sorted in an ascending order. */
  | 'ASC'
  /** The results will be sorted in an descending order. */
  | 'DESC';

/** The subscription status to update. */
export type Status =
  | 'ACTIVE'
  | 'CANCELED'
  | 'PAUSED';

/** Information about a product stock in a particular distribution center. */
export type Stock = {
  /** The id of the distribution center. */
  id: Scalars['Long']['output'];
  /** The number of physical items in stock at this DC. */
  items: Scalars['Long']['output'];
  /** The name of the distribution center. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Input to specify the range of stocks, distribution center ID, and distribution center name to return. */
export type StocksInput = {
  /** The distribution center Ids to match. */
  dcId?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** The distribution center names to match. */
  dcName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The product stock must be greater than or equal to. */
  stock_gte?: InputMaybe<Scalars['Long']['input']>;
  /** The product stock must be lesser than or equal to. */
  stock_lte?: InputMaybe<Scalars['Long']['input']>;
};

export type SubscriptionGroup = {
  /** The recurring types for this subscription group. */
  recurringTypes?: Maybe<Array<Maybe<SubscriptionRecurringType>>>;
  /** The status name of the group. */
  status?: Maybe<Scalars['String']['output']>;
  /** The status id of the group. */
  statusId: Scalars['Int']['output'];
  /** The subscription group id. */
  subscriptionGroupId: Scalars['Long']['output'];
  /** Wether the product is only avaible for subscription. */
  subscriptionOnly: Scalars['Boolean']['output'];
};

/** Represents the product to be applied to the subscription. */
export type SubscriptionProductsInput = {
  /** The variant Id of the product. */
  productVariantId: Scalars['Long']['input'];
  /** The quantity of the product. */
  quantity: Scalars['Int']['input'];
};

export type SubscriptionRecurringType = {
  /** The number of days of the recurring type. */
  days: Scalars['Int']['output'];
  /** The recurring type display name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The recurring type id. */
  recurringTypeId: Scalars['Long']['output'];
};

export type SuggestedCard = {
  /** Credit card brand. */
  brand?: Maybe<Scalars['String']['output']>;
  /** Credit card key. */
  key?: Maybe<Scalars['String']['output']>;
  /** Customer name on credit card. */
  name?: Maybe<Scalars['String']['output']>;
  /** Credit card number. */
  number?: Maybe<Scalars['String']['output']>;
};

/** Represents the Type of Customer's Checking Account. */
export type TypeCheckingAccount =
  /** Credit */
  | 'Credit'
  /** Debit */
  | 'Debit';

export type UpdateCustomerAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressDetails?: InputMaybe<Scalars['String']['input']>;
  addressNumber?: InputMaybe<Scalars['String']['input']>;
  cep?: InputMaybe<Scalars['CEP']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['CountryCode']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  referencePoint?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** Node of URI Kind. */
export type Uri = {
  /** The origin of the hotsite. */
  hotsiteSubtype?: Maybe<HotsiteSubtype>;
  /** Path kind. */
  kind: UriKind;
  /** The partner subtype. */
  partnerSubtype?: Maybe<PartnerSubtype>;
  /** Product alias. */
  productAlias?: Maybe<Scalars['String']['output']>;
  /** Product categories IDs. */
  productCategoriesIds?: Maybe<Array<Scalars['Int']['output']>>;
  /** Redirect status code. */
  redirectCode?: Maybe<Scalars['String']['output']>;
  /** Url to redirect. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

export type UriKind =
  | 'BUY_LIST'
  | 'HOTSITE'
  | 'NOT_FOUND'
  | 'PARTNER'
  | 'PRODUCT'
  | 'REDIRECT';

export type WholesalePrices = {
  /** The wholesale price. */
  price: Scalars['Decimal']['output'];
  /** The minimum quantity required for the wholesale price to be applied */
  quantity: Scalars['Int']['output'];
};

/** A representation of available time slots for scheduling a delivery. */
export type DeliverySchedule = {
  /** The date of the delivery schedule. */
  date: Scalars['DateTime']['output'];
  /** The list of time periods available for scheduling a delivery. */
  periods?: Maybe<Array<Maybe<Period>>>;
};

/** Informations about a forbidden search term. */
export type ForbiddenTerm = {
  /** The suggested search term instead. */
  suggested?: Maybe<Scalars['String']['output']>;
  /** The text to display about the term. */
  text?: Maybe<Scalars['String']['output']>;
};

export type Order = {
  /** Checking account value used for the order. */
  checkingAccount: Scalars['Decimal']['output'];
  /** The coupon for discounts. */
  coupon?: Maybe<Scalars['String']['output']>;
  /** The date when te order was placed. */
  date: Scalars['DateTime']['output'];
  /** The address where the order will be delivered. */
  deliveryAddress?: Maybe<OrderDeliveryAddressNode>;
  /** Order discount amount, if any. */
  discount: Scalars['Decimal']['output'];
  /** Order interest fee, if any. */
  interestFee: Scalars['Decimal']['output'];
  /** Information about order invoices. */
  invoices?: Maybe<Array<Maybe<OrderInvoiceNode>>>;
  /** Information about order notes. */
  notes?: Maybe<Array<Maybe<OrderNoteNode>>>;
  /** Order unique identifier. */
  orderId: Scalars['Long']['output'];
  /** The date when the order was payed. */
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  /** Information about payments. */
  payments?: Maybe<Array<Maybe<OrderPaymentNode>>>;
  /** Products belonging to the order. */
  products?: Maybe<Array<Maybe<OrderProductNode>>>;
  /** List of promotions applied to the order. */
  promotions?: Maybe<Array<Scalars['Int']['output']>>;
  /** The shipping fee. */
  shippingFee: Scalars['Decimal']['output'];
  /** Information about order shippings. */
  shippings?: Maybe<Array<Maybe<OrderShippingNode>>>;
  /** The order current status. */
  status?: Maybe<OrderStatusNode>;
  /** List of the order status history. */
  statusHistory?: Maybe<Array<Maybe<OrderStatusNode>>>;
  /** List of order subscriptions. */
  subscriptions?: Maybe<Array<Maybe<OrderSubscriptionNode>>>;
  /** Order subtotal value. */
  subtotal: Scalars['Decimal']['output'];
  /** Order total value. */
  total: Scalars['Decimal']['output'];
  /** Information about order trackings. */
  trackings?: Maybe<Array<Maybe<OrderTrackingNode>>>;
};

export type PaymentMethod = Node & {
  /** The node unique identifier. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The url link that displays for the payment. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the payment method. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Represents a time period available for scheduling a delivery. */
export type Period = {
  /** The end time of the time period. */
  end?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the time period. */
  id: Scalars['Long']['output'];
  /** The start time of the time period. */
  start?: Maybe<Scalars['String']['output']>;
};

/** The list of products to quote shipping. */
export type ProductsInput = {
  productVariantId: Scalars['Long']['input'];
  quantity: Scalars['Int']['input'];
};

export type Wishlist = {
  /** Wishlist products. */
  products?: Maybe<Array<Maybe<Product>>>;
};

export type CheckoutFragment = { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null };

export type ProductFragment = { mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null };

export type ProductVariantFragment = { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null };

export type SingleProductPartFragment = { mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, collection?: string | null, numberOfVotes?: number | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, sku?: string | null, stock?: any | null, variantName?: string | null, parallelOptions?: Array<string | null> | null, urlVideo?: string | null, attributes?: Array<{ name?: string | null, type?: string | null, value?: string | null, attributeId: any, displayType?: string | null, id?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, breadcrumbs?: Array<{ text?: string | null, link?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, seo?: Array<{ name?: string | null, scheme?: string | null, type?: string | null, httpEquiv?: string | null, content?: string | null } | null> | null, reviews?: Array<{ rating: number, review?: string | null, reviewDate: any, email?: string | null, customer?: string | null } | null> | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, attributeSelections?: { canBeMatrix: boolean, selections?: Array<{ attributeId: any, displayType?: string | null, name?: string | null, varyByParent: boolean, values?: Array<{ alias?: string | null, available: boolean, value?: string | null, selected: boolean, printUrl?: string | null } | null> | null } | null> | null, matrix?: { column?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null } | null> | null } | null, data?: Array<Array<{ available: boolean, productVariantId: any, stock: any } | null> | null> | null, row?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null, printUrl?: string | null } | null> | null } | null } | null, selectedVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null, candidateVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null } | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null };

export type SingleProductFragment = { mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, collection?: string | null, numberOfVotes?: number | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, sku?: string | null, stock?: any | null, variantName?: string | null, parallelOptions?: Array<string | null> | null, urlVideo?: string | null, buyTogether?: Array<{ productId?: any | null } | null> | null, attributes?: Array<{ name?: string | null, type?: string | null, value?: string | null, attributeId: any, displayType?: string | null, id?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, breadcrumbs?: Array<{ text?: string | null, link?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, seo?: Array<{ name?: string | null, scheme?: string | null, type?: string | null, httpEquiv?: string | null, content?: string | null } | null> | null, reviews?: Array<{ rating: number, review?: string | null, reviewDate: any, email?: string | null, customer?: string | null } | null> | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, attributeSelections?: { canBeMatrix: boolean, selections?: Array<{ attributeId: any, displayType?: string | null, name?: string | null, varyByParent: boolean, values?: Array<{ alias?: string | null, available: boolean, value?: string | null, selected: boolean, printUrl?: string | null } | null> | null } | null> | null, matrix?: { column?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null } | null> | null } | null, data?: Array<Array<{ available: boolean, productVariantId: any, stock: any } | null> | null> | null, row?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null, printUrl?: string | null } | null> | null } | null } | null, selectedVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null, candidateVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null } | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null };

export type RestockAlertNodeFragment = { email?: string | null, name?: string | null, productVariantId: any, requestDate: any };

export type NewsletterNodeFragment = { email?: string | null, name?: string | null, createDate: any, updateDate?: any | null };

export type ShippingQuoteFragment = { id?: string | null, type?: string | null, name?: string | null, value: number, deadline: number, shippingQuoteId: any, deliverySchedules?: Array<{ date: any, periods?: Array<{ end?: string | null, id: any, start?: string | null } | null> | null } | null> | null, products?: Array<{ productVariantId: number, value: number } | null> | null };

export type CustomerFragment = { id?: string | null, email?: string | null, gender?: string | null, customerId: any, companyName?: string | null, customerName?: string | null, customerType?: string | null, responsibleName?: string | null, informationGroups?: Array<{ exibitionName?: string | null, name?: string | null } | null> | null };

export type WishlistReducedProductFragment = { productId?: any | null, productName?: string | null };

export type GetProductQueryVariables = Exact<{
  productId: Scalars['Long']['input'];
}>;


export type GetProductQuery = { product?: { mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, collection?: string | null, numberOfVotes?: number | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, sku?: string | null, stock?: any | null, variantName?: string | null, parallelOptions?: Array<string | null> | null, urlVideo?: string | null, buyTogether?: Array<{ productId?: any | null } | null> | null, attributes?: Array<{ name?: string | null, type?: string | null, value?: string | null, attributeId: any, displayType?: string | null, id?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, breadcrumbs?: Array<{ text?: string | null, link?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, seo?: Array<{ name?: string | null, scheme?: string | null, type?: string | null, httpEquiv?: string | null, content?: string | null } | null> | null, reviews?: Array<{ rating: number, review?: string | null, reviewDate: any, email?: string | null, customer?: string | null } | null> | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, attributeSelections?: { canBeMatrix: boolean, selections?: Array<{ attributeId: any, displayType?: string | null, name?: string | null, varyByParent: boolean, values?: Array<{ alias?: string | null, available: boolean, value?: string | null, selected: boolean, printUrl?: string | null } | null> | null } | null> | null, matrix?: { column?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null } | null> | null } | null, data?: Array<Array<{ available: boolean, productVariantId: any, stock: any } | null> | null> | null, row?: { displayType?: string | null, name?: string | null, values?: Array<{ value?: string | null, printUrl?: string | null } | null> | null } | null } | null, selectedVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null, candidateVariant?: { aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null } | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null };

export type GetCartQueryVariables = Exact<{
  checkoutId: Scalars['String']['input'];
}>;


export type GetCartQuery = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type CreateCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCartMutation = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type GetProductsQueryVariables = Exact<{
  filters: ProductExplicitFiltersInput;
  first: Scalars['Int']['input'];
  sortDirection: SortDirection;
  sortKey?: InputMaybe<ProductSortKeys>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsQuery = { products?: { totalCount: number, nodes?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null, pageInfo: { hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type SearchQueryVariables = Exact<{
  operation: Operation;
  query?: InputMaybe<Scalars['String']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSearchSortKeys>;
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>> | InputMaybe<ProductFilterInput>>;
}>;


export type SearchQuery = { result?: { pageSize: number, redirectUrl?: string | null, searchTime?: string | null, aggregations?: { maximumPrice: any, minimumPrice: any, priceRanges?: Array<{ quantity: number, range?: string | null } | null> | null, filters?: Array<{ field?: string | null, origin?: string | null, values?: Array<{ quantity: number, name?: string | null } | null> | null } | null> | null } | null, breadcrumbs?: Array<{ link?: string | null, text?: string | null } | null> | null, forbiddenTerm?: { text?: string | null, suggested?: string | null } | null, productsByOffset?: { page: number, pageSize: number, totalCount: number, items?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null } | null } | null };

export type AddCouponMutationVariables = Exact<{
  checkoutId: Scalars['Uuid']['input'];
  coupon: Scalars['String']['input'];
}>;


export type AddCouponMutation = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type AddItemToCartMutationVariables = Exact<{
  input: CheckoutProductInput;
}>;


export type AddItemToCartMutation = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type RemoveCouponMutationVariables = Exact<{
  checkoutId: Scalars['Uuid']['input'];
}>;


export type RemoveCouponMutation = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type RemoveItemFromCartMutationVariables = Exact<{
  input: CheckoutProductInput;
}>;


export type RemoveItemFromCartMutation = { checkout?: { checkoutId: any, shippingFee: any, subtotal: any, total: any, completed: boolean, coupon?: string | null, products?: Array<{ imageUrl?: string | null, brand?: string | null, ajustedPrice: any, listPrice: any, price: any, name?: string | null, productId: any, productVariantId: any, quantity: number, sku?: string | null, url?: string | null } | null> | null } | null };

export type ProductRestockAlertMutationVariables = Exact<{
  input: RestockAlertInput;
}>;


export type ProductRestockAlertMutation = { productRestockAlert?: { email?: string | null, name?: string | null, productVariantId: any, requestDate: any } | null };

export type WishlistAddProductMutationVariables = Exact<{
  customerAccessToken: Scalars['String']['input'];
  productId: Scalars['Long']['input'];
}>;


export type WishlistAddProductMutation = { wishlistAddProduct?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null };

export type WishlistRemoveProductMutationVariables = Exact<{
  customerAccessToken: Scalars['String']['input'];
  productId: Scalars['Long']['input'];
}>;


export type WishlistRemoveProductMutation = { wishlistRemoveProduct?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null };

export type CreateNewsletterRegisterMutationVariables = Exact<{
  input: NewsletterInput;
}>;


export type CreateNewsletterRegisterMutation = { createNewsletterRegister?: { email?: string | null, name?: string | null, createDate: any, updateDate?: any | null } | null };

export type AutocompleteQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type AutocompleteQuery = { autocomplete?: { suggestions?: Array<string | null> | null, products?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null } | null };

export type ProductRecommendationsQueryVariables = Exact<{
  productId: Scalars['Long']['input'];
  algorithm: ProductRecommendationAlgorithm;
  partnerAccessToken?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
}>;


export type ProductRecommendationsQuery = { productRecommendations?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null };

export type ShippingQuotesQueryVariables = Exact<{
  cep?: InputMaybe<Scalars['CEP']['input']>;
  checkoutId?: InputMaybe<Scalars['Uuid']['input']>;
  productVariantId?: InputMaybe<Scalars['Long']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  useSelectedAddress?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ShippingQuotesQuery = { shippingQuotes?: Array<{ id?: string | null, type?: string | null, name?: string | null, value: number, deadline: number, shippingQuoteId: any, deliverySchedules?: Array<{ date: any, periods?: Array<{ end?: string | null, id: any, start?: string | null } | null> | null } | null> | null, products?: Array<{ productVariantId: number, value: number } | null> | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { customer?: { id?: string | null, email?: string | null, gender?: string | null, customerId: any, companyName?: string | null, customerName?: string | null, customerType?: string | null, responsibleName?: string | null, informationGroups?: Array<{ exibitionName?: string | null, name?: string | null } | null> | null } | null };

export type GetWislistQueryVariables = Exact<{
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetWislistQuery = { customer?: { wishlist?: { products?: Array<{ productId?: any | null, productName?: string | null } | null> | null } | null } | null };

export type GetUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type GetUrlQuery = { uri?: { hotsiteSubtype?: HotsiteSubtype | null, kind: UriKind, partnerSubtype?: PartnerSubtype | null, productAlias?: string | null, productCategoriesIds?: Array<number> | null, redirectCode?: string | null, redirectUrl?: string | null } | null };

export type CreateProductReviewMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productVariantId: Scalars['Long']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
}>;


export type CreateProductReviewMutation = { createProductReview?: { customer?: string | null, email?: string | null, rating: number, review?: string | null, reviewDate: any } | null };

export type SendGenericFormMutationVariables = Exact<{
  body?: InputMaybe<Scalars['Any']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type SendGenericFormMutation = { sendGenericForm?: { isSuccess: boolean } | null };

export type HotsiteQueryVariables = Exact<{
  url?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>> | InputMaybe<ProductFilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maximumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minimumPrice?: InputMaybe<Scalars['Decimal']['input']>;
  onlyMainVariant?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSortKeys>;
}>;


export type HotsiteQuery = { result?: { endDate?: any | null, expression?: string | null, id?: string | null, name?: string | null, pageSize: number, startDate?: any | null, subtype?: HotsiteSubtype | null, template?: string | null, url?: string | null, hotsiteId: any, aggregations?: { maximumPrice: any, minimumPrice: any, filters?: Array<{ field?: string | null, origin?: string | null, values?: Array<{ name?: string | null, quantity: number } | null> | null } | null> | null, priceRanges?: Array<{ quantity: number, range?: string | null } | null> | null } | null, productsByOffset?: { page: number, pageSize: number, totalCount: number, items?: Array<{ mainVariant?: boolean | null, productName?: string | null, productId?: any | null, alias?: string | null, available?: boolean | null, averageRating?: number | null, condition?: string | null, createdAt?: any | null, ean?: string | null, id?: string | null, minimumOrderQuantity?: number | null, productVariantId?: any | null, parentId?: any | null, sku?: string | null, numberOfVotes?: number | null, stock?: any | null, variantName?: string | null, variantStock?: any | null, collection?: string | null, urlVideo?: string | null, attributes?: Array<{ value?: string | null, name?: string | null } | null> | null, productCategories?: Array<{ name?: string | null, url?: string | null, hierarchy?: string | null, main: boolean, googleCategories?: string | null } | null> | null, informations?: Array<{ title?: string | null, value?: string | null, type?: string | null } | null> | null, images?: Array<{ url?: string | null, fileName?: string | null, print: boolean } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null } | null, productBrand?: { fullUrlLogo?: string | null, logoUrl?: string | null, name?: string | null, alias?: string | null } | null, seller?: { name?: string | null } | null, similarProducts?: Array<{ alias?: string | null, image?: string | null, imageUrl?: string | null, name?: string | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null } | null, breadcrumbs?: Array<{ link?: string | null, text?: string | null } | null> | null, seo?: Array<{ content?: string | null, httpEquiv?: string | null, name?: string | null, scheme?: string | null, type?: string | null } | null> | null, sorting?: { direction?: SortDirection | null, field?: ProductSortKeys | null } | null } | null };

export type ProductOptionsQueryVariables = Exact<{
  productId: Scalars['Long']['input'];
}>;


export type ProductOptionsQuery = { productOptions?: { id?: string | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, values?: Array<{ value?: string | null, productVariants?: Array<{ aggregatedStock?: any | null, alias?: string | null, available?: boolean | null, ean?: string | null, id?: string | null, productId?: any | null, productVariantId?: any | null, productVariantName?: string | null, sku?: string | null, stock?: any | null, attributes?: Array<{ attributeId: any, displayType?: string | null, id?: string | null, name?: string | null, type?: string | null, value?: string | null } | null> | null, images?: Array<{ fileName?: string | null, mini: boolean, order: number, print: boolean, url?: string | null } | null> | null, prices?: { discountPercentage: any, discounted: boolean, listPrice?: any | null, multiplicationFactor: number, price: any, installmentPlans?: Array<{ displayName?: string | null, name?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null, priceTables?: Array<{ discountPercentage: any, id: any, listPrice?: any | null, price: any } | null> | null, wholesalePrices?: Array<{ price: any, quantity: number } | null> | null, bestInstallment?: { discount: boolean, displayName?: string | null, fees: boolean, name?: string | null, number: number, value: any } | null } | null, offers?: Array<{ name?: string | null, productVariantId?: any | null, prices?: { listPrice?: any | null, price?: any | null, installmentPlans?: Array<{ displayName?: string | null, installments?: Array<{ discount: boolean, fees: boolean, number: number, value: any } | null> | null } | null> | null } | null } | null> | null, promotions?: Array<{ content?: string | null, disclosureType?: string | null, id: any, fullStampUrl?: string | null, stamp?: string | null, title?: string | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type ShopQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopQuery = { shop?: { checkoutUrl?: string | null, mainUrl?: string | null, mobileCheckoutUrl?: string | null, mobileUrl?: string | null, modifiedName?: string | null, name?: string | null } | null };

export type CustomerCreateMutationVariables = Exact<{
  input?: InputMaybe<CustomerCreateInput>;
}>;


export type CustomerCreateMutation = { customerCreate?: { customerId: any, customerName?: string | null, customerType?: string | null } | null };

export type CustomerAuthenticatedLoginMutationVariables = Exact<{
  input: Scalars['String']['input'];
  pass: Scalars['String']['input'];
}>;


export type CustomerAuthenticatedLoginMutation = { customerAuthenticatedLogin?: { isMaster: boolean, token?: string | null, type?: LoginType | null, validUntil: any } | null };

export type CustomerAddressCreateMutationVariables = Exact<{
  customerAccessToken: Scalars['String']['input'];
  address: CreateCustomerAddressInput;
}>;


export type CustomerAddressCreateMutation = { customerAddressCreate?: { addressDetails?: string | null, addressNumber?: string | null, cep?: string | null, city?: string | null, country?: string | null, email?: string | null, id?: string | null, name?: string | null, neighborhood?: string | null, phone?: string | null, state?: string | null, street?: string | null, referencePoint?: string | null } | null };

export type CustomerAddressRemoveMutationVariables = Exact<{
  customerAccessToken: Scalars['String']['input'];
  id: Scalars['ID']['input'];
}>;


export type CustomerAddressRemoveMutation = { customerAddressRemove?: { isSuccess: boolean } | null };

export type CustomerAddressUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  customerAccessToken: Scalars['String']['input'];
  address: UpdateCustomerAddressInput;
}>;


export type CustomerAddressUpdateMutation = { customerAddressUpdate?: { addressDetails?: string | null, addressNumber?: string | null, cep?: string | null, city?: string | null, country?: string | null, email?: string | null, id?: string | null, name?: string | null, neighborhood?: string | null, phone?: string | null, state?: string | null, street?: string | null, referencePoint?: string | null } | null };

export type GetUserAddressesQueryVariables = Exact<{
  customerAccessToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserAddressesQuery = { customer?: { id?: string | null, email?: string | null, gender?: string | null, customerId: any, companyName?: string | null, customerName?: string | null, customerType?: string | null, responsibleName?: string | null, addresses?: Array<{ address?: string | null, address2?: string | null, addressDetails?: string | null, addressNumber?: string | null, cep?: string | null, city?: string | null, country?: string | null, email?: string | null, id?: string | null, name?: string | null, neighborhood?: string | null, phone?: string | null, referencePoint?: string | null, state?: string | null, street?: string | null } | null> | null, informationGroups?: Array<{ exibitionName?: string | null, name?: string | null } | null> | null } | null };

export type CreateCheckoutMutationVariables = Exact<{
  products: Array<InputMaybe<CheckoutProductItemInput>> | InputMaybe<CheckoutProductItemInput>;
}>;


export type CreateCheckoutMutation = { createCheckout?: { checkoutId: any } | null };

export type CheckoutCustomerAssociateMutationVariables = Exact<{
  checkoutId: Scalars['Uuid']['input'];
  customerAccessToken: Scalars['String']['input'];
}>;


export type CheckoutCustomerAssociateMutation = { checkoutCustomerAssociate?: { checkoutId: any } | null };
