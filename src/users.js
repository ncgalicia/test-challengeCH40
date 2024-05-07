// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

//
function getUsers(userId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      const user = users[userId];
      if (user) {
        resolve(user); 
      } else {
        reject(new Error("ID inválido o no existe")); 
      }
    }, 2000); 
  });
}


const getUser = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = { getUsers, getUser };



