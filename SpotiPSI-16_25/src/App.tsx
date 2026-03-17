import useStyles from './app'
import './App.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
const PLAY = "נגן שירים"
const TITLE = "SpotiPsi"
function App() {
  
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

          </div>

        </div>

        <div className={classes.player}>
          <p className={classes.textPlay}>{PLAY}</p>
        </div>


      </div> 

  )
}

export default App
