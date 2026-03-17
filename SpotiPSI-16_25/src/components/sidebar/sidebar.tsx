import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import useStyles from './sidebar'
const LOVED = "מעודפים"
const PLAYLISTS = "פלייליסטים"
const SONGS = "כל השירים"
const Sidebar: React.FC = () => {
    const {classes} = useStyles()
    return (
        <>
            <div className={classes.itemMenu}>
                <p>{SONGS}</p>
                <HomeIcon className={classes.icon}/>
            </div>
            <div className={classes.itemMenu}>
                <p>{PLAYLISTS}</p>
                <LibraryMusicIcon className={classes.icon}/>
            </div>
            <div className={classes.itemMenu}>
                <p>{LOVED}</p>
                <FavoriteIcon className={classes.icon}/>
            </div>
        </>
    )
}

export default Sidebar