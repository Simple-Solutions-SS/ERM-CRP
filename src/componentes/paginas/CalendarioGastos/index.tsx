import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AppLayout } from "../../organismos/AppLayout/AppLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      height: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(2),
    },
  })
);

const CalendarioGastos = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <h1>Calendario de Gastos</h1>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4">No hay datos.</Typography>
        </Paper>
      </div>
    </AppLayout>
  );
};

export default CalendarioGastos;
