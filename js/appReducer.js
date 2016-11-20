export const actions = {
  DATA_LOADED: 'DATA_LOADED',
  DATA_UPDATED: 'DATA_UPDATED'
};

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.DATA_LOADED:
    case actions.DATA_UPDATED:
      state.data = action.data;
      return Object.assign({}, state);

    default:
      return state;
  }
};
