import { gql, useQuery } from "@apollo/client";
import { FetchCurrenciesQuery } from "../generated/graphql";

export const QUERY_MONEDAS = gql`
  query FetchCurrencies {
    acct_Currency {
      IdCurrency
      Name
    }
  }
`;

const useCurrencies = () => {
  const response = useQuery<FetchCurrenciesQuery>(QUERY_MONEDAS);

  return response;
};

export default useCurrencies;
