import type { SongsProps } from "../Types.tsx"
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import useStyles from './songsTable.ts'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add';



const SongsTable = ({ songs }: SongsProps) => {
    const { classes } = useStyles()

    return (
        <div>
            {songs.map((song) => (
                <div className={classes.song}>
                    <div key={song.id} className={classes.songRow}>
                        <IconButton>
                            <PlayArrowIcon sx={{ color: "purple" }}></PlayArrowIcon>
                        </IconButton>
                        <div className={classes.text}>
                            <ListItemText>{song.name} -</ListItemText>
                            <ListItemText>{song.artist}</ListItemText>
                        </div>
                        <div className={classes.rightIcons}>
                            <ListItemButton>
                                <AddIcon />
                            </ListItemButton>
                            <ListItemButton>
                                <FavoriteBorderIcon />
                            </ListItemButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

    
}
export default SongsTable