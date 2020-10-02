// ------- Tipo: Array -------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
// Explicito
let users: string[];
users = ['JuanJ', 'LauraL', 'AndresA'];
// users = [1, true, 'test']; // --> Error

// Inferido
let otherUsers = ['Juan', 'Laura', 'Andres'];
// otherUsers = [1, true, 'test']; // --> Error

// Array<tipoDato>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user : ', users[0]); // --> users[indice]: luixaviles
console.log('first title : ', pictureTitles[0]);

// Propiedades en Array
console.log('users.length : ', users.length); // -> Tamaño del Array

// Uso de funciones en Arrays
users.push('aPlatziUser');  // -> agrega dato a la cola del Array
users.sort();   // --> ordena el Array de menor a mayor (alfabetica)
console.log('users', users);