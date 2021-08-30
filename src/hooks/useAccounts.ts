import { gql, useQuery } from "@apollo/client";
import { FetchAccountsQuery } from "../generated/graphql";

export const QUERY_DIRECTORIO_CUENTAS = gql`
  query FetchAccounts {
    acct_Account {
      IdAccount
      AccountNumber
      Description
      IsRestricted
      AccountingType {
        Name
        IdAccountingType
      }
      FinancialStatement {
        Name
        IdFinancialStatement
      }
      IdCreditType
      IdCurrency
      IdStatus
      IdTypeExchange
      Note
      TypeExchange {
        Name
        IdTypeExchange
      }
      UseCostCenter
      IdFinancialStatement
      IdAccountingType
      IdMasterAccount
      Balance
      BalanceType
      BankName
      ClientAccount
      AccountName
    }
  }
`;

const useAccounts = () => {
  const response = useQuery<FetchAccountsQuery>(QUERY_DIRECTORIO_CUENTAS);

  return response;
};

export default useAccounts;
