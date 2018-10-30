import { SET_USERNAME } from './actions';

const DEFAULT_STATE = {
  userName: 'Alex'
};

const setUserName = (state, ation) => {
  return Object.assign({}, state, { userName: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return setUserName(state, action);
    default:
      return state;
  }
};

export default rootReducer;
