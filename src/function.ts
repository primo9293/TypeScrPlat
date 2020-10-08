export{}
// Funciones en TypeScript

// // Crear una Fotografia: JS
// function createPicture(title, date, size) {
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'
// Usamos TS, definimos tipos para paramentros
function createPicture(title:string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture uno ', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia', '2020-03-20'); // --> Error Falta un parametro

// Parametros opcionales
function createPicture1(title?:string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture dos', title, date, size);
}

createPicture1('My Birthday', '2020-03-10', '500x500');
createPicture1('Colombia', '2020-03-20'); 

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    // atributos: variables que viene por la funcion 
    //     title: title,
    //     date : date,
    //     size : size
    // };
    // esm6 mas legible return { title, date, size };
    return { title, date, size };
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);


// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error (`${message}. Code error: ${code}`);
    } else {
        return 'An error has ocurred';
    }
}

try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch (error) { 

}