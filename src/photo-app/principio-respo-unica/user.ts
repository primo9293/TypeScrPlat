import { Album } from './album';


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

    removeAlbum(album: Album): Album | undefined {
      // Buscar Album
      const indexA = this.album.findIndex(a => a.id === album.id);
      let deleteAlbum;
      if ( indexA >= 0 ) {
        deleteAlbum = this.album[indexA];
        this.album.splice(indexA, 1);
      }
      return deleteAlbum;
    }
}