function calcularCadena(cadena) {
  if (!cadena) return 0;

  const numeros = cadena.split(',');
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
