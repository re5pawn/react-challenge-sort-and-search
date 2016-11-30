import { actions } from '../action-creators';

export const users = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_DATA:
      return [...action.payload];

    case actions.SORT_BY_NAME:
      return [...state].sort((a, b) => {
        return action.payload.order
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

    case actions.SORT_BY_AGE:
      return [...state].sort((a, b) => {
        return action.payload.order ? a.age - b.age : b.age - a.age;
      });

    default:
      return state;
  }
};