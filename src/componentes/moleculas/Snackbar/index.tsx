import { Snackbar } from "@material-ui/core";
import Alert, { Color } from "@material-ui/lab/Alert";
import { useSnackbar } from "../../../contextos/use-snackback";

export const CustomSnackbar = () => {
  const { setOpenSnackBar, setMessage, openSnackBar, severity, message } =
    useSnackbar();

  const handleClose = () => {
    setOpenSnackBar(false);
    setMessage("");
  };

  return (
    <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity as unknown as Color}>
        {message}
      </Alert>
    </Snackbar>
  );
};
