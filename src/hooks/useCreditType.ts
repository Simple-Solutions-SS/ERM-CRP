import { gql, useQuery } from "@apollo/client";
import { FetchCreditTypesQuery } from "../generated/graphql";

export const QUERY_TIPOS_CREDITO = gql`
  query FetchCreditTypes {
    acct_CreditType {
      IdCreditType
      Name
    }
  }
`;

const useCreditTypes = () => {
  const response = useQuery<FetchCreditTypesQuery>(QUERY_TIPOS_CREDITO);

  return response;
};

export default useCreditTypes;
