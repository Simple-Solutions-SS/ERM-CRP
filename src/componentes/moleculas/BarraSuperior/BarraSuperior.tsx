import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, AppBar, Toolbar } from "@material-ui/core";
import LogoSelca from "../../../assets/LogoSelca.png";
import TipoCambio from "../../../models/TipoCambio";
import { useEffect, useState } from "react";
import { getTipoCambio } from "../../../services/tipoCambio";
import { useTipoCambio } from "../../../contextos/tipoCambio-context";
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    toolbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
const BarraSuperior = () => {
  const classes = useStyles();

  const { tipoCambio } = useTipoCambio();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={LogoSelca} style={{ width: "136px", height: "68px" }} />
        <div>
          {tipoCambio && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
              <p>Compra: &#8353;{tipoCambio?.compra ?? 0}</p>

              <p>Venta: &#8353;{tipoCambio?.venta ?? 0}</p>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BarraSuperior;
