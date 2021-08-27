import React from "react";
import { QUERY_DIRECTORIO_CUENTAS } from "./query";
import { useQuery } from "@apollo/client";
import { FetchAccountsQuery } from "../../../generated/graphql";
import Tabla from "../../moleculas/Tabla/Tabla";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useModal } from "../../../contextos/modal-context";
import { AccountCreationInput } from "../../moleculas/Modal";

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

  const { setOnSubmit, setOpenModal } = useModal();

  if (error) {
    console.error(error);
  }

  if (error) {
    return <p>Ooops, datos no disponibles en este momento.</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  // async function crearCuenta({
  //   Note,
  //   IdCurrency,
  //   BankName,
  //   AccountNumber,
  //   AccountName,
  //   Description,
  //   ClientAccount,
  // }: AccountCreationInput) {
  //   try {
  //     const response = await fetch(
  //       `https://simplesolutionscr.com/webservices/selca/service.php?who=insert_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&AccountName=${AccountName}&Description=${Description}&AccountNumber=${AccountNumber}&ClientAccount=${ClientAccount}&BankName=${BankName}&IdCurrency=${IdCurrency}&Note=${Note}`,
  //       {
  //         mode: "no-cors",
  //         method: "POST", // or 'PUT'
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );

  //     refetch();
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const handleButtonClick = () => {
    // setOnSubmit(crearCuenta);
    setOpenModal(true);
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Agregar Cuenta
          </Button>
        </>
      )}
    </div>
  );
};
