// You already have the methods imported

import { getUsers, getUser } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation
describe('getUsers', () => {
  test("Usuario Valido", () => {
    const userId = 1;
    return getUsers(userId).then(user => {
      expect(user).toEqual({ id: 2, name: 'spiderman', email: 'parkerdapete@gmail.com' });
    });
  });
});

describe('getUsers', () => {
    test("Usuario no valido", () => {
      const userId = 15;
      return getUsers(userId).catch(error => {
        expect(error.message).toBe('ID inválido o no existe');
      });
    });
  });
