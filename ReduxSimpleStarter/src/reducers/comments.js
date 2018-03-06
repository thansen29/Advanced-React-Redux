import { SAVE_COMMENT } from '../actions/types';

const commentsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SAVE_COMMENT:
      newState = Object.assign({}, state);
      newState = [...state, action.comment];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
