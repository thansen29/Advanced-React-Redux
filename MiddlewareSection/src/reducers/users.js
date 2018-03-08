import { FETCH_USERS } from '../actions/types';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};

export default usersReducer;
