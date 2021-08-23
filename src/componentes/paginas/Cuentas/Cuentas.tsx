import { AppLayout } from "../../organismos/AppLayout/AppLayout";
import { TablaCatalogoCuentas } from "../../organismos/TablaCatalogoCuentas";

const Cuentas = () => {
  return (
    <AppLayout>
      <h1>Cuentas</h1>
      <TablaCatalogoCuentas/>
    </AppLayout>
  );
};

export default Cuentas;

