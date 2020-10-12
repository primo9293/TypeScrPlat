import { Item } from './item';
import { PhotoOrientation } from './photo-orientation';


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