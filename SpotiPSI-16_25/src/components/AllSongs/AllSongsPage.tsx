import type { SongsProps } from "../Types.tsx"
import useStyles from './StyleAllSongsPage.ts'
import SongsTable from '../../components/SongsTable/songsTable.tsx'

const ALLSONGS = "כל השירים"

const AllSongsPage = ({ songs, favoriteIds, addHeart,  removeHeart, playlists, addSongToPlaylist, playSong }: SongsProps) => {
    const { classes } = useStyles()

    return (
        <div>
            <h1 className={classes.header}>{ALLSONGS}</h1>
            <SongsTable 
            playlists={playlists}
            playSong={playSong}
            songs={songs} 
            addSongToPlaylist={addSongToPlaylist}
            favoriteIds={favoriteIds} 
            addHeart={addHeart} 
            removeHeart={removeHeart}/>
        </div>
    )


}
export default AllSongsPage