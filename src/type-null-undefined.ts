//  ------------------ NULL ------------------
// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // --> Error

// Inferido
let otherVariable = null;   // --> any
otherVariable = 'test';

console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);
