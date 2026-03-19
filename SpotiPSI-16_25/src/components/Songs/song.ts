
import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()(() => ({
    song: {
        backgroundColor: "black",
        color: "white",
        padding: "5px"
    },
    songRow: {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        borderBottom: "1.5px solid #ccc"
    },
    rightIcons: {
        marginLeft: "auto",
        display: "flex",
    },
    text:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "5px"
    },
    menu: {
        backgroundColor: "#111111",

    },
    menuText: {
        color: "white"
    }
    
}))

export default useStyles;