import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  datetime: any;
  sysname: any;
  varbinary: any;
};


/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  IdCountry: Scalars['Int'];
  NAME?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Country" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  avg?: Maybe<Country_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
  stddev?: Maybe<Country_Stddev_Fields>;
  stddev_pop?: Maybe<Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Country_Stddev_Samp_Fields>;
  sum?: Maybe<Country_Sum_Fields>;
  var_pop?: Maybe<Country_Var_Pop_Fields>;
  var_samp?: Maybe<Country_Var_Samp_Fields>;
  variance?: Maybe<Country_Variance_Fields>;
};


/** aggregate fields of "Country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Country_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Country_Avg_Fields = {
  __typename?: 'Country_avg_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  IdCountry?: Maybe<Int_Mssql_Comparison_Exp>;
  NAME?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Country_Bool_Exp>>;
  _not?: Maybe<Country_Bool_Exp>;
  _or?: Maybe<Array<Country_Bool_Exp>>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  IdCountry?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  IdCountry?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  IdCountry?: Maybe<Order_By>;
  NAME?: Maybe<Order_By>;
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  IdCountry = 'IdCountry',
  /** column name */
  Name = 'NAME'
}

/** aggregate stddev on columns */
export type Country_Stddev_Fields = {
  __typename?: 'Country_stddev_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Country_Stddev_Pop_Fields = {
  __typename?: 'Country_stddev_pop_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Country_Stddev_Samp_Fields = {
  __typename?: 'Country_stddev_samp_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Country_Sum_Fields = {
  __typename?: 'Country_sum_fields';
  IdCountry?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Country_Var_Pop_Fields = {
  __typename?: 'Country_var_pop_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Country_Var_Samp_Fields = {
  __typename?: 'Country_var_samp_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Country_Variance_Fields = {
  __typename?: 'Country_variance_fields';
  IdCountry?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
};

/** columns and relationships of "acct.Account" */
export type Acct_Account = {
  __typename?: 'acct_Account';
  AccountName?: Maybe<Scalars['String']>;
  AccountNumber: Scalars['String'];
  /** An object relationship */
  AccountingType?: Maybe<Acct_AccountingType>;
  Balance?: Maybe<Scalars['Float']>;
  BalanceType?: Maybe<Scalars['String']>;
  BankName?: Maybe<Scalars['String']>;
  ClientAccount?: Maybe<Scalars['String']>;
  /** An object relationship */
  ConversionType?: Maybe<Acct_ConversionType>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  /** An object relationship */
  Currency?: Maybe<Acct_Currency>;
  Description?: Maybe<Scalars['String']>;
  /** An object relationship */
  FinancialStatement?: Maybe<Acct_FinancialStatement>;
  IdAccount: Scalars['Int'];
  IdAccountingConversion?: Maybe<Scalars['Int']>;
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdConversionType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  MasterAccountNumber?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "acct.Account" */
export type Acct_Account_Aggregate = {
  __typename?: 'acct_Account_aggregate';
  aggregate?: Maybe<Acct_Account_Aggregate_Fields>;
  nodes: Array<Acct_Account>;
};

/** aggregate fields of "acct.Account" */
export type Acct_Account_Aggregate_Fields = {
  __typename?: 'acct_Account_aggregate_fields';
  avg?: Maybe<Acct_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_Account_Max_Fields>;
  min?: Maybe<Acct_Account_Min_Fields>;
  stddev?: Maybe<Acct_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_Account_Sum_Fields>;
  var_pop?: Maybe<Acct_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_Account_Var_Samp_Fields>;
  variance?: Maybe<Acct_Account_Variance_Fields>;
};


/** aggregate fields of "acct.Account" */
export type Acct_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "acct.Account" */
export type Acct_Account_Aggregate_Order_By = {
  avg?: Maybe<Acct_Account_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Acct_Account_Max_Order_By>;
  min?: Maybe<Acct_Account_Min_Order_By>;
  stddev?: Maybe<Acct_Account_Stddev_Order_By>;
  stddev_pop?: Maybe<Acct_Account_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Acct_Account_Stddev_Samp_Order_By>;
  sum?: Maybe<Acct_Account_Sum_Order_By>;
  var_pop?: Maybe<Acct_Account_Var_Pop_Order_By>;
  var_samp?: Maybe<Acct_Account_Var_Samp_Order_By>;
  variance?: Maybe<Acct_Account_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Acct_Account_Avg_Fields = {
  __typename?: 'acct_Account_avg_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "acct.Account" */
export type Acct_Account_Avg_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "acct.Account". All fields are combined with a logical 'AND'. */
export type Acct_Account_Bool_Exp = {
  AccountName?: Maybe<String_Mssql_Comparison_Exp>;
  AccountNumber?: Maybe<String_Mssql_Comparison_Exp>;
  AccountingType?: Maybe<Acct_AccountingType_Bool_Exp>;
  Balance?: Maybe<Float_Mssql_Comparison_Exp>;
  BalanceType?: Maybe<String_Mssql_Comparison_Exp>;
  BankName?: Maybe<String_Mssql_Comparison_Exp>;
  ClientAccount?: Maybe<String_Mssql_Comparison_Exp>;
  ConversionType?: Maybe<Acct_ConversionType_Bool_Exp>;
  CreatedDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  Currency?: Maybe<Acct_Currency_Bool_Exp>;
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  FinancialStatement?: Maybe<Acct_FinancialStatement_Bool_Exp>;
  IdAccount?: Maybe<Int_Mssql_Comparison_Exp>;
  IdAccountingConversion?: Maybe<Int_Mssql_Comparison_Exp>;
  IdAccountingType?: Maybe<Int_Mssql_Comparison_Exp>;
  IdConversionType?: Maybe<Int_Mssql_Comparison_Exp>;
  IdCurrency?: Maybe<Int_Mssql_Comparison_Exp>;
  IdFinancialStatement?: Maybe<Int_Mssql_Comparison_Exp>;
  IdMasterAccount?: Maybe<Int_Mssql_Comparison_Exp>;
  IdStatus?: Maybe<Int_Mssql_Comparison_Exp>;
  LastModifiedDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  LastModifiedIdUser?: Maybe<Int_Mssql_Comparison_Exp>;
  MasterAccountNumber?: Maybe<String_Mssql_Comparison_Exp>;
  Note?: Maybe<String_Mssql_Comparison_Exp>;
  UseCostCenter?: Maybe<Int_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_Account_Bool_Exp>>;
  _not?: Maybe<Acct_Account_Bool_Exp>;
  _or?: Maybe<Array<Acct_Account_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_Account_Max_Fields = {
  __typename?: 'acct_Account_max_fields';
  AccountName?: Maybe<Scalars['String']>;
  AccountNumber?: Maybe<Scalars['String']>;
  Balance?: Maybe<Scalars['Float']>;
  BalanceType?: Maybe<Scalars['String']>;
  BankName?: Maybe<Scalars['String']>;
  ClientAccount?: Maybe<Scalars['String']>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  Description?: Maybe<Scalars['String']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdAccountingConversion?: Maybe<Scalars['Int']>;
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdConversionType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  MasterAccountNumber?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "acct.Account" */
export type Acct_Account_Max_Order_By = {
  AccountName?: Maybe<Order_By>;
  AccountNumber?: Maybe<Order_By>;
  Balance?: Maybe<Order_By>;
  BalanceType?: Maybe<Order_By>;
  BankName?: Maybe<Order_By>;
  ClientAccount?: Maybe<Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Description?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  MasterAccountNumber?: Maybe<Order_By>;
  Note?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Acct_Account_Min_Fields = {
  __typename?: 'acct_Account_min_fields';
  AccountName?: Maybe<Scalars['String']>;
  AccountNumber?: Maybe<Scalars['String']>;
  Balance?: Maybe<Scalars['Float']>;
  BalanceType?: Maybe<Scalars['String']>;
  BankName?: Maybe<Scalars['String']>;
  ClientAccount?: Maybe<Scalars['String']>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  Description?: Maybe<Scalars['String']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdAccountingConversion?: Maybe<Scalars['Int']>;
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdConversionType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  MasterAccountNumber?: Maybe<Scalars['String']>;
  Note?: Maybe<Scalars['String']>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "acct.Account" */
export type Acct_Account_Min_Order_By = {
  AccountName?: Maybe<Order_By>;
  AccountNumber?: Maybe<Order_By>;
  Balance?: Maybe<Order_By>;
  BalanceType?: Maybe<Order_By>;
  BankName?: Maybe<Order_By>;
  ClientAccount?: Maybe<Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Description?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  MasterAccountNumber?: Maybe<Order_By>;
  Note?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "acct.Account". */
export type Acct_Account_Order_By = {
  AccountName?: Maybe<Order_By>;
  AccountNumber?: Maybe<Order_By>;
  AccountingType?: Maybe<Acct_AccountingType_Order_By>;
  Balance?: Maybe<Order_By>;
  BalanceType?: Maybe<Order_By>;
  BankName?: Maybe<Order_By>;
  ClientAccount?: Maybe<Order_By>;
  ConversionType?: Maybe<Acct_ConversionType_Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Currency?: Maybe<Acct_Currency_Order_By>;
  Description?: Maybe<Order_By>;
  FinancialStatement?: Maybe<Acct_FinancialStatement_Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  MasterAccountNumber?: Maybe<Order_By>;
  Note?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** select columns of table "acct.Account" */
export enum Acct_Account_Select_Column {
  /** column name */
  AccountName = 'AccountName',
  /** column name */
  AccountNumber = 'AccountNumber',
  /** column name */
  Balance = 'Balance',
  /** column name */
  BalanceType = 'BalanceType',
  /** column name */
  BankName = 'BankName',
  /** column name */
  ClientAccount = 'ClientAccount',
  /** column name */
  CreatedDate = 'CreatedDate',
  /** column name */
  Description = 'Description',
  /** column name */
  IdAccount = 'IdAccount',
  /** column name */
  IdAccountingConversion = 'IdAccountingConversion',
  /** column name */
  IdAccountingType = 'IdAccountingType',
  /** column name */
  IdConversionType = 'IdConversionType',
  /** column name */
  IdCurrency = 'IdCurrency',
  /** column name */
  IdFinancialStatement = 'IdFinancialStatement',
  /** column name */
  IdMasterAccount = 'IdMasterAccount',
  /** column name */
  IdStatus = 'IdStatus',
  /** column name */
  LastModifiedDate = 'LastModifiedDate',
  /** column name */
  LastModifiedIdUser = 'LastModifiedIdUser',
  /** column name */
  MasterAccountNumber = 'MasterAccountNumber',
  /** column name */
  Note = 'Note',
  /** column name */
  UseCostCenter = 'UseCostCenter'
}

/** aggregate stddev on columns */
export type Acct_Account_Stddev_Fields = {
  __typename?: 'acct_Account_stddev_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Acct_Account_Stddev_Pop_Fields = {
  __typename?: 'acct_Account_stddev_pop_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Pop_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Acct_Account_Stddev_Samp_Fields = {
  __typename?: 'acct_Account_stddev_samp_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Samp_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Acct_Account_Sum_Fields = {
  __typename?: 'acct_Account_sum_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdAccountingConversion?: Maybe<Scalars['Int']>;
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdConversionType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "acct.Account" */
export type Acct_Account_Sum_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Acct_Account_Var_Pop_Fields = {
  __typename?: 'acct_Account_var_pop_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "acct.Account" */
export type Acct_Account_Var_Pop_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Acct_Account_Var_Samp_Fields = {
  __typename?: 'acct_Account_var_samp_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "acct.Account" */
export type Acct_Account_Var_Samp_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Acct_Account_Variance_Fields = {
  __typename?: 'acct_Account_variance_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingConversion?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdConversionType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "acct.Account" */
export type Acct_Account_Variance_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingConversion?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdConversionType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** columns and relationships of "acct.AccountingType" */
export type Acct_AccountingType = {
  __typename?: 'acct_AccountingType';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdAccountingType: Scalars['Int'];
  NAME?: Maybe<Scalars['String']>;
};


/** columns and relationships of "acct.AccountingType" */
export type Acct_AccountingTypeAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.AccountingType" */
export type Acct_AccountingTypeAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.AccountingType" */
export type Acct_AccountingType_Aggregate = {
  __typename?: 'acct_AccountingType_aggregate';
  aggregate?: Maybe<Acct_AccountingType_Aggregate_Fields>;
  nodes: Array<Acct_AccountingType>;
};

/** aggregate fields of "acct.AccountingType" */
export type Acct_AccountingType_Aggregate_Fields = {
  __typename?: 'acct_AccountingType_aggregate_fields';
  avg?: Maybe<Acct_AccountingType_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_AccountingType_Max_Fields>;
  min?: Maybe<Acct_AccountingType_Min_Fields>;
  stddev?: Maybe<Acct_AccountingType_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_AccountingType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_AccountingType_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_AccountingType_Sum_Fields>;
  var_pop?: Maybe<Acct_AccountingType_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_AccountingType_Var_Samp_Fields>;
  variance?: Maybe<Acct_AccountingType_Variance_Fields>;
};


/** aggregate fields of "acct.AccountingType" */
export type Acct_AccountingType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_AccountingType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_AccountingType_Avg_Fields = {
  __typename?: 'acct_AccountingType_avg_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.AccountingType". All fields are combined with a logical 'AND'. */
export type Acct_AccountingType_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdAccountingType?: Maybe<Int_Mssql_Comparison_Exp>;
  NAME?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_AccountingType_Bool_Exp>>;
  _not?: Maybe<Acct_AccountingType_Bool_Exp>;
  _or?: Maybe<Array<Acct_AccountingType_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_AccountingType_Max_Fields = {
  __typename?: 'acct_AccountingType_max_fields';
  IdAccountingType?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_AccountingType_Min_Fields = {
  __typename?: 'acct_AccountingType_min_fields';
  IdAccountingType?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.AccountingType". */
export type Acct_AccountingType_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  NAME?: Maybe<Order_By>;
};

/** select columns of table "acct.AccountingType" */
export enum Acct_AccountingType_Select_Column {
  /** column name */
  IdAccountingType = 'IdAccountingType',
  /** column name */
  Name = 'NAME'
}

/** aggregate stddev on columns */
export type Acct_AccountingType_Stddev_Fields = {
  __typename?: 'acct_AccountingType_stddev_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_AccountingType_Stddev_Pop_Fields = {
  __typename?: 'acct_AccountingType_stddev_pop_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_AccountingType_Stddev_Samp_Fields = {
  __typename?: 'acct_AccountingType_stddev_samp_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_AccountingType_Sum_Fields = {
  __typename?: 'acct_AccountingType_sum_fields';
  IdAccountingType?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_AccountingType_Var_Pop_Fields = {
  __typename?: 'acct_AccountingType_var_pop_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_AccountingType_Var_Samp_Fields = {
  __typename?: 'acct_AccountingType_var_samp_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_AccountingType_Variance_Fields = {
  __typename?: 'acct_AccountingType_variance_fields';
  IdAccountingType?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "acct.Coin" */
export type Acct_Coin = {
  __typename?: 'acct_Coin';
  IdCoin: Scalars['Int'];
  Name: Scalars['String'];
};

/** aggregated selection of "acct.Coin" */
export type Acct_Coin_Aggregate = {
  __typename?: 'acct_Coin_aggregate';
  aggregate?: Maybe<Acct_Coin_Aggregate_Fields>;
  nodes: Array<Acct_Coin>;
};

/** aggregate fields of "acct.Coin" */
export type Acct_Coin_Aggregate_Fields = {
  __typename?: 'acct_Coin_aggregate_fields';
  avg?: Maybe<Acct_Coin_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_Coin_Max_Fields>;
  min?: Maybe<Acct_Coin_Min_Fields>;
  stddev?: Maybe<Acct_Coin_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_Coin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_Coin_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_Coin_Sum_Fields>;
  var_pop?: Maybe<Acct_Coin_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_Coin_Var_Samp_Fields>;
  variance?: Maybe<Acct_Coin_Variance_Fields>;
};


/** aggregate fields of "acct.Coin" */
export type Acct_Coin_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_Coin_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_Coin_Avg_Fields = {
  __typename?: 'acct_Coin_avg_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.Coin". All fields are combined with a logical 'AND'. */
export type Acct_Coin_Bool_Exp = {
  IdCoin?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_Coin_Bool_Exp>>;
  _not?: Maybe<Acct_Coin_Bool_Exp>;
  _or?: Maybe<Array<Acct_Coin_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_Coin_Max_Fields = {
  __typename?: 'acct_Coin_max_fields';
  IdCoin?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_Coin_Min_Fields = {
  __typename?: 'acct_Coin_min_fields';
  IdCoin?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.Coin". */
export type Acct_Coin_Order_By = {
  IdCoin?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.Coin" */
export enum Acct_Coin_Select_Column {
  /** column name */
  IdCoin = 'IdCoin',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Acct_Coin_Stddev_Fields = {
  __typename?: 'acct_Coin_stddev_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_Coin_Stddev_Pop_Fields = {
  __typename?: 'acct_Coin_stddev_pop_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_Coin_Stddev_Samp_Fields = {
  __typename?: 'acct_Coin_stddev_samp_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_Coin_Sum_Fields = {
  __typename?: 'acct_Coin_sum_fields';
  IdCoin?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_Coin_Var_Pop_Fields = {
  __typename?: 'acct_Coin_var_pop_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_Coin_Var_Samp_Fields = {
  __typename?: 'acct_Coin_var_samp_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_Coin_Variance_Fields = {
  __typename?: 'acct_Coin_variance_fields';
  IdCoin?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "acct.ConversionType" */
export type Acct_ConversionType = {
  __typename?: 'acct_ConversionType';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdConversionType: Scalars['Int'];
  NAME?: Maybe<Scalars['String']>;
};


/** columns and relationships of "acct.ConversionType" */
export type Acct_ConversionTypeAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.ConversionType" */
export type Acct_ConversionTypeAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.ConversionType" */
export type Acct_ConversionType_Aggregate = {
  __typename?: 'acct_ConversionType_aggregate';
  aggregate?: Maybe<Acct_ConversionType_Aggregate_Fields>;
  nodes: Array<Acct_ConversionType>;
};

/** aggregate fields of "acct.ConversionType" */
export type Acct_ConversionType_Aggregate_Fields = {
  __typename?: 'acct_ConversionType_aggregate_fields';
  avg?: Maybe<Acct_ConversionType_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_ConversionType_Max_Fields>;
  min?: Maybe<Acct_ConversionType_Min_Fields>;
  stddev?: Maybe<Acct_ConversionType_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_ConversionType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_ConversionType_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_ConversionType_Sum_Fields>;
  var_pop?: Maybe<Acct_ConversionType_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_ConversionType_Var_Samp_Fields>;
  variance?: Maybe<Acct_ConversionType_Variance_Fields>;
};


/** aggregate fields of "acct.ConversionType" */
export type Acct_ConversionType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_ConversionType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_ConversionType_Avg_Fields = {
  __typename?: 'acct_ConversionType_avg_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.ConversionType". All fields are combined with a logical 'AND'. */
export type Acct_ConversionType_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdConversionType?: Maybe<Int_Mssql_Comparison_Exp>;
  NAME?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_ConversionType_Bool_Exp>>;
  _not?: Maybe<Acct_ConversionType_Bool_Exp>;
  _or?: Maybe<Array<Acct_ConversionType_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_ConversionType_Max_Fields = {
  __typename?: 'acct_ConversionType_max_fields';
  IdConversionType?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_ConversionType_Min_Fields = {
  __typename?: 'acct_ConversionType_min_fields';
  IdConversionType?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.ConversionType". */
export type Acct_ConversionType_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdConversionType?: Maybe<Order_By>;
  NAME?: Maybe<Order_By>;
};

/** select columns of table "acct.ConversionType" */
export enum Acct_ConversionType_Select_Column {
  /** column name */
  IdConversionType = 'IdConversionType',
  /** column name */
  Name = 'NAME'
}

/** aggregate stddev on columns */
export type Acct_ConversionType_Stddev_Fields = {
  __typename?: 'acct_ConversionType_stddev_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_ConversionType_Stddev_Pop_Fields = {
  __typename?: 'acct_ConversionType_stddev_pop_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_ConversionType_Stddev_Samp_Fields = {
  __typename?: 'acct_ConversionType_stddev_samp_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_ConversionType_Sum_Fields = {
  __typename?: 'acct_ConversionType_sum_fields';
  IdConversionType?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_ConversionType_Var_Pop_Fields = {
  __typename?: 'acct_ConversionType_var_pop_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_ConversionType_Var_Samp_Fields = {
  __typename?: 'acct_ConversionType_var_samp_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_ConversionType_Variance_Fields = {
  __typename?: 'acct_ConversionType_variance_fields';
  IdConversionType?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "acct.Currency" */
export type Acct_Currency = {
  __typename?: 'acct_Currency';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdCurrency: Scalars['Int'];
  NAME?: Maybe<Scalars['String']>;
};


/** columns and relationships of "acct.Currency" */
export type Acct_CurrencyAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.Currency" */
export type Acct_CurrencyAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.Currency" */
export type Acct_Currency_Aggregate = {
  __typename?: 'acct_Currency_aggregate';
  aggregate?: Maybe<Acct_Currency_Aggregate_Fields>;
  nodes: Array<Acct_Currency>;
};

/** aggregate fields of "acct.Currency" */
export type Acct_Currency_Aggregate_Fields = {
  __typename?: 'acct_Currency_aggregate_fields';
  avg?: Maybe<Acct_Currency_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_Currency_Max_Fields>;
  min?: Maybe<Acct_Currency_Min_Fields>;
  stddev?: Maybe<Acct_Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_Currency_Sum_Fields>;
  var_pop?: Maybe<Acct_Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_Currency_Var_Samp_Fields>;
  variance?: Maybe<Acct_Currency_Variance_Fields>;
};


/** aggregate fields of "acct.Currency" */
export type Acct_Currency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_Currency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_Currency_Avg_Fields = {
  __typename?: 'acct_Currency_avg_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.Currency". All fields are combined with a logical 'AND'. */
export type Acct_Currency_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdCurrency?: Maybe<Int_Mssql_Comparison_Exp>;
  NAME?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_Currency_Bool_Exp>>;
  _not?: Maybe<Acct_Currency_Bool_Exp>;
  _or?: Maybe<Array<Acct_Currency_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_Currency_Max_Fields = {
  __typename?: 'acct_Currency_max_fields';
  IdCurrency?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_Currency_Min_Fields = {
  __typename?: 'acct_Currency_min_fields';
  IdCurrency?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.Currency". */
export type Acct_Currency_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdCurrency?: Maybe<Order_By>;
  NAME?: Maybe<Order_By>;
};

/** select columns of table "acct.Currency" */
export enum Acct_Currency_Select_Column {
  /** column name */
  IdCurrency = 'IdCurrency',
  /** column name */
  Name = 'NAME'
}

/** aggregate stddev on columns */
export type Acct_Currency_Stddev_Fields = {
  __typename?: 'acct_Currency_stddev_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_Currency_Stddev_Pop_Fields = {
  __typename?: 'acct_Currency_stddev_pop_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_Currency_Stddev_Samp_Fields = {
  __typename?: 'acct_Currency_stddev_samp_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_Currency_Sum_Fields = {
  __typename?: 'acct_Currency_sum_fields';
  IdCurrency?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_Currency_Var_Pop_Fields = {
  __typename?: 'acct_Currency_var_pop_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_Currency_Var_Samp_Fields = {
  __typename?: 'acct_Currency_var_samp_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_Currency_Variance_Fields = {
  __typename?: 'acct_Currency_variance_fields';
  IdCurrency?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "acct.FinancialStatement" */
export type Acct_FinancialStatement = {
  __typename?: 'acct_FinancialStatement';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdFinancialStatement: Scalars['Int'];
  NAME?: Maybe<Scalars['String']>;
};


/** columns and relationships of "acct.FinancialStatement" */
export type Acct_FinancialStatementAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.FinancialStatement" */
export type Acct_FinancialStatementAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.FinancialStatement" */
export type Acct_FinancialStatement_Aggregate = {
  __typename?: 'acct_FinancialStatement_aggregate';
  aggregate?: Maybe<Acct_FinancialStatement_Aggregate_Fields>;
  nodes: Array<Acct_FinancialStatement>;
};

/** aggregate fields of "acct.FinancialStatement" */
export type Acct_FinancialStatement_Aggregate_Fields = {
  __typename?: 'acct_FinancialStatement_aggregate_fields';
  avg?: Maybe<Acct_FinancialStatement_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_FinancialStatement_Max_Fields>;
  min?: Maybe<Acct_FinancialStatement_Min_Fields>;
  stddev?: Maybe<Acct_FinancialStatement_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_FinancialStatement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_FinancialStatement_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_FinancialStatement_Sum_Fields>;
  var_pop?: Maybe<Acct_FinancialStatement_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_FinancialStatement_Var_Samp_Fields>;
  variance?: Maybe<Acct_FinancialStatement_Variance_Fields>;
};


/** aggregate fields of "acct.FinancialStatement" */
export type Acct_FinancialStatement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_FinancialStatement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_FinancialStatement_Avg_Fields = {
  __typename?: 'acct_FinancialStatement_avg_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.FinancialStatement". All fields are combined with a logical 'AND'. */
export type Acct_FinancialStatement_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdFinancialStatement?: Maybe<Int_Mssql_Comparison_Exp>;
  NAME?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_FinancialStatement_Bool_Exp>>;
  _not?: Maybe<Acct_FinancialStatement_Bool_Exp>;
  _or?: Maybe<Array<Acct_FinancialStatement_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_FinancialStatement_Max_Fields = {
  __typename?: 'acct_FinancialStatement_max_fields';
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_FinancialStatement_Min_Fields = {
  __typename?: 'acct_FinancialStatement_min_fields';
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  NAME?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.FinancialStatement". */
export type Acct_FinancialStatement_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  NAME?: Maybe<Order_By>;
};

/** select columns of table "acct.FinancialStatement" */
export enum Acct_FinancialStatement_Select_Column {
  /** column name */
  IdFinancialStatement = 'IdFinancialStatement',
  /** column name */
  Name = 'NAME'
}

/** aggregate stddev on columns */
export type Acct_FinancialStatement_Stddev_Fields = {
  __typename?: 'acct_FinancialStatement_stddev_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_FinancialStatement_Stddev_Pop_Fields = {
  __typename?: 'acct_FinancialStatement_stddev_pop_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_FinancialStatement_Stddev_Samp_Fields = {
  __typename?: 'acct_FinancialStatement_stddev_samp_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_FinancialStatement_Sum_Fields = {
  __typename?: 'acct_FinancialStatement_sum_fields';
  IdFinancialStatement?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_FinancialStatement_Var_Pop_Fields = {
  __typename?: 'acct_FinancialStatement_var_pop_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_FinancialStatement_Var_Samp_Fields = {
  __typename?: 'acct_FinancialStatement_var_samp_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_FinancialStatement_Variance_Fields = {
  __typename?: 'acct_FinancialStatement_variance_fields';
  IdFinancialStatement?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "datetime". All fields are combined with logical 'AND'. */
export type Datetime_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['datetime']>;
  _gt?: Maybe<Scalars['datetime']>;
  _gte?: Maybe<Scalars['datetime']>;
  _in?: Maybe<Array<Scalars['datetime']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['datetime']>;
  _lte?: Maybe<Scalars['datetime']>;
  _neq?: Maybe<Scalars['datetime']>;
  _nin?: Maybe<Array<Scalars['datetime']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls first */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls last */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "acct.Account" */
  acct_Account: Array<Acct_Account>;
  /** fetch aggregated fields from the table: "acct.Account" */
  acct_Account_aggregate: Acct_Account_Aggregate;
  /** fetch data from the table: "acct.AccountingType" */
  acct_AccountingType: Array<Acct_AccountingType>;
  /** fetch aggregated fields from the table: "acct.AccountingType" */
  acct_AccountingType_aggregate: Acct_AccountingType_Aggregate;
  /** fetch data from the table: "acct.Coin" */
  acct_Coin: Array<Acct_Coin>;
  /** fetch aggregated fields from the table: "acct.Coin" */
  acct_Coin_aggregate: Acct_Coin_Aggregate;
  /** fetch data from the table: "acct.ConversionType" */
  acct_ConversionType: Array<Acct_ConversionType>;
  /** fetch aggregated fields from the table: "acct.ConversionType" */
  acct_ConversionType_aggregate: Acct_ConversionType_Aggregate;
  /** fetch data from the table: "acct.Currency" */
  acct_Currency: Array<Acct_Currency>;
  /** fetch aggregated fields from the table: "acct.Currency" */
  acct_Currency_aggregate: Acct_Currency_Aggregate;
  /** fetch data from the table: "acct.FinancialStatement" */
  acct_FinancialStatement: Array<Acct_FinancialStatement>;
  /** fetch aggregated fields from the table: "acct.FinancialStatement" */
  acct_FinancialStatement_aggregate: Acct_FinancialStatement_Aggregate;
  /** fetch data from the table: "sysdiagrams" */
  sysdiagrams: Array<Sysdiagrams>;
  /** fetch aggregated fields from the table: "sysdiagrams" */
  sysdiagrams_aggregate: Sysdiagrams_Aggregate;
};


export type Query_RootCountryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Query_RootAcct_AccountArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


export type Query_RootAcct_Account_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


export type Query_RootAcct_AccountingTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_AccountingType_Order_By>>;
  where?: Maybe<Acct_AccountingType_Bool_Exp>;
};


export type Query_RootAcct_AccountingType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_AccountingType_Order_By>>;
  where?: Maybe<Acct_AccountingType_Bool_Exp>;
};


export type Query_RootAcct_CoinArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Coin_Order_By>>;
  where?: Maybe<Acct_Coin_Bool_Exp>;
};


export type Query_RootAcct_Coin_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Coin_Order_By>>;
  where?: Maybe<Acct_Coin_Bool_Exp>;
};


export type Query_RootAcct_ConversionTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_ConversionType_Order_By>>;
  where?: Maybe<Acct_ConversionType_Bool_Exp>;
};


export type Query_RootAcct_ConversionType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_ConversionType_Order_By>>;
  where?: Maybe<Acct_ConversionType_Bool_Exp>;
};


export type Query_RootAcct_CurrencyArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Currency_Order_By>>;
  where?: Maybe<Acct_Currency_Bool_Exp>;
};


export type Query_RootAcct_Currency_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Currency_Order_By>>;
  where?: Maybe<Acct_Currency_Bool_Exp>;
};


export type Query_RootAcct_FinancialStatementArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_FinancialStatement_Order_By>>;
  where?: Maybe<Acct_FinancialStatement_Bool_Exp>;
};


export type Query_RootAcct_FinancialStatement_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_FinancialStatement_Order_By>>;
  where?: Maybe<Acct_FinancialStatement_Bool_Exp>;
};


export type Query_RootSysdiagramsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sysdiagrams_Order_By>>;
  where?: Maybe<Sysdiagrams_Bool_Exp>;
};


export type Query_RootSysdiagrams_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sysdiagrams_Order_By>>;
  where?: Maybe<Sysdiagrams_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "acct.Account" */
  acct_Account: Array<Acct_Account>;
  /** fetch aggregated fields from the table: "acct.Account" */
  acct_Account_aggregate: Acct_Account_Aggregate;
  /** fetch data from the table: "acct.AccountingType" */
  acct_AccountingType: Array<Acct_AccountingType>;
  /** fetch aggregated fields from the table: "acct.AccountingType" */
  acct_AccountingType_aggregate: Acct_AccountingType_Aggregate;
  /** fetch data from the table: "acct.Coin" */
  acct_Coin: Array<Acct_Coin>;
  /** fetch aggregated fields from the table: "acct.Coin" */
  acct_Coin_aggregate: Acct_Coin_Aggregate;
  /** fetch data from the table: "acct.ConversionType" */
  acct_ConversionType: Array<Acct_ConversionType>;
  /** fetch aggregated fields from the table: "acct.ConversionType" */
  acct_ConversionType_aggregate: Acct_ConversionType_Aggregate;
  /** fetch data from the table: "acct.Currency" */
  acct_Currency: Array<Acct_Currency>;
  /** fetch aggregated fields from the table: "acct.Currency" */
  acct_Currency_aggregate: Acct_Currency_Aggregate;
  /** fetch data from the table: "acct.FinancialStatement" */
  acct_FinancialStatement: Array<Acct_FinancialStatement>;
  /** fetch aggregated fields from the table: "acct.FinancialStatement" */
  acct_FinancialStatement_aggregate: Acct_FinancialStatement_Aggregate;
  /** fetch data from the table: "sysdiagrams" */
  sysdiagrams: Array<Sysdiagrams>;
  /** fetch aggregated fields from the table: "sysdiagrams" */
  sysdiagrams_aggregate: Sysdiagrams_Aggregate;
};


export type Subscription_RootCountryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Country_Order_By>>;
  where?: Maybe<Country_Bool_Exp>;
};


export type Subscription_RootAcct_AccountArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


export type Subscription_RootAcct_Account_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


export type Subscription_RootAcct_AccountingTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_AccountingType_Order_By>>;
  where?: Maybe<Acct_AccountingType_Bool_Exp>;
};


export type Subscription_RootAcct_AccountingType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_AccountingType_Order_By>>;
  where?: Maybe<Acct_AccountingType_Bool_Exp>;
};


export type Subscription_RootAcct_CoinArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Coin_Order_By>>;
  where?: Maybe<Acct_Coin_Bool_Exp>;
};


export type Subscription_RootAcct_Coin_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Coin_Order_By>>;
  where?: Maybe<Acct_Coin_Bool_Exp>;
};


export type Subscription_RootAcct_ConversionTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_ConversionType_Order_By>>;
  where?: Maybe<Acct_ConversionType_Bool_Exp>;
};


export type Subscription_RootAcct_ConversionType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_ConversionType_Order_By>>;
  where?: Maybe<Acct_ConversionType_Bool_Exp>;
};


export type Subscription_RootAcct_CurrencyArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Currency_Order_By>>;
  where?: Maybe<Acct_Currency_Bool_Exp>;
};


export type Subscription_RootAcct_Currency_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Currency_Order_By>>;
  where?: Maybe<Acct_Currency_Bool_Exp>;
};


export type Subscription_RootAcct_FinancialStatementArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_FinancialStatement_Order_By>>;
  where?: Maybe<Acct_FinancialStatement_Bool_Exp>;
};


export type Subscription_RootAcct_FinancialStatement_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_FinancialStatement_Order_By>>;
  where?: Maybe<Acct_FinancialStatement_Bool_Exp>;
};


export type Subscription_RootSysdiagramsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sysdiagrams_Order_By>>;
  where?: Maybe<Sysdiagrams_Bool_Exp>;
};


export type Subscription_RootSysdiagrams_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sysdiagrams_Order_By>>;
  where?: Maybe<Sysdiagrams_Bool_Exp>;
};

/** columns and relationships of "sysdiagrams" */
export type Sysdiagrams = {
  __typename?: 'sysdiagrams';
  definition?: Maybe<Scalars['varbinary']>;
  diagram_id: Scalars['Int'];
  name: Scalars['sysname'];
  principal_id: Scalars['Int'];
  version?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "sysdiagrams" */
export type Sysdiagrams_Aggregate = {
  __typename?: 'sysdiagrams_aggregate';
  aggregate?: Maybe<Sysdiagrams_Aggregate_Fields>;
  nodes: Array<Sysdiagrams>;
};

/** aggregate fields of "sysdiagrams" */
export type Sysdiagrams_Aggregate_Fields = {
  __typename?: 'sysdiagrams_aggregate_fields';
  avg?: Maybe<Sysdiagrams_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sysdiagrams_Max_Fields>;
  min?: Maybe<Sysdiagrams_Min_Fields>;
  stddev?: Maybe<Sysdiagrams_Stddev_Fields>;
  stddev_pop?: Maybe<Sysdiagrams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sysdiagrams_Stddev_Samp_Fields>;
  sum?: Maybe<Sysdiagrams_Sum_Fields>;
  var_pop?: Maybe<Sysdiagrams_Var_Pop_Fields>;
  var_samp?: Maybe<Sysdiagrams_Var_Samp_Fields>;
  variance?: Maybe<Sysdiagrams_Variance_Fields>;
};


/** aggregate fields of "sysdiagrams" */
export type Sysdiagrams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sysdiagrams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sysdiagrams_Avg_Fields = {
  __typename?: 'sysdiagrams_avg_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sysdiagrams". All fields are combined with a logical 'AND'. */
export type Sysdiagrams_Bool_Exp = {
  _and?: Maybe<Array<Sysdiagrams_Bool_Exp>>;
  _not?: Maybe<Sysdiagrams_Bool_Exp>;
  _or?: Maybe<Array<Sysdiagrams_Bool_Exp>>;
  definition?: Maybe<Varbinary_Mssql_Comparison_Exp>;
  diagram_id?: Maybe<Int_Mssql_Comparison_Exp>;
  name?: Maybe<Sysname_Mssql_Comparison_Exp>;
  principal_id?: Maybe<Int_Mssql_Comparison_Exp>;
  version?: Maybe<Int_Mssql_Comparison_Exp>;
};

/** aggregate max on columns */
export type Sysdiagrams_Max_Fields = {
  __typename?: 'sysdiagrams_max_fields';
  diagram_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['sysname']>;
  principal_id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Sysdiagrams_Min_Fields = {
  __typename?: 'sysdiagrams_min_fields';
  diagram_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['sysname']>;
  principal_id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "sysdiagrams". */
export type Sysdiagrams_Order_By = {
  definition?: Maybe<Order_By>;
  diagram_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  principal_id?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** select columns of table "sysdiagrams" */
export enum Sysdiagrams_Select_Column {
  /** column name */
  Definition = 'definition',
  /** column name */
  DiagramId = 'diagram_id',
  /** column name */
  Name = 'name',
  /** column name */
  PrincipalId = 'principal_id',
  /** column name */
  Version = 'version'
}

/** aggregate stddev on columns */
export type Sysdiagrams_Stddev_Fields = {
  __typename?: 'sysdiagrams_stddev_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sysdiagrams_Stddev_Pop_Fields = {
  __typename?: 'sysdiagrams_stddev_pop_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sysdiagrams_Stddev_Samp_Fields = {
  __typename?: 'sysdiagrams_stddev_samp_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sysdiagrams_Sum_Fields = {
  __typename?: 'sysdiagrams_sum_fields';
  diagram_id?: Maybe<Scalars['Int']>;
  principal_id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Sysdiagrams_Var_Pop_Fields = {
  __typename?: 'sysdiagrams_var_pop_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sysdiagrams_Var_Samp_Fields = {
  __typename?: 'sysdiagrams_var_samp_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sysdiagrams_Variance_Fields = {
  __typename?: 'sysdiagrams_variance_fields';
  diagram_id?: Maybe<Scalars['Float']>;
  principal_id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "sysname". All fields are combined with logical 'AND'. */
export type Sysname_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['sysname']>;
  _gt?: Maybe<Scalars['sysname']>;
  _gte?: Maybe<Scalars['sysname']>;
  _in?: Maybe<Array<Scalars['sysname']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['sysname']>;
  _lte?: Maybe<Scalars['sysname']>;
  _neq?: Maybe<Scalars['sysname']>;
  _nin?: Maybe<Array<Scalars['sysname']>>;
};


/** Boolean expression to compare columns of type "varbinary". All fields are combined with logical 'AND'. */
export type Varbinary_Mssql_Comparison_Exp = {
  _eq?: Maybe<Scalars['varbinary']>;
  _gt?: Maybe<Scalars['varbinary']>;
  _gte?: Maybe<Scalars['varbinary']>;
  _in?: Maybe<Array<Scalars['varbinary']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['varbinary']>;
  _lte?: Maybe<Scalars['varbinary']>;
  _neq?: Maybe<Scalars['varbinary']>;
  _nin?: Maybe<Array<Scalars['varbinary']>>;
};

export type FetchAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAccountsQuery = { __typename?: 'query_root', acct_Account: Array<{ __typename?: 'acct_Account', AccountName?: Maybe<string>, AccountNumber: string, BankName?: Maybe<string>, Note?: Maybe<string>, IdAccount: number, Balance?: Maybe<number>, BalanceType?: Maybe<string> }> };


export const FetchAccountsDocument = gql`
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

/**
 * __useFetchAccountsQuery__
 *
 * To run a query within a React component, call `useFetchAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAccountsQuery(baseOptions?: Apollo.QueryHookOptions<FetchAccountsQuery, FetchAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAccountsQuery, FetchAccountsQueryVariables>(FetchAccountsDocument, options);
      }
export function useFetchAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAccountsQuery, FetchAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAccountsQuery, FetchAccountsQueryVariables>(FetchAccountsDocument, options);
        }
export type FetchAccountsQueryHookResult = ReturnType<typeof useFetchAccountsQuery>;
export type FetchAccountsLazyQueryHookResult = ReturnType<typeof useFetchAccountsLazyQuery>;
export type FetchAccountsQueryResult = Apollo.QueryResult<FetchAccountsQuery, FetchAccountsQueryVariables>;