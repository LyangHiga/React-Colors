import React, { memo} from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPalettesStyles';

function MiniPalette(props){
    const removePalette = (e) => {
        e.stopPropagation();
        props.openDialog();
    }
    const handleClick = () => props.goToPalette(this.props.id);
    const {classes, paletteName, emoji, colors} = props;

    const miniColorBoxes = colors.map(color =>(
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ));

    return(
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon 
                className={classes.deleteIcon} 
                style={{transition: 'all 0.3s ease-in-out'}}
                onClick={removePalette}
            />
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <spam className={classes.emoji}>{emoji}</spam>
            </h5>          
        </div>
    );
}

export default memo(withStyles(styles)(MiniPalette));