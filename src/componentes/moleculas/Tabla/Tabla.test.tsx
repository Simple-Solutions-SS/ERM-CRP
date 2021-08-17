import { render } from "@testing-library/react";
import Tabla from "./Tabla";

describe("Tabla", () => {
  it("renderiza sin errores", () => {
    render(<Tabla />);
  });
});
