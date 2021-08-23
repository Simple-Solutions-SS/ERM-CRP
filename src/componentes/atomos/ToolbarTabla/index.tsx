import {
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  lighten,
} from "@material-ui/core";
import { Delete, FilterList } from "@material-ui/icons";
import clsx from "clsx";

export interface ToolbarTablaProps {
  numSelected: number;
  titulo?: string;
}

export const ToolbarTabla = ({
  numSelected,
  titulo = "",
}: ToolbarTablaProps) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {titulo}
        </Typography>
      )}
      {numSelected > 0 ? (
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
      )}
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
  })
);
