import { gql, useQuery } from "@apollo/client";
import { FetchConversionsQuery } from "../generated/graphql";

export const QUERY_CONVERSIONES = gql`
  query FetchConversions {
    acct_TypeExchange {
      IdTypeExchange
      Name
    }
  }
`;

const useConversions = () => {
  const response = useQuery<FetchConversionsQuery>(QUERY_CONVERSIONES);

  return response;
};

export default useConversions;
