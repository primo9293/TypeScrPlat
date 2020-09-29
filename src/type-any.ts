// tsc --watch           Terminal 1
// node dist/type-any.js Terminal 2
let idUser: any;
idUser = 1; // NUmber
idUser = '1'; // String 

console.log('idUser', idUser);

// Inferred type
let otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);

let suprise: any = 'Hello typescript';
// suprise.sayHello(); // Error
const res = suprise.substring(6);
console.log(`Resultado: ${res}`);


/* 
  Tipo Void: Representa la ausencia de tipo. usado en funciones que no retornan nada.
  Tipo Never: Representa funciones que lanzan excepciones o nunca retornan un valor.
 */

