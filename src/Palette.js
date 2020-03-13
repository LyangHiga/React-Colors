import React, { useState, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { PalettesContext } from './context/palette.context';
import { generatePalette } from './colorHelpers';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const changeLevel = level => setLevel(level);
  const changeFormat = format => setFormat(format);
  const { findPalette } = useContext(PalettesContext);
  const palette = generatePalette(findPalette(props.match.params.id));
  const { classes } = props;
  const { colors, paletteName, emoji, id } = palette;
  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.name}
      paletteId={id}
      colorId={color.id}
      showingFullPalette
    />
  ));
  console.log(colorBoxes);
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showLevel={true}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
