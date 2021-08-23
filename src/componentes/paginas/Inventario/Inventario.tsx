import React from "react";
import TablaInventario from "../../moleculas/TablaInventario";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Inventario = () => {
  return (
    <AppLayout>
      <h1>Inventario</h1>
      <TablaInventario titulo="Inventario" />
    </AppLayout>
  );
};

export default Inventario;
