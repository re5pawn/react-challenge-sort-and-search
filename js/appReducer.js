import { copy } from './utils';
import { actions } from './action-creators';

let initialState = {
  data: [],
  searchQuery: '',
  activeUser: {}
}

let dataCache = [];

export const activeUser = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_ACTIVE_USER:
      return dataCache.filter(d => d.id === action.payload.id)[0];

    case actions.UPDATE_DATA:
      return action.payload[0];

    default:
      return state;
  }
};

export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case actions.SEARCH_BY_NAME:
      return action.payload;

    default:
      return state;
  }
};

export const data = (state = [], action) => {
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

    case actions.SEARCH_BY_NAME:
      return dataCache.filter(el => {
        return el.name.toLowerCase().indexOf(action.payload) >= 0;
      });

    default:
      return state;
  }
};

export const handleLoadedDataMiddleware = state => next => action => {
  // save data only for a 1st time
  if (action.type === actions.UPDATE_DATA && !dataCache.length) {
    dataCache = action.payload;
  }
  next(action);
};
