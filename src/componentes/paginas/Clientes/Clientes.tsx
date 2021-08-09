import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Clientes = () => {
  return (
    <AppLayout>
      <h1>Clientes</h1>
      <Tabla />
    </AppLayout>
  );
};

export default Clientes;
