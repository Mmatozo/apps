import type { Person } from "../../commerce/types.ts";
import type { AppContext } from "../mod.ts";
import authenticate from "../utils/authenticate.ts";
import { GetUser } from "../utils/graphql/queries.ts";
import type {
  GetUserQuery,
  GetUserQueryVariables,
} from "../utils/graphql/storefront.graphql.gen.ts";
import { parseHeaders } from "../utils/parseHeaders.ts";

/**
 * @title Wake Integration
 * @description User loader
 */
const userLoader = async (
  _props: unknown,
  req: Request,
  ctx: AppContext,
): Promise<
  (Person & { cpf: string | null; phoneNumber: string | null }) | null
> => {
  const { storefront } = ctx;

  const headers = parseHeaders(req.headers);

  const customerAccessToken = await authenticate(req, ctx);
  if (!customerAccessToken) return null;

  try {
    const data = await storefront.query<GetUserQuery, GetUserQueryVariables>(
      {
        variables: { customerAccessToken },
        ...GetUser,
      },
      {
        headers,
      },
    );

    const customer = data.customer;

    if (!customer) return null;

    return {
      "@id": customer.id!,
      email: customer.email!,
      givenName: customer.customerName!,
      gender: customer?.gender === "Masculino"
        ? "https://schema.org/Male"
        : "https://schema.org/Female",
      cpf: customer.cpf || null,
      phoneNumber: customer.phoneNumber || null,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    return null;
  }
};

export default userLoader;
