import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AsientoCreationInput } from "../componentes/moleculas/FormularioAsientos";
import { AccountCreationInput } from "../componentes/moleculas/FormularioCuenta";
import { Acct_Account, Acct_JournalEntry } from "../generated/graphql";

interface ModalContextProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  onSubmit: Function | null;
  setOnSubmit: React.Dispatch<React.SetStateAction<Function | null>>;
  dataType: DataType;
  setDataType: React.Dispatch<React.SetStateAction<DataType>>;
  getDefaultValues: () => DefaultValues;
  operacion: Operation;
  setOperacion: React.Dispatch<React.SetStateAction<Operation>>;
  selectedItem: Acct_Account | Acct_JournalEntry | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<Item>>;
}

type DefaultValues = AccountCreationInput | AsientoCreationInput | null;

const cuentaInitialValue: AccountCreationInput = {
  AccountName: "",
  Description: "",
  AccountNumber: "",
  ClientAccount: "",
  BankName: "",
  IdCurrency: 0,
  Note: "",
  Balance: 0,
  BalanceType: 0,
  IdAccountingType: 0,
  IdFinancialStatement: 0,
  IdMasterAccount: 0,
  IdStatus: 0,
  UseCostCenter: 0,
  TypeExchange: 0,
  IdTypeExchange: 0,
  IsRestricted: "",
  IdCreditType: 0,
};

export enum DataType {
  "Cuentas",
  "Asientos",
}

export type Operation = "Crear" | "Editar";
export type Item = Acct_Account | Acct_JournalEntry | null;

const ModalContext = createContext<ModalContextProps>({
  openModal: false,
  setOpenModal: () => {},
  onSubmit: null,
  setOnSubmit: () => {},
  dataType: DataType.Cuentas,
  setDataType: () => {},
  getDefaultValues: () => null,
  operacion: "Crear",
  setOperacion: () => {},
  selectedItem: null,
  setSelectedItem: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [onSubmit, setOnSubmit] = useState<Function | null>(null);
  const [dataType, setDataType] = useState<DataType>(DataType.Cuentas);
  const [operacion, setOperacion] = useState<Operation>("Crear");
  const [selectedItem, setSelectedItem] = useState<Item>(null);

  const getDefaultValues = (): DefaultValues => {
    switch (dataType) {
      case DataType.Cuentas:
        return cuentaInitialValue;
      case DataType.Asientos:
        return null;
      default:
        return null;
    }
  };

  const val: ModalContextProps = {
    openModal,
    setOpenModal,
    onSubmit,
    setOnSubmit,
    dataType,
    setDataType,
    getDefaultValues,
    operacion,
    setOperacion,
    selectedItem,
    setSelectedItem,
  };
  return <ModalContext.Provider value={val}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
