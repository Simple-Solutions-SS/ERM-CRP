import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Administracion = () => {
  console.log("hola");
  return (
    <AppLayout>
      <h1>Administracion</h1>
      <Tabla titulo="Administración" />
    </AppLayout>
  );
};

export default Administracion;
