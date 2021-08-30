import { AccountCreationInput } from "../componentes/moleculas/FormularioCuenta";

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const createEncodedString = (value: AccountCreationInput) => {
  const stringArray: string[] = [];
  let key: keyof AccountCreationInput;
  for (key in value) {
    stringArray.push(`${key}=${value[key]}`);
  }

  return stringArray.join("&");
};
