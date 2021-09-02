import { AppLayout } from "../../organismos/AppLayout/AppLayout";
import { TablaAsientos } from "../../organismos/TablaAsientos";

const Asientos = () => {
  console.log("Hola");
  return (
    <AppLayout>
      <h1>Asientos</h1>
      <TablaAsientos />
    </AppLayout>
  );
};

export default Asientos;
