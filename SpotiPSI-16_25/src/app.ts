import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainContainer: {
        backgroundColor: 'black',
        margin: "0",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
        width: "100%"
    },
    header: {
        backgroundColor: '#333333',
        height: '60px', 
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        color: "DarkOrchid"
    },
    mainSection: {
        backgroundColor: 'black', 
        flex: 1,
        display: 'flex',
    },
    sidebar: {
        backgroundColor: 'black',
        width: '240px', 
        borderLeft: '1px solid grey',
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-end"
    },
    PageContent: {
        backgroundColor: 'black',
        flex: 1, 
    },
    player: {
        backgroundColor: '#3333',
        height: '80px',
    },
    textPlay:{
        color: 'white',
        textAlign: 'center'


    }
}))

export default useStyles;