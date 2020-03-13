import useLocalStorageState from './useLocalStorageState';
import { useState } from 'react';
import seedColors from '../seedColors';

function usePalettesState(props) {
  //   const [palettes, setPalettes] = useLocalStorageState('palettes', seedColors);
  const [palettes, setPalettes] = useState(seedColors);
  const findPalette = id => {
    return palettes.find(function(palette) {
      return palette.id === id;
    });
  };

  const savePalette = newPalette => setPalettes([...palettes, newPalette]);

  const deletePalette = id =>
    setPalettes(palettes.filter(palette => palette.id !== id));

  return { palettes, findPalette, savePalette, deletePalette };
}

export default usePalettesState;
