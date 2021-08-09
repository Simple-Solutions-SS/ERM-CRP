import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Administracion = () => {
  return (
    <AppLayout>
      <h1>Administracion</h1>
      <Tabla />
    </AppLayout>
  );
};

export default Administracion;
