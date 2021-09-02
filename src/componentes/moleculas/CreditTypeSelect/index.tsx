import {
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  capitalize,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import useCreditTypes from "../../../hooks/useCreditType";

export interface CreditTypeSelectProps {
  value: number;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export const CreditTypeSelect: React.FC<CreditTypeSelectProps> = ({
  value,
  handleChange,
  handleBlur,
}) => {
  const classes = useStyles();
  const { data: creditTypes, loading: loadingCreditTypes } = useCreditTypes();
  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel shrink id="label-tipo-credito">
        Tipo de Crédito
      </InputLabel>
      <Select
        name="IdCreditType"
        variant="outlined"
        labelId="label-tipo-credito"
        id="select-tipo-credito"
        onChange={handleChange}
        onBlur={handleBlur}
        displayEmpty
        className={classes.selectEmpty}
        value={value}
      >
        {creditTypes?.acct_CreditType &&
          creditTypes?.acct_CreditType.map((item) => (
            <MenuItem value={item.IdCreditType}>
              {capitalize(item.Name ?? "")}
            </MenuItem>
          ))}
        {loadingCreditTypes && (
          <MenuItem>
            <CircularProgress />
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
