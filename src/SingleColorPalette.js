import React, {Component} from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShade(this.props.palette, this.props.colorId)
        console.log(this._shades);
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

    render(){
        const colorBoxes = this._shades.map(color =>
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false}/>)
        return(
            <div className='Palette'>
                <h1>Single Color Palette</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }

}

export default SingleColorPalette;