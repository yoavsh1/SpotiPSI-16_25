 export interface Song {
    id: string,
    artist: string,
    name: string,
    album: string //בשניות
}

export interface SongsProps {
  songs: Song[]
  }