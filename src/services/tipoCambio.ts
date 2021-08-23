import axios from "axios";

export async function getTipoCambio(fecha: Date) {
  try {
    const dia = fecha.getDay();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    const respuesta = await axios.get(
      `https://tipodecambio.paginasweb.cr/api/${dia}/${mes}/${anio}`
    );

    return respuesta.data;
  } catch (error) {
    console.error("Error: " + error);
  }
}
