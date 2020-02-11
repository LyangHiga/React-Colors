import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPalettesStyles';

class MiniPalette extends PureComponent{
    
    constructor(props){
        super(props);
        this.removePalette = this.removePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    removePalette(evt){
        evt.stopPropagation();
        this.props.openDialog(this.props.id);
    };

    handleClick(){
        this.props.goToPalette(this.props.id);
    }

    render(){
        const {classes, paletteName, emoji, colors} = this.props;
        console.log("RENDERING: ", paletteName);
        const miniColorBoxes = colors.map(color =>(
            <div 
                className={classes.miniColor} 
                style={{backgroundColor: color.color}}
                key={color.name}
            />
        ));
        return(
            <div className={classes.root} onClick={this.handleClick}>
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    style={{transition: 'all 0.3s ease-in-out'}}
                    onClick={this.removePalette}
                />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <spam className={classes.emoji}>{emoji}</spam>
                </h5>          
            </div>
        );
    };
}

export default withStyles(styles)(MiniPalette);