import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, AppBar, Toolbar } from "@material-ui/core";
import LogoSelca from "../../../assets/LogoSelca.png";
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  })
);
const BarraSuperior = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <img src={LogoSelca} style={{ width: "136px", height: "68px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default BarraSuperior;
