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
        gap: "10px",
    },


}))

export default useStyles;