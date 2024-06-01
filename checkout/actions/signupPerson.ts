import type { AppContext } from "../mod.ts";
import { parseHeaders } from "../utils/parseHeaders.ts";
import type {
  CustomerCreateMutation,
  CustomerCreateMutationVariables,
} from "../graphql/storefront.graphql.gen.ts";
import { CustomerCreate } from "../graphql/queries.ts";

// https://wakecommerce.readme.io/docs/storefront-api-customercreate
export default async function (
  props: Props,
  req: Request,
  { storefront }: AppContext,
): Promise<CustomerCreateMutation["customerCreate"] | null> {
  const headers = parseHeaders(req.headers);

  const { customerCreate } = await storefront.query<
    CustomerCreateMutation,
    CustomerCreateMutationVariables
  >(
    {
      variables: { input: { ...props, customerType: "PERSON" } },
      ...CustomerCreate,
    },
    { headers },
  );

  return customerCreate ?? null;
}

interface Props {
  /**
   * Endereço
   */
  address: string;
  /**
   * Complemento
   */
  addressComplement: string;
  /**
   * Número do endereço
   */
  addressNumber: string;
  /**
   * Data de nascimento (DD/MM/AAAA)
   */
  birthDate: Date | string;
  /**
   * CEP
   */
  cep: string;
  /**
   * Cidade
   */
  city: string;
  /**
   * CPF
   */
  cpf: string;
  /**
   * Email
   */
  email: string;
  /**
   * Nome completo
   */
  fullName: string;
  /**
   * Gênero
   */
  gender: "MALE" | "FEMALE";
  /**
   * Isento de inscrição estadual
   */
  isStateRegistrationExempt?: boolean;
  /**
   * Bairro
   */
  neighborhood: string;
  /**
   * Aceitar assinar newsletter?
   */
  newsletter?: boolean;
  /**
   * Senha de cadastro
   */
  password: string;
  /**
   * Confirmação da senha de cadastro
   */
  passwordConfirmation: string;
  /**
   * DDD do telefone principal do cliente
   */
  primaryPhoneAreaCode: string;
  /**
   * Telefone principal do cliente (xxxxx-xxxx)
   */
  primaryPhoneNumber: string;
  /**
   * Nome do destinatário
   */
  receiverName: string;
  /**
   * Referência de endereço
   */
  reference?: string;
  /**
   * É revendedor?
   */
  reseller?: boolean;
  /**
   * DDD do telefone secundário do cliente
   */
  secondaryPhoneAreaCode?: string;
  /**
   * Telefone secundário do cliente (xxxxx-xxxx)
   */
  secondaryPhoneNumber?: string;
  /**
   * Estado do endereço
   */
  state: string;
  /**
   * Inscrição estadual da empresa
   */
  stateRegistration?: string;
}
