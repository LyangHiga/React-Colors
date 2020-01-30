import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

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
        const {format} = this.state;
        const colorBoxes = this._shades.map(color =>
            <ColorBox key={color.id} name={color.name} background={color[format]} showingFullPalette={false}/>)
        return(
            <div className='SingleColorPalette Palette'>
                <Navbar handleChange={this.changeFormat} showLevel={false}/>
                <h1>Single Color Palette</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }

}

export default SingleColorPalette;