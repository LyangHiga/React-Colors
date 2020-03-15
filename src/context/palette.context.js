import React, { createContext, useReducer } from 'react';
import seedColors from '../seedColors';
import paletteReducer from '../reducers/palette.reducer';

export const PalettesContext = createContext();
export const DispatchContext = createContext();
// TODO create Local Storage reducer
// checkout, merge, deploy
export function PalettesProvider(props) {
  const [palettes, dispatch] = useReducer(paletteReducer, seedColors);
  //   const findPalette = id => {
  //     return palettes.find(function(palette) {
  //       return palette.id === id;
  //     });
  //   };
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
