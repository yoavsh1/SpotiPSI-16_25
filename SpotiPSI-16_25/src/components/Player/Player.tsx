import type { Song } from '../Types'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CircleIcon from '@mui/icons-material/Circle';
import { useStyles } from './StylePlayer'


const Player = ({ artist, name }: Song) => {
    const { classes } = useStyles()

    return (
        <footer className={classes.player}>
            <div className={classes.playerContent}>
                    <div className={classes.songName}>{name}</div>
                    <div className={classes.songArtist}>{artist}</div>
                <div className={classes.icons}>
                    <SkipPreviousIcon className={classes.changeSongArrow}></SkipPreviousIcon>
                    <PlayArrowIcon className={classes.playArrow}></PlayArrowIcon>
                    <SkipNextIcon className={classes.changeSongArrow}></SkipNextIcon>
                </div>
            </div>
            <div className={classes.progressLine}>
                <div className={classes.line}></div>
                <CircleIcon className={classes.circle}></CircleIcon>
            </div>
        </footer>
    )
}
export default Player  