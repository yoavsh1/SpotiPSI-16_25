import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()(() => ({
    headerText:{
        color: 'white',
        padding: "5px"
    },
    header:{
        display:"flex",
        justifyContent: "space-between",
        direction: "rtl",
        padding: "10px"
    }
}))

export default useStyles;