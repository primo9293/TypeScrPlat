export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
  }

  export class User {
      private album: Album[];

      constructor(private id: number,
                  private username: string,
                  private firstName: string,
                  private isPro: boolean){
            this.album = [];
      }

      addAlbum(album: Album){
        this.album.push(album);
      }
  }

  export class Item {
    constructor(public readonly id: number,
                protected title: string){
    }
  }


  export class Album extends Item {
     picture: Picture[];
  
    constructor(id: number, title: string) {
      super(id, title); // constructor Superclase
      this.picture = [];
    }

    addPicture(picture: Picture) {
        this.picture.push(picture);
      }
}


export class Picture extends Item {
    //Propiedades
    constructor(id: number,
                title: string,
                private date: string,
                private _orientation: PhotoOrientation) {
      super(id, title);
    }
    
    // Comportamiento
    public toString() {
      return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
  }
  