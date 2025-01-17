import type { AppContext } from "../mod.ts";
import { CustomerAuthenticatedLogin } from "../utils/graphql/queries.ts";
import type {
  CustomerAuthenticatedLoginMutation,
  CustomerAuthenticatedLoginMutationVariables,
} from "../utils/graphql/storefront.graphql.gen.ts";
import { parseHeaders } from "../utils/parseHeaders.ts";
import { setUserCookie } from "../utils/user.ts";

export default async function (
  props: Props,
  req: Request,
  { storefront, response }: AppContext,
): Promise<CustomerAuthenticatedLoginMutation["customerAuthenticatedLogin"]> {
  const headers = parseHeaders(req.headers);

  const { customerAuthenticatedLogin } = await storefront.query<
    CustomerAuthenticatedLoginMutation,
    CustomerAuthenticatedLoginMutationVariables
  >({ variables: props, ...CustomerAuthenticatedLogin }, { headers });

  if (customerAuthenticatedLogin) {
    setUserCookie(
      response.headers,
      customerAuthenticatedLogin.token as string,
      customerAuthenticatedLogin.legacyToken as string,
      new Date(customerAuthenticatedLogin.validUntil),
    );
  }

  return customerAuthenticatedLogin;
}

export interface Props {
  /**
   * Email
   */
  input: string;
  /**
   * Senha
   */
  pass: string;
}
