function calcularCadena(cadena) {
  if (!cadena){ 
    return 0;
  }
  let delimitador = ',';
  let numerosStr = cadena;
  if (cadena.startsWith('//[')) {
    const finDelimitador = cadena.indexOf(']');
    delimitador = cadena.slice(3, finDelimitador);
    numerosStr = cadena.slice(finDelimitador + 2); 
  }
  const numeros = numerosStr.split(delimitador);
  let suma = 0;
  for (const numero of numeros) {
    const valor = Number(numero);
    if (valor < 1000) {
      suma += valor;
    }
  }
  return suma;
}

export default calcularCadena;
