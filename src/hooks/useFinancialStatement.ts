import { gql, useQuery } from "@apollo/client";
import { FetchFinancialStatementQuery } from "../generated/graphql";

export const QUERY_TIPOS_CUENTA = gql`
  query FetchFinancialStatement {
    acct_FinancialStatement {
      IdFinancialStatement
      Name
    }
  }
`;

const useFinancialStatements = () => {
  const response = useQuery<FetchFinancialStatementQuery>(QUERY_TIPOS_CUENTA);

  return response;
};

export default useFinancialStatements;
