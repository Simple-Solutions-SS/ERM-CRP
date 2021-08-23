import React from 'react'
import { QUERY_DIRECTORIO_CUENTAS } from "./query";
import { useQuery } from "@apollo/client";
import { FetchAccountsQuery } from "../../../generated/graphql";
import Tabla from '../../moleculas/Tabla/Tabla';
import { CircularProgress } from '@material-ui/core';

interface EtiquetasCeldas {
  label: string;
  campo: string;
}

const etiquetasCeldas = [
  {label: 'Cuenta', campo: 'AccountNumber'},
  {label: 'Descripción', campo: 'Description'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
  {label: 'Cuenta', campo: 'Cuenta'},
]

export const TablaCatalogoCuentas: React.FC = () => {
  const { loading, data, error } =
    useQuery<FetchAccountsQuery>(QUERY_DIRECTORIO_CUENTAS);

  if(error) {
    return (<p>Ooops, datos no disponibles en este momento.</p>)
  };

  if(loading) {
    return (<CircularProgress/>)
  }

  return (
    <div>
      {data && (
            <Tabla titulo="Catálogo de Cuentas" datos={data["acct_Account"]} />
      )}
    </div>
  )
}
