import sumarCadena from "./sumador.js";

describe("Sumar", () => {
  it("deberia deevolver cadena a numeros", () => {
    expect(sumarCadena("4")).toEqual(4);
  });
  it("Si la cadena esta vacia retorna 0", () => {
    expect(sumarCadena("")).toEqual(0);
  });
  it("Suma de 2 numeros en cypr", () => {
    expect(sumarCadena("2,2")).toEqual(4);
  });
});
