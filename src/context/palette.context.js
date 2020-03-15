import React, { createContext, useReducer } from 'react';
import seedColors from '../seedColors';
import paletteReducer from '../reducers/palette.reducer';

export const PalettesContext = createContext();

export function PalettesProvider(props) {
  const [palettes, dispatch] = useReducer(paletteReducer, seedColors);
  const findPalette = id => {
    return palettes.find(function(palette) {
      return palette.id === id;
    });
  };

  return (
    <PalettesContext.Provider value={{ palettes, dispatch, findPalette }}>
      {props.children}
    </PalettesContext.Provider>
  );
}
