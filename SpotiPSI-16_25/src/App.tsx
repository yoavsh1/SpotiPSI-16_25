import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/sidebar/sidebar.tsx'
import { useState } from 'react'
import {useFetchServerFavorites, useFetchServerSongs} from './hooks/FetchServer.tsx'
import AllSongsPage from "./components/AllSongs/AllSongsPage.tsx"


const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"


const App = () => {
  const { classes } = useStyles()
  const [currentPage, setCurrentPage] = useState("songs")
  const onClickMenu = (str: string) => {setCurrentPage(str)}
  const {data: songList, isLoading: songsLoading, error: songsError,} = useFetchServerSongs()
  const {data: favoriteIds, isLoading: favoritesLoading, error: favoritesError} = useFetchServerFavorites()

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

            {!isLoading && !error && (<AllSongsPage songs={songList}  favoriteIds={favoriteIds} />)}
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
