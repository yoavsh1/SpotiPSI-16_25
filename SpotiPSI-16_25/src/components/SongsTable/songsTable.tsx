import type { SongsProps } from "../Types.tsx"
import SongComponent from "../../components/Songs/songs.tsx"
import React from "react"

const SongsTable: React.FC<SongsProps> = ({ songs }: SongsProps) => {

    return (
        <div>
            {songs.map((song) => (
                <SongComponent song={song}/>
            ))}
        </div>
    )

    
}
export default SongsTable