let numero = 7;
function calculaFactorial (numero){
    if (isNaN(numero) || numero < 0) {
        return ('El numero ingresado no es mayor o igual que 1 o No es un numero');
      } else {
      
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
          factorial *= i;
        }
      
        return (`El factorial de ${numero} es: ${factorial}`);
      }

}
calculaFactorial(numero);

module.exports = calculaFactorial;