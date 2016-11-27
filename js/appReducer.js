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
    case actions.UPDATE_DATA:
      return copy([state, { data: action.payload, activeUser: action.payload[0] }]);

    case actions.SEARCH_BY_NAME:
      data = dataCache
        .filter(el => el.name.toLowerCase().indexOf(action.payload) >= 0);

      return copy([state, {
        searchQuery: action.payload,
        data, activeUser:
        data[0] || state.activeUser
      }]);

    case actions.SORT_BY_NAME:
      data = state.data.slice().sort((a, b) => {
        return action.payload.order
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SORT_BY_AGE:
      data = state.data.slice().sort((a, b) => {
        return action.payload.order ? a.age - b.age : b.age - a.age;
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SELECT_ACTIVE_USER:
      let activeUser = action.payload.id
        ? dataCache.filter(d => d.id === action.payload.id)[0]
        : (state.data[0] || {});

      return copy([state, { activeUser }]);

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
