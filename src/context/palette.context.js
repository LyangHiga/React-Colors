import React, { createContext } from 'react';
import seedColors from '../seedColors';
import paletteReducer from '../reducers/palette.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const PalettesContext = createContext();
export const DispatchContext = createContext();

export function PalettesProvider(props) {
  const [palettes, dispatch] = useLocalStorageReducer(
    'palettes',
    seedColors,
    paletteReducer
  );
  const findPalette = id => {
    const found = palettes.filter(palette =>
      palette.id === id ? palette : null
    );
    return found[0];
  };

  return (
    <PalettesContext.Provider value={{ palettes, findPalette }}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </PalettesContext.Provider>
  );
}
