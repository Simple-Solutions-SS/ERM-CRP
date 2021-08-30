import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";
import { DataType, useModal } from "../../../contextos/modal-context";
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

  const { setSelectedItem, setOperacion, setOpenModal, setDataType } =
    useModal();

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

  const handleEditClick = (item: any) => {
    setSelectedItem(item);
    setOperacion("Editar");
    setDataType(DataType.Cuentas);
    setOpenModal(true);
  };

  return (
    <TableBody>
      {data
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
              {campos.map(({ campo, subCampo }) => (
                <TableCell>
                  {subCampo ? row[campo][subCampo] : row[campo]}
                </TableCell>
              ))}
              <TableCell>
                <Tooltip title="Editar fila">
                  <IconButton
                    onClick={() => handleEditClick(row)}
                    aria-label="editar"
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
              </TableCell>
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
