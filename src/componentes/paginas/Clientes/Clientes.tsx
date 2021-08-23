import { useQuery } from "@apollo/client";
import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";
import { QUERY_CLIENTES } from "./query";

const Clientes: React.FC = () => {
  const { loading, data, error, refetch, fetchMore } = useQuery(QUERY_CLIENTES);

  return (
    <AppLayout>
      <h1>Clientes</h1>
      <Tabla titulo="Clientes" />
    </AppLayout>
  );
};

export default Clientes;
