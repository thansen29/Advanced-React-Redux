import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

const CommentList = (props) => {
  const list = _.map(props.comments, comment => {
    return (
      <li key={comment}>
        { comment }
      </li>
    );
  });

  return (
    <ul className="comment-list">
      { list }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
