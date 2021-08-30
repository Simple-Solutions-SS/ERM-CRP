import { gql, useQuery } from "@apollo/client";
import { FetchAccountsQuery } from "../generated/graphql";

export const QUERY_DIRECTORIO_CUENTAS = gql`
  query FetchAccounts {
    acct_Account {
      AccountName
      Description
      AccountNumber
      ClientAccount
      BankName
      IdCurrency
      IdStatus
      Note
      IdAccountingType
      IdFinancialStatement
      Balance
      IdMasterAccount
      BalanceType
      UseCostCenter
    }
  }
`;

const useAccounts = () => {
  const response = useQuery<FetchAccountsQuery>(QUERY_DIRECTORIO_CUENTAS);

  return response;
};

export default useAccounts;
