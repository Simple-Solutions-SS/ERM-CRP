import React, { createContext, useContext, useState } from "react";

interface ClientesContextProps {}

const ClientesContext = createContext<ClientesContextProps>({});

export const ClientesProvider: React.FC = ({ children }) => {
  const [listaClientes, setListaClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const val: ClientesContextProps = {};

  return (
    <ClientesContext.Provider value={val}>{children}</ClientesContext.Provider>
  );
};

export const useClientes = () => useContext(ClientesContext);
