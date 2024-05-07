const calculaFactorial = require ("../factorial");

test("Calcula el factorial de un numero positivo:", () => {
    expect(calculaFactorial(7)).toBe("El factorial de 7 es: 5040");
});

test("Numero negativos o no numeros:", () => {
    expect(calculaFactorial(-10)).toBe('El numero ingresado no es mayor o igual que 1 o No es un numero');
  });