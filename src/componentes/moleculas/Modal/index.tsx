import React from "react";
import { DataType, useModal } from "../../../contextos/modal-context";

import { createStyles, makeStyles, Modal, Theme } from "@material-ui/core";
import { FormularioCuenta } from "../FormularioCuenta";

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
  const { setOpenModal, openModal, dataType } = useModal();
  const classes = useStyles();

  const getForm = () => {
    switch (dataType) {
      case DataType.Cuentas:
        return <FormularioCuenta />;

      case DataType.Cuentas:
        return <FormularioCuenta />;
      default:
        return null;
    }
  };

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div className={classes.paper}>{getForm()}</div>
    </Modal>
  );
};
