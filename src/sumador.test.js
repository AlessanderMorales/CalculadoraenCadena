import calcularCadena from "./sumador.js";

describe("Sumar", () => {
  it("deberia deevolver cadena a numeros", () => {
    expect(calcularCadena("4")).toEqual(4);
  });
  it("Si la cadena esta vacia retorna 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Suma de 2 numeros en cypr", () => {
    expect(calcularCadena("2,2")).toEqual(4);
  });
  it("No se cuenta los numeros 1000", () => {
    expect(calcularCadena("1000,1000")).toEqual(0);
  });
  it("No se cuenta los numeros desde 1000 para arriba", () => {
    expect(calcularCadena("1000,1020")).toEqual(0);
  });
  it("Con personalisacion", () => {
    expect(calcularCadena("//[;] 6;7;4")).toEqual(17);
  });
  //[;]\n5;5
});
