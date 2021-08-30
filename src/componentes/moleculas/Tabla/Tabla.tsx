import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { EncabezadoTabla } from "../../atomos/EncabezadoTabla";
import { ToolbarTabla } from "../../atomos/ToolbarTabla";
import { CuerpoTabla } from "../../atomos/CuerpoTabla";
import { capitalize } from "@material-ui/core";
import { EtiquetasCeldas } from "../../organismos/TablaCatalogoCuentas";

type Order = "asc" | "desc";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

export interface TablaProps {
  titulo?: string;
  datos?: any[];
  campos?: EtiquetasCeldas[];
  onAgregar?: Function;
}

const Tabla: React.FC<TablaProps> = ({
  titulo,
  datos = [],
  campos = [],
  onAgregar,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const celdasEncabezado = campos.map(({ label, campo }) => ({
    id: campo.toLocaleLowerCase(),
    numeric: false,
    disablePadding: true,
    label: capitalize(label),
  }));

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = datos.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ToolbarTabla
          onAgregar={onAgregar}
          numSelected={selected.length}
          titulo={titulo}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EncabezadoTabla
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={datos.length}
              celdasEncabezado={celdasEncabezado}
            />
            <CuerpoTabla
              selected={selected}
              rowsPerPage={rowsPerPage}
              page={page}
              data={datos}
              setSelected={setSelected}
              order={order}
              orderBy={orderBy}
              campos={campos}
            />
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="Filas por página"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Tabla;
