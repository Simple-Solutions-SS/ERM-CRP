import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { Button, CircularProgress } from "@material-ui/core";
import { DataType, useModal } from "../../../contextos/modal-context";
import useAsientos from "../../../hooks/useAsientos";
import { EtiquetasCeldas } from "../TablaCatalogoCuentas";

const etiquetasCeldas: EtiquetasCeldas[] = [
  { label: "Cuenta Contable", campo: "Account", subCampo: "AccountNumber" },
  { label: "Descripción", campo: "Account", subCampo: "Description" },
  { label: "Referencia", campo: "IdReference" },
  { label: "Débito Colón", campo: "Amount" },
  { label: "Crédito Colón", campo: "Amount" },
];

export const TablaAsientos: React.FC = () => {
  const { loading, data, error } = useAsientos();

  const { setOpenModal, setDataType, setOperacion, setSelectedItem } =
    useModal();

  if (error) {
    console.error(error);
    return <p>Ooops, datos no disponibles en este momento.</p>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  const handleButtonClick = () => {
    setDataType(DataType.Asientos);
    setSelectedItem(null);
    setOperacion("Crear");
    setOpenModal(true);
  };

  return (
    <div>
      {data && (
        <>
          <Tabla
            titulo="Asientos"
            datos={data["acct_JournalEntry"]}
            campos={etiquetasCeldas}
            onAgregar={handleButtonClick}
          />
        </>
      )}
    </div>
  );
};
