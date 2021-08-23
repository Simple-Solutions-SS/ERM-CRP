import { useQuery } from "@apollo/client";
import React from "react";
import Tabla from "../../moleculas/Tabla/Tabla";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";
import { QUERY_FINANCIAMIENTO } from "./query";

const Financiamiento = () => {
  const { loading, data, error, refetch, fetchMore } =
    useQuery(QUERY_FINANCIAMIENTO);
  return (
    <AppLayout>
      <h1>Financiamiento</h1>
      <Tabla titulo="Financiamiento" />
    </AppLayout>
  );
};

export default Financiamiento;
