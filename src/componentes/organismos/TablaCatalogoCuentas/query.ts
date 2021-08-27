import { gql } from "@apollo/client";

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
      MasterAccountNumber
      BalanceType
      UseCostCenter
    }
  }
`;
