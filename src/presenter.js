import calcularCadena from "./sumador"; 

const form = document.querySelector("#sumar-form");
const cadenaInput = document.querySelector("#cadena");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cadena = cadenaInput.value;
  const resultado = calcularCadena(cadena);
  resultadoDiv.innerHTML = "<p>" + resultado + "</p>";
});
