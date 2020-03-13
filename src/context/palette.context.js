import React, { createContext } from 'react';
// import useLocalStorageState from '../hooks/useLocalStorageState';
import usePalettesState from '../hooks/usePalettesState';
import seedColors from '../seedColors';

export const PalettesContext = createContext();

export function PalettesProvider(props) {
  const PalettesStuff = usePalettesState('palettes', seedColors);

  return (
    <PalettesContext.Provider value={PalettesStuff}>
      {props.children}
    </PalettesContext.Provider>
  );
}
