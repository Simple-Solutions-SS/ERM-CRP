import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Clientes: React.FC = () => {
  return (
    <AppLayout>
      <h1>Clientes</h1>
      <Tabla titulo="Clientes" />
    </AppLayout>
  );
};

export default Clientes;
