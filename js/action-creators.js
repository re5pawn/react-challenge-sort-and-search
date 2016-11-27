export const actions = {
  UPDATE_DATA: 'UPDATE_DATA',
  SEARCH_BY_NAME: 'SEARCH_BY_NAME',
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_AGE: 'SORT_BY_AGE',
  SELECT_ACTIVE_USER: 'SELECT_ACTIVE_USER'
};

export const updateData = payload => {
  return {
    type: actions.UPDATE_DATA,
    payload
  };
};

export const searchByName = payload => {
  return {
    type: actions.SEARCH_BY_NAME,
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
