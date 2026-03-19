import type { Playlist, SongsProps } from "../Types.tsx"
import useStyles from '../AllSongs/StyleAllSongsPage.ts'
import SongsTable from '../SongsTable/songsTable.tsx'


export const PlayListPage = (
    { songs, favoriteIds, addHeart, removeHeart }: SongsProps ,
    {id, name, songsIds}: Playlist) => {
    const { classes } = useStyles()
    
    return (
        <div>
            <h1 className={classes.header}>{name}</h1>
            <SongsTable 
            songs={songs.filter((song) => 
            songsIds.indexOf(song.id) > -1)} 
            favoriteIds={favoriteIds} 
            addHeart={addHeart}
            removeHeart={removeHeart}/>
        </div>
    )
}
