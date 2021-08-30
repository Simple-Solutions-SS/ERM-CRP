import {
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  lighten,
  Button,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import clsx from "clsx";

export interface ToolbarTablaProps {
  numSelected: number;
  titulo?: string;
  idSelected?: number;
  onAgregar?: Function;
}

export const ToolbarTabla = ({
  numSelected,
  titulo = "",
  idSelected,
  onAgregar,
}: ToolbarTablaProps) => {
  const classes = useToolbarStyles();

  const handleAgregar = () => {
    onAgregar && onAgregar();
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {titulo}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Add />}
        onClick={handleAgregar}
      >
        Agregar
      </Button>

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterList />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);
