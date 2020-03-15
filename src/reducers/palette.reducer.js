const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE':
      return [...state, action.newPalette];
    case 'DELETE':
      return state.filter(palette => palette.id !== action.id);
    case 'FIND':
      const found = state.filter(palette =>
        palette.id === action.id ? palette : null
      );
      return found[0];
    default:
      console.log('default');
      return state;
  }
};

export default reducer;
