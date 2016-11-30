import { combineReducers } from 'redux';

import { activeUserId } from './activeUserId';
import { searchQuery } from './searchQuery';
import { users } from './users';

export default combineReducers({
  users,
  activeUserId,
  searchQuery
});
