// Void

// Tipo expliciito
function shwoInfo(user:any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'Hola';
}

shwoInfo({id: 1, username: 'Pedro', firstName: 'Alonso'});

// Tipo Inferido
function showFormattedInfo(user:any) {
    console.log('User Info1', `id1: ${user.id} username1: ${user.username} firstName1: ${user.firstName}`);
}

showFormattedInfo({id: 1, username: 'Pedro', firstName: 'Alonso'});

// Tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null;
// unusable = undefined;

// Tipo Never
function handleError( code: number, message: string): never{
    // Procesa el codigo aqui
    // Genera un mensaje
    throw new Error(`${message}, Code: ${code}`);
}


try {
    handleError(404, 'Not Found');
} catch (error) {
    
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true){
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// Ciclo Infinito, el programa nunca termina
