import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Administracion from "../componentes/paginas/Administracion/Administracion";
import Asientos from "../componentes/paginas/Asientos";
import CalendarioGastos from "../componentes/paginas/CalendarioGastos";
import Clientes from "../componentes/paginas/Clientes/Clientes";
import Compras from "../componentes/paginas/Compras/Compras";
import Cuentas from "../componentes/paginas/Cuentas/Cuentas";
import DirectorioCuentas from "../componentes/paginas/DirectorioCuentas/DirectorioCuentas";
import EstadosFinancieros from "../componentes/paginas/EstadosFinancieros";
import Facturacion from "../componentes/paginas/Facturacion/Facturacion";
import Financiamiento from "../componentes/paginas/Financiamiento/Financiamiento";
import Inicio from "../componentes/paginas/Inicio/Inicio";
import Inventario from "../componentes/paginas/Inventario/Inventario";
import Monitoreo from "../componentes/paginas/Monitoreo/Monitoreo";
import Operaciones from "../componentes/paginas/Operaciones/Operaciones";
import Planillas from "../componentes/paginas/Planillas/Planillas";

export const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/facturacion" component={Facturacion} />
        <Route path="/inventario" component={Inventario} />
        <Route path="/financiamiento" component={Financiamiento} />
        <Route path="/operaciones" component={Operaciones} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/cuentas" component={Cuentas} />
        <Route path="/asientos" component={Asientos} />
        <Route path="/compras" component={Compras} />
        <Route path="/planillas" component={Planillas} />
        <Route path="/monitoreo" component={Monitoreo} />
        <Route path="/administracion" component={Administracion} />
        <Route path="/estados-financieros" component={EstadosFinancieros} />
        <Route path="/calendario-gastos" component={CalendarioGastos} />

        <Route path="/cuentas" component={DirectorioCuentas} />
      </Switch>
    </Router>
  );
};
