import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
    player: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '120px',
        background: '#171717',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        padding: '3px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },

    playerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: '2px',
        color: 'white',

    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
        paddingLeft: '4px',
        gap: '12px',
        color: 'white',
    },

    songName: {
        color: '#ffffff',
        fontSize: '25px',
        fontWeight: 800,
        lineHeight: 1.4,
    },
    songArtist: {
        color: '#bebebe',
        fontSize: '17px',
        paddingLeft: '3px',
        fontWeight: 600,
        lineHeight: 1.4,
    },

    changeSongArrow: {
        fontSize: '35px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0 0 15px 4px rgba(255,255,255,0.3)',
        },
    },

    playArrow: {
        fontSize: '35px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0 0 15px 4px rgba(255,255,255,0.3)',
        },

    },
    progressLine: {
        position: 'relative',
        width: '98%',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
    },
    line: {
        width: '98%',
        height: '2px',
        backgroundColor: '#7b2cbf',
        borderRadius: '2px',
        marginBottom: '10px',
    },
    circle: {
        position: 'absolute',
        left: '98%',
        top: '25%',
        transform: 'translate(-50%, -50%)',
        color: '#7b2cbf',
        fontSize: '20px',
    }
}))