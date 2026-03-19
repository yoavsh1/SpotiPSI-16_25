export interface Song {
    id: string,
    artist: string,
    name: string,
    album: string
}

export interface Playlist {
    id:string
    name: string,
    songIds: string[]
}

export interface SongProp {
    song: Song,
    favorite: boolean,
    playlists: Playlist[],
    addHeart: (str: string) => void,
    removeHeart: (str: string) => void,
    addSongToPlaylist: (idSong: string, playlistName: string) => void
}

export interface SongsProps {
    songs: Song[],
    favoriteIds: string[],
    playlists: Playlist[],
    addHeart: (str: string) => void,
    removeHeart: (str: string) => void
    addSongToPlaylist: (idSong: string, playlistName: string) => void
}


export interface PlaylistsProps {
  playlists: Playlist[],
  songsProps: SongsProps,
  addPlaylist: (str: string) => void
}

export interface PlaylistsPageProps {
  playlists: Playlist[],
  songsProps: SongsProps,
  addPlaylist: (str: string) => void,
  changePage: (playlist: Playlist) => void
}


export interface PlaylistProp {
  playlist: Playlist,
  songsProps: SongsProps,
  changeToPlaylists: () => void
}


export interface SidebarProp{
    onClickMenu: (str: string) => void
}

