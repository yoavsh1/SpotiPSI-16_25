import  { type PlaylistProp } from "../Types.tsx"
import useStyles from './PlaylistPage.ts'
import SongsTable from '../SongsTable/songsTable.tsx'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
export const PlayListPage = ({ playlist, songsProps, changeToPlaylists}: PlaylistProp) => {

    const { classes } = useStyles()
    
    const onClickIcon = () => {
        changeToPlaylists()
    }

    return (
        <div>
            <div className={classes.header}>
                <h1 className={classes.headerText}>{playlist.name}</h1>
                <IconButton onClick={onClickIcon}>
                    <ArrowBackIcon sx={{ color: "purple" }}/>
                </IconButton>
            </div>
            <SongsTable 
                songs={songsProps.songs.filter((song) => 
                playlist.songIds.indexOf(song.id) > -1)} 
                favoriteIds={songsProps.favoriteIds} 
                addHeart={songsProps.addHeart}
                playlists={songsProps.playlists}
                addSongToPlaylist={songsProps.addSongToPlaylist}
                removeHeart={songsProps.removeHeart}/>
        </div>
    )
}

export default PlayListPage
