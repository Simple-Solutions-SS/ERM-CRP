import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AccountCreationInput } from "../componentes/moleculas/Modal";
import { Acct_Account } from "../generated/graphql";

interface ModalContextProps {
  openModal: boolean;
  initialValue: AccountCreationInput;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setInitialValue: Dispatch<React.SetStateAction<AccountCreationInput>>;
  onSubmit: Function | null;
  setOnSubmit: React.Dispatch<React.SetStateAction<Function | null>>;
}

const initialValues: AccountCreationInput = {
  AccountName: "",
  Description: "",
  AccountNumber: "",
  ClientAccount: "",
  BankName: "",
  IdCurrency: 0,
  Note: "",
};

const ModalContext = createContext<ModalContextProps>({
  openModal: false,
  initialValue: initialValues,
  setOpenModal: () => {},
  setInitialValue: () => {},
  onSubmit: null,
  setOnSubmit: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [initialValue, setInitialValue] =
    useState<AccountCreationInput>(initialValues);
  const [onSubmit, setOnSubmit] = useState<Function | null>(null);

  const val: ModalContextProps = {
    openModal,
    setOpenModal,
    initialValue,
    setInitialValue,
    onSubmit,
    setOnSubmit,
  };
  return <ModalContext.Provider value={val}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
