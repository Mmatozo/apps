import type { Product } from "apps/commerce/types.ts";
import { fetchAPI } from "apps/utils/fetch.ts";
import { AppContext } from "apps/vtex/mod.ts";
import { toSegmentParams } from "apps/vtex/utils/legacy.ts";
import { paths } from "apps/vtex/utils/paths.ts";
import {
  getSegment,
  setSegment,
  withSegmentCookie,
} from "apps/vtex/utils/segment.ts";
import { toProduct } from "apps/vtex/utils/transform.ts";
import type {
  LegacyProduct,
  LegacySort,
  ProductID,
} from "apps/vtex/utils/types.ts";
import { withIsSimilarTo } from "apps/vtex/utils/similars.ts";

export interface CollectionProps {
  // TODO: pattern property isn't being handled by RJSF
  /**
   * @description Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .
   * @pattern \d*
   */
  collection: string;
  /**
   * @description search sort parameter
   */
  sort?: LegacySort;
  /** @description total number of items to display */
  count: number;
}

export interface TermProps {
  /** @description term to use on search */
  term?: string;
  /**
   * @description search sort parameter
   */
  sort?: LegacySort;
  /** @description total number of items to display */
  count: number;
}

export interface FQProps {
  /** @description fq's */
  fq: string[];

  /**
   * @description search sort parameter
   */
  sort?: LegacySort;

  /** @description total number of items to display */
  count: number;
}

export interface ProductIDProps {
  /**
   * @description SKU ids to retrieve
   */
  ids: ProductID[];
}

export interface CommonProps {
  /**
   * @description Include similar products
   */
  similars?: boolean;
}

export type Props =
  & CommonProps
  & Partial<CollectionProps>
  & Partial<TermProps>
  & Partial<ProductIDProps>
  & Partial<FQProps>;

// deno-lint-ignore no-explicit-any
const isCollectionProps = (p: any): p is CollectionProps =>
  typeof p.collection === "string" && typeof p.count === "number";

// deno-lint-ignore no-explicit-any
const isProductIDProps = (p: any): p is ProductIDProps =>
  Array.isArray(p.ids) && p.ids.length > 0;

// deno-lint-ignore no-explicit-any
const isFQProps = (p: any): p is FQProps =>
  Array.isArray(p.fq) && p.fq.length > 0;

const fromProps = (
  props: Props,
  params = new URLSearchParams(),
): URLSearchParams => {
  props.sort && params.set("O", props.sort);

  if (isProductIDProps(props)) {
    props.ids.forEach((skuId) => params.append("fq", `skuId:${skuId}`));
    params.set("_from", "0");
    params.set("_to", `${Math.max(props.ids.length - 1, 0)}`);

    return params;
  }

  const count = props.count ?? 12;
  params.set("_from", "0");
  params.set("_to", `${Math.max(count - 1, 0)}`);

  if (isCollectionProps(props)) {
    params.set("fq", `productClusterIds:${props.collection}`);

    return params;
  }

  if (isFQProps(props)) {
    props.fq.forEach((fq) => params.append("fq", fq));

    return params;
  }

  props.term && params.set("ft", encodeURIComponent(props.term));

  return params;
};

/**
 * @title VTEX Integration - Legacy Search
 * @description Product List loader
 */
const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
): Promise<Product[] | null> => {
  const { url: baseUrl } = req;
  const segment = getSegment(req);
  const segmentParams = toSegmentParams(segment);
  const params = fromProps(props, segmentParams);

  const vtexProducts = await fetchAPI<LegacyProduct[]>(
    `${paths(ctx).api.catalog_system.pub.products.search}?${params}`,
    {
      withProxyCache: true,
      headers: withSegmentCookie(segment),
    },
  );

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) =>
    toProduct(p, p.items[0], 0, {
      baseUrl: baseUrl,
      priceCurrency: "BRL", // config!.defaultPriceCurrency, // TODO fix currency
    })
  );

  setSegment(segment, ctx.response.headers);

  return Promise.all(
    products.map((product) =>
      props.similars ? withIsSimilarTo(ctx, product) : product
    ),
  );
};

export default loader;