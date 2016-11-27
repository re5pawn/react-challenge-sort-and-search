import { copy } from './utils';
import { actions } from './action-creators';

let initialState = {
  data: [],
  searchQuery: '',
  activeUser: {}
}

let dataCache = [];

export const appReducer = (state = initialState, action) => {
  let data = [];

  switch (action.type) {
    case actions.DATA_LOADED:
      return copy([state, { data: action.data, activeUser: action.data[0] }]);

    case actions.SEARCH_QUERY_CHANGED:
      data = dataCache
        .filter(el => el.name.toLowerCase().indexOf(action.value) >= 0);

      return copy([state, {
        searchQuery: action.value,
        data, activeUser:
        data[0] || state.activeUser
      }]);

    case actions.SORT_BY_NAME:
      data = dataCache.slice().sort((a, b) => {
        return action.order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SORT_BY_AGE:
      data = dataCache.slice().sort((a, b) => {
        return action.order ? a.age - b.age : b.age - a.age;
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SELECT_ACTIVE_USER:
      let activeUser = action.id
        ? dataCache.filter(d => d.id === action.id)[0]
        : (state.data[0] || {});

      return copy([state, { activeUser }]);

    default:
      return state;
  }
};

export const handleLoadedDataMiddleware = state => next => action => {
  // save data only for a 1st time
  if (!dataCache.length) {
    dataCache = action.data;
  }
  next(action);
};
