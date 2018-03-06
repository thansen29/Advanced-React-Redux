import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentsReducer(undefined, {})).to.be.instanceof(Array);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, comment: 'newComment' };
    expect(commentsReducer([], action)).to.eql(['newComment']);
  });
});
