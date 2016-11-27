export const actions = {
  DATA_LOADED: 'DATA_LOADED',
  SEARCH_QUERY_CHANGED: 'SEARCH_QUERY_CHANGED',
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_AGE: 'SORT_BY_AGE',
  SELECT_ACTIVE_USER: 'SELECT_ACTIVE_USER'
};

export const dataLoaded = data => {
  console.info('actionCreator dataLoaded', data);
  return {
    type: actions.DATA_LOADED,
    data
  };
};

export const searchQueryChanged = value => {
  console.info('actionCreator searchQueryChanged', value);
  return {
    type: actions.SEARCH_QUERY_CHANGED,
    value
  };
};

export const sortBy = (field, order) => {
  console.info('actionCreator sortBy', field, order);
  switch (field) {
    case 'name':
      return { type: actions.SORT_BY_NAME, order };
    case 'age':
      return { type: actions.SORT_BY_AGE, order };
  }
};

export const selectActiveUser = id => {
  console.info('actionCreator selectActiveUser', id);
  return {
    type: actions.SELECT_ACTIVE_USER,
    id
  };
};
