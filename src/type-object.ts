// ------ Tipo: object ------
// explicito
let user: object;
user = {}; // Object
user = {
    id: 10,
    username: 'prdx',
    firstname: 'Pedroprdx',
    isPro: true
};
console.log('user', user);
// console.log('user.username', user.username); // --> no se puede acceder al dato username

/*
 * Object: instancia de la clase Object de JavaScript
 * object: tipo para valores no primitivos
 */

// ---- Object vs object (Clase JS vs tipo TS) ----
// considera como tipo instancia Object de JavaScript
const myObj = {
    id: 20,
    username: 'prdx',
    firstname: 'Pedroprdx',
    isPro: true
};
const isInstance = myObj instanceof Object; // true o false
console.log('isInstance : ', isInstance); // clase Object JavaScript
console.log('myObj.username : ', myObj.username); // --> se puede acceder al dato username