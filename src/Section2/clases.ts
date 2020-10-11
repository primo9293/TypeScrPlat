export {};

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Picture {
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[] = [];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    // this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const picture: Picture = new Picture(55, 'Fiesta', PhotoOrientation.Square);
const picture1 = new Picture(21, 'Botella', PhotoOrientation.Square);
const album: Album = new Album(654, 'Familia');
console.log(picture);
console.log(picture1);
album.addPicture(picture);
album.addPicture(picture1);

console.log('album',album);