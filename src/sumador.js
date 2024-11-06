function sumarCadena(cadena) {
  if(cadena.length === 0)
  {
      return 0;
  }
  else{
    const numeros = cadena.split(',');
    let suma = 0;
    for (const numero of numeros) {
        if(Number(numero) >= 1000)
        {
          suma = suma + 0;
        }
        else{
          suma += Number(numero);  
        }
    }
    return suma;
  }
}

export default sumarCadena; 