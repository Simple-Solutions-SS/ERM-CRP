import React, { createContext, useContext, useEffect, useState } from "react";
import TipoCambio from "../models/TipoCambio";
import { getTipoCambio } from "../services/tipoCambio";

interface TipoCambioProps {
  tipoCambio: TipoCambio;
}

const defaultValue = { compra: 0, venta: 0, fecha: new Date().toDateString() };

const TipoCambioContext = createContext<TipoCambioProps>({
  tipoCambio: defaultValue,
});

export const TipoCambioProvider: React.FC = ({ children }) => {
  const [tipoCambio, setTipoCambio] = useState<TipoCambio>(defaultValue);
  const val: TipoCambioProps = {
    tipoCambio,
  };

  const getTipoCambioHoy = async () => {
    try {
      const fecha = new Date();
      const tipoCambio = await getTipoCambio(fecha);
      setTipoCambio(tipoCambio);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTipoCambioHoy();
  }, []);

  return (
    <TipoCambioContext.Provider value={val}>
      {children}
    </TipoCambioContext.Provider>
  );
};

export const useTipoCambio = () => useContext(TipoCambioContext);
