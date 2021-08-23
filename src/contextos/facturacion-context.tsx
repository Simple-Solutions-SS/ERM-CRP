import React, { createContext, useContext, useState } from "react";

interface FacturacionContextProps {}

const FacturacionContext = createContext<FacturacionContextProps>({});

export const FacturacionProvider: React.FC = ({ children }) => {
  const [listaFacturas, setListaFacturas] = useState([]);
  const [facturaSeleccionado, setClienteSeleccionado] = useState(null);

  const val: FacturacionContextProps = {};

  return (
    <FacturacionContext.Provider value={val}>
      {children}
    </FacturacionContext.Provider>
  );
};

export const useFacturacion = () => useContext(FacturacionContext);
