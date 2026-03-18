import type { SongsProps } from "../Types.tsx"
import useStyles from './StyleAllSongsPage.ts'
import SongsTable from '../../components/SongsTable/songsTable.tsx'

const ALLSONGS = "כל השירים"

const AllSongsPage = ({ songs }: SongsProps) => {
    const { classes } = useStyles()

    return (
        <div>
            <h1 className={classes.header}>{ALLSONGS}</h1>
            <SongsTable songs={songs}/>
        </div>
    )


}
export default AllSongsPage