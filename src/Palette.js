import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const changeLevel = level => setLevel(level);
  const changeFormat = format => setFormat(format);

  const { classes } = props;
  const { colors, paletteName, emoji, id } = props.palette;
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
