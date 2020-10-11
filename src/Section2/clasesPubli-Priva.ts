export {};

// Clases Public 
console.log('Publicos');
enum PhotoOrientationPu {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class PicturePu {
    // Propiedades
    // Para que recibiera el # se camvbia en el tsconfig es5 por es6
    public id: number;
    public title: string;
    public orientation: PhotoOrientationPu;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientationPu) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class AlbumPu {
    public id: number;
    public title: string;
    public pictures: PicturePu[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: PicturePu) {
        this.pictures.push(picture);
    }
}

const albumPu: AlbumPu = new AlbumPu(2581, 'Personal PicturesPu');
const picturePu: PicturePu = new PicturePu(2587, 'SessionPu', PhotoOrientationPu.Square);
albumPu.addPicture(picturePu);
console.log('albumPu', albumPu);

// Accediendo a los miembros publicos
// picture.id = 100; // private
// picture.title = 'Another title'; // private
// album.title = 'Personal Activities'; //private
console.log('albumPu', albumPu);
console.log('picturePu', picturePu);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TypeScript 3.8
console.log('');
console.log('Privados con la etiqueta Private');
// Clases Private 
enum PhotoOrientationPri {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class PicturePri {
    // Propiedades
    // Para que recibiera el # se camvbia en el tsconfig es5 por es6
    private id: number;
    private title: string;
    private orientation: PhotoOrientationPri;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientationPri) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class AlbumPri {
    private id: number;
    private title: string;
    private pictures: PicturePri[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: PicturePri) {
        this.pictures.push(picture);
    }
}

const albumPri: AlbumPri = new AlbumPri(1, 'Personal PicturesPri');
const PicturePriv: PicturePri = new PicturePri(1, 'Platzi sessionPri', PhotoOrientationPri.Square);
albumPri.addPicture(PicturePriv);
console.log('albumPri', albumPri);

// Accediendo a los miembros publicos
// picture.id = 100; // private
// picture.title = 'Another title'; // private
// album.title = 'Personal Activities'; //private
console.log('albumPri', albumPri);
console.log('PicturePriv', PicturePriv);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TypeScript 3.8
console.log('');
console.log('Privados con la etiqueta #');
// Extensión JavaScript and TypeScript Nightly
// No se puede conocer la infomacion el atributo utilizando el #, mientras que con pricvate si se puede ver que tiene
// Clases Private ESM
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    // Para que recibiera el # se camvbia en el tsconfig es5 por es6
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.#id}, 
                 title: ${this.#title}, 
                 orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal PicturesPriNumeral');
const picture: Picture = new Picture(1, 'Platzi sessionPriNumeral', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
// picture.id = 100; // private
// picture.title = 'Another title'; // private
// album.title = 'Personal Activities'; //private
console.log('album', album);
console.log('picture', picture);