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
import { Acct_Account } from "../../../generated/graphql";

export interface AccountCreationInput {
  AccountName: string;
  Description: string;
  AccountNumber: string;
  ClientAccount: string;
  BankName: string;
  IdCurrency: number;
  IdStatus: number;
  Note: string;
  // IdUser: number;
  IdAccountingType: number;
  IdFinancialStatement: number;
  Balance: number;
  IdMasterAccount: number;
  BalanceType: number;
  UseCostCenter: number;
  TypeExchange: number;
  IdTypeExchange: number;
  IsRestricted: string;
  IdCreditType: number;
  IdAccount?: number;
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

export const FormularioCuenta = () => {
  const classes = useStyles();
  const { setOpenModal, getDefaultValues, operacion, selectedItem } =
    useModal();
  const { setMessage, setSeverity, setOpenSnackBar } = useSnackbar();

  const { refetch } = useAccounts();
  const { tipoCambio } = useTipoCambio();
  const { data: accountTypes, loading: loadingAccountTypes } =
    useAccountTypes();
  const { data: conversionTypes, loading: loadingConversionTypes } =
    useConversions();

  const { data: financialStatements, loading: loadingFinancialStatements } =
    useFinancialStatements();

  const { data: creditTypes, loading: loadingCreditTypes } = useCreditTypes();

  const { data: currencyTypes, loading: loadingCurrencies } = useCurrencies();

  const mostrarExitoso = () => {
    setMessage("Operación exitosa 👍");
    setSeverity("success");
    setOpenSnackBar(true);
    setOpenModal(false);
    refetch();
  };

  const mostrarError = () => {
    setMessage("Oops, tuvimo un problema, inténtalo de nuevo.");
    setSeverity("error");
    setOpenSnackBar(true);
    setOpenModal(false);
  };

  const handleAddCuenta = async (value: AccountCreationInput) => {
    try {
      await fetch(
        `https://simplesolutionscr.com/webservices/selca/service.php?who=insert_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&IdUser=1&${createEncodedString(
          value
        )}`,
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      mostrarExitoso();
    } catch (error) {
      console.error(error);
      mostrarError();
    }
  };

  const handleEditCuenta = async (value: AccountCreationInput) => {
    try {
      console.log(
        `https://simplesolutionscr.com/webservices/selca/service.php?who=update_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&IdUser=1${createEncodedString(
          value
        )}`
      );
      const response = await fetch(
        `https://simplesolutionscr.com/webservices/selca/service.php?who=update_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&IdUser=1${createEncodedString(
          value
        )}`,
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      mostrarExitoso();
    } catch (error) {
      console.error(error);
      mostrarError();
    }
  };

  const handleSubmit = async (value: AccountCreationInput) => {
    if (operacion === "Crear") {
      await handleAddCuenta(value);
    } else if (operacion === "Editar") {
      await handleEditCuenta(value);
    }
  };

  const selectedCuenta = selectedItem as Acct_Account;

  const initialAccount: AccountCreationInput | undefined = selectedCuenta
    ? {
        AccountName: selectedCuenta.AccountName ?? "",
        Description: selectedCuenta.Description ?? "",
        AccountNumber: selectedCuenta.AccountNumber,
        ClientAccount: selectedCuenta.ClientAccount ?? "",
        BankName: selectedCuenta.BankName ?? "",
        IdCurrency: selectedCuenta.IdCurrency ?? 0,
        IdStatus: selectedCuenta.IdStatus ?? 0,
        Note: selectedCuenta.Note ?? "",
        // IdUser: number;
        IdAccountingType: selectedCuenta.AccountingType?.IdAccountingType ?? 0,
        IdFinancialStatement:
          selectedCuenta.FinancialStatement?.IdFinancialStatement ?? 0,
        Balance: selectedCuenta.Balance ?? 0,
        IdMasterAccount: selectedCuenta.IdMasterAccount ?? 0,
        BalanceType: parseInt(selectedCuenta.BalanceType ?? "0"),
        UseCostCenter: selectedCuenta.UseCostCenter ?? 0,
        TypeExchange: 0,
        IdTypeExchange: selectedCuenta.IdTypeExchange ?? 0,
        IsRestricted: selectedCuenta.IsRestricted ?? "",
        IdCreditType: selectedCuenta.IdCreditType ?? 0,
        IdAccount: selectedCuenta.IdAccount ?? 0,
      }
    : undefined;

  console.log(selectedItem);

  const initialValues =
    initialAccount || (getDefaultValues() as AccountCreationInput);

  return (
    <Formik
      initialValues={{
        ...initialValues,
        TypeExchange: tipoCambio?.compra ?? 0,
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
          <FieldsContainer>
            <Typography variant="h4" color="primary">
              Ingrese los datos de la cuenta:
            </Typography>
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Nombre Cuenta"
              name="AccountName"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.AccountName}
            />
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Número de cuenta"
              name="AccountNumber"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.AccountNumber}
            />
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Descripción"
              name="Description"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Description}
            />
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Cuenta IBAN"
              name="ClientAccount"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ClientAccount}
            />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel shrink id="label-tipo-cuenta">
                Tipo de Cuenta
              </InputLabel>
              <Select
                variant="outlined"
                labelId="label-tipo-cuenta"
                id="select-tipo-cuenta"
                onChange={handleChange}
                onBlur={handleBlur}
                displayEmpty
                name="IdFinancialStatement"
                value={values.IdFinancialStatement}
                className={classes.selectEmpty}
              >
                {financialStatements?.acct_FinancialStatement &&
                  financialStatements.acct_FinancialStatement.map((item) => (
                    <MenuItem value={item.IdFinancialStatement}>
                      {capitalize(item.Name ?? "")}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FlexRow>
              <FormControl fullWidth className={classes.rowFormControl}>
                <InputLabel shrink id="label-tipo-detallado">
                  Tipo Detallado
                </InputLabel>
                <Select
                  variant="outlined"
                  labelId="label-tipo-detallado"
                  id="select-tipo-detallado"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  displayEmpty
                  name="IdAccountingType"
                  value={values.IdAccountingType}
                  className={classes.selectEmpty}
                >
                  {accountTypes?.acct_AccountingType &&
                    accountTypes.acct_AccountingType.map((item) => (
                      <MenuItem value={item.IdAccountingType}>
                        {capitalize(item.Name ?? "")}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className={classes.rowFormControl}>
                <InputLabel shrink id="label-uso-restringido">
                  Uso Restringido
                </InputLabel>
                <Select
                  variant="outlined"
                  labelId="label-uso-restringido"
                  id="select-uso-restringido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  displayEmpty
                  name="IsRestricted"
                  value={values.IsRestricted}
                  className={classes.selectEmpty}
                >
                  {usoRestringido.map((item) => (
                    <MenuItem value={item.value}>
                      {capitalize(item.label)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FlexRow>

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel shrink id="label-tipo-conversion">
                Conversión
              </InputLabel>
              <Select
                name="IdTypeExchange"
                variant="outlined"
                labelId="label-tipo-conversion"
                id="select-tipo-conversion"
                onChange={handleChange}
                onBlur={handleBlur}
                displayEmpty
                value={values.IdTypeExchange}
                className={classes.selectEmpty}
              >
                {conversionTypes?.acct_TypeExchange &&
                  conversionTypes?.acct_TypeExchange.map((item) => (
                    <MenuItem value={item.IdTypeExchange}>
                      {capitalize(item.Name ?? "")}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Nombre del Banco"
              name="BankName"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.BankName}
            />

            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Tipo de Cambio"
              name="TypeExchange"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.TypeExchange}
            />

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel shrink id="label-tipo-moneda">
                Moneda
              </InputLabel>
              <Select
                name="IdCurrency"
                variant="outlined"
                labelId="label-tipo-moneda"
                id="select-tipo-conversion"
                onChange={handleChange}
                onBlur={handleBlur}
                displayEmpty
                className={classes.selectEmpty}
                value={values.IdCurrency}
              >
                {currencyTypes?.acct_Currency &&
                  currencyTypes?.acct_Currency.map((item) => (
                    <MenuItem value={item.IdCurrency}>
                      {capitalize(item.Name ?? "")}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel shrink id="label-tipo-credito">
                Tipo de Crédito
              </InputLabel>
              <Select
                name="IdCreditType"
                variant="outlined"
                labelId="label-tipo-credito"
                id="select-tipo-credito"
                onChange={handleChange}
                onBlur={handleBlur}
                displayEmpty
                className={classes.selectEmpty}
                value={values.IdCreditType}
              >
                {creditTypes?.acct_CreditType &&
                  creditTypes?.acct_CreditType.map((item) => (
                    <MenuItem value={item.IdCreditType}>
                      {capitalize(item.Name ?? "")}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              variant="outlined"
              label="Notas"
              name="Note"
              type="text"
              inputMode="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Note}
            />
          </FieldsContainer>
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {operacion === "Crear" ? "Crear Cuenta" : "Actualizar Cuenta"}
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
