import type { SongProp } from "../Types.tsx"
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import useStyles from './song.ts'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from "react"

const ADD = "add"
const REMOVE = "remove"


const SongComponent: React.FC<SongProp> = ({ song, favorite, addHeart, removeHeart, playlists, addSongToPlaylist }: SongProp) => {
    const { classes } = useStyles()
    
    const [favoritePressed, setFavorite] = useState(favorite)
    const [anchorEl, setAnchor] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const addClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget)
    }

    const dropdownClose = () => {
        setAnchor(null)
    }

    const addOrRemoveFavorites = async (str: string) => {
        try {
            const response = await fetch(`http://127.0.0.1:5001/api/favorites/${str}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ songId: song.id })
            })
            const data = await response.json();
            return data
        }
        catch (error) {
            console.error(error);
            return;
        }
    };

    const onClickHeart = () => {
        if (favoritePressed) {
            addOrRemoveFavorites("remove")
            removeHeart(song.id)
        }
        else {
            addOrRemoveFavorites("add")
            addHeart(song.id)
        }

        setFavorite(!favoritePressed)
    }

    const onClickMenuButton = async (id: string, name:string) => {
        try {
            const response = await fetch(`http://127.0.0.1:5001/api/playlists/${id}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({songId: song.id})
            })
            const data = await response.json();
            addSongToPlaylist(song.id, name)
            dropdownClose()
            return data
        }
        catch (error) {
            console.error(error);
            return;
        }
    }
    console.log(playlists)
    return (
        <div>
            <div key={song.id} className={classes.song}>
                <div className={classes.songRow}>
                    <IconButton>
                        <PlayArrowIcon sx={{ color: "purple" }}></PlayArrowIcon>
                    </IconButton>
                    <div className={classes.text}>
                        <ListItemText>{song.name} -</ListItemText>
                        <ListItemText>{song.artist}</ListItemText>
                    </div>
                    <div className={classes.rightIcons}>
                        
                        <ListItemButton onClick={addClick}>
                            <AddIcon />
                        </ListItemButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={dropdownClose}
                            classes={{ paper: classes.menu }}
                        >
                            {playlists.map((playlist) => (
                                <MenuItem onClick={() => onClickMenuButton(playlist.id, playlist.name)} className={classes.menuText}>{playlist.name}</MenuItem>
                            ))}    
                        </Menu>
                        
                        <ListItemButton onClick={onClickHeart}>
                            {favoritePressed ? <FavoriteIcon sx={{ color: "purple" }} /> : <FavoriteBorderIcon />}
                        </ListItemButton>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default SongComponent