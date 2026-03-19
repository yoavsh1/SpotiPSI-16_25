import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/Sidebar/sidebar.tsx'
import { useState } from 'react'
import {useFetchServerFavorites, useFetchServerSongs, useFetchServerPlaylists} from './Hooks/FetchServer.tsx'
import AllSongsPage from "./components/AllSongs/AllSongsPage.tsx"
import FavoritesPage from "./components/Favorites/FavoritesPage.tsx"
import MainPlaylistsPage from "./components/PlaylistPage/MainPlaylistPage.tsx"
import type { Playlist, SongsProps } from './components/Types.tsx'

const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"
const App = () => {
  const [currentPage, setCurrentPage] = useState("songs")
  const {classes} = useStyles()
  
  
  const {data: songList, isLoading: songsLoading, error: songsError} = useFetchServerSongs()
  const {data: favoriteIds, isLoading: favoritesLoading, error: favoritesError, setData: setFavoriteIds} = useFetchServerFavorites()
  const {data: playlists, isLoading: playlistsLoading, error: playlistsError, setData: setPlaylists} = useFetchServerPlaylists()


  const onClickMenu = (str: string) => {setCurrentPage(str)}
  const addHeart = (id: string) => {setFavoriteIds(prev => [...prev, id])}
  const removeHeart = (id: string) => {setFavoriteIds(prev => prev.filter((currentId: string) => id !== currentId))}
  const addPlaylists = (name: string) => {
    const playlist: Playlist = {
      id: crypto.randomUUID.toString(),
      name,
      songIds: []
    }
    setPlaylists(prev => [...prev, playlist])
  }
  const addSongToPlaylist = (idSong: string, playlistName: string) => {
    setPlaylists(((prev) => 
      {{const playlist: Playlist | undefined =   prev.find((playlist) => (playlist.name === playlistName))
      if(playlist && !playlist.songIds.includes(idSong))
        playlist.songIds.push(idSong)}
      return prev
  }))
    
  }
  const isLoading = songsLoading || favoritesLoading || playlistsLoading
  const error = songsError || favoritesError || playlistsError
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <span>{TITLE}</span>
        <MusicNoteIcon />
      </div>
      <div className={classes.mainSection}>
        <div className={classes.PageContent}>
          <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
                    {!isLoading && !error && (
                      <div>
                        {currentPage === "songs" && <AllSongsPage songs={songList}  favoriteIds={favoriteIds} addHeart={addHeart}
                         removeHeart={removeHeart} playlists={playlists} addSongToPlaylist={addSongToPlaylist}/>}
                        {currentPage === "playlists" && <MainPlaylistsPage playlists={playlists} 
                        songsProps={{songs: songList, favoriteIds: favoriteIds, addHeart: addHeart, removeHeart: removeHeart, playlists:playlists, addSongToPlaylist:addSongToPlaylist}} addPlaylist={addPlaylists}/>}
                        {currentPage === "favorites" && <FavoritesPage addSongToPlaylist={addSongToPlaylist} songs={songList} favoriteIds={favoriteIds} addHeart={addHeart} removeHeart={removeHeart} playlists={playlists}/>}
                      </div>
                    )}
                </div>
          </div>
          <div className={classes.sidebar}>
            <Sidebar onClickMenu={onClickMenu} />
          </div>
        </div>
         <div className={classes.player}>
        <p className={classes.textPlay}>{PLAY}</p>
      </div>

      </div>
  )
}

export default App
