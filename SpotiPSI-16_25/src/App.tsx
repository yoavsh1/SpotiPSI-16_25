import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/Sidebar/sidebar.tsx'
import { useState, useRef } from 'react'
import { useFetchServerFavorites, useFetchServerSongs, useFetchServerPlaylists, fetchSongs } from './Hooks/FetchServer.tsx'
import AllSongsPage from "./components/AllSongs/AllSongsPage.tsx"
import FavoritesPage from "./components/Favorites/FavoritesPage.tsx"
import MainPlaylistsPage from "./components/PlaylistPage/MainPlaylistPage.tsx"
import type { Playlist, Song } from './components/Types.tsx'
import Player from './components/Player/Player.tsx'
import songUrl from "./assets/songs/1.mp3"

const PLAYLISTS = "playlists"
const TITLE = "SpotiPsi"

const App = () => {
    const [currentPage, setCurrentPage] = useState("songs")
    
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [queue, setQueue] = useState<string[]>([])
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0) 
    const songRef = useRef(null)
    const { classes } = useStyles()
    const { data: songList, isLoading: songsLoading, error: songsError } = useFetchServerSongs()
    const { data: favoriteIds, isLoading: favoritesLoading, error: favoritesError, setData: setFavoriteIds } = useFetchServerFavorites()
    const { data: playlists, isLoading: playlistsLoading, error: playlistsError, setData: setPlaylists, setIsLoading: setIsLoading
    , setError: setError } = useFetchServerPlaylists()
    const [currentSong, setCurrentSong] = useState<Song>()
    

    const playSong = (songId: string) => {
      setQueue(prev => [...prev, songId])
      
      setIsPlaying(true)
      
      if(songId){
        const song = songList.find(song => song.id === songId) || songList[0];
        setCurrentSong(song)
      }


    }
    const onClickMenu = (str: string) => { setCurrentPage(str) }
    const addHeart = (id: string) => { setFavoriteIds(prev => [...prev, id]) }
    const removeHeart = (id: string) => { setFavoriteIds(prev => prev.filter((currentId: string) => id !== currentId)) }
    const addPlaylists = () => {
      fetchSongs<Playlist[]>(setIsLoading, setError, setPlaylists, PLAYLISTS)
    }

    const addSongToPlaylist = (idSong: string, playlistName: string) => {
      setPlaylists(((prev) => {
        {
          const playlist: Playlist | undefined = prev.find((playlist) => (playlist.name === playlistName))
          if (playlist && !playlist.songIds.includes(idSong))
            playlist.songIds.push(idSong)
        }
        return prev
      }))

    }
    const isLoading = songsLoading || favoritesLoading || playlistsLoading
    const error = songsError || favoritesError || playlistsError
    return (
      <div className={classes.mainContainer}>
        <audio ref={songRef} src={songUrl} onEnded={() => setIsPlaying(false)} />
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
                  {currentPage === "songs" && <AllSongsPage songs={songList} favoriteIds={favoriteIds} addHeart={addHeart}
                    removeHeart={removeHeart} playlists={playlists} addSongToPlaylist={addSongToPlaylist} playSong={playSong}/>}
                  {currentPage === "playlists" && <MainPlaylistsPage playlists={playlists}
                    songsProps={{playSong: playSong, songs: songList, favoriteIds: favoriteIds, addHeart: addHeart, removeHeart: removeHeart, playlists: playlists, addSongToPlaylist: addSongToPlaylist }} addPlaylist={addPlaylists} />}
                  {currentPage === "favorites" && <FavoritesPage addSongToPlaylist={addSongToPlaylist} songs={songList} favoriteIds={favoriteIds} addHeart={addHeart} removeHeart={removeHeart} playlists={playlists} playSong={playSong} />}
                </div>
              )}
            </div>
          </div>
          <div className={classes.sidebar}>
            <Sidebar onClickMenu={onClickMenu} />
          </div>
          {currentSong && songList.length > 0 && (
            <Player
              id={currentSong.id}
              artist={currentSong.artist}
              name={currentSong.name}
              album={currentSong.album}
            />
          )}

        </div>

      </div>

    )
}
export default App