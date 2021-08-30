import Alert, { AlertProps, Color } from "@material-ui/lab/Alert";
import React, { createContext, useContext, useState } from "react";

interface SnackbarcContextProps {
  openSnackBar: boolean;
  setOpenSnackBar: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  severity: Color;
  setSeverity: (value: Color) => void;
}

const SnackbarContext = createContext({
  openSnackBar: false,
  setOpenSnackBar: (value: boolean) => {},
  message: "",
  setMessage: (value: string) => {},
  severity: "",
  setSeverity: (value: Color) => {},
});

export const SnackbarProvider: React.FC = ({ children }) => {
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<Color>("success");
  const val: SnackbarcContextProps = {
    openSnackBar,
    setOpenSnackBar,
    message,
    setMessage,
    severity,
    setSeverity,
  };

  return (
    <SnackbarContext.Provider value={val}>{children}</SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
