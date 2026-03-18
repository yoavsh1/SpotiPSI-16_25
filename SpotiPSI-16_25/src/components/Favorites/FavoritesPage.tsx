import type { SongsProps } from "../Types.tsx"
import useStyles from '../../components/AllSongs/StyleAllSongsPage.ts'
import SongsTable from '../../components/SongsTable/songsTable.tsx'

const MYFAVORITES = "המועדפים שלי"

const FavoritesPage = ({songs, favoriteIds, addHeart,  removeHeart }: SongsProps) => {
    const { classes } = useStyles()
    
    return (
        <div>
            <h1 className={classes.header}>{MYFAVORITES}</h1>
            <SongsTable songs={songs.filter((song) => favoriteIds.indexOf(song.id) > -1)} favoriteIds={favoriteIds} 
            addHeart={addHeart} removeHeart={removeHeart}/>
        </div>
    )


}
export default FavoritesPage