import useStyles from './app'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Sidebar from './components/sidebar/sidebar.tsx'
import React, {useState} from 'react'


const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"
function App() {
  
  const [currentPage, setCurrentPage] = useState("songs")

  const onClickMenu = (str: string) => {
      setCurrentPage(str)
  }

  const {classes} = useStyles()
  return (
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <span>{TITLE}</span>
          <MusicNoteIcon />
        </div>
        <div className={classes.mainSection}>


          <div className={classes.PageContent}>

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
