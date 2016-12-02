//import { combineReducers } from 'redux';

import { activeUserId } from './activeUserId';
import { searchQuery } from './searchQuery';
import { users } from './users';

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  }
};

export default combineReducers({
  users,
  activeUserId,
  searchQuery
});
