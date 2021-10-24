import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objects: Array<Imprimivel>) {
  objects.forEach(o => o.paraTexto());
}