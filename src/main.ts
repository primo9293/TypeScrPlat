console.log('Inicio');

// Number Explicit

let phone: number;
// phone = '+367128815'; --> Error de tipo
phone = 798135498;

// Number inferred
let phoneMovil = 6948148;
// let phoneMovil = true; --> Error esta definido antes

let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

// Type: Boolean
let isPro: boolean;
isPro = true;
// isPro = 1; --> Error

// String
let username: string = 'nombre';
username = 'Pablo';
// username = true; --> Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' dark'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('Info', userInfo);
console.log('Fin');