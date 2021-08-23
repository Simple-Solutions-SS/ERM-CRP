import React from "react";
import TablaCuentas from "../../moleculas/TablaCuentas";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Cuentas = () => {
  return (
    <AppLayout>
      <h1>Cuentas</h1>
      <TablaCuentas titulo="Catálogo de Cuentas" />
    </AppLayout>
  );
};

export default Cuentas;
