import React from "react";

import { Formik } from "formik";

import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  capitalize,
} from "@material-ui/core";
import useAccountTypes from "../../../hooks/useAccountTypes";
import useConversions from "../../../hooks/useConversions";
import useFinancialStatements from "../../../hooks/useFinancialStatement";
import styled from "@emotion/styled";
import useCurrencies from "../../../hooks/useCurrencies";
import { useTipoCambio } from "../../../contextos/tipoCambio-context";
import useAccounts from "../../../hooks/useAccounts";
import useCreditTypes from "../../../hooks/useCreditType";
import { useSnackbar } from "../../../contextos/use-snackback";
import { useModal } from "../../../contextos/modal-context";
import { createEncodedString } from "../../../utils/strings";
import { getDefaultValues } from "@apollo/client/utilities";

export interface AsientoCreationInput {
  IdDocument: number;
  IdCurrency: number;
  IdAccount: number;
  TransactionCode: number;
  IdTransactionType: number;
  JournalNumber: number;
}

const usoRestringido = [
  { label: "Sí", value: 1 },
  { label: "No", value: 0 },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 600,
      top: "50%",
      left: "50%",
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "8px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      transform: "translate(-50%, -50%)",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    rowFormControl: {
      margin: 0,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export const FormularioAsientos = () => {
  const classes = useStyles();
  const { setOpenModal, getDefaultValues } = useModal();
  const { setMessage, setSeverity, setOpenSnackBar } = useSnackbar();

  const { refetch } = useAccounts();
  const { tipoCambio } = useTipoCambio();
  const { data: accounts, loading: loadingAccounts } = useAccounts();
  const { data: accountTypes, loading: loadingAccountTypes } =
    useAccountTypes();
  const { data: conversionTypes, loading: loadingConversionTypes } =
    useConversions();

  const { data: financialStatements, loading: loadingFinancialStatements } =
    useFinancialStatements();

  const { data: currencyTypes, loading: loadingCurrencies } = useCurrencies();

  const handleSubmit = async (value: AsientoCreationInput) => {
    try {
      // console.log(
      //   `https://simplesolutionscr.com/webservices/selca/service.php?who=insert_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&IdUser=1&${createEncodedString(
      //     value
      //   )}`
      // );
      // const response = await fetch(
      //   `https://simplesolutionscr.com/webservices/selca/service.php?who=insert_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&IdUser=1&${createEncodedString(
      //     value
      //   )}`,
      //   {
      //     mode: "no-cors",
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //   }
      // );
      // setMessage("Se creó la cuenta exitosamente.");
      // setSeverity("success");
      // setOpenSnackBar(true);
      // setOpenModal(false);
      // refetch();
    } catch (error) {
      console.error(error);
      setMessage("Oops, tuvimos problemas para crear la cuenta.");
      setSeverity("error");
      setOpenSnackBar(true);
      setOpenModal(false);
    }
  };
  return (
    <Formik
      initialValues={{
        ...(getDefaultValues() as AsientoCreationInput),
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          style={{
            width: "95%",
          }}
          onSubmit={handleSubmit}
        >
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Crear Asiento
            </Button>
          </ButtonContainer>
        </form>
      )}
    </Formik>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0;
`;

const FieldsContainer = styled.div`
  height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding: 8px 0;
  border-top: 1px solid #001744;
  width: 100%;
  display: flex;
  justify-content: center;
`;
