import React from "react";
import { useModal } from "../../../contextos/modal-context";
import { Formik } from "formik";

import {
  Button,
  createStyles,
  makeStyles,
  Modal,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";

export interface AccountCreationInput {
  AccountName: string;
  Description: string;
  AccountNumber: string;
  ClientAccount: string;
  BankName: string;
  IdCurrency: number;
  Note: string;
}

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
  })
);

export const ModalWrapper: React.FC = ({}) => {
  const { setOpenModal, openModal, onSubmit, initialValue } = useModal();
  const classes = useStyles();

  const handleSubmit = async ({
    Note,
    IdCurrency,
    BankName,
    AccountNumber,
    AccountName,
    Description,
    ClientAccount,
  }: AccountCreationInput) => {
    try {
      const response = await fetch(
        `https://simplesolutionscr.com/webservices/selca/service.php?who=insert_account&api_key=wqE6Uf9aqRa9QPw9ZMrtvc9lkyTwFEqe&AccountName=${AccountName}&Description=${Description}&AccountNumber=${AccountNumber}&ClientAccount=${ClientAccount}&BankName=${BankName}&IdCurrency=${IdCurrency}&Note=${Note}`,
        {
          mode: "no-cors",
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setOpenModal(false);
  };
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div className={classes.paper}>
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <Typography variant="h4" color="primary">
                Ingrese los datos de la cuenta:
              </Typography>
              <TextField
                required
                margin="normal"
                variant="outlined"
                label="Nombre de la cuenta"
                name="AccountName"
                type="text"
                inputMode="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.AccountName}
              />
              <TextField
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
                required
                margin="normal"
                variant="outlined"
                label="Cuenta Cliente"
                name="ClientAccount"
                type="text"
                inputMode="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ClientAccount}
              />
              <TextField
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
                required
                margin="normal"
                variant="outlined"
                label="ID de la Moneda"
                name="IdCurrency"
                type="number"
                inputMode="numeric"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.IdCurrency}
              />
              <TextField
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
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Crear Cuenta
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
