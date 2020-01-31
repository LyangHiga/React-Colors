import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
    Palette:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    colors:{
        height: '90%'
    }
};

class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level:500, format:'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    };

    changeLevel(level){
        this.setState({level});
    };

    changeFormat(value){
        this.setState({format:value});
    };

    render(){
        const { classes} = this.props;
        const {colors, paletteName, emoji,id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.name} paletteId={id} colorId={color.id} showingFullPalette/>
        ))
        return(
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showLevel={true}/>
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles) (Palette);