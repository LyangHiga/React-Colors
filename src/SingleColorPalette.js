import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.state = {format:'hex'};
        this._shades = this.gatherShade(this.props.palette, this.props.colorId)
        this.changeFormat = this.changeFormat.bind(this);
    };

    gatherShade(palette, colorId){
        let shades= [];
        let colors = palette.colors;
        for (let key in colors){
            shades = shades.concat(
                colors[key].filter(color => color.id === colorId)
            );
        };
        return shades.slice(1);
    }

    changeFormat(value){
        this.setState({format:value});
    };

    render(){
        const {paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;
        const {format} = this.state;
        const colorBoxes = this._shades.map(color =>
            <ColorBox key={color.id} name={color.name} background={color[format]} showingFullPalette={false}/>)
        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showLevel={false}/>
                <h1>Single Color Palette</h1>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }

}

export default withStyles(styles) (SingleColorPalette);