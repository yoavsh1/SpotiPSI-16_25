 export interface Song {
    id: string,
    artist: string,
    name: string,
    album: string 
}

export interface SongProp{
  song: Song
}

export interface SongsProps {
  songs: Song[]
}

export interface SidebarProp{
    onClickMenu: (str: string) => void
}