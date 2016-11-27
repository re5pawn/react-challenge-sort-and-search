export const actions = {
  DATA_LOADED: 'DATA_LOADED',
  SEARCH_QUERY_CHANGED: 'SEARCH_QUERY_CHANGED',
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_AGE: 'SORT_BY_AGE',
  SELECT_ACTIVE_USER: 'SELECT_ACTIVE_USER'
};

export const dataLoaded = payload => {
  return {
    type: actions.DATA_LOADED,
    payload
  };
};

export const searchQueryChanged = payload => {
  return {
    type: actions.SEARCH_QUERY_CHANGED,
    payload
  };
};

export const sortBy = (field, order) => {
  switch (field) {
    case 'name':
      return { type: actions.SORT_BY_NAME, payload: { order } };
    case 'age':
      return { type: actions.SORT_BY_AGE, payload: { order } };
  }
};

export const selectActiveUser = id => {
  return {
    type: actions.SELECT_ACTIVE_USER,
    payload: { id }
  };
};
