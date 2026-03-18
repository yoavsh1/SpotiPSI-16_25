import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useRef } from 'react'
import useStyles from './sidebar'
const LOVED = "מעודפים"
const PLAYLISTS = "פלייליסטים"
const SONGS = "כל השירים"

interface SidebarProp{
    onClickMenu: (str: string) => void,


}

const Sidebar: React.FC<SidebarProp> = (prop: SidebarProp) => {
    const {classes} = useStyles()

    const homeIconRef = useRef<HTMLDivElement>(null)
    const libraryIconRef = useRef<HTMLDivElement>(null)
    const favoriteIconRef = useRef<HTMLDivElement>(null)

    const ChangeColorHome = () => {
        if (homeIconRef.current)
            homeIconRef.current.style.backgroundColor = "purple"
        if (libraryIconRef.current)
            libraryIconRef.current.style.backgroundColor = "black"
        if (favoriteIconRef.current)
            favoriteIconRef.current.style.backgroundColor = "black"

        prop.onClickMenu("songs")
    }

    const ChangeColorLibrary = () => {
        if (homeIconRef.current)
            homeIconRef.current.style.backgroundColor = "black"
        if (libraryIconRef.current)
            libraryIconRef.current.style.backgroundColor = "purple"
        if (favoriteIconRef.current)
            favoriteIconRef.current.style.backgroundColor = "black"

        prop.onClickMenu("playlists")
    }

    const ChangeColorFavorites = () => {
        if (homeIconRef.current)
            homeIconRef.current.style.backgroundColor = "black"
        if (libraryIconRef.current)
            libraryIconRef.current.style.backgroundColor = "black"
        if (favoriteIconRef.current)
            favoriteIconRef.current.style.backgroundColor = "purple"

        prop.onClickMenu("favorites")
    }

    return (
        <>
            <div className={classes.item} ref={homeIconRef} onClick={ChangeColorHome}>
                <p>{SONGS}</p>
                <HomeIcon className={classes.icon} />
            </div>
            <div className={classes.item} ref={libraryIconRef} onClick={ChangeColorLibrary}>
                <p>{PLAYLISTS}</p>
                <LibraryMusicIcon className={classes.icon}/>
            </div>
            <div className={classes.item} ref = {favoriteIconRef} onClick={ChangeColorFavorites}>
                <p>{LOVED}</p>
                <FavoriteIcon className={classes.icon}/>
            </div>
        </>
    )
}

export default Sidebar