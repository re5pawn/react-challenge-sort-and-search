import { actions } from '../action-creators';

export const activeUserId = (state = '', action) => {
  switch (action.type) {
    case actions.SELECT_ACTIVE_USER:
      return action.payload.id;

    case actions.UPDATE_DATA:
      return action.payload[0].id;

    default:
      return state;
  }
};