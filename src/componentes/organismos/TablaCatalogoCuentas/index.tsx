import React from "react";
import { QUERY_DIRECTORIO_CUENTAS } from "./query";
import { useQuery } from "@apollo/client";
import { FetchAccountsQuery } from "../../../generated/graphql";
import Tabla from "../../moleculas/Tabla/Tabla";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

export interface EtiquetasCeldas {
  label: string;
  campo: string;
}

const etiquetasCeldas: EtiquetasCeldas[] = [
  { label: "Cuenta", campo: "AccountNumber" },
  { label: "Descripción", campo: "Description" },
  { label: "Tipo Detallado", campo: "Cuenta" },
  { label: "Tipo", campo: "BalanceType" },
  { label: "Balance", campo: "Balance" },
];

export const TablaCatalogoCuentas: React.FC = () => {
  const { loading, data, error, refetch } = useQuery<FetchAccountsQuery>(
    QUERY_DIRECTORIO_CUENTAS
  );

  if (error) {
    console.error(error);
  }

  if (error) {
    return <p>Ooops, datos no disponibles en este momento.</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/cuentas",
        {
          AccountName: "ADMIN",
          AccountNumber: "5-55-55-555-000-000",
          Description: "ESTO ES UNA DESCRIPCIÓN",
          ClientAccount: "",
          BankName: "",
          IdCurrency: 1,
          IdStatus: 0,
          Note: "Note",
          IdUser: 1,
          IdAccountingType: 0,
          IdFinancialStatement: 0,
          Balance: 5000,
          IdMasterAccount: 0,
          MasterAccountNumber: "",
          BalanceType: "",
          UseCostCenter: 1,
        },
        {
          headers: {},
        }
      );
      refetch();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data && (
        <>
          <Tabla
            titulo="Catálogo de Cuentas"
            datos={data["acct_Account"]}
            campos={etiquetasCeldas}
          />
          <button onClick={handleButtonClick}>Agregar Cuenta</button>
        </>
      )}
    </div>
  );
};
