import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Inventario = () => {
  return (
    <AppLayout>
      <h1>Inventario</h1>
      <Tabla />
    </AppLayout>
  );
};

export default Inventario;
