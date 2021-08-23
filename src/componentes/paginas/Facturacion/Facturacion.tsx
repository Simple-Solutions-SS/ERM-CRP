import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import TablaFacturacion from "../../moleculas/TablaFacturacion";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Facturacion = () => {
  return (
    <AppLayout>
      <h1>Facturacion</h1>
      <TablaFacturacion titulo="Facturación" />
      <TablaFacturacion titulo="Facturación Interna" />
    </AppLayout>
  );
};

export default Facturacion;
