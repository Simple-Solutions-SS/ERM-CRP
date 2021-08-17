import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import TablaInventario from "../../moleculas/TablaInventario";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Inventario = () => {
  return (
    <AppLayout>
      <h1>Inventario</h1>
      <TablaInventario />
    </AppLayout>
  );
};

export default Inventario;
