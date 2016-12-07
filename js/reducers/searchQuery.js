import { actions } from '../action-creators';

export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case actions.SEARCH_BY_NAME:
      return action.payload;

    default:
      return state;
  }
};