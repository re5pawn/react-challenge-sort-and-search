export const actions = {
  DATA_LOADED: 'DATA_LOADED',
  SEARCH_QUERY_CHANGED: 'SEARCH_QUERY_CHANGED',
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_AGE: 'SORT_BY_AGE'
};

let initialState = {
  data: [],
  searchQuery: ''
}

export const appReducer = (state = initialState, action) => {
  let data = [];

  switch (action.type) {
    case actions.DATA_LOADED:
      initialState.data = action.data;
      return Object.assign({}, state, { data: action.data });

    case actions.SEARCH_QUERY_CHANGED:
      data = initialState.data
        .filter(el => el.name.toLowerCase().indexOf(action.value) >= 0);

      return Object.assign({}, state, { searchQuery: action.value, data });

    case actions.SORT_BY_NAME:
      data = initialState.data.slice().sort((a, b) => {
        return action.order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });

      return Object.assign({}, state, { data });

    case actions.SORT_BY_AGE:
      data = initialState.data.slice().sort((a, b) => {
        return action.order ? a.age - b.age : b.age - a.age;
      });

      return Object.assign({}, state, { data });

    default:
      return state;
  }
};
