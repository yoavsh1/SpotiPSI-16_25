import { type Playlist, type PlaylistsProps } from "../Types.tsx"
import { useState } from "react"
import PlaylistsPage from "./playlistsPage.tsx"
import PlaylistPage from "../../components/Playlist/PlaylistPage.tsx"

const PLAYLISTS = "playlists"
const SONGS = "songs"

const MainPlaylistsPage: React.FC<PlaylistsProps> = ({ playlists, songsProps, addPlaylist}: PlaylistsProps) => {

    const [page, setPage] = useState(PLAYLISTS)

    const [currentPlaylist, setPlaylist] = useState<Playlist>(playlists[0])

    
    const changePage = (playlist: Playlist) => {
        setPage(SONGS)
        setPlaylist(playlist)
    }

    const changeToPlaylists = () => {
        setPage(PLAYLISTS)
    }
    
    return (
        <div>
            {page === PLAYLISTS && <PlaylistsPage playlists={playlists} songsProps={songsProps} addPlaylist={addPlaylist} changePage={changePage}/>}
            {page === SONGS && <PlaylistPage playlist={currentPlaylist} songsProps={songsProps}  changeToPlaylists={changeToPlaylists}/>}
        </div>
    )


}
export default MainPlaylistsPage