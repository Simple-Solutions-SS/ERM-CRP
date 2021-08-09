import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const Monitoreo = () => {
  return (
    <AppLayout>
      <h1>Monitoreo</h1>
      <Tabla />
    </AppLayout>
  );
};

export default Monitoreo;
