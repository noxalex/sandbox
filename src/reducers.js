const DEFAULT_STATE = {
  searchTerm: ''
};

const setSearchTerm = (state, ation) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
