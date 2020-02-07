import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPalettesStyles';

function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    const miniColorBoxes = colors.map(color =>(
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ));
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteIcon} style={{transition: 'all 0.3s ease-in-out'}}/>
            </div>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <spam className={classes.emoji}>{emoji}</spam>
            </h5>          
        </div>
    )
}

export default withStyles(styles)(MiniPalette);