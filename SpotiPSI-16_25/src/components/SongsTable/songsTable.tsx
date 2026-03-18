import type { SongsProps } from "../Types.tsx"
import SongComponent from "../../components/Songs/songs.tsx"
import React from "react"

const SongsTable: React.FC<SongsProps> = ({songs, favoriteIds, addHeart,  removeHeart }: SongsProps) => {
    console.log(favoriteIds)
    return (
        <div>
            {songs.map((song) => (
                <SongComponent song={song} favorite={favoriteIds.indexOf(song.id) > -1} addHeart={addHeart} removeHeart={removeHeart}/>
            ))}
        </div>
    )

    
}
export default SongsTable