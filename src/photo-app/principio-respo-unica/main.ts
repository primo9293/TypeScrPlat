// import { User, Album, Picture, PhotoOrientation } from './photo-app';
/*
Principio de responsabilidad unica. 
Idealmente un archivo deberia tener un proposito o responsabilidad unica: 
definir una clase, una interfaz, un enumerado, etc.
Esto mejora la legibilidad de codigo, facilita la lectura, testing y favorece su mantenimiento.

Utilizamos archivos separados y la utilizacion de import, export para lograr un poco mas de mantenibiilidad. 
Se puede usar tambien carpetas para separar los archivos.
*/

import { Album } from './album';
import { Item } from './item';
import { PhotoOrientation } from './photo-orientation';
import { Picture } from './picture';
import { User } from './user';




const user = new User(6, 'Familia', 'family', true);
const album = new Album(12, 'Photos Viaje3.0');
const picture = new Picture(18, 'Entrada ciudad', '2020/06', PhotoOrientation.Landscape);

// Creamos Relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('UserBefore', user);
// Borra Album
user.removeAlbum(album);
console.log('UserAfter', user);

// tsc --project myFolder --watch

// Resolviendo módulos
/*
Resolviendo Modulos: Typescript resuelve la ubicacion de modulos observando referencias relativas y no relativas.
Posteriormente intenta localizar el modulo usando una estrategia de resolucion de modulos.
    tsc --moduleResolution node
    tsc --moduleResolution classic

diferencias
node: Modulos CommonJs o UMD, mas opciones de configuración
classic: Modulos AMD, System, ES2015, poco configurable en tsconfig.json

"traceResolution": true,                  // TS mira u observa el comportamiento de los modulos para buscarlos y dice si es classic o node 

*/