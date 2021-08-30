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


/** columns and relationships of "Code" */
export type Code = {
  __typename?: 'Code';
  IdCode: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Code" */
export type Code_Aggregate = {
  __typename?: 'Code_aggregate';
  aggregate?: Maybe<Code_Aggregate_Fields>;
  nodes: Array<Code>;
};

/** aggregate fields of "Code" */
export type Code_Aggregate_Fields = {
  __typename?: 'Code_aggregate_fields';
  avg?: Maybe<Code_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Code_Max_Fields>;
  min?: Maybe<Code_Min_Fields>;
  stddev?: Maybe<Code_Stddev_Fields>;
  stddev_pop?: Maybe<Code_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Code_Stddev_Samp_Fields>;
  sum?: Maybe<Code_Sum_Fields>;
  var_pop?: Maybe<Code_Var_Pop_Fields>;
  var_samp?: Maybe<Code_Var_Samp_Fields>;
  variance?: Maybe<Code_Variance_Fields>;
};


/** aggregate fields of "Code" */
export type Code_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Code_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Code_Avg_Fields = {
  __typename?: 'Code_avg_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Code". All fields are combined with a logical 'AND'. */
export type Code_Bool_Exp = {
  IdCode?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Code_Bool_Exp>>;
  _not?: Maybe<Code_Bool_Exp>;
  _or?: Maybe<Array<Code_Bool_Exp>>;
};

/** aggregate max on columns */
export type Code_Max_Fields = {
  __typename?: 'Code_max_fields';
  IdCode?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Code_Min_Fields = {
  __typename?: 'Code_min_fields';
  IdCode?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Code". */
export type Code_Order_By = {
  IdCode?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "Code" */
export enum Code_Select_Column {
  /** column name */
  IdCode = 'IdCode',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Code_Stddev_Fields = {
  __typename?: 'Code_stddev_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Code_Stddev_Pop_Fields = {
  __typename?: 'Code_stddev_pop_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Code_Stddev_Samp_Fields = {
  __typename?: 'Code_stddev_samp_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Code_Sum_Fields = {
  __typename?: 'Code_sum_fields';
  IdCode?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Code_Var_Pop_Fields = {
  __typename?: 'Code_var_pop_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Code_Var_Samp_Fields = {
  __typename?: 'Code_var_samp_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Code_Variance_Fields = {
  __typename?: 'Code_variance_fields';
  IdCode?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  IdCountry: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
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
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Country_Bool_Exp>>;
  _not?: Maybe<Country_Bool_Exp>;
  _or?: Maybe<Array<Country_Bool_Exp>>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  IdCountry?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  IdCountry?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  IdCountry?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  IdCountry = 'IdCountry',
  /** column name */
  Name = 'Name'
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

/** columns and relationships of "Permission" */
export type Permission = {
  __typename?: 'Permission';
  Code: Scalars['String'];
  IdPermission: Scalars['Int'];
  Name: Scalars['String'];
};

/** aggregated selection of "Permission" */
export type Permission_Aggregate = {
  __typename?: 'Permission_aggregate';
  aggregate?: Maybe<Permission_Aggregate_Fields>;
  nodes: Array<Permission>;
};

/** aggregate fields of "Permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'Permission_aggregate_fields';
  avg?: Maybe<Permission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Permission_Max_Fields>;
  min?: Maybe<Permission_Min_Fields>;
  stddev?: Maybe<Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Permission_Sum_Fields>;
  var_pop?: Maybe<Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Permission_Var_Samp_Fields>;
  variance?: Maybe<Permission_Variance_Fields>;
};


/** aggregate fields of "Permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Permission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Permission_Avg_Fields = {
  __typename?: 'Permission_avg_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  Code?: Maybe<String_Mssql_Comparison_Exp>;
  IdPermission?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Permission_Bool_Exp>>;
  _not?: Maybe<Permission_Bool_Exp>;
  _or?: Maybe<Array<Permission_Bool_Exp>>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'Permission_max_fields';
  Code?: Maybe<Scalars['String']>;
  IdPermission?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'Permission_min_fields';
  Code?: Maybe<Scalars['String']>;
  IdPermission?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Permission". */
export type Permission_Order_By = {
  Code?: Maybe<Order_By>;
  IdPermission?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "Permission" */
export enum Permission_Select_Column {
  /** column name */
  Code = 'Code',
  /** column name */
  IdPermission = 'IdPermission',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Permission_Stddev_Fields = {
  __typename?: 'Permission_stddev_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Permission_Stddev_Pop_Fields = {
  __typename?: 'Permission_stddev_pop_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Permission_Stddev_Samp_Fields = {
  __typename?: 'Permission_stddev_samp_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Permission_Sum_Fields = {
  __typename?: 'Permission_sum_fields';
  IdPermission?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Permission_Var_Pop_Fields = {
  __typename?: 'Permission_var_pop_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Permission_Var_Samp_Fields = {
  __typename?: 'Permission_var_samp_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Permission_Variance_Fields = {
  __typename?: 'Permission_variance_fields';
  IdPermission?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Rol" */
export type Rol = {
  __typename?: 'Rol';
  Description: Scalars['String'];
  IdRol: Scalars['Int'];
  Name: Scalars['String'];
  /** An array relationship */
  Users: Array<User>;
  /** An aggregate relationship */
  Users_aggregate: User_Aggregate;
};


/** columns and relationships of "Rol" */
export type RolUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "Rol" */
export type RolUsers_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "Rol" */
export type Rol_Aggregate = {
  __typename?: 'Rol_aggregate';
  aggregate?: Maybe<Rol_Aggregate_Fields>;
  nodes: Array<Rol>;
};

/** aggregate fields of "Rol" */
export type Rol_Aggregate_Fields = {
  __typename?: 'Rol_aggregate_fields';
  avg?: Maybe<Rol_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rol_Max_Fields>;
  min?: Maybe<Rol_Min_Fields>;
  stddev?: Maybe<Rol_Stddev_Fields>;
  stddev_pop?: Maybe<Rol_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rol_Stddev_Samp_Fields>;
  sum?: Maybe<Rol_Sum_Fields>;
  var_pop?: Maybe<Rol_Var_Pop_Fields>;
  var_samp?: Maybe<Rol_Var_Samp_Fields>;
  variance?: Maybe<Rol_Variance_Fields>;
};


/** aggregate fields of "Rol" */
export type Rol_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rol_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rol_Avg_Fields = {
  __typename?: 'Rol_avg_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Rol". All fields are combined with a logical 'AND'. */
export type Rol_Bool_Exp = {
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  IdRol?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  Users?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Rol_Bool_Exp>>;
  _not?: Maybe<Rol_Bool_Exp>;
  _or?: Maybe<Array<Rol_Bool_Exp>>;
};

/** aggregate max on columns */
export type Rol_Max_Fields = {
  __typename?: 'Rol_max_fields';
  Description?: Maybe<Scalars['String']>;
  IdRol?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rol_Min_Fields = {
  __typename?: 'Rol_min_fields';
  Description?: Maybe<Scalars['String']>;
  IdRol?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Rol". */
export type Rol_Order_By = {
  Description?: Maybe<Order_By>;
  IdRol?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
  Users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** select columns of table "Rol" */
export enum Rol_Select_Column {
  /** column name */
  Description = 'Description',
  /** column name */
  IdRol = 'IdRol',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Rol_Stddev_Fields = {
  __typename?: 'Rol_stddev_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rol_Stddev_Pop_Fields = {
  __typename?: 'Rol_stddev_pop_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rol_Stddev_Samp_Fields = {
  __typename?: 'Rol_stddev_samp_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rol_Sum_Fields = {
  __typename?: 'Rol_sum_fields';
  IdRol?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Rol_Var_Pop_Fields = {
  __typename?: 'Rol_var_pop_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rol_Var_Samp_Fields = {
  __typename?: 'Rol_var_samp_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rol_Variance_Fields = {
  __typename?: 'Rol_variance_fields';
  IdRol?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Status" */
export type Status = {
  __typename?: 'Status';
  IdStatus: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  /** An array relationship */
  Users: Array<User>;
  /** An aggregate relationship */
  Users_aggregate: User_Aggregate;
};


/** columns and relationships of "Status" */
export type StatusUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "Status" */
export type StatusUsers_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "Status" */
export type Status_Aggregate = {
  __typename?: 'Status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "Status" */
export type Status_Aggregate_Fields = {
  __typename?: 'Status_aggregate_fields';
  avg?: Maybe<Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
  stddev?: Maybe<Status_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Sum_Fields>;
  var_pop?: Maybe<Status_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Var_Samp_Fields>;
  variance?: Maybe<Status_Variance_Fields>;
};


/** aggregate fields of "Status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Status_Avg_Fields = {
  __typename?: 'Status_avg_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  IdStatus?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  Type?: Maybe<String_Mssql_Comparison_Exp>;
  Users?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Status_Bool_Exp>>;
  _not?: Maybe<Status_Bool_Exp>;
  _or?: Maybe<Array<Status_Bool_Exp>>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'Status_max_fields';
  IdStatus?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'Status_min_fields';
  IdStatus?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Status". */
export type Status_Order_By = {
  IdStatus?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
  Type?: Maybe<Order_By>;
  Users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** select columns of table "Status" */
export enum Status_Select_Column {
  /** column name */
  IdStatus = 'IdStatus',
  /** column name */
  Name = 'Name',
  /** column name */
  Type = 'Type'
}

/** aggregate stddev on columns */
export type Status_Stddev_Fields = {
  __typename?: 'Status_stddev_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Status_Stddev_Pop_Fields = {
  __typename?: 'Status_stddev_pop_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Status_Stddev_Samp_Fields = {
  __typename?: 'Status_stddev_samp_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Status_Sum_Fields = {
  __typename?: 'Status_sum_fields';
  IdStatus?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Status_Var_Pop_Fields = {
  __typename?: 'Status_var_pop_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Status_Var_Samp_Fields = {
  __typename?: 'Status_var_samp_fields';
  IdStatus?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Status_Variance_Fields = {
  __typename?: 'Status_variance_fields';
  IdStatus?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "TransactionCode" */
export type TransactionCode = {
  __typename?: 'TransactionCode';
  Description?: Maybe<Scalars['String']>;
  IdTransactionCode: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "TransactionCode" */
export type TransactionCode_Aggregate = {
  __typename?: 'TransactionCode_aggregate';
  aggregate?: Maybe<TransactionCode_Aggregate_Fields>;
  nodes: Array<TransactionCode>;
};

/** aggregate fields of "TransactionCode" */
export type TransactionCode_Aggregate_Fields = {
  __typename?: 'TransactionCode_aggregate_fields';
  avg?: Maybe<TransactionCode_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TransactionCode_Max_Fields>;
  min?: Maybe<TransactionCode_Min_Fields>;
  stddev?: Maybe<TransactionCode_Stddev_Fields>;
  stddev_pop?: Maybe<TransactionCode_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TransactionCode_Stddev_Samp_Fields>;
  sum?: Maybe<TransactionCode_Sum_Fields>;
  var_pop?: Maybe<TransactionCode_Var_Pop_Fields>;
  var_samp?: Maybe<TransactionCode_Var_Samp_Fields>;
  variance?: Maybe<TransactionCode_Variance_Fields>;
};


/** aggregate fields of "TransactionCode" */
export type TransactionCode_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TransactionCode_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TransactionCode_Avg_Fields = {
  __typename?: 'TransactionCode_avg_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "TransactionCode". All fields are combined with a logical 'AND'. */
export type TransactionCode_Bool_Exp = {
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  IdTransactionCode?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<TransactionCode_Bool_Exp>>;
  _not?: Maybe<TransactionCode_Bool_Exp>;
  _or?: Maybe<Array<TransactionCode_Bool_Exp>>;
};

/** aggregate max on columns */
export type TransactionCode_Max_Fields = {
  __typename?: 'TransactionCode_max_fields';
  Description?: Maybe<Scalars['String']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TransactionCode_Min_Fields = {
  __typename?: 'TransactionCode_min_fields';
  Description?: Maybe<Scalars['String']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "TransactionCode". */
export type TransactionCode_Order_By = {
  Description?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "TransactionCode" */
export enum TransactionCode_Select_Column {
  /** column name */
  Description = 'Description',
  /** column name */
  IdTransactionCode = 'IdTransactionCode',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type TransactionCode_Stddev_Fields = {
  __typename?: 'TransactionCode_stddev_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TransactionCode_Stddev_Pop_Fields = {
  __typename?: 'TransactionCode_stddev_pop_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TransactionCode_Stddev_Samp_Fields = {
  __typename?: 'TransactionCode_stddev_samp_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TransactionCode_Sum_Fields = {
  __typename?: 'TransactionCode_sum_fields';
  IdTransactionCode?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type TransactionCode_Var_Pop_Fields = {
  __typename?: 'TransactionCode_var_pop_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TransactionCode_Var_Samp_Fields = {
  __typename?: 'TransactionCode_var_samp_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TransactionCode_Variance_Fields = {
  __typename?: 'TransactionCode_variance_fields';
  IdTransactionCode?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "TransactionType" */
export type TransactionType = {
  __typename?: 'TransactionType';
  Description?: Maybe<Scalars['String']>;
  IdTransactionType: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "TransactionType" */
export type TransactionType_Aggregate = {
  __typename?: 'TransactionType_aggregate';
  aggregate?: Maybe<TransactionType_Aggregate_Fields>;
  nodes: Array<TransactionType>;
};

/** aggregate fields of "TransactionType" */
export type TransactionType_Aggregate_Fields = {
  __typename?: 'TransactionType_aggregate_fields';
  avg?: Maybe<TransactionType_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TransactionType_Max_Fields>;
  min?: Maybe<TransactionType_Min_Fields>;
  stddev?: Maybe<TransactionType_Stddev_Fields>;
  stddev_pop?: Maybe<TransactionType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TransactionType_Stddev_Samp_Fields>;
  sum?: Maybe<TransactionType_Sum_Fields>;
  var_pop?: Maybe<TransactionType_Var_Pop_Fields>;
  var_samp?: Maybe<TransactionType_Var_Samp_Fields>;
  variance?: Maybe<TransactionType_Variance_Fields>;
};


/** aggregate fields of "TransactionType" */
export type TransactionType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TransactionType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TransactionType_Avg_Fields = {
  __typename?: 'TransactionType_avg_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "TransactionType". All fields are combined with a logical 'AND'. */
export type TransactionType_Bool_Exp = {
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  IdTransactionType?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<TransactionType_Bool_Exp>>;
  _not?: Maybe<TransactionType_Bool_Exp>;
  _or?: Maybe<Array<TransactionType_Bool_Exp>>;
};

/** aggregate max on columns */
export type TransactionType_Max_Fields = {
  __typename?: 'TransactionType_max_fields';
  Description?: Maybe<Scalars['String']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TransactionType_Min_Fields = {
  __typename?: 'TransactionType_min_fields';
  Description?: Maybe<Scalars['String']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "TransactionType". */
export type TransactionType_Order_By = {
  Description?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "TransactionType" */
export enum TransactionType_Select_Column {
  /** column name */
  Description = 'Description',
  /** column name */
  IdTransactionType = 'IdTransactionType',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type TransactionType_Stddev_Fields = {
  __typename?: 'TransactionType_stddev_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TransactionType_Stddev_Pop_Fields = {
  __typename?: 'TransactionType_stddev_pop_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TransactionType_Stddev_Samp_Fields = {
  __typename?: 'TransactionType_stddev_samp_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TransactionType_Sum_Fields = {
  __typename?: 'TransactionType_sum_fields';
  IdTransactionType?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type TransactionType_Var_Pop_Fields = {
  __typename?: 'TransactionType_var_pop_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TransactionType_Var_Samp_Fields = {
  __typename?: 'TransactionType_var_samp_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TransactionType_Variance_Fields = {
  __typename?: 'TransactionType_variance_fields';
  IdTransactionType?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Type" */
export type Type = {
  __typename?: 'Type';
  IdType: Scalars['Int'];
  Name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Type" */
export type Type_Aggregate = {
  __typename?: 'Type_aggregate';
  aggregate?: Maybe<Type_Aggregate_Fields>;
  nodes: Array<Type>;
};

/** aggregate fields of "Type" */
export type Type_Aggregate_Fields = {
  __typename?: 'Type_aggregate_fields';
  avg?: Maybe<Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Type_Max_Fields>;
  min?: Maybe<Type_Min_Fields>;
  stddev?: Maybe<Type_Stddev_Fields>;
  stddev_pop?: Maybe<Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Type_Stddev_Samp_Fields>;
  sum?: Maybe<Type_Sum_Fields>;
  var_pop?: Maybe<Type_Var_Pop_Fields>;
  var_samp?: Maybe<Type_Var_Samp_Fields>;
  variance?: Maybe<Type_Variance_Fields>;
};


/** aggregate fields of "Type" */
export type Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Type_Avg_Fields = {
  __typename?: 'Type_avg_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Type". All fields are combined with a logical 'AND'. */
export type Type_Bool_Exp = {
  IdType?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Type_Bool_Exp>>;
  _not?: Maybe<Type_Bool_Exp>;
  _or?: Maybe<Array<Type_Bool_Exp>>;
};

/** aggregate max on columns */
export type Type_Max_Fields = {
  __typename?: 'Type_max_fields';
  IdType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Type_Min_Fields = {
  __typename?: 'Type_min_fields';
  IdType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "Type". */
export type Type_Order_By = {
  IdType?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "Type" */
export enum Type_Select_Column {
  /** column name */
  IdType = 'IdType',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Type_Stddev_Fields = {
  __typename?: 'Type_stddev_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Type_Stddev_Pop_Fields = {
  __typename?: 'Type_stddev_pop_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Type_Stddev_Samp_Fields = {
  __typename?: 'Type_stddev_samp_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Type_Sum_Fields = {
  __typename?: 'Type_sum_fields';
  IdType?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Type_Var_Pop_Fields = {
  __typename?: 'Type_var_pop_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Type_Var_Samp_Fields = {
  __typename?: 'Type_var_samp_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Type_Variance_Fields = {
  __typename?: 'Type_variance_fields';
  IdType?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  IdRol: Scalars['Int'];
  IdStatus: Scalars['Int'];
  IdUser: Scalars['Int'];
  LastLogin?: Maybe<Scalars['datetime']>;
  Password: Scalars['String'];
  /** An object relationship */
  Rol: Rol;
  /** An object relationship */
  Status: Status;
  Username: Scalars['String'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "User" */
export type User_Avg_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  IdRol?: Maybe<Int_Mssql_Comparison_Exp>;
  IdStatus?: Maybe<Int_Mssql_Comparison_Exp>;
  IdUser?: Maybe<Int_Mssql_Comparison_Exp>;
  LastLogin?: Maybe<Datetime_Mssql_Comparison_Exp>;
  Password?: Maybe<String_Mssql_Comparison_Exp>;
  Rol?: Maybe<Rol_Bool_Exp>;
  Status?: Maybe<Status_Bool_Exp>;
  Username?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  IdRol?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdUser?: Maybe<Scalars['Int']>;
  LastLogin?: Maybe<Scalars['datetime']>;
  Password?: Maybe<Scalars['String']>;
  Username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
  LastLogin?: Maybe<Order_By>;
  Password?: Maybe<Order_By>;
  Username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  IdRol?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdUser?: Maybe<Scalars['Int']>;
  LastLogin?: Maybe<Scalars['datetime']>;
  Password?: Maybe<Scalars['String']>;
  Username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
  LastLogin?: Maybe<Order_By>;
  Password?: Maybe<Order_By>;
  Username?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
  LastLogin?: Maybe<Order_By>;
  Password?: Maybe<Order_By>;
  Rol?: Maybe<Rol_Order_By>;
  Status?: Maybe<Status_Order_By>;
  Username?: Maybe<Order_By>;
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  IdRol = 'IdRol',
  /** column name */
  IdStatus = 'IdStatus',
  /** column name */
  IdUser = 'IdUser',
  /** column name */
  LastLogin = 'LastLogin',
  /** column name */
  Password = 'Password',
  /** column name */
  Username = 'Username'
}

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "User" */
export type User_Stddev_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  IdRol?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdUser?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  IdRol?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdUser?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  IdRol?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdUser?: Maybe<Order_By>;
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
  CreatedDate?: Maybe<Scalars['datetime']>;
  /** An object relationship */
  CreditType?: Maybe<Acct_CreditType>;
  /** An object relationship */
  Currency?: Maybe<Acct_Currency>;
  Description?: Maybe<Scalars['String']>;
  /** An object relationship */
  FinancialStatement?: Maybe<Acct_FinancialStatement>;
  IdAccount: Scalars['Int'];
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdCreditType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTypeExchange?: Maybe<Scalars['Int']>;
  IsRestricted?: Maybe<Scalars['String']>;
  /** An array relationship */
  JournalEntries: Array<Acct_JournalEntry>;
  /** An aggregate relationship */
  JournalEntries_aggregate: Acct_JournalEntry_Aggregate;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  Note?: Maybe<Scalars['String']>;
  /** An object relationship */
  TypeExchange?: Maybe<Acct_TypeExchange>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "acct.Account" */
export type Acct_AccountJournalEntriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


/** columns and relationships of "acct.Account" */
export type Acct_AccountJournalEntries_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
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
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "acct.Account" */
export type Acct_Account_Avg_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
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
  CreatedDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  CreditType?: Maybe<Acct_CreditType_Bool_Exp>;
  Currency?: Maybe<Acct_Currency_Bool_Exp>;
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  FinancialStatement?: Maybe<Acct_FinancialStatement_Bool_Exp>;
  IdAccount?: Maybe<Int_Mssql_Comparison_Exp>;
  IdAccountingType?: Maybe<Int_Mssql_Comparison_Exp>;
  IdCreditType?: Maybe<Int_Mssql_Comparison_Exp>;
  IdCurrency?: Maybe<Int_Mssql_Comparison_Exp>;
  IdFinancialStatement?: Maybe<Int_Mssql_Comparison_Exp>;
  IdMasterAccount?: Maybe<Int_Mssql_Comparison_Exp>;
  IdStatus?: Maybe<Int_Mssql_Comparison_Exp>;
  IdTypeExchange?: Maybe<Int_Mssql_Comparison_Exp>;
  IsRestricted?: Maybe<String_Mssql_Comparison_Exp>;
  JournalEntries?: Maybe<Acct_JournalEntry_Bool_Exp>;
  LastModifiedDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  LastModifiedIdUser?: Maybe<Int_Mssql_Comparison_Exp>;
  Note?: Maybe<String_Mssql_Comparison_Exp>;
  TypeExchange?: Maybe<Acct_TypeExchange_Bool_Exp>;
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
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdCreditType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTypeExchange?: Maybe<Scalars['Int']>;
  IsRestricted?: Maybe<Scalars['String']>;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
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
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  IsRestricted?: Maybe<Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
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
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdCreditType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTypeExchange?: Maybe<Scalars['Int']>;
  IsRestricted?: Maybe<Scalars['String']>;
  LastModifiedDate?: Maybe<Scalars['datetime']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
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
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  IsRestricted?: Maybe<Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
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
  CreatedDate?: Maybe<Order_By>;
  CreditType?: Maybe<Acct_CreditType_Order_By>;
  Currency?: Maybe<Acct_Currency_Order_By>;
  Description?: Maybe<Order_By>;
  FinancialStatement?: Maybe<Acct_FinancialStatement_Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  IsRestricted?: Maybe<Order_By>;
  JournalEntries_aggregate?: Maybe<Acct_JournalEntry_Aggregate_Order_By>;
  LastModifiedDate?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  Note?: Maybe<Order_By>;
  TypeExchange?: Maybe<Acct_TypeExchange_Order_By>;
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
  IdAccountingType = 'IdAccountingType',
  /** column name */
  IdCreditType = 'IdCreditType',
  /** column name */
  IdCurrency = 'IdCurrency',
  /** column name */
  IdFinancialStatement = 'IdFinancialStatement',
  /** column name */
  IdMasterAccount = 'IdMasterAccount',
  /** column name */
  IdStatus = 'IdStatus',
  /** column name */
  IdTypeExchange = 'IdTypeExchange',
  /** column name */
  IsRestricted = 'IsRestricted',
  /** column name */
  LastModifiedDate = 'LastModifiedDate',
  /** column name */
  LastModifiedIdUser = 'LastModifiedIdUser',
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
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Acct_Account_Stddev_Pop_Fields = {
  __typename?: 'acct_Account_stddev_pop_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Pop_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Acct_Account_Stddev_Samp_Fields = {
  __typename?: 'acct_Account_stddev_samp_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "acct.Account" */
export type Acct_Account_Stddev_Samp_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Acct_Account_Sum_Fields = {
  __typename?: 'acct_Account_sum_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdAccountingType?: Maybe<Scalars['Int']>;
  IdCreditType?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  IdMasterAccount?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTypeExchange?: Maybe<Scalars['Int']>;
  LastModifiedIdUser?: Maybe<Scalars['Int']>;
  UseCostCenter?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "acct.Account" */
export type Acct_Account_Sum_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Acct_Account_Var_Pop_Fields = {
  __typename?: 'acct_Account_var_pop_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "acct.Account" */
export type Acct_Account_Var_Pop_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Acct_Account_Var_Samp_Fields = {
  __typename?: 'acct_Account_var_samp_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "acct.Account" */
export type Acct_Account_Var_Samp_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  LastModifiedIdUser?: Maybe<Order_By>;
  UseCostCenter?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Acct_Account_Variance_Fields = {
  __typename?: 'acct_Account_variance_fields';
  Balance?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdAccountingType?: Maybe<Scalars['Float']>;
  IdCreditType?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdFinancialStatement?: Maybe<Scalars['Float']>;
  IdMasterAccount?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTypeExchange?: Maybe<Scalars['Float']>;
  LastModifiedIdUser?: Maybe<Scalars['Float']>;
  UseCostCenter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "acct.Account" */
export type Acct_Account_Variance_Order_By = {
  Balance?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  IdCreditType?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  IdMasterAccount?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
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
  Name?: Maybe<Scalars['String']>;
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
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_AccountingType_Bool_Exp>>;
  _not?: Maybe<Acct_AccountingType_Bool_Exp>;
  _or?: Maybe<Array<Acct_AccountingType_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_AccountingType_Max_Fields = {
  __typename?: 'acct_AccountingType_max_fields';
  IdAccountingType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_AccountingType_Min_Fields = {
  __typename?: 'acct_AccountingType_min_fields';
  IdAccountingType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.AccountingType". */
export type Acct_AccountingType_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdAccountingType?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.AccountingType" */
export enum Acct_AccountingType_Select_Column {
  /** column name */
  IdAccountingType = 'IdAccountingType',
  /** column name */
  Name = 'Name'
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

/** columns and relationships of "acct.CreditType" */
export type Acct_CreditType = {
  __typename?: 'acct_CreditType';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdCreditType: Scalars['Int'];
  Name: Scalars['String'];
};


/** columns and relationships of "acct.CreditType" */
export type Acct_CreditTypeAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.CreditType" */
export type Acct_CreditTypeAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.CreditType" */
export type Acct_CreditType_Aggregate = {
  __typename?: 'acct_CreditType_aggregate';
  aggregate?: Maybe<Acct_CreditType_Aggregate_Fields>;
  nodes: Array<Acct_CreditType>;
};

/** aggregate fields of "acct.CreditType" */
export type Acct_CreditType_Aggregate_Fields = {
  __typename?: 'acct_CreditType_aggregate_fields';
  avg?: Maybe<Acct_CreditType_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_CreditType_Max_Fields>;
  min?: Maybe<Acct_CreditType_Min_Fields>;
  stddev?: Maybe<Acct_CreditType_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_CreditType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_CreditType_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_CreditType_Sum_Fields>;
  var_pop?: Maybe<Acct_CreditType_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_CreditType_Var_Samp_Fields>;
  variance?: Maybe<Acct_CreditType_Variance_Fields>;
};


/** aggregate fields of "acct.CreditType" */
export type Acct_CreditType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_CreditType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_CreditType_Avg_Fields = {
  __typename?: 'acct_CreditType_avg_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.CreditType". All fields are combined with a logical 'AND'. */
export type Acct_CreditType_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdCreditType?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_CreditType_Bool_Exp>>;
  _not?: Maybe<Acct_CreditType_Bool_Exp>;
  _or?: Maybe<Array<Acct_CreditType_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_CreditType_Max_Fields = {
  __typename?: 'acct_CreditType_max_fields';
  IdCreditType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_CreditType_Min_Fields = {
  __typename?: 'acct_CreditType_min_fields';
  IdCreditType?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.CreditType". */
export type Acct_CreditType_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdCreditType?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.CreditType" */
export enum Acct_CreditType_Select_Column {
  /** column name */
  IdCreditType = 'IdCreditType',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Acct_CreditType_Stddev_Fields = {
  __typename?: 'acct_CreditType_stddev_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_CreditType_Stddev_Pop_Fields = {
  __typename?: 'acct_CreditType_stddev_pop_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_CreditType_Stddev_Samp_Fields = {
  __typename?: 'acct_CreditType_stddev_samp_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_CreditType_Sum_Fields = {
  __typename?: 'acct_CreditType_sum_fields';
  IdCreditType?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_CreditType_Var_Pop_Fields = {
  __typename?: 'acct_CreditType_var_pop_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_CreditType_Var_Samp_Fields = {
  __typename?: 'acct_CreditType_var_samp_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_CreditType_Variance_Fields = {
  __typename?: 'acct_CreditType_variance_fields';
  IdCreditType?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "acct.Currency" */
export type Acct_Currency = {
  __typename?: 'acct_Currency';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdCurrency: Scalars['Int'];
  /** An array relationship */
  JournalEntries: Array<Acct_JournalEntry>;
  /** An aggregate relationship */
  JournalEntries_aggregate: Acct_JournalEntry_Aggregate;
  Name?: Maybe<Scalars['String']>;
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


/** columns and relationships of "acct.Currency" */
export type Acct_CurrencyJournalEntriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


/** columns and relationships of "acct.Currency" */
export type Acct_CurrencyJournalEntries_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
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
  JournalEntries?: Maybe<Acct_JournalEntry_Bool_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_Currency_Bool_Exp>>;
  _not?: Maybe<Acct_Currency_Bool_Exp>;
  _or?: Maybe<Array<Acct_Currency_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_Currency_Max_Fields = {
  __typename?: 'acct_Currency_max_fields';
  IdCurrency?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_Currency_Min_Fields = {
  __typename?: 'acct_Currency_min_fields';
  IdCurrency?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.Currency". */
export type Acct_Currency_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdCurrency?: Maybe<Order_By>;
  JournalEntries_aggregate?: Maybe<Acct_JournalEntry_Aggregate_Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.Currency" */
export enum Acct_Currency_Select_Column {
  /** column name */
  IdCurrency = 'IdCurrency',
  /** column name */
  Name = 'Name'
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
  Name?: Maybe<Scalars['String']>;
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
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_FinancialStatement_Bool_Exp>>;
  _not?: Maybe<Acct_FinancialStatement_Bool_Exp>;
  _or?: Maybe<Array<Acct_FinancialStatement_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_FinancialStatement_Max_Fields = {
  __typename?: 'acct_FinancialStatement_max_fields';
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_FinancialStatement_Min_Fields = {
  __typename?: 'acct_FinancialStatement_min_fields';
  IdFinancialStatement?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.FinancialStatement". */
export type Acct_FinancialStatement_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdFinancialStatement?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.FinancialStatement" */
export enum Acct_FinancialStatement_Select_Column {
  /** column name */
  IdFinancialStatement = 'IdFinancialStatement',
  /** column name */
  Name = 'Name'
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

/** columns and relationships of "acct.JournalEntry" */
export type Acct_JournalEntry = {
  __typename?: 'acct_JournalEntry';
  /** An object relationship */
  Account?: Maybe<Acct_Account>;
  Amount?: Maybe<Scalars['Float']>;
  ClosingDate?: Maybe<Scalars['datetime']>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  /** An object relationship */
  Currency?: Maybe<Acct_Currency>;
  Description?: Maybe<Scalars['String']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdJournalEntry: Scalars['Int'];
  IdReference?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  JournalNumber?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "acct.JournalEntry" */
export type Acct_JournalEntry_Aggregate = {
  __typename?: 'acct_JournalEntry_aggregate';
  aggregate?: Maybe<Acct_JournalEntry_Aggregate_Fields>;
  nodes: Array<Acct_JournalEntry>;
};

/** aggregate fields of "acct.JournalEntry" */
export type Acct_JournalEntry_Aggregate_Fields = {
  __typename?: 'acct_JournalEntry_aggregate_fields';
  avg?: Maybe<Acct_JournalEntry_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_JournalEntry_Max_Fields>;
  min?: Maybe<Acct_JournalEntry_Min_Fields>;
  stddev?: Maybe<Acct_JournalEntry_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_JournalEntry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_JournalEntry_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_JournalEntry_Sum_Fields>;
  var_pop?: Maybe<Acct_JournalEntry_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_JournalEntry_Var_Samp_Fields>;
  variance?: Maybe<Acct_JournalEntry_Variance_Fields>;
};


/** aggregate fields of "acct.JournalEntry" */
export type Acct_JournalEntry_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_JournalEntry_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "acct.JournalEntry" */
export type Acct_JournalEntry_Aggregate_Order_By = {
  avg?: Maybe<Acct_JournalEntry_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Acct_JournalEntry_Max_Order_By>;
  min?: Maybe<Acct_JournalEntry_Min_Order_By>;
  stddev?: Maybe<Acct_JournalEntry_Stddev_Order_By>;
  stddev_pop?: Maybe<Acct_JournalEntry_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Acct_JournalEntry_Stddev_Samp_Order_By>;
  sum?: Maybe<Acct_JournalEntry_Sum_Order_By>;
  var_pop?: Maybe<Acct_JournalEntry_Var_Pop_Order_By>;
  var_samp?: Maybe<Acct_JournalEntry_Var_Samp_Order_By>;
  variance?: Maybe<Acct_JournalEntry_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Acct_JournalEntry_Avg_Fields = {
  __typename?: 'acct_JournalEntry_avg_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Avg_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "acct.JournalEntry". All fields are combined with a logical 'AND'. */
export type Acct_JournalEntry_Bool_Exp = {
  Account?: Maybe<Acct_Account_Bool_Exp>;
  Amount?: Maybe<Float_Mssql_Comparison_Exp>;
  ClosingDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  CreatedDate?: Maybe<Datetime_Mssql_Comparison_Exp>;
  Currency?: Maybe<Acct_Currency_Bool_Exp>;
  Description?: Maybe<String_Mssql_Comparison_Exp>;
  IdAccount?: Maybe<Int_Mssql_Comparison_Exp>;
  IdCurrency?: Maybe<Int_Mssql_Comparison_Exp>;
  IdJournalEntry?: Maybe<Int_Mssql_Comparison_Exp>;
  IdReference?: Maybe<Int_Mssql_Comparison_Exp>;
  IdStatus?: Maybe<Int_Mssql_Comparison_Exp>;
  IdTransactionCode?: Maybe<Int_Mssql_Comparison_Exp>;
  IdTransactionType?: Maybe<Int_Mssql_Comparison_Exp>;
  JournalNumber?: Maybe<Int_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_JournalEntry_Bool_Exp>>;
  _not?: Maybe<Acct_JournalEntry_Bool_Exp>;
  _or?: Maybe<Array<Acct_JournalEntry_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_JournalEntry_Max_Fields = {
  __typename?: 'acct_JournalEntry_max_fields';
  Amount?: Maybe<Scalars['Float']>;
  ClosingDate?: Maybe<Scalars['datetime']>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  Description?: Maybe<Scalars['String']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdJournalEntry?: Maybe<Scalars['Int']>;
  IdReference?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  JournalNumber?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Max_Order_By = {
  Amount?: Maybe<Order_By>;
  ClosingDate?: Maybe<Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Description?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Acct_JournalEntry_Min_Fields = {
  __typename?: 'acct_JournalEntry_min_fields';
  Amount?: Maybe<Scalars['Float']>;
  ClosingDate?: Maybe<Scalars['datetime']>;
  CreatedDate?: Maybe<Scalars['datetime']>;
  Description?: Maybe<Scalars['String']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdJournalEntry?: Maybe<Scalars['Int']>;
  IdReference?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  JournalNumber?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Min_Order_By = {
  Amount?: Maybe<Order_By>;
  ClosingDate?: Maybe<Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Description?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "acct.JournalEntry". */
export type Acct_JournalEntry_Order_By = {
  Account?: Maybe<Acct_Account_Order_By>;
  Amount?: Maybe<Order_By>;
  ClosingDate?: Maybe<Order_By>;
  CreatedDate?: Maybe<Order_By>;
  Currency?: Maybe<Acct_Currency_Order_By>;
  Description?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** select columns of table "acct.JournalEntry" */
export enum Acct_JournalEntry_Select_Column {
  /** column name */
  Amount = 'Amount',
  /** column name */
  ClosingDate = 'ClosingDate',
  /** column name */
  CreatedDate = 'CreatedDate',
  /** column name */
  Description = 'Description',
  /** column name */
  IdAccount = 'IdAccount',
  /** column name */
  IdCurrency = 'IdCurrency',
  /** column name */
  IdJournalEntry = 'IdJournalEntry',
  /** column name */
  IdReference = 'IdReference',
  /** column name */
  IdStatus = 'IdStatus',
  /** column name */
  IdTransactionCode = 'IdTransactionCode',
  /** column name */
  IdTransactionType = 'IdTransactionType',
  /** column name */
  JournalNumber = 'JournalNumber'
}

/** aggregate stddev on columns */
export type Acct_JournalEntry_Stddev_Fields = {
  __typename?: 'acct_JournalEntry_stddev_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Stddev_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Acct_JournalEntry_Stddev_Pop_Fields = {
  __typename?: 'acct_JournalEntry_stddev_pop_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Stddev_Pop_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Acct_JournalEntry_Stddev_Samp_Fields = {
  __typename?: 'acct_JournalEntry_stddev_samp_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Stddev_Samp_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Acct_JournalEntry_Sum_Fields = {
  __typename?: 'acct_JournalEntry_sum_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Int']>;
  IdCurrency?: Maybe<Scalars['Int']>;
  IdJournalEntry?: Maybe<Scalars['Int']>;
  IdReference?: Maybe<Scalars['Int']>;
  IdStatus?: Maybe<Scalars['Int']>;
  IdTransactionCode?: Maybe<Scalars['Int']>;
  IdTransactionType?: Maybe<Scalars['Int']>;
  JournalNumber?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Sum_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Acct_JournalEntry_Var_Pop_Fields = {
  __typename?: 'acct_JournalEntry_var_pop_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Var_Pop_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Acct_JournalEntry_Var_Samp_Fields = {
  __typename?: 'acct_JournalEntry_var_samp_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Var_Samp_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Acct_JournalEntry_Variance_Fields = {
  __typename?: 'acct_JournalEntry_variance_fields';
  Amount?: Maybe<Scalars['Float']>;
  IdAccount?: Maybe<Scalars['Float']>;
  IdCurrency?: Maybe<Scalars['Float']>;
  IdJournalEntry?: Maybe<Scalars['Float']>;
  IdReference?: Maybe<Scalars['Float']>;
  IdStatus?: Maybe<Scalars['Float']>;
  IdTransactionCode?: Maybe<Scalars['Float']>;
  IdTransactionType?: Maybe<Scalars['Float']>;
  JournalNumber?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "acct.JournalEntry" */
export type Acct_JournalEntry_Variance_Order_By = {
  Amount?: Maybe<Order_By>;
  IdAccount?: Maybe<Order_By>;
  IdCurrency?: Maybe<Order_By>;
  IdJournalEntry?: Maybe<Order_By>;
  IdReference?: Maybe<Order_By>;
  IdStatus?: Maybe<Order_By>;
  IdTransactionCode?: Maybe<Order_By>;
  IdTransactionType?: Maybe<Order_By>;
  JournalNumber?: Maybe<Order_By>;
};

/** columns and relationships of "acct.TypeExchange" */
export type Acct_TypeExchange = {
  __typename?: 'acct_TypeExchange';
  /** An array relationship */
  Accounts: Array<Acct_Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Acct_Account_Aggregate;
  IdTypeExchange: Scalars['Int'];
  Name: Scalars['String'];
};


/** columns and relationships of "acct.TypeExchange" */
export type Acct_TypeExchangeAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};


/** columns and relationships of "acct.TypeExchange" */
export type Acct_TypeExchangeAccounts_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_Account_Order_By>>;
  where?: Maybe<Acct_Account_Bool_Exp>;
};

/** aggregated selection of "acct.TypeExchange" */
export type Acct_TypeExchange_Aggregate = {
  __typename?: 'acct_TypeExchange_aggregate';
  aggregate?: Maybe<Acct_TypeExchange_Aggregate_Fields>;
  nodes: Array<Acct_TypeExchange>;
};

/** aggregate fields of "acct.TypeExchange" */
export type Acct_TypeExchange_Aggregate_Fields = {
  __typename?: 'acct_TypeExchange_aggregate_fields';
  avg?: Maybe<Acct_TypeExchange_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Acct_TypeExchange_Max_Fields>;
  min?: Maybe<Acct_TypeExchange_Min_Fields>;
  stddev?: Maybe<Acct_TypeExchange_Stddev_Fields>;
  stddev_pop?: Maybe<Acct_TypeExchange_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Acct_TypeExchange_Stddev_Samp_Fields>;
  sum?: Maybe<Acct_TypeExchange_Sum_Fields>;
  var_pop?: Maybe<Acct_TypeExchange_Var_Pop_Fields>;
  var_samp?: Maybe<Acct_TypeExchange_Var_Samp_Fields>;
  variance?: Maybe<Acct_TypeExchange_Variance_Fields>;
};


/** aggregate fields of "acct.TypeExchange" */
export type Acct_TypeExchange_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Acct_TypeExchange_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Acct_TypeExchange_Avg_Fields = {
  __typename?: 'acct_TypeExchange_avg_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "acct.TypeExchange". All fields are combined with a logical 'AND'. */
export type Acct_TypeExchange_Bool_Exp = {
  Accounts?: Maybe<Acct_Account_Bool_Exp>;
  IdTypeExchange?: Maybe<Int_Mssql_Comparison_Exp>;
  Name?: Maybe<String_Mssql_Comparison_Exp>;
  _and?: Maybe<Array<Acct_TypeExchange_Bool_Exp>>;
  _not?: Maybe<Acct_TypeExchange_Bool_Exp>;
  _or?: Maybe<Array<Acct_TypeExchange_Bool_Exp>>;
};

/** aggregate max on columns */
export type Acct_TypeExchange_Max_Fields = {
  __typename?: 'acct_TypeExchange_max_fields';
  IdTypeExchange?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Acct_TypeExchange_Min_Fields = {
  __typename?: 'acct_TypeExchange_min_fields';
  IdTypeExchange?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "acct.TypeExchange". */
export type Acct_TypeExchange_Order_By = {
  Accounts_aggregate?: Maybe<Acct_Account_Aggregate_Order_By>;
  IdTypeExchange?: Maybe<Order_By>;
  Name?: Maybe<Order_By>;
};

/** select columns of table "acct.TypeExchange" */
export enum Acct_TypeExchange_Select_Column {
  /** column name */
  IdTypeExchange = 'IdTypeExchange',
  /** column name */
  Name = 'Name'
}

/** aggregate stddev on columns */
export type Acct_TypeExchange_Stddev_Fields = {
  __typename?: 'acct_TypeExchange_stddev_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Acct_TypeExchange_Stddev_Pop_Fields = {
  __typename?: 'acct_TypeExchange_stddev_pop_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Acct_TypeExchange_Stddev_Samp_Fields = {
  __typename?: 'acct_TypeExchange_stddev_samp_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Acct_TypeExchange_Sum_Fields = {
  __typename?: 'acct_TypeExchange_sum_fields';
  IdTypeExchange?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Acct_TypeExchange_Var_Pop_Fields = {
  __typename?: 'acct_TypeExchange_var_pop_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Acct_TypeExchange_Var_Samp_Fields = {
  __typename?: 'acct_TypeExchange_var_samp_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Acct_TypeExchange_Variance_Fields = {
  __typename?: 'acct_TypeExchange_variance_fields';
  IdTypeExchange?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "Code" */
  Code: Array<Code>;
  /** fetch aggregated fields from the table: "Code" */
  Code_aggregate: Code_Aggregate;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Rol" */
  Rol: Array<Rol>;
  /** fetch aggregated fields from the table: "Rol" */
  Rol_aggregate: Rol_Aggregate;
  /** fetch data from the table: "Status" */
  Status: Array<Status>;
  /** fetch aggregated fields from the table: "Status" */
  Status_aggregate: Status_Aggregate;
  /** fetch data from the table: "TransactionCode" */
  TransactionCode: Array<TransactionCode>;
  /** fetch aggregated fields from the table: "TransactionCode" */
  TransactionCode_aggregate: TransactionCode_Aggregate;
  /** fetch data from the table: "TransactionType" */
  TransactionType: Array<TransactionType>;
  /** fetch aggregated fields from the table: "TransactionType" */
  TransactionType_aggregate: TransactionType_Aggregate;
  /** fetch data from the table: "Type" */
  Type: Array<Type>;
  /** fetch aggregated fields from the table: "Type" */
  Type_aggregate: Type_Aggregate;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "acct.Account" */
  acct_Account: Array<Acct_Account>;
  /** fetch aggregated fields from the table: "acct.Account" */
  acct_Account_aggregate: Acct_Account_Aggregate;
  /** fetch data from the table: "acct.AccountingType" */
  acct_AccountingType: Array<Acct_AccountingType>;
  /** fetch aggregated fields from the table: "acct.AccountingType" */
  acct_AccountingType_aggregate: Acct_AccountingType_Aggregate;
  /** fetch data from the table: "acct.CreditType" */
  acct_CreditType: Array<Acct_CreditType>;
  /** fetch aggregated fields from the table: "acct.CreditType" */
  acct_CreditType_aggregate: Acct_CreditType_Aggregate;
  /** fetch data from the table: "acct.Currency" */
  acct_Currency: Array<Acct_Currency>;
  /** fetch aggregated fields from the table: "acct.Currency" */
  acct_Currency_aggregate: Acct_Currency_Aggregate;
  /** fetch data from the table: "acct.FinancialStatement" */
  acct_FinancialStatement: Array<Acct_FinancialStatement>;
  /** fetch aggregated fields from the table: "acct.FinancialStatement" */
  acct_FinancialStatement_aggregate: Acct_FinancialStatement_Aggregate;
  /** fetch data from the table: "acct.JournalEntry" */
  acct_JournalEntry: Array<Acct_JournalEntry>;
  /** fetch aggregated fields from the table: "acct.JournalEntry" */
  acct_JournalEntry_aggregate: Acct_JournalEntry_Aggregate;
  /** fetch data from the table: "acct.TypeExchange" */
  acct_TypeExchange: Array<Acct_TypeExchange>;
  /** fetch aggregated fields from the table: "acct.TypeExchange" */
  acct_TypeExchange_aggregate: Acct_TypeExchange_Aggregate;
  /** fetch data from the table: "sysdiagrams" */
  sysdiagrams: Array<Sysdiagrams>;
  /** fetch aggregated fields from the table: "sysdiagrams" */
  sysdiagrams_aggregate: Sysdiagrams_Aggregate;
};


export type Query_RootCodeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};


export type Query_RootCode_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
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


export type Query_RootPermissionArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


export type Query_RootRolArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rol_Order_By>>;
  where?: Maybe<Rol_Bool_Exp>;
};


export type Query_RootRol_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rol_Order_By>>;
  where?: Maybe<Rol_Bool_Exp>;
};


export type Query_RootStatusArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Query_RootTransactionCodeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionCode_Order_By>>;
  where?: Maybe<TransactionCode_Bool_Exp>;
};


export type Query_RootTransactionCode_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionCode_Order_By>>;
  where?: Maybe<TransactionCode_Bool_Exp>;
};


export type Query_RootTransactionTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionType_Order_By>>;
  where?: Maybe<TransactionType_Bool_Exp>;
};


export type Query_RootTransactionType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionType_Order_By>>;
  where?: Maybe<TransactionType_Bool_Exp>;
};


export type Query_RootTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Type_Order_By>>;
  where?: Maybe<Type_Bool_Exp>;
};


export type Query_RootType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Type_Order_By>>;
  where?: Maybe<Type_Bool_Exp>;
};


export type Query_RootUserArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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


export type Query_RootAcct_CreditTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_CreditType_Order_By>>;
  where?: Maybe<Acct_CreditType_Bool_Exp>;
};


export type Query_RootAcct_CreditType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_CreditType_Order_By>>;
  where?: Maybe<Acct_CreditType_Bool_Exp>;
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


export type Query_RootAcct_JournalEntryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


export type Query_RootAcct_JournalEntry_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


export type Query_RootAcct_TypeExchangeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_TypeExchange_Order_By>>;
  where?: Maybe<Acct_TypeExchange_Bool_Exp>;
};


export type Query_RootAcct_TypeExchange_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_TypeExchange_Order_By>>;
  where?: Maybe<Acct_TypeExchange_Bool_Exp>;
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
  /** fetch data from the table: "Code" */
  Code: Array<Code>;
  /** fetch aggregated fields from the table: "Code" */
  Code_aggregate: Code_Aggregate;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Rol" */
  Rol: Array<Rol>;
  /** fetch aggregated fields from the table: "Rol" */
  Rol_aggregate: Rol_Aggregate;
  /** fetch data from the table: "Status" */
  Status: Array<Status>;
  /** fetch aggregated fields from the table: "Status" */
  Status_aggregate: Status_Aggregate;
  /** fetch data from the table: "TransactionCode" */
  TransactionCode: Array<TransactionCode>;
  /** fetch aggregated fields from the table: "TransactionCode" */
  TransactionCode_aggregate: TransactionCode_Aggregate;
  /** fetch data from the table: "TransactionType" */
  TransactionType: Array<TransactionType>;
  /** fetch aggregated fields from the table: "TransactionType" */
  TransactionType_aggregate: TransactionType_Aggregate;
  /** fetch data from the table: "Type" */
  Type: Array<Type>;
  /** fetch aggregated fields from the table: "Type" */
  Type_aggregate: Type_Aggregate;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "acct.Account" */
  acct_Account: Array<Acct_Account>;
  /** fetch aggregated fields from the table: "acct.Account" */
  acct_Account_aggregate: Acct_Account_Aggregate;
  /** fetch data from the table: "acct.AccountingType" */
  acct_AccountingType: Array<Acct_AccountingType>;
  /** fetch aggregated fields from the table: "acct.AccountingType" */
  acct_AccountingType_aggregate: Acct_AccountingType_Aggregate;
  /** fetch data from the table: "acct.CreditType" */
  acct_CreditType: Array<Acct_CreditType>;
  /** fetch aggregated fields from the table: "acct.CreditType" */
  acct_CreditType_aggregate: Acct_CreditType_Aggregate;
  /** fetch data from the table: "acct.Currency" */
  acct_Currency: Array<Acct_Currency>;
  /** fetch aggregated fields from the table: "acct.Currency" */
  acct_Currency_aggregate: Acct_Currency_Aggregate;
  /** fetch data from the table: "acct.FinancialStatement" */
  acct_FinancialStatement: Array<Acct_FinancialStatement>;
  /** fetch aggregated fields from the table: "acct.FinancialStatement" */
  acct_FinancialStatement_aggregate: Acct_FinancialStatement_Aggregate;
  /** fetch data from the table: "acct.JournalEntry" */
  acct_JournalEntry: Array<Acct_JournalEntry>;
  /** fetch aggregated fields from the table: "acct.JournalEntry" */
  acct_JournalEntry_aggregate: Acct_JournalEntry_Aggregate;
  /** fetch data from the table: "acct.TypeExchange" */
  acct_TypeExchange: Array<Acct_TypeExchange>;
  /** fetch aggregated fields from the table: "acct.TypeExchange" */
  acct_TypeExchange_aggregate: Acct_TypeExchange_Aggregate;
  /** fetch data from the table: "sysdiagrams" */
  sysdiagrams: Array<Sysdiagrams>;
  /** fetch aggregated fields from the table: "sysdiagrams" */
  sysdiagrams_aggregate: Sysdiagrams_Aggregate;
};


export type Subscription_RootCodeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};


export type Subscription_RootCode_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
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


export type Subscription_RootPermissionArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


export type Subscription_RootRolArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rol_Order_By>>;
  where?: Maybe<Rol_Bool_Exp>;
};


export type Subscription_RootRol_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rol_Order_By>>;
  where?: Maybe<Rol_Bool_Exp>;
};


export type Subscription_RootStatusArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Order_By>>;
  where?: Maybe<Status_Bool_Exp>;
};


export type Subscription_RootTransactionCodeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionCode_Order_By>>;
  where?: Maybe<TransactionCode_Bool_Exp>;
};


export type Subscription_RootTransactionCode_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionCode_Order_By>>;
  where?: Maybe<TransactionCode_Bool_Exp>;
};


export type Subscription_RootTransactionTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionType_Order_By>>;
  where?: Maybe<TransactionType_Bool_Exp>;
};


export type Subscription_RootTransactionType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TransactionType_Order_By>>;
  where?: Maybe<TransactionType_Bool_Exp>;
};


export type Subscription_RootTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Type_Order_By>>;
  where?: Maybe<Type_Bool_Exp>;
};


export type Subscription_RootType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Type_Order_By>>;
  where?: Maybe<Type_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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


export type Subscription_RootAcct_CreditTypeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_CreditType_Order_By>>;
  where?: Maybe<Acct_CreditType_Bool_Exp>;
};


export type Subscription_RootAcct_CreditType_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_CreditType_Order_By>>;
  where?: Maybe<Acct_CreditType_Bool_Exp>;
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


export type Subscription_RootAcct_JournalEntryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


export type Subscription_RootAcct_JournalEntry_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_JournalEntry_Order_By>>;
  where?: Maybe<Acct_JournalEntry_Bool_Exp>;
};


export type Subscription_RootAcct_TypeExchangeArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_TypeExchange_Order_By>>;
  where?: Maybe<Acct_TypeExchange_Bool_Exp>;
};


export type Subscription_RootAcct_TypeExchange_AggregateArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Acct_TypeExchange_Order_By>>;
  where?: Maybe<Acct_TypeExchange_Bool_Exp>;
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

export type FetchAccountTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAccountTypesQuery = { __typename?: 'query_root', acct_AccountingType: Array<{ __typename?: 'acct_AccountingType', Name?: Maybe<string>, IdAccountingType: number }> };

export type FetchAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAccountsQuery = { __typename?: 'query_root', acct_Account: Array<{ __typename?: 'acct_Account', AccountName?: Maybe<string>, Description?: Maybe<string>, AccountNumber: string, ClientAccount?: Maybe<string>, BankName?: Maybe<string>, IdCurrency?: Maybe<number>, IdStatus?: Maybe<number>, Note?: Maybe<string>, IdAccountingType?: Maybe<number>, IdFinancialStatement?: Maybe<number>, Balance?: Maybe<number>, IdMasterAccount?: Maybe<number>, BalanceType?: Maybe<string>, UseCostCenter?: Maybe<number> }> };

export type FetchJournalEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchJournalEntriesQuery = { __typename?: 'query_root', acct_JournalEntry: Array<{ __typename?: 'acct_JournalEntry', IdReference?: Maybe<number>, Amount?: Maybe<number>, Account?: Maybe<{ __typename?: 'acct_Account', AccountNumber: string, Description?: Maybe<string> }> }> };

export type FetchConversionsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchConversionsQuery = { __typename?: 'query_root', acct_TypeExchange: Array<{ __typename?: 'acct_TypeExchange', IdTypeExchange: number, Name: string }> };

export type FetchCreditTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCreditTypesQuery = { __typename?: 'query_root', acct_CreditType: Array<{ __typename?: 'acct_CreditType', IdCreditType: number, Name: string }> };

export type FetchCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCurrenciesQuery = { __typename?: 'query_root', acct_Currency: Array<{ __typename?: 'acct_Currency', IdCurrency: number, Name?: Maybe<string> }> };

export type FetchFinancialStatementQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchFinancialStatementQuery = { __typename?: 'query_root', acct_FinancialStatement: Array<{ __typename?: 'acct_FinancialStatement', IdFinancialStatement: number, Name?: Maybe<string> }> };


export const FetchAccountTypesDocument = gql`
    query FetchAccountTypes {
  acct_AccountingType {
    Name
    IdAccountingType
  }
}
    `;

/**
 * __useFetchAccountTypesQuery__
 *
 * To run a query within a React component, call `useFetchAccountTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAccountTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAccountTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAccountTypesQuery(baseOptions?: Apollo.QueryHookOptions<FetchAccountTypesQuery, FetchAccountTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAccountTypesQuery, FetchAccountTypesQueryVariables>(FetchAccountTypesDocument, options);
      }
export function useFetchAccountTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAccountTypesQuery, FetchAccountTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAccountTypesQuery, FetchAccountTypesQueryVariables>(FetchAccountTypesDocument, options);
        }
export type FetchAccountTypesQueryHookResult = ReturnType<typeof useFetchAccountTypesQuery>;
export type FetchAccountTypesLazyQueryHookResult = ReturnType<typeof useFetchAccountTypesLazyQuery>;
export type FetchAccountTypesQueryResult = Apollo.QueryResult<FetchAccountTypesQuery, FetchAccountTypesQueryVariables>;
export const FetchAccountsDocument = gql`
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
export const FetchJournalEntriesDocument = gql`
    query FetchJournalEntries {
  acct_JournalEntry {
    Account {
      AccountNumber
      Description
    }
    IdReference
    Amount
  }
}
    `;

/**
 * __useFetchJournalEntriesQuery__
 *
 * To run a query within a React component, call `useFetchJournalEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchJournalEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchJournalEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchJournalEntriesQuery(baseOptions?: Apollo.QueryHookOptions<FetchJournalEntriesQuery, FetchJournalEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchJournalEntriesQuery, FetchJournalEntriesQueryVariables>(FetchJournalEntriesDocument, options);
      }
export function useFetchJournalEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchJournalEntriesQuery, FetchJournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchJournalEntriesQuery, FetchJournalEntriesQueryVariables>(FetchJournalEntriesDocument, options);
        }
export type FetchJournalEntriesQueryHookResult = ReturnType<typeof useFetchJournalEntriesQuery>;
export type FetchJournalEntriesLazyQueryHookResult = ReturnType<typeof useFetchJournalEntriesLazyQuery>;
export type FetchJournalEntriesQueryResult = Apollo.QueryResult<FetchJournalEntriesQuery, FetchJournalEntriesQueryVariables>;
export const FetchConversionsDocument = gql`
    query FetchConversions {
  acct_TypeExchange {
    IdTypeExchange
    Name
  }
}
    `;

/**
 * __useFetchConversionsQuery__
 *
 * To run a query within a React component, call `useFetchConversionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchConversionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchConversionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchConversionsQuery(baseOptions?: Apollo.QueryHookOptions<FetchConversionsQuery, FetchConversionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchConversionsQuery, FetchConversionsQueryVariables>(FetchConversionsDocument, options);
      }
export function useFetchConversionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchConversionsQuery, FetchConversionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchConversionsQuery, FetchConversionsQueryVariables>(FetchConversionsDocument, options);
        }
export type FetchConversionsQueryHookResult = ReturnType<typeof useFetchConversionsQuery>;
export type FetchConversionsLazyQueryHookResult = ReturnType<typeof useFetchConversionsLazyQuery>;
export type FetchConversionsQueryResult = Apollo.QueryResult<FetchConversionsQuery, FetchConversionsQueryVariables>;
export const FetchCreditTypesDocument = gql`
    query FetchCreditTypes {
  acct_CreditType {
    IdCreditType
    Name
  }
}
    `;

/**
 * __useFetchCreditTypesQuery__
 *
 * To run a query within a React component, call `useFetchCreditTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCreditTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCreditTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchCreditTypesQuery(baseOptions?: Apollo.QueryHookOptions<FetchCreditTypesQuery, FetchCreditTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCreditTypesQuery, FetchCreditTypesQueryVariables>(FetchCreditTypesDocument, options);
      }
export function useFetchCreditTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCreditTypesQuery, FetchCreditTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCreditTypesQuery, FetchCreditTypesQueryVariables>(FetchCreditTypesDocument, options);
        }
export type FetchCreditTypesQueryHookResult = ReturnType<typeof useFetchCreditTypesQuery>;
export type FetchCreditTypesLazyQueryHookResult = ReturnType<typeof useFetchCreditTypesLazyQuery>;
export type FetchCreditTypesQueryResult = Apollo.QueryResult<FetchCreditTypesQuery, FetchCreditTypesQueryVariables>;
export const FetchCurrenciesDocument = gql`
    query FetchCurrencies {
  acct_Currency {
    IdCurrency
    Name
  }
}
    `;

/**
 * __useFetchCurrenciesQuery__
 *
 * To run a query within a React component, call `useFetchCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<FetchCurrenciesQuery, FetchCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCurrenciesQuery, FetchCurrenciesQueryVariables>(FetchCurrenciesDocument, options);
      }
export function useFetchCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCurrenciesQuery, FetchCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCurrenciesQuery, FetchCurrenciesQueryVariables>(FetchCurrenciesDocument, options);
        }
export type FetchCurrenciesQueryHookResult = ReturnType<typeof useFetchCurrenciesQuery>;
export type FetchCurrenciesLazyQueryHookResult = ReturnType<typeof useFetchCurrenciesLazyQuery>;
export type FetchCurrenciesQueryResult = Apollo.QueryResult<FetchCurrenciesQuery, FetchCurrenciesQueryVariables>;
export const FetchFinancialStatementDocument = gql`
    query FetchFinancialStatement {
  acct_FinancialStatement {
    IdFinancialStatement
    Name
  }
}
    `;

/**
 * __useFetchFinancialStatementQuery__
 *
 * To run a query within a React component, call `useFetchFinancialStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchFinancialStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchFinancialStatementQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchFinancialStatementQuery(baseOptions?: Apollo.QueryHookOptions<FetchFinancialStatementQuery, FetchFinancialStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchFinancialStatementQuery, FetchFinancialStatementQueryVariables>(FetchFinancialStatementDocument, options);
      }
export function useFetchFinancialStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchFinancialStatementQuery, FetchFinancialStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchFinancialStatementQuery, FetchFinancialStatementQueryVariables>(FetchFinancialStatementDocument, options);
        }
export type FetchFinancialStatementQueryHookResult = ReturnType<typeof useFetchFinancialStatementQuery>;
export type FetchFinancialStatementLazyQueryHookResult = ReturnType<typeof useFetchFinancialStatementLazyQuery>;
export type FetchFinancialStatementQueryResult = Apollo.QueryResult<FetchFinancialStatementQuery, FetchFinancialStatementQueryVariables>;