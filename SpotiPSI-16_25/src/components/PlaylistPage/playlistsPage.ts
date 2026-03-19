import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()(() => ({
    headerText:{
        color: 'white',
        direction: "rtl",
        padding: "5px"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        direction: "rtl"    
    },
    addButton: {
        color: "DarkOrchid",
        height: "40%",
        margin: "20px",
        borderRadius: '8px',
        border: '2px solid DarkOrchid'
    },
    text:{
        color: 'white',
        justifyContent: "flex-start",
    },
    playlist:{
        width: "99%",
        gap: "5px",
        margin: "5px",
        borderBottom: "1.5px solid #ccc"
    },
    dialogMain:{
        '& .MuiPaper-root': {
          backgroundColor: "#3333"
        }
    },
    buttonSave:{
        color: "purple"
    },
    buttonCancel:{
        color: "grey"
    },
    dialogTitle: {
        color: 'white', 
        direction: "rtl",
        textAlign: "right"
    },
    input:{
        '& .MuiInputBase-input': {
            color: 'white', 
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'DarkOrchid',
        },
    }


}))

export default useStyles;