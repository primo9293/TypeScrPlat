// Tipo tuple
// Tuplas: permiten expresar un arreglo con un numero fijo de elementos

export {}; // -> user ya fue declarado en otro archivo

// [1, 'user']
let user: [number, string]; // -> user ya fue declarado en otro archivo
user = [1, 'Juan'];

console.log('user : ', user);
console.log('username : ', user[1]);
console.log('username.length : ', user[1].length);
console.log('id : ', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Luis', true];
console.log('userInfo : ', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'Juan']);
array.push([2, 'Luis']);
array.push([3, 'lensQueen']);   // indice: 2
console.log('array : ', array);

// Uso de funciones array
// lensQueen --> lensQueen001
array[2][1] = array[2][1].concat('005');  // --> concatena
console.log('array : ', array);