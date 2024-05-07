let numero = 78;

if (isNaN(numero) || numero < 0) {
  console.log('El numero ingresado no es mayor o igual que 1 o No es un numero');
} else {

  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  console.log(`El factorial de ${numero} es: ${factorial}`);
}
