export interface Song {
    id: string,
    artist: string,
    name: string,
    album: string
}

export interface Playlist {
    id:string
    name: string,
    songsIds: string[]
}

export interface SongProp {
    song: Song,
    favorite: boolean,
    addHeart: (str: string) => void,
    removeHeart: (str: string) => void
}

export interface SongsProps {
    songs: Song[],
    favoriteIds: string[],
    addHeart: (str: string) => void,
    removeHeart: (str: string) => void
}


export interface PlaylistsProps {
  playlists: Playlist[],
  favoriteIds: string[],
  addHeart: (str: string) => void,
  removeHeart: (str: string) => void
}


export interface SidebarProp{
    onClickMenu: (str: string) => void
}