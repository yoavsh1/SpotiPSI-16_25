import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/Sidebar/sidebar.tsx'
import { useState } from 'react'
import {useFetchServerFavorites, useFetchServerSongs} from './Hooks/FetchServer.tsx'
import AllSongsPage from "./components/AllSongs/AllSongsPage.tsx"
import FavoritesPage from "./components/Favorites/FavoritesPage.tsx"

const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"
const App = () => {
  const [currentPage, setCurrentPage] = useState("songs")
  const {classes} = useStyles()
  
  
  const {data: songList, isLoading: songsLoading, error: songsError} = useFetchServerSongs()
  const {data: favoriteIds, isLoading: favoritesLoading, error: favoritesError,setData: setFavoriteIds} = useFetchServerFavorites()


  const onClickMenu = (str: string) => {setCurrentPage(str)}
  const addHeart = (id: string) => {setFavoriteIds(prev => [...prev, id])}
  const removeHeart = (id: string) => {setFavoriteIds(prev => prev.filter((currentId: string) => id !== currentId))}
  const isLoading = songsLoading || favoritesLoading
  const error = songsError || favoritesError

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
                        {currentPage === "songs" && <AllSongsPage songs={songList}  favoriteIds={favoriteIds} addHeart={addHeart} removeHeart={removeHeart}/>}
                        {currentPage === "playlists" && <AllSongsPage songs={songList} favoriteIds={favoriteIds} addHeart={addHeart} removeHeart={removeHeart}/>}
                        {currentPage === "favorites" && <FavoritesPage songs={songList} favoriteIds={favoriteIds} addHeart={addHeart} removeHeart={removeHeart}/>}
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
