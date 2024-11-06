import sumarCadena from "./sumador.js";

describe("Sumar", () => {
  it("deberia deevolver cadena a numeros", () => {
    expect(sumarCadena("4")).toEqual(4);
  });
  it("Si la cadena esta vacia retorna 0", () => {
    expect(sumarCadena("4")).toEqual(4);
  });
});
