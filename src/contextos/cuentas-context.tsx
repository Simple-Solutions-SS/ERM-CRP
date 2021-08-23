import React, { createContext, useContext, useState } from "react";

interface CuentasContextProps {}

const CuentasContext = createContext<CuentasContextProps>({});

export const CuentasProvider: React.FC = ({ children }) => {
  const [listaCuentas, setListaCuentas] = useState([]);
  const [cuentaSeleccionado, setClienteSeleccionado] = useState(null);
  const val: CuentasContextProps = {};

  return (
    <CuentasContext.Provider value={val}>{children}</CuentasContext.Provider>
  );
};

export const useCuentas = () => useContext(CuentasContext);
