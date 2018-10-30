import { SET_USERNAME } from './actions';

export function setUserName(userName) {
  return { type: SET_USERNAME, payload: userName };
}
