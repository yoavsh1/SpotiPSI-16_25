import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/sidebar/sidebar.tsx'
import { useState, useEffect } from 'react'
import type { Song } from "./components/Types"
import AllSongsPage from "./components/AllSongs/AllSongsPage.tsx"
import FavoritesPage from "./components/Favorites/FavoritesPage.tsx"

const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"
const App = () => {
  const [currentPage, setCurrentPage] = useState("songs")
  const {classes} = useStyles()

  const [songList, setSongList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();


  const onClickMenu = (str: string) => {
      setCurrentPage(str)
  }

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5001/api/songs")
      const data = await response.json();
    
      setSongList(data);
    }
    catch (error) {
      setError("Something went worng");
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchSongs();
  }, []);


  
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
                        {currentPage === "songs" && <AllSongsPage songs={songList} />}
                        {currentPage === "playlists" && <AllSongsPage songs={songList} />}
                        {currentPage === "favorites" && <FavoritesPage songs={songList} />}
                      </div>
                    )}
                </div>
          </div>
          
          <div className={classes.sidebar}>
            <Sidebar onClickMenu={onClickMenu}/>
          </div>

        </div>

        <div className={classes.player}>
          <p className={classes.textPlay}>{PLAY}</p>
        </div>
      </div>
  )
}

export default App
