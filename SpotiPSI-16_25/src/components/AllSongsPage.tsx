import type { SongsProps } from "./Types.tsx"
import useStyles from './StyleAllSongsPage.ts'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add';

const AllSongsPage = ({ songs }: SongsProps) => {
    const { classes } = useStyles()

    return (
        <div>
            {songs.map((song) => (
                <div className={classes.song}>
                    <div key={song.id} className={classes.songRow}>
                        <PlayArrowIcon sx={{ color: "purple" }}></PlayArrowIcon>
                        <span>{song.name} -</span>
                        <span>{song.artist}</span>
                        <div className={classes.rightIcons}>
                            <AddIcon />
                            <FavoriteBorderIcon />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AllSongsPage