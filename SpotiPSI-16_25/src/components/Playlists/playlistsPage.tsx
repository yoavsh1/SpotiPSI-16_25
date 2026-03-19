import type { PlaylistsProps } from "../Types.tsx"
import useStyles from './playlistsPage.ts'
import ListItemButton from '@mui/material/ListItemButton'
import { Button, TextField } from "@mui/material"
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState, useRef } from "react"
const MYPLAYLISTS = "הפלייליסטים שלי"
const ADDPLAYLIST = "הוסף פלייליסט"
const CREATEPLAYLIST = "יצירת פלייליסט חדש"
const ADD = "שמור"
const CANCEL = "ביטול"
const PlaylistsPage = ({ playlists, favoriteIds, addHeart,  removeHeart }: PlaylistsProps) => {
    const { classes } = useStyles()
    const [dialog, setDialog] = useState(false)
    const text = useRef<HTMLInputElement>(null)
    const onClickOpen = () => {setDialog(true)}
    const onClickClose = () => {setDialog(false)}
    const onClickAdd = async () => {
        try {
            if(text.current){
                const response = await fetch(`http://127.0.0.1:5001/api/playlists`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name : text.current.value })
                })
                const data = await response.json();
                onClickClose()
                return data
            }
        }
        catch (error) {
            console.error(error);
            return;
        }
    }

    return (
        <div>
            
            <div className={classes.header}>
                <h1 className={classes.headerText}>{MYPLAYLISTS}</h1>
                <Button variant="outlined" className={classes.addButton} onClick={onClickOpen}>{ADDPLAYLIST}</Button>
            </div>

            <Dialog open={dialog} onClose={onClickClose} className={classes.dialogMain}>
                <DialogTitle className={classes.dialogTitle}>{CREATEPLAYLIST}</DialogTitle>
                <DialogContent>
                    <TextField className={classes.input}
                            variant="standard"
                            inputRef={text}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickAdd} className={classes.addButton}>{ADD}</Button>
                    <Button onClick={onClickClose} className={classes.buttonCancel}>{CANCEL}</Button>
                </DialogActions>

            </Dialog>

            {playlists.map((playlist) => (
                <ListItemButton>
                    <div key={playlist.id}>
                        <div className={classes.text}>
                            <h1>{playlist.name}</h1>
                            <p>{playlist.songsId.length}</p>
                        </div>
                    </div>
                </ListItemButton>
            ))}
            
            

        </div>
    )


}
export default PlaylistsPage