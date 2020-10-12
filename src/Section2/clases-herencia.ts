export {};
console.clear();

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

//SuperClase
class Item {
    protected _id: number;
    protected _title: string;


    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

    get id(): number {
        return this._id;
      }
      set id(id: number) {
        this._id = id;
      }
    
      get title(): string {
        return this._title;
      }
      set title(title: string) {
        this._title = title;
      }
}


class Picture extends Item {
  //Propiedades
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    // this._id = id;
    // this._title = title;
    this._orientation = orientation;
  }

  

  get orientation(): PhotoOrientation {
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album extends Item {
  private pictures: Picture[] = [];

  constructor(id: number, title: string) {
    super(id, title); // constructor Superclase
    this._id = id;
    this._title = title;
    this.pictures = [];
  }


  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const picture: Picture = new Picture(100, 'cool', PhotoOrientation.Square);
// const picture1 = new Picture(201, 'korn', PhotoOrientation.Square);
const album: Album = new Album(534, 'Family');
console.log(picture);
// console.log(picture1);
album.addPicture(picture);
// album.addPicture(picture1);

console.log('album', album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // get id()
picture.id = 100; // private set id(100)
picture.title = 'Another title'; // private
album.title = 'Antger Album'; // private
console.log('album', album);
// console.log(album.id);

picture.title = 'New title';

/*
Clases abstractas: Las clases abstractas son la base de donde otras clases podrian derivarse. 
A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.
La palabra reservada es abstract
*/
/*
asbtract: cuando requeires que una clase no sea instanciada
protected: atributo de los miembros para que puedan ser accedidos desde su propia clase y también que puedan ser solo accedidos a quienes heredan esa clase con implements(herencia)
implements: herencia claseA extends claseB { … }
static: para poder acceder a métodos/propiedades de una clase sin la necesidad de la instancia(new ClaseA()) sino const a = ClaseA.propiedad
*/

// Abstract ejm No se puede Instanciar cuando lleva la palabara abstract
/*
//SuperClase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;


    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

      get id(): number {
        return this._id;
      }
      // set id(id: number) {  Como es ReadOnly es solo lectura entonces no se puede asignar
        // this._id = id;
      // }
    
      get title(): string {
        return this._title;
      }
      set title(title: string) {
        this._title = title;
      }
}

const item = new Item(1,'Title Abstract');
console.log('item', item);
*/

// Static ejm
/*
class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  //Propiedades
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    // this._id = id;
    // this._title = title;
    this._orientation = orientation;
  }

  

  get orientation(): PhotoOrientation {
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

// probar el miembro estatico de Picture
 console.log('Photoorietntation', Picture.photoOrientation.Landscape);
*/