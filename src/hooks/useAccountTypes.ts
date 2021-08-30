import { gql, useQuery } from "@apollo/client";
import { FetchAccountTypesQuery } from "../generated/graphql";

export const QUERY_TIPOS_CUENTA = gql`
  query FetchAccountTypes {
    acct_AccountingType {
      Name
      IdAccountingType
    }
  }
`;

const useAccountTypes = () => {
  const response = useQuery<FetchAccountTypesQuery>(QUERY_TIPOS_CUENTA);

  return response;
};

export default useAccountTypes;
