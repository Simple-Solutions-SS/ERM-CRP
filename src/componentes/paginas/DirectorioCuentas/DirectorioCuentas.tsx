import { useQuery } from "@apollo/client";
import React from "react";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";
import { QUERY_DIRECTORIO_CUENTAS } from "./query";

const DirectorioCuentas = () => {
  const { loading, data, error, refetch, fetchMore } = useQuery(
    QUERY_DIRECTORIO_CUENTAS
  );
  return (
    <AppLayout>
      <h1>Directorio Cuentas</h1>
    </AppLayout>
  );
};

export default DirectorioCuentas;
