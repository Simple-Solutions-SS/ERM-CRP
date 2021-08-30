import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { Button, CircularProgress } from "@material-ui/core";
import { DataType, useModal } from "../../../contextos/modal-context";
import useAccounts from "../../../hooks/useAccounts";

export interface EtiquetasCeldas {
  label: string;
  campo: string;
  subCampo?: string;
}

const etiquetasCeldas: EtiquetasCeldas[] = [
  { label: "Cuenta", campo: "AccountNumber" },
  { label: "Descripción", campo: "Description" },
  { label: "Uso Restringido", campo: "IsRestricted" },
  { label: "Tipo Detallado", campo: "AccountingType", subCampo: "Name" },
  { label: "Tipo", campo: "FinancialStatement", subCampo: "Name" },
  { label: "Tipo de Cambio", campo: "TypeExchange", subCampo: "Name" },
];

export const TablaCatalogoCuentas: React.FC = () => {
  const { loading, data, error } = useAccounts();

  const { setOpenModal, setDataType } = useModal();

  if (error) {
    console.error(error);
    return <p>Ooops, datos no disponibles en este momento.</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }
  const handleButtonClick = () => {
    setDataType(DataType.Cuentas);
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
            onAgregar={handleButtonClick}
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
