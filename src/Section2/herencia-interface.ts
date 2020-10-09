export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Entity {
    id: number;
    title: string;
}
interface Album extends Entity {
    // copia de los atributos de Entity
    // id: number;
    // title: string;
    descripcion: string;
}
interface Picture extends Entity{
    // id: number;
    // title: string;
    orientation: PhotoOrientation
}
const album: Album = {
    id: 1,
    title: 'Meetups',
    descripcion: 'Community events around the world'
};
const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album : ', album);
console.log('picture : ', picture);
console.log('newPicture : ', newPicture);