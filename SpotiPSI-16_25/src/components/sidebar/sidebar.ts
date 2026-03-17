import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    itemMenu: {
        color: "white",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        '&:hover': {
            backgroundColor: "DarkOrchid" 
        }
    },
    icon: {
        color: "grey",
        marginLeft: "10px",
        marginTop: "10px"
    }


}))

export default useStyles;