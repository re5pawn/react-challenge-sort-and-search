import { copy } from './utils';
import { actions } from './action-creators';

let initialState = {
  data: [],
  searchQuery: '',
  activeUser: {}
}

export const appReducer = (state = initialState, action) => {
  let data = [];

  switch (action.type) {
    case actions.DATA_LOADED:
      initialState.data = action.data;
      return copy([state, { data: action.data, activeUser: action.data[0] }]);

    case actions.SEARCH_QUERY_CHANGED:
      data = initialState.data
        .filter(el => el.name.toLowerCase().indexOf(action.value) >= 0);

      return copy([state, { searchQuery: action.value, data, activeUser: data[0] }]);

    case actions.SORT_BY_NAME:
      data = initialState.data.slice().sort((a, b) => {
        return action.order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SORT_BY_AGE:
      data = initialState.data.slice().sort((a, b) => {
        return action.order ? a.age - b.age : b.age - a.age;
      });

      return copy([state, { data, activeUser: data[0] }]);

    case actions.SELECT_ACTIVE_USER:
      let activeUser = action.id
        ? initialState.data.filter(d => d.id === action.id)[0]
        : (state.data[0] || {});

      return copy([state, { activeUser }]);

    default:
      return state;
  }
};
