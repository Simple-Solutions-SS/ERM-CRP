import { gql } from "@apollo/client";

export const QUERY_DIRECTORIO_CUENTAS = gql`
  query FetchAccounts {
    acct_Account {
      AccountName
      AccountNumber
      BankName
      Note
      IdAccount
      Balance
      BalanceType
    }
  }
`;
