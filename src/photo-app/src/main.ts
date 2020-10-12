import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(4, 'Primo', 'daprimo', true);
const album = new Album(8, 'Photos Viaje1.0');
const picture = new Picture(12, 'Entrada camino', '2020/09', PhotoOrientation.Landscape);

// Creamos Relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('User', user);