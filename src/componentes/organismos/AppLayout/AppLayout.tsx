import React from "react";
import BarraLateral from "../../moleculas/BarraLateral/BarraLateral";
import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
} from "@material-ui/core";
import BarraSuperior from "../../moleculas/BarraSuperior/BarraSuperior";
import { ModalWrapper } from "../../moleculas/Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  })
);

export const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ModalWrapper />
      <CssBaseline />
      <BarraSuperior />
      <BarraLateral />

      <main className={classes.content}>{children}</main>
    </div>
  );
};
