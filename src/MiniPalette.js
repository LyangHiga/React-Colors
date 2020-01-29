import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover':{
            cursor:'pointer'
        },
        border: '1px solid black'
    },
    colors:{
        backgroundColor: 'gray'
    },
    title:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji:{
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    }
};

function MiniPalette(props){
    const {classes, paletteName, emoji} = props;
    return(
        <div className={classes.root}>
            <div className={classes.colors}>

            </div>
            <h5 className={classes.title}>
                {paletteName} <spam className={classes.emoji}>{emoji}</spam>
            </h5>          
        </div>
    )
}

export default withStyles(styles)(MiniPalette);