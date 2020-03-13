import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

function SingleColorPalette(props) {
  const [format, setFormat] = useState('hex');
  const changeFormat = val => setFormat(val);

  const gatherShade = (palette, colorId) => {
    let shades = [];
    let colors = palette.colors;
    for (let key in colors) {
      shades = shades.concat(colors[key].filter(color => color.id === colorId));
    }
    return shades.slice(1);
  };

  const _shades = gatherShade(props.palette, props.colorId);
  const { paletteName, emoji, id } = props.palette;
  const { classes } = props;
  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showLevel={false} />
      <h1>Single Color Palette</h1>
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`} className="back-button">
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
