import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { Button, CircularProgress } from "@material-ui/core";
import { useModal } from "../../../contextos/modal-context";
import useAsientos from "../../../hooks/useAsientos";

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

export const TablaAsientos: React.FC = () => {
  const { loading, data, error, refetch } = useAsientos();

  const { setOpenModal } = useModal();

  if (error) {
    console.error(error);
  }

  if (error) {
    return <p>Ooops, datos no disponibles en este momento.</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }
  const handleButtonClick = () => {
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
