import { TableBody, TableRow, TableCell, Checkbox } from "@material-ui/core";
import React from "react";
import { EtiquetasCeldas } from "../../organismos/TablaCatalogoCuentas";

type Order = "asc" | "desc";

export interface CuerpoTablaProps {
  page: number;
  rowsPerPage: number;
  selected: string[];
  data: any[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  order: Order;
  orderBy: string;
  campos: EtiquetasCeldas[];
}

export const CuerpoTabla: React.FC<CuerpoTablaProps> = ({
  selected,
  rowsPerPage,
  page,
  data,
  setSelected,
  order,
  orderBy,
  campos,
}) => {
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleClick = (_: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <TableBody>
      {stableSort(data, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name as string);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name as string)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={`${row.name}-${index}`}
              selected={isItemSelected}
            >
              {campos.map(({ campo }) => (
                <TableCell>{row[campo]}</TableCell>
              ))}
              {/* <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.phone}</TableCell> */}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
