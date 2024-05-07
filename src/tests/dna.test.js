const isValidDNA = require ("../dna");

test("Validación de la cadena 1:", () => {
    expect(isValidDNA("CTAG")).toBe("true");
});

test("Validación de la cadena 1:", () => {
    expect(isValidDNA("CTXG")).toBe("false");
  });

  test("Validación de la cadena 1:", () => {
    expect(isValidDNA("ctag")).toBe("false");
  });

  test("Validación de la cadena 1:", () => {
    expect(isValidDNA("")).toBe("false");
  });