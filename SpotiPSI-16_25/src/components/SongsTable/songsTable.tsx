import type { SongsProps } from "../Types.tsx"
import SongComponent from "../../components/Songs/songs.tsx"
import React from "react"

const SongsTable: React.FC<SongsProps> = ({ songs, favoriteIds, addHeart, removeHeart }: SongsProps) => {
    return (
        <div>
            {songs.map((song) => (
                <SongComponent key={song.id} song={song} favorite={favoriteIds.includes(song.id)} addHeart={addHeart} removeHeart={removeHeart} />
            ))}
        </div>
    )
}
export default SongsTable